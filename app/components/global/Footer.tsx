import Image from 'next/image';
import logo from '@/public/footer/logo.png';
import recentpost_1 from '@/public/footer/recent_post1.jpg';
import recentpost_2 from '@/public/footer/recent_post2.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { FaSnapchatGhost } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="relative flex justify-between w-screen h-200 font-medium bg-cover bg-center bg-[url('/footer/footerbg.webp')] before:absolute before:inset-0 before:bg-black/85 before:z-0">
			<div className="relative z-10 flex flex-col justify-around md:mx-30 py-10 items-center w-screen h-full">
				<div className="md:flex md:flex-row md:gap-30">
					<div className="flex flex-col md:gap-4 items-center justify-center">
						<Image
							src={logo}
							alt="Logo"
							width={228}
							height={54}
							className="w-56 h-auto mb-18"
						/>
						<section className="flex flex-col items-center md:items-start gap-2 mb-6">
							<h1 className="text-2xl text-pink uppercase">
								Location
							</h1>
							<p className="text-lg">Kompagnistræde 278</p>
							<p className="text-lg">1265 København K</p>
						</section>
						<section className="flex flex-col items-center gap-2 mb-10">
							<h1 className="text-2xl text-pink uppercase">
								Opening Hours
							</h1>
							<p className="text-lg">
								WED - THU 10:30 PM TO 3 AM
							</p>
							<p className="text-lg">SAT - SUN: 11 PM TO 5 AM</p>
						</section>
					</div>
					<section className="hidden md:flex md:flex-col md:gap-10">
						<h1 className="text-2xl text-pink uppercase">
							Recent Posts
						</h1>
						<div className="flex flex-col gap-16">
							<div className="flex flex-row gap-4">
								<Image
									src={recentpost_1}
									alt="Recent Post 1"
									width={100}
									height={100}
									className="w-30 h-30 object-cover"
								/>
								<div className="flex flex-col gap-2">
									<h2 className="text-lg">
										Lorem Ipsum is simply dummy text of the
										printing and typesetting.
									</h2>
									<p className="text-base text-pink">
										April 17, 2018
									</p>
								</div>
							</div>
							<div className="flex flex-row gap-4">
								<Image
									src={recentpost_2}
									alt="Recent Post 2"
									width={100}
									height={100}
									className="w-30 h-30 object-cover"
								/>
								<div className="flex flex-col gap-2">
									<h2 className="text-lg">
										Lorem Ipsum is simply dummy text of the
										printing and typesetting.
									</h2>
									<p className="text-base text-pink">
										April 17, 2018
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="hidden md:flex md:flex-col md:gap-10">
						<h1 className="text-2xl text-pink uppercase">
							Recent Tweets
						</h1>
						<div className="flex flex-col gap-16">
							<div className="flex flex-row gap-4">
								<FaTwitter className="text-pink text-4xl" />
								<div className="flex flex-col gap-2">
									<h2 className="text-lg">
										It is a long established fact that a
										reader will be distracted by the
										readable...{' '}
									</h2>
									<p className="text-base text-pink">
										5 hours ago
									</p>
								</div>
							</div>
							<div className="flex flex-row gap-4">
								<FaTwitter className="text-pink text-4xl" />
								<div className="flex flex-col gap-2">
									<h2 className="text-lg">
										It is a long established fact that a
										reader will be distracted by the
										readable...{' '}
									</h2>
									<p className="text-base text-pink">
										5 hours ago
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="flex flex-col md:flex-row md:gap-10 items-center justify-center md:justify-between md:w-full">
					<section className="flex flex-col items-center gap-6 mb-12 md:order-2">
						<h1 className="text-lg">Stay Connected With Us</h1>
						<div className="flex items-center gap-4">
							<FaFacebookF className="border border-white p-2 w-12 h-12 cursor-pointer hover:text-pink hover:border-pink transition-all duration-300" />
							<FaSnapchatGhost className="border border-white p-2 w-12 h-12 cursor-pointer hover:text-pink hover:border-pink transition-all duration-300" />
							<FaInstagram className="border border-white p-2 w-12 h-12 cursor-pointer hover:text-pink hover:border-pink transition-all duration-300" />
						</div>
					</section>
					<section className="flex flex-col items-center gap-4 mb-4 md:order-1">
						<p className="text-base">Night Club PSD Template</p>
						<p className="text-base">All rights reserved</p>
					</section>
					<section className="flex items-center gap-4 md:order-3">
						<p className="text-base">Copyright © NightClub</p>
					</section>
				</div>
			</div>
		</footer>
	);
}
