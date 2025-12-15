// Imports
import SignupForm from '@/app/components/index/EmailForm';

const Newsletter = () => {
	return (
		<div className="flex flex-col gap-4 justify-center items-center w-full py-20 bg-black">
			<h1 className="text-lg font-medium tracking-[7.5%] leading-normal uppercase text-center px-8">
				Want the lastest Nightclub news?
			</h1>
			<p className="text-base text-center w-1/2">
				Subscribe to our newsletter and never miss an <span className="text-pink">Event</span>
			</p>
			<SignupForm />
		</div>
	);
};

export default Newsletter;
