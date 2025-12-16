// Client rendered component
'use client';

// Import modules
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

// Blogposts component
export default function Blogposts({ blogposts }: { blogposts: any }) {
	const searchParams = useSearchParams();
	const router = useRouter();

	// Get current page from url
	const currentPage = Number(searchParams.get('page')) || 1;

	// Calculate which posts to display
	const postsPerPage = 3;
	const startIndex = (currentPage - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;
	const currentPosts = blogposts.slice(startIndex, endIndex);

	// Calculate if there are more pages
	const totalPages = Math.ceil(blogposts.length / postsPerPage);
	const hasNextPage = currentPage < totalPages;

	// Function to change page
	const changePage = (newPage: number) => {
		router.push(`/blog?page=${newPage}`);
	};

	return (
		<section className="w-full flex flex-col relative py-10">
			<div className="flex flex-col gap-12 md:gap-0 mx-auto items-center justify-center">
				{currentPosts.map((blogpost: any, index: number) => (
					<div key={blogpost.id} className={`md:h-100 flex flex-col gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
						<Image
							src={blogpost.asset.url}
							alt={blogpost.title}
							width={100}
							height={100}
							loading="eager"
							unoptimized={true}
							className="w-full md:w-1/2 h-full object-cover"
						/>
						<div className={`flex flex-col gap-4 w-[95%] mx-auto ${index % 2 === 1 ? 'md:ml-10' : 'md:mr-10'} justify-center`}>
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
			<div className="flex gap-4 justify-center items-center mt-8 font-ubuntu">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					(pageNum) => (
						<button
							key={pageNum}
							onClick={() => changePage(pageNum)}
							className={`px-4 py-2 text-sm ${
								pageNum === currentPage
									? 'underline font-bold'
									: 'hover:text-pink transition-all'
							}`}
						>
							{pageNum}
						</button>
					),
				)}

				<button
					onClick={() => changePage(currentPage + 1)}
					disabled={!hasNextPage}
					className={`text-sm font-ubuntu ${
						!hasNextPage
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-pink hover:text-white transition-all'
					}`}
				>
					næste &gt;
				</button>
			</div>
		</section>
	);
}
