// Imports
import Image from 'next/image';
import bottomLine from '@/public/global/bottom_line2.png';

// Header component
export default function Header({ title }: { title: string }) {
	return (
		<div className="flex flex-col items-center justify-center pt-12 pb-6">
			<h1 className="text-4xl font-medium tracking-[7.5%] leading-normal uppercase text-center px-8">
				{title}
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
