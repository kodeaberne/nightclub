import Navigation from '@/app/components/global/Navigation';
import Title from '@/app/components/global/Title';
import PostMessage from '@/app/components/contact/PostContact';

export default function Contact() {
	return (
		<>
			<Navigation />
			<Title title="Contact Us" />
            <section className="w-full flex flex-col relative py-10 gap-12">
			<PostMessage />
            </section>
		</>
	);
}