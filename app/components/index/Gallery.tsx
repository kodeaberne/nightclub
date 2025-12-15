// Client rendered component
'use client';

// Imports
import Header from '@/app/components/global/Header';
import Image from 'next/image';
import { motion } from 'motion/react';
// at top
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Gallery({ gallery }: { gallery: any[] }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<section className="w-full flex flex-col relative">
			<Header title="Night Club Gallery" />
			<div className="grid gap-4">
				{gallery.map((item, idx) => (
					<motion.div key={item.id} /* motion props */>
						<Image
							src={item.asset.url}
							alt={item.description}
							width={100}
							height={100}
							unoptimized
							loading="lazy"
							className="w-full h-auto object-cover cursor-pointer"
							onClick={(e) => {
								e.stopPropagation();
								setActiveIndex(idx);
								setModalOpen(true);
							}}
						/>
					</motion.div>
				))}
			</div>

			{mounted &&
				modalOpen &&
				createPortal(
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
						onClick={() => setModalOpen(false)}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.2 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.2 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="w-full h-auto"
							onClick={(e) => e.stopPropagation()}
						>
							<Swiper
								modules={[Navigation, Pagination, Keyboard]}
								navigation
								pagination={{ clickable: true }}
								keyboard
								initialSlide={activeIndex}
								onSlideChange={(sw) =>
									setActiveIndex(sw.activeIndex)
								}
								style={{
									'--swiper-pagination-color': '#FF2A70',
									'--swiper-pagination-bullet-inactive-color':
										'#ffffff',
									'--swiper-pagination-bullet-inactive-opacity':
										'1',
									'--swiper-pagination-bullet-size': '12px',
									'--swiper-pagination-bullet-horizontal-gap':
										'6px',
									'--swiper-pagination-bullet-border-radius':
										'0px',
									'--swiper-navigation-color': '#FFf',
								}}
							>
								{gallery.map((item) => (
									<SwiperSlide key={item.id}>
										<div className="relative w-full aspect-video">
											<Image
												src={item.asset.url}
												alt={item.description}
												fill
												className="object-contain"
												sizes="(min-width: 1024px) 800px, 100vw"
												unoptimized
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</motion.div>
					</motion.div>,
					document.body,
				)}
		</section>
	);
}
