// Client rendered component
'use client';

// @ts-nocheck

// Imports
import { useActionState } from 'react';
import { submitContact } from '@/app/contact/actions';
import { useFormStatus } from 'react-dom';

// Response message
const ResponseMessage = ({ state }) => {
	return (
		<>
			{state.success === true && (
				<p className="text-green-400 self-center">
					Your message has been sent.
				</p>
			)}
			{state.success === false && (
				<p className="text-red-400 self-center">
					Something went wrong. Please try again
				</p>
			)}
		</>
	);
};

// Submit button
const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className={`border-y-2 py-4 text-lg font-medium hover:text-pink transition-all duration-300 self-end px-12 cursor-pointer ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
			disabled={pending}
		>
			{pending ? 'Submitting..' : 'SEND'}
		</button>
	);
};

// Signup form
const PostMessage = () => {
	const [state, postMessage] = useActionState(submitContact, {
		success: null,
		errors: {},
		fields: {},
	});
	console.log(state);

	return (
		<>
			<ResponseMessage state={state} />
			<form
				action={postMessage}
				className="flex flex-col gap-4 w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] items-center justify-center mx-auto"
			>
				{state.errors?.name && (
					<p className="text-pink">{state.errors.name}</p>
				)}
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
				/>
				{state.errors?.email && (
					<p className="text-pink">{state.errors.email}</p>
				)}
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
				/>
				{state.errors?.content && (
					<p className="text-pink">{state.errors.content}</p>
				)}
				<textarea
					name="content"
					placeholder="Your Message"
					className="border-2 text-lg font-ubuntu text-white py-4 h-120 px-4 w-full focus:outline-none placeholder:text-white"
				/>
				<SubmitButton />
			</form>
		</>
	);
};

export default PostMessage;
