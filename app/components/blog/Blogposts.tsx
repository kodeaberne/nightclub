// Client rendered component
'use client';

// Import modules
import Image from 'next/image';
import Link from 'next/link';

// Blogposts component
export default function Blogposts({ blogposts }: { blogposts: any }) {
	return (
		<section className="w-full flex flex-col relative py-10">
				<div className="flex flex-col gap-12 mx-auto items-center justify-center">
					{blogposts.map((blogpost: any) => (
							<div key={blogpost.id} className="flex flex-col gap-6">
								<Image
									src={blogpost.asset.url}
									alt={blogpost.title}
									width={100}
									height={100}
									loading="eager"
									unoptimized={true}
									className="w-full h-full object-cover"
								/>
								<div className="flex flex-col gap-4 w-[95%] mx-auto justify-center">
								<h2 className="text-2xl font-medium uppercase text-ellipsis overflow-hidden whitespace-nowrap">
									{blogpost.title}
								</h2>
								<p className="text-pink text-lg font-medium">
									BY: {blogpost.author}
								</p>
								<p className="text-base font-medium leading-relaxed">
									{blogpost.content.slice(0, 300)}...
								</p>
								<Link
									href={`/blog/${blogpost.id}`}
									className="text-lg font-medium self-center border-t border-b py-3 px-8 mt-2 hover:text-pink transition-all duration-300"
								>
									Read More
								</Link>
							</div>
							</div>
					))}
				</div>
		</section>
	);
}
