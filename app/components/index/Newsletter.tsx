import { newsletterSignup } from '@/app/actions';

export default function Newsletter() {
    async function newsletterSignup(formData: FormData) {
        'use server';
        const rawFormData = {
            email: formData.get('email'),
        }}
    return (
		<section className="w-full flex flex-col relative py-10">
			<h1 className="uppercase">Want the lastest Nightclub news?</h1>
			<form action={newsletterSignup}>
				<input type="email" placeholder="Enter your email" required/>
				<button type="submit">Subscribe</button>
			</form>
		</section>
	);
}
