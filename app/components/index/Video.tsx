// Client rendered component
'use client';

// Imports
import Header from '@/app/components/global/Header';

// import swiper
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// React Icons
import { RiArrowLeftSFill } from 'react-icons/ri';
import { RiArrowRightSFill } from 'react-icons/ri';

function VideoNavButtons() {
	const swiper = useSwiper();
	return (
		<div className="flex items-center justify-center gap-4">
			<button
            className="cursor-pointer hover:text-pink transition-all duration-300 border text-4xl"
            onClick={() => swiper.slidePrev()}>
				<RiArrowLeftSFill />
			</button>
			<button
            className="cursor-pointer hover:text-pink transition-all duration-300 border text-4xl"
            onClick={() => swiper.slideNext()}>
				<RiArrowRightSFill />
			</button>
		</div>
	);
}

export default function Video() {
	const swiper = useSwiper();
	return (
		<section className="w-full flex flex-col relative pb-10">
			<Header title="Latest Videos" />
			<Swiper
				modules={[Pagination]}
				className="w-full h-full video-swiper"
				pagination={{
					clickable: true,
					type: 'bullets',
				}}
				style={{
					'--swiper-pagination-color': '#FF2A70',
					'--swiper-pagination-bullet-inactive-color': '#ffffff',
					'--swiper-pagination-bullet-inactive-opacity': '1',
					'--swiper-pagination-bullet-size': '12px',
					'--swiper-pagination-bullet-horizontal-gap': '6px',
					'--swiper-pagination-bullet-border-radius': '0px',
					'--swiper-navigation-color': '#FFf',
				}}
			>
				<SwiperSlide>
					<video
						src="/index/video/video-dj-crowd-1.mp4"
						poster="/index/video/video_poster.jpg"
						className="w-full h-full object-cover aspect-video"
						controls
						preload="auto"
						playsInline
					></video>
				</SwiperSlide>
				<SwiperSlide>
					<video
						src="/index/video/video-dj-crowd-2.mp4"
						poster="/index/video/slide_1.jpg"
						className="w-full h-full object-cover aspect-video"
						controls
						preload="auto"
						playsInline
					></video>
				</SwiperSlide>
				<VideoNavButtons />
			</Swiper>
		</section>
	);
}
