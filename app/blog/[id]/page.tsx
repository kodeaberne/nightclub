// Use cache
'use cache';

// Import modules
import { Suspense } from 'react';
import Image from 'next/image';

// Import components
import Navigation from '@/app/components/global/Navigation';
import Title from '@/app/components/global/Title';
import PostComment from '@/app/components/blog/PostComment';

// Fetch blogpost from API
const fetchBlogpost = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;
	const response = await fetch(`http://localhost:4000/blogposts/${id}`);
	const data = await response.json();
	return data;
};

// Fetch comments from API
const fetchComments = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;
	const response = await fetch(
		`http://localhost:4000/comments?blogpostId=${id}`,
	);
	const data = await response.json();
	return data;
};

// Comments component
async function Comments({ params }: { params: { id: string } }) {
	const comments = await fetchComments({ params });
	return comments.length > 0 ? (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="flex flex-col w-[90%] gap-8 mx-auto">
				<h2 className="text-4xl font-bold pl-4 font-ubuntu uppercase">
					{comments.length > 1
						? `${comments.length} Comments`
						: `${comments.length} Comment`}
				</h2>
				{comments.map((comment: any) => (
					<div key={comment.id} className="flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<p className="text-lg font-medium">
								{comment.name} -{' '}
								<span className="text-pink text-base font-medium">
									Posted{' '}
									{new Date(comment.date).toLocaleDateString(
										'en-UK',
										{
											day: 'numeric',
											month: 'short',
											year: 'numeric',
										},
									)}
								</span>
							</p>
						</div>
						<p className="text-base font-medium leading-relaxed">
							{comment.content}
						</p>
					</div>
				))}
			</div>
		</Suspense>
	) : (
		<p className="text-base font-medium leading-relaxed self-center">
			No comments yet
		</p>
	);
}

export default async function Blogpost({ params }: { params: { id: string } }) {
	const blogpost = await fetchBlogpost({ params });
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navigation />
			<Title title="Blog Post" />
			<section className="w-full flex flex-col relative gap-12">
				<Image
					src={blogpost.asset.url}
					alt={blogpost.title}
					width={100}
					height={100}
					loading="eager"
					unoptimized={true}
					className="w-full h-full object-cover"
				/>
				<div className="flex flex-col w-[90%] gap-4 mx-auto">
					<h2 className="text-2xl font-medium uppercase text-ellipsis overflow-hidden whitespace-nowrap">
						{blogpost.title}
					</h2>
					<p className="text-pink text-lg font-medium">
						BY: {blogpost.author}
					</p>
					<p className="text-base font-medium leading-relaxed">
						{blogpost.content}
					</p>
				</div>
			</section>
			<section className="w-full flex flex-col relative py-10 gap-12">
				<Comments params={params} />
				<PostComment blogpostId={blogpost.id} />
			</section>
		</Suspense>
	);
}
