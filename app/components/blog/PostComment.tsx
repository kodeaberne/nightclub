// Client rendered component
'use client';

// @ts-nocheck

// Imports
import { useActionState } from 'react';
import { submitComment } from '@/app/blog/actions';
import { useFormStatus } from 'react-dom';

// Response message
const ResponseMessage = ({ state }) => {
	return (
		<>
			{state.success === true && (
				<p className="text-green-400 self-center">Your comment has been posted.</p>
			)}
			{state.success === false && (
				<p className="text-red-400 self-center">Something went wrong. Please try again</p>
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
			{pending ? 'Submitting..' : 'SUBMIT'}
		</button>
	);
};

// Signup form
const PostComment = ({ blogpostId }: { blogpostId: string }) => {
	const [state, postComment] = useActionState(submitComment, {
		success: null,
		errors: {},
		fields: {},
	});
	console.log(state);

	return (
		<>
			<ResponseMessage state={state} />
			<form
				action={postComment}
				className="flex flex-col gap-4 items-center w-full"
			>
				{state.errors?.name && (
					<p className="text-pink">{state.errors.name}</p>
				)}
				<input
					type="text"
					name="name"
					placeholder="Your name"
					className="border-b-2 text-lg font-ubuntu text-white py-2 px-4 w-[90%] focus:outline-none placeholder:text-white"
				/>
				{state.errors?.content && (
					<p className="text-pink">{state.errors.content}</p>
				)}
				<textarea
					name="content"
					placeholder="Your comment"
					className="border-b-2 text-lg font-ubuntu text-white py-2 px-4 w-[90%] focus:outline-none placeholder:text-white"
				/>
				<input type="hidden" name="blogpostId" value={blogpostId} />
				<SubmitButton />
			</form>
		</>
	);
};

export default PostComment;
