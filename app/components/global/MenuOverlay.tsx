// Client rendered component
'use client';

// Imports
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { TfiClose } from 'react-icons/tfi';

// Interface
interface MenuOverlayProps {
	isOpen: boolean;
	onClose: () => void;
}

// Menu overlay component
export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
	const pathname = usePathname(); // Get the current pathname

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/booking', label: 'Book Table' },
		{ href: '/contact', label: 'Contact Us' },
	];

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-black/90 z-50 h-screen w-screen"
						onClick={onClose}
					/>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-60 flex items-center justify-center h-screen w-screen"
						onClick={onClose}
					>
						<nav className="flex flex-col items-center gap-12">
							<button
								onClick={onClose}
								className="absolute top-8 right-8"
							>
								<TfiClose size={43} />
							</button>
							{navLinks.map((link) => {
								const isActive =
									link.href === '/'
										? pathname === '/'
										: pathname === link.href ||
											pathname.startsWith(
												link.href + '/',
											);

								return (
									<Link
										key={link.href}
										href={link.href}
										onClick={onClose}
										className={`text-2xl font-medium uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-pink border-b-2 border-pink' : 'text-white hover:text-pink'}`}
									>
										{link.label}
									</Link>
								);
							})}
						</nav>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
