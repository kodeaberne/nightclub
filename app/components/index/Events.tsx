// Client rendered component
'use client';

// Imports
import Header from '@/app/components/global/Header';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Events component
export default function Events({ events }: { events: any }) {
	return (
		<section className="w-full relative pb-10">
			<div className="absolute inset-0 bg-[url('/index/events/slider_bg_overlay.png')] bg-cover bg-center opacity-25"></div>
			<div className="relative z-10">
				<Header title="Events" />
				<Swiper
					style={{
						'--swiper-pagination-color': '#FF2A70',
						'--swiper-pagination-bullet-inactive-color': '#ffffff',
						'--swiper-pagination-bullet-inactive-opacity': '1',
						'--swiper-pagination-bullet-size': '12px',
						'--swiper-pagination-bullet-horizontal-gap': '6px',
						'--swiper-pagination-bullet-border-radius': '0px',
					}}
					spaceBetween={50}
					slidesPerView={1}
					modules={[Autoplay, Pagination]}
					autoplay={{
						delay: 5000,
						disableOnInteraction: true,
						pauseOnMouseEnter: true,
					}}
					pagination={{
						clickable: true,
						type: 'bullets',
					}}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{events.map(
						(event: {
							id: number;
							title: string;
							description: string;
							date: string;
							asset: { url: string };
							location: string;
						}) => (
							<SwiperSlide key={event.id}>
								<div className="flex flex-col mx-5 group items-center justify-center hover:border-t border-pink bg-[url('/index/events/slider_bg_overlay.png')] bg-cover bg-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										className="w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all ease-in-out duration-800 absolute left-5 top-0 z-10"
									>
										<path
											d="M0 32V0H32L0 32Z"
											fill="#FF2A70"
										/>
									</svg>
									<Image
										src={event.asset.url}
										loading="eager"
										alt={event.title}
										width={100}
										height={100}
										className="w-full h-full object-cover col-span-1 row-start-1 row-end-3 group-hover:filter group-hover:brightness-20 transition-all duration-300"
										unoptimized={true}
									/>
									<button className="opacity-0 translate-y-[-50%] group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-800 group-hover:block font-bold px-6 py-3 bg-pink absolute right-(calc(50%-50px)) top-[25%] cursor-pointer">
										Book Now
									</button>
									<div className="opacity-0 translate-y-[20%] group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-800 flex flex-col gap-2 mx-5 px-3 py-6 bg-black absolute left-0 bottom-10">
										<h2 className="opacity-0 translate-y-[20%] group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-800 text-2xl font-medium uppercase">
											{event.title}
										</h2>
										<p className="opacity-0 translate-y-[20%] group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-800">
											{event.description.slice(0, 200)}...
										</p>
									</div>
									<div className="flex flex-row gap-8 pl-3 bg-pink w-full h-10 items-center font-medium z-10">
										<p className="capitalize">
											{new Date(
												event.date,
											).toLocaleDateString('en-UK', {
												day: 'numeric',
												month: 'short',
											})}
										</p>
										<p className="uppercase">
											{new Date(
												event.date,
											).toLocaleTimeString('en-UK', {
												hour: '2-digit',
												minute: '2-digit',
												hour12: true,
											})}
										</p>
										<p>{event.location}</p>
									</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										className="w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all ease-in-out duration-800 absolute right-5 bottom-10"
									>
										<path
											d="M32 32H0L32 0V32Z"
											fill="#FF2A70"
										/>
									</svg>
								</div>
							</SwiperSlide>
						),
					)}
				</Swiper>
			</div>
		</section>
	);
}
