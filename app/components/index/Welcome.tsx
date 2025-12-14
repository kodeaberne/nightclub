// Client rendered component
'use client';

// Imports
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// Images
import bottomLine from '@/public/global/bottom_line2.png';
import image1 from '@/public/index/welcome/thumb1.jpg';
import image2 from '@/public/index/welcome/reastaurant_1.jpg';
import image3 from '@/public/index/welcome/thumb2.jpg';
import { PiDiscoBallDuotone } from 'react-icons/pi';
import { PiCheersDuotone } from 'react-icons/pi';
import { PiForkKnifeDuotone } from 'react-icons/pi';

// Header component
function Header() {
	return (
		<div className="flex flex-col items-center justify-center pt-12 pb-6">
			<h1 className="text-4xl font-medium tracking-[7.5%] leading-normal uppercase text-center px-8">
				Welcome in nightclub
			</h1>
			<Image
				src={bottomLine}
				alt="Bottom Line"
				width={320}
				height={49}
				className="w-full h-auto"
			/>
		</div>
	);
}

// Content component
function Content({
	image,
	title,
	content,
	icon,
}: {
	image: StaticImageData;
	title: string;
	content: string;
	icon: React.ReactNode;
}) {
	// State to check if the screen is mobile
	const [isMobile, setIsMobile] = useState(false);
	// State to track hover/focus
	const [isActive, setIsActive] = useState(false);

	// Check if the screen is mobile
	useEffect(() => {
		const handleRezise = () => {
			setIsMobile(window.innerWidth < 640);
		};
		handleRezise();
		window.addEventListener('resize', handleRezise);
		return () => window.removeEventListener('resize', handleRezise);
	}, []);

	return (
		<div
			className="group flex flex-col items-center justify-center m-6 h-auto focus:outline-none relative"
			tabIndex={isMobile ? 0 : undefined}
			onMouseEnter={() => !isMobile && setIsActive(true)}
			onMouseLeave={() => !isMobile && setIsActive(false)}
			onFocus={() => isMobile && setIsActive(true)}
			onBlur={() => setIsActive(false)}
		>
			<Image
				src={image}
				alt="Image"
				width={320}
				height={49}
				className="w-full h-auto"
			/>
			<motion.div
				className="hidden absolute gap-6 group-focus:flex sm:group-hover:flex flex-col items-center justify-center z-5 bg-black h-full w-full border-t border-b border-pink"
				initial={{ opacity: 0 }}
				animate={{ opacity: isActive ? 1 : 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					className="absolute left-0 top-0"
					initial={{ width: 0, height: 0 }}
					animate={{
						width: isActive ? 42 : 0,
						height: isActive ? 42 : 0,
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}
				>
					<path d="M0 32V0H32L0 32Z" fill="#FF2A70" />
				</motion.svg>
				<motion.div
					className="text-pink"
					initial={{ scale: 0 }}
					animate={{
						scale: isActive ? 1 : 0,
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
            delay: 0.1
					}}
				>
					{icon}
				</motion.div>
				<motion.h2
					className="text-2xl font-medium uppercase"
					initial={{ scale: 0 }}
					animate={{
						scale: isActive ? 1 : 0,
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
            delay: 0.1
					}}
				>
					{title}
				</motion.h2>
				<motion.p
					className="text-lg mx-6 text-center"
					initial={{ translateX: 20 }}
					animate={{
						translateX: isActive ? 0 : 20,
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
            delay: 0.1
					}}
				>
					{content}
				</motion.p>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					className="w-8 h-8 absolute right-0 bottom-0"
					initial={{ width: 0, height: 0 }}
					animate={{
						width: isActive ? 42 : 0,
						height: isActive ? 42 : 0,
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}
				>
					<path d="M32 32H0L32 0V32Z" fill="#FF2A70" />
				</motion.svg>
			</motion.div>
		</div>
	);
}

// Main Welcome component
export default function Welcome() {
	const descriptions = {
		thumb1: {
			id: 'thumb1',
			image: image1,
			title: 'Nightclub',
			icon: (
				<PiDiscoBallDuotone className="text-pink text-6xl border border-pink p-4" />
			),
			content:
				"Our nightclub is the perfect place to dance the night away. With a state-of-the-art sound system and a vibrant atmosphere, it's the perfect place to let loose and have a good time.",
		},
		thumb2: {
			id: 'thumb2',
			image: image2,
			title: 'Restaurant',
			icon: (
				<PiForkKnifeDuotone className="text-pink text-6xl border border-pink p-4" />
			),
			content:
				"Our restaurant is the perfect place to enjoy a meal. With a wide selection of dishes and a cozy atmosphere, it's the perfect place to relax and enjoy a meal.",
		},
		thumb3: {
			id: 'thumb3',
			image: image3,
			title: 'Bar',
			icon: (
				<PiCheersDuotone className="text-pink text-6xl border border-pink p-4" />
			),
			content:
				"Our bar is the perfect place to enjoy a drink. With a wide selection of drinks and a cozy atmosphere, it's the perfect place to relax and enjoy a drink.",
		},
	};

	return (
		<section className="w-full min-h-screen mb-40">
			<Header />
			{Object.values(descriptions).map((description) => (
				<Content
					key={description.id}
					image={description.image}
					title={description.title}
					content={description.content}
					icon={description.icon}
				/>
			))}
		</section>
	);
}
