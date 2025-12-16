// Client rendered component
'use client';

// Imports
import Image from 'next/image';
import logo from '@/public/nav/logo.png';
import { TfiMenu, TfiClose } from 'react-icons/tfi';
import { useState } from 'react';
import MenuOverlay from '@/app/components/global/MenuOverlay';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/booking', label: 'Book Table' },
	{ href: '/contact', label: 'Contact Us' },
];

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
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
				<div className="flex items-center justify-between w-screen px-6 md:px-18">
					<Image
						src={logo}
						alt="Logo"
						width={189}
						height={46}
						className="w-44 h-auto"
					/>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="cursor-pointer md:hidden"
						aria-label="Toggle menu"
					>
						<TfiMenu size={43} />
					</button>
					<div className="hidden md:flex items-center gap-4 lg:gap-18">
						{navLinks.map((link) => {
							const isActive =
								link.href === '/'
									? pathname === '/'
									: pathname === link.href ||
										pathname.startsWith(link.href + '/');

							return (
								<Link
									key={link.href}
									href={link.href}
									className={`text-2xl font-medium uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-pink border-b-2 border-pink' : 'text-white hover:text-pink'}`}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
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
