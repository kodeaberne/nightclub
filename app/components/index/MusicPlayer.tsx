// Client rendered component
'use client';

// Imports
import Header from '@/app/components/global/Header';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// React Icons
import { FaRegPlayCircle } from 'react-icons/fa';
import { FaRegPauseCircle } from 'react-icons/fa';
import { GrChapterPrevious } from 'react-icons/gr';
import { GrChapterNext } from 'react-icons/gr';
import { FaShuffle } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Play and Pause functions
function PlayMusic({
	setIsPlaying,
}: {
	setIsPlaying: (isPlaying: boolean) => void;
}) {
	return (
		<button
			className="cursor-pointer hover:text-pink transition-all duration-300"
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
			className="cursor-pointer hover:text-pink transition-all duration-300"
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
function Scrubber({
	songDuration,
	songCurrentTime,
}: {
	songDuration: number;
	songCurrentTime: number;
}) {
	return (
		<div className="w-[90%] h-2 bg-white rounded-full">
			<div
				className="h-full bg-pink rounded-full"
				style={{ width: `${(songCurrentTime / songDuration) * 100}%` }}
			></div>
		</div>
	);
}

// Tracks component
function Tracks({
	tracks,
	currentTrackIndex,
	setCurrentTrackIndex,
	setIsPlaying,
}: {
	tracks: any[];
	currentTrackIndex: number;
	setCurrentTrackIndex: (index: number) => void;
	setIsPlaying: (isPlaying: boolean) => void;
}) {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				className="w-full h-full"
				initialSlide={currentTrackIndex || 0}
				style={{
					'--swiper-pagination-color': '#FF2A70',
					'--swiper-pagination-bullet-inactive-color': '#ffffff',
					'--swiper-pagination-bullet-inactive-opacity': '1',
					'--swiper-pagination-bullet-size': '12px',
					'--swiper-pagination-bullet-horizontal-gap': '6px',
					'--swiper-pagination-bullet-border-radius': '0px',
					'--swiper-navigation-color': '#FFf',
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				pagination={{
					clickable: true,
					type: 'bullets',
				}}
			>
				{tracks.map((track) => (
					<SwiperSlide key={track.id}>
						<div className="h-full w-full mx-auto flex flex-col items-center justify-center relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								className="w-12 h-12 absolute left-0 top-0 z-10"
							>
								<path d="M0 32V0H32L0 32Z" fill="#FF2A70" />
							</svg>
							<Image
								src={track.image}
								alt={track.title}
								width={100}
								height={100}
								className="w-full h-64 object-cover aspect-video"
							/>
							<h1 className="text-2xl font-medium tracking-[7.5%] leading-normal uppercase text-center px-8 w-full bg-black py-4">
								{track.title}
							</h1>
							<button
								className="cursor-pointer text-pink text-6xl absolute self-center justify-self-center z-10 text-center"
								onClick={() => {
									(
										document.getElementsByClassName(
											'musicPlayer',
										)[track.id - 1] as HTMLAudioElement
									)?.play();
									setIsPlaying(true);
									setCurrentTrackIndex(track.id - 1);
								}}
							>
								<FaRegPlayCircle />
							</button>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							className="w-12 h-12 absolute right-0 bottom-0"
						>
							<path d="M32 32H0L32 0V32Z" fill="#FF2A70" />
						</svg>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

// Music Player component
export default function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [songDuration, setSongDuration] = useState(136);
	const [songCurrentTime, setSongCurrentTime] = useState(0);
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [isLooping, setIsLooping] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);
	const tracks = [
		{
			id: 1 as number,
			title: 'Euphoria' as string,
			src: '/index/music/euphoria.mp3' as string,
			image: '/index/music/track1.jpg' as string,
		},
		{
			id: 2 as number,
			title: 'Black Box Funky' as string,
			src: '/index/music/black-box-funky.mp3' as string,
			image: '/index/music/track2.jpg' as string,
		},
		{
			id: 3 as number,
			title: 'Fashion Red Tape' as string,
			src: '/index/music/fashion-red-tape.mp3' as string,
			image: '/index/music/track3.jpg' as string,
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
			<Scrubber
				songDuration={songDuration}
				songCurrentTime={songCurrentTime}
			/>
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
					className="cursor-pointer hover:text-pink transition-all duration-300"
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
					className="cursor-pointer hover:text-pink transition-all duration-300"
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
								'musicPlayer',
							)[0] as HTMLAudioElement
						).loop = true;
						setIsLooping(!isLooping);
					}}
				>
					<FaShuffle />
				</button>
			</div>
			<Tracks
				tracks={tracks}
				currentTrackIndex={currentTrackIndex}
				setCurrentTrackIndex={setCurrentTrackIndex}
				setIsPlaying={setIsPlaying}
			/>
		</section>
	);
}
