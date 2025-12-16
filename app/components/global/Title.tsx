import bottomLine from '@/public/global/bottom_line2.png';
import Image from 'next/image';

export default function Title({ title }: { title: string }) {
	return (
		<div className="flex flex-col items-center justify-center pt-4 pb-6 bg-[url('/global/titlebg.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/85 before:z-0">
			<h1 className="text-4xl font-medium tracking-[7.5%] leading-normal uppercase text-center px-8 z-1">
				{title}
			</h1>
			<Image
				src={bottomLine}
				alt="Bottom Line"
				width={320}
				height={49}
				className="w-full h-auto z-1"
			/>
		</div>
	);
}
