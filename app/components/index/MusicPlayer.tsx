// Client rendered component
'use client';

// Imports
import Header from '@/app/components/global/Header';
import { useState, useEffect, useRef } from 'react';

// React Icons
import { FaRegPlayCircle } from 'react-icons/fa';
import { FaRegPauseCircle } from 'react-icons/fa';
import { GrChapterPrevious } from 'react-icons/gr';
import { GrChapterNext } from 'react-icons/gr';
import { FaShuffle } from 'react-icons/fa6';

// Play and Pause functions
function PlayMusic({
	setIsPlaying,
}: {
	setIsPlaying: (isPlaying: boolean) => void;
}) {
	return (
		<button
            className='cursor-pointer hover:text-pink transition-all duration-300'
			onClick={() => {
				(
					document.getElementsByClassName(
						'musicPlayer',
					)[0] as HTMLAudioElement
				)?.play();
				setIsPlaying(true);
			}}
		>
			<FaRegPlayCircle />
		</button>
	);
}

function PauseMusic({
	setIsPlaying,
}: {
	setIsPlaying: (isPlaying: boolean) => void;
}) {
	return (
		<button
            className='cursor-pointer hover:text-pink transition-all duration-300'
			onClick={() => {
				(
					document.getElementsByClassName(
						'musicPlayer',
					)[0] as HTMLAudioElement
				)?.pause();
				setIsPlaying(false);
			}}
		>
			<FaRegPauseCircle />
		</button>
	);
}

// Scrubber component
function Scrubber({ songDuration, songCurrentTime }: { songDuration: number, songCurrentTime: number }) {
	return (
		<div className="w-[90%] h-2 bg-white rounded-full">
			<div className="h-full bg-pink rounded-full" style={{ width: `${(songCurrentTime / songDuration) * 100}%` }}></div>
		</div>
	);
}

// Music Player component
export default function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [songDuration, setSongDuration] = useState(0);
	const [songCurrentTime, setSongCurrentTime] = useState(0);
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isLooping, setIsLooping] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);
	const tracks = [
		{
			id: 1 as number,
			title: 'Euphoria' as string,
			src: '/index/music/euphoria.mp3' as string,
		},
		{
			id: 2 as number,
			title: 'Black Box Funky' as string,
			src: '/index/music/black-box-funky.mp3' as string,
		},
		{
			id: 3 as number,
			title: 'Fashion Red Tape' as string,
			src: '/index/music/fashion-red-tape.mp3' as string,
		},
	];

	const currentTrack = tracks[currentTrackIndex];

	useEffect(() => {
		if (isPlaying && audioRef.current) {
			audioRef.current.play().catch(() => {
				// ignore autoplay errors if browser blocks it
			});
		}
	}, [currentTrackIndex, isPlaying]);

	return (
		<section className="w-full flex flex-col gap-8 items-center justify-center relative pb-10">
			<Header title="Night Club Track" />
			<h2 className="text-2xl font-medium tracking-[7.5%] leading-normal uppercase text-center px-8">
				{currentTrack.title}
			</h2>
			<Scrubber songDuration={songDuration} songCurrentTime={songCurrentTime} />
			<audio
				ref={audioRef}
				title={currentTrack.title}
				className="musicPlayer w-full h-auto"
				src={currentTrack.src}
				loop={false}
				preload="auto"
				onLoadedMetadata={(e) => {
					setSongDuration((e.target as HTMLAudioElement).duration);
				}}
				onPlay={(e) => {
					setIsPlaying(true);
				}}
				onPause={() => setIsPlaying(false)}
				onTimeUpdate={(e) =>
					setSongCurrentTime(
						(e.target as HTMLAudioElement).currentTime,
					)
				}
			></audio>
			<p className="text-base font-medium text-center px-8">{`${Math.floor(songCurrentTime / 60)}:${Math.floor(songCurrentTime % 60)} / ${Math.floor(songDuration / 60)}:${Math.floor(songDuration % 60)}`}</p>
			<div className="flex items-center justify-center gap-4 text-4xl">
				<button
                className='cursor-pointer hover:text-pink transition-all duration-300'
					onClick={() => {
						setCurrentTrackIndex(
							(prev) =>
								(prev - 1 + tracks.length) % tracks.length,
						);
					}}
				>
					<GrChapterPrevious />
				</button>
				{isPlaying ? (
					<PauseMusic setIsPlaying={setIsPlaying} />
				) : (
					<PlayMusic setIsPlaying={setIsPlaying} />
				)}
				<button
                className='cursor-pointer hover:text-pink transition-all duration-300'
					onClick={() => {
						setCurrentTrackIndex(
							(prev) => (prev + 1) % tracks.length,
						);
						console.log(currentTrackIndex);
					}}
				>
					<GrChapterNext />
				</button>
				<button
                className={`cursor-pointer ${isLooping ? 'text-pink' : 'text-white'} hover:text-pink transition-all duration-300`}
					onClick={() => {
                        (
                        document.getElementsByClassName(
                            'musicPlayer')[0] as HTMLAudioElement).loop = true;
                            setIsLooping(!isLooping);
                    }}
				>
					<FaShuffle />
				</button>
			</div>
		</section>
	);
}
