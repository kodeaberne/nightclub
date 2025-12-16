// use cache
'use cache';

// Import modules
import { Suspense } from 'react';

// Import components
import Navigation from '@/app/components/global/Navigation';
import Title from '@/app/components/global/Title';
import Blogposts from '@/app/components/blog/Blogposts';

// Fetch blogposts from API
const fetchBlogposts = async () => {
	const response = await fetch('http://localhost:4000/blogposts');
	const data = await response.json();
	return data;
};

// Blog page component
export default async function Blog() {
	const blogposts = await fetchBlogposts();
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navigation />
			<Title title="Blog" />
			<Blogposts blogposts={blogposts} />
		</Suspense>
	);
}
