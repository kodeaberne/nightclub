// Client rendered component
'use client';

// Imports
import Image from 'next/image';
import logo from '@/public/nav/logo.png';
import { TfiMenu, TfiClose } from 'react-icons/tfi';
import { useState } from 'react';
import MenuOverlay from '@/app/components/global/MenuOverlay';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className="flex justify-between w-screen sticky top-0 left-0 right-0 z-50 h-24 bg-black/90 border-b border-t border-pink">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					className="w-8 h-8 shrink-0 absolute left-0"
				>
					<path d="M0 32V0H32L0 32Z" fill="#FF2A70" />
				</svg>
				<div className="flex items-center justify-between w-screen px-6">
					<Image
						src={logo}
						alt="Logo"
						width={189}
						height={46}
						className="w-44 h-auto"
					/>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="cursor-pointer"
						aria-label="Toggle menu"
					>
						<TfiMenu size={43} />
					</button>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					className="w-8 h-8 self-end shrink-0 absolute right-0"
				>
					<path d="M32 32H0L32 0V32Z" fill="#FF2A70" />
				</svg>
			</nav>
			<MenuOverlay
				isOpen={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
			/>
		</>
	);
}
