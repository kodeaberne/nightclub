'use cache';

// Import modeules
import { Suspense } from 'react';

// Import components
import Hero from '@/app/components/index/Hero';
import Navigation from '@/app/components/global/Navigation';
import Welcome from '@/app/components/index/Welcome';
import Events from '@/app/components/index/Events';
import Gallery from '@/app/components/index/Gallery';
import MusicPlayer from '@/app/components/index/MusicPlayer';
import Video from '@/app/components/index/Video';
import Testimonials from '@/app/components/index/Testimonials';
import Blogposts from '@/app/components/index/Blogposts';
import Newsletter from '@/app/components/index/Newsletter';

// Fetch events from API
const fetchEvents = async () => {
	const response = await fetch('http://localhost:4000/events');
	const data = await response.json();
	return data;
};

// Fetch gallery from API
const fetchGallery = async () => {
	const response = await fetch('http://localhost:4000/gallery');
	const data = await response.json();
	return data;
};

// Fetch testimonials from API
const fetchTestimonials = async () => {
	const response = await fetch('http://localhost:4000/testimonials');
	const data = await response.json();
	return data;
};

// Fetch blogposts from API
const fetchBlogposts = async () => {
	const response = await fetch('http://localhost:4000/blogposts');
	const data = await response.json();
	return data;
};

// Home component
export default async function Home() {
	const events = await fetchEvents();
	const gallery = await fetchGallery();
	const testimonials = await fetchTestimonials();
	const blogposts = await fetchBlogposts();
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="flex flex-col font-sans">
				<Hero />
			</div>
			<Navigation />
			<Welcome />
			<Events events={events} />
			<Gallery gallery={gallery} />
			<MusicPlayer />
			<Video />
			<Testimonials testimonials={testimonials} />
			<Blogposts blogposts={blogposts} />
			<Newsletter />
		</Suspense>
	);
}
