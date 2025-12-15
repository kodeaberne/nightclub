// Client rendered component
'use client';

// @ts-nocheck

// Imports
import { useActionState } from 'react';
import { newsletterSignup } from '@/app/actions';
import { useFormStatus } from 'react-dom';

// Response message
const ResponseMessage = ({ state }) => {
	return (
		<>
			{state.success === true && (
				<p className="text-green-400">You have now signed up.</p>
			)}
			{state.success === false && (
				<p>Something went wrong. Please try again</p>
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
			className={`border-y-2 py-4 text-lg font-medium px-8 cursor-pointer ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
			disabled={pending}
		>
			{pending ? 'Submitting..' : 'SUBSCRIBE'}
		</button>
	);
};

// Signup form
const SignupForm = () => {
	const [state, postEmail] = useActionState(newsletterSignup, {
		success: null,
		errors: {},
		fields: {},
	});
	console.log(state);

	return (
		<>
			<ResponseMessage state={state} />
			<form
				action={postEmail}
				className="flex flex-col gap-4 items-center w-full"
			>
				{state.errors?.emailAdress && (
					<p className="text-pink">{state.errors.emailAdress}</p>
				)}
				<input
					type="email"
					name="email"
					placeholder="Enter Your email"
					className="border-b-2 text-lg font-ubuntu text-white py-2 px-4 w-[90%] focus:outline-none placeholder:text-white"
				/>
				<SubmitButton />
			</form>
		</>
	);
};

export default SignupForm;
