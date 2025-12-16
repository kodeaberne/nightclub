import Header from '@/app/components/global/Header';
import Image from 'next/image';

export default function Blogposts({ blogposts }: { blogposts: any }) {
	return (
		<section className="w-full flex flex-col relative py-10">
			<Header title="Recent Blog" />
			<div className="flex flex-col md:flex-row gap-12 w-[85%] lg:w-[80%] xl:w-[75%] mx-auto items-center justify-center">
				{blogposts.map((blogpost: any) => (
					<div key={blogpost.id} className="flex flex-col gap-4">
						<Image
							src={blogpost.asset.url}
							alt={blogpost.title}
							width={100}
							height={100}
							loading="eager"
							unoptimized={true}
							className="w-full h-full object-cover"
						/>
						<h2 className="text-2xl font-medium uppercase text-ellipsis overflow-hidden whitespace-nowrap">
							{blogpost.title}
						</h2>
						<p className="text-pink text-lg font-medium">
							BY: {blogpost.author}
						</p>
						<p className="text-base font-medium leading-relaxed">
							{blogpost.content.slice(0, 150)}...
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
