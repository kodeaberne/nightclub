// Client rendered component
'use client';

// Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// React Icons
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

// SoMe component
function SoMe({ facebook, twitter }: { facebook: string; twitter: string }) {
	return (
		<div className="flex items-center justify-center gap-4 mb-4">
			<a className="cursor-pointer hover:text-pink transition-all duration-300 border text-4xl p-2" href={facebook}><FaFacebookF /></a>
			<a className="cursor-pointer hover:text-pink transition-all duration-300 border text-4xl p-2" href={twitter}><FaTwitter /></a>
		</div>
	);
}

// Testimonials component
export default function Testimonials({ testimonials }: { testimonials: any }) {
	return (
		<section className="w-full flex flex-col relative py-10 bg-[url('/index/testimonials/bg.webp')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/85 before:z-0">
			<Swiper
				modules={[Pagination]}
				className="w-full h-full"
				pagination={{ clickable: true, type: 'bullets' }}
				style={{
					'--swiper-pagination-color': '#FF2A70',
					'--swiper-pagination-bullet-inactive-color': '#ffffff',
					'--swiper-pagination-bullet-inactive-opacity': '1',
					'--swiper-pagination-bullet-size': '12px',
					'--swiper-pagination-bullet-horizontal-gap': '6px',
					'--swiper-pagination-bullet-border-radius': '0px',
				}}
			>
				{testimonials.map(
					(testimonial: {
						id: number;
						name: string;
						content: string;
						asset: { url: string };
                        facebook: string;
                        twitter: string;
					}) => (
						<SwiperSlide key={testimonial.id}>
							<div className="flex flex-col items-center justify-center gap-6 md:mx-20">
								<Image
									src={testimonial.asset.url}
									alt={testimonial.name}
									width={100}
									height={100}
									loading="eager"
									unoptimized={true}
                                    className="w-64 h-64 object-cover"
								/>
								<h2 className="text-2xl font-medium uppercase">
									{testimonial.name}
								</h2>
								<p className="text-base font-medium mb-10 mx-10 md:mx-20 lg:mx-40 xl:mx-60 text-center">{testimonial.content}</p>
                                <SoMe facebook={testimonial.facebook} twitter={testimonial.twitter} />
                            </div>
						</SwiperSlide>
					),
				)}
			</Swiper>
		</section>
	);
}
