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
				<p className="text-green-400 self-center">
					Your comment has been posted.
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
			className={`border-y-2 py-4 text-lg font-medium hover:text-pink transition-all duration-300 self-end px-8 cursor-pointer ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
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
			<h1 className="text-4xl font-bold pl-10 md:pl-15 font-ubuntu uppercase">
				Leave a comment
			</h1>
			<form
				action={postComment}
				className="flex flex-col gap-4 w-[90%] items-center justify-center mx-auto"
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
				{state.errors?.content && (
					<p className="text-pink">{state.errors.content}</p>
				)}
				<textarea
					name="content"
					placeholder="Your Comment"
					className="border-2 text-lg font-ubuntu text-white py-4 h-120 px-4 w-full focus:outline-none placeholder:text-white"
				/>
				<input type="hidden" name="blogpostId" value={blogpostId} />
				<SubmitButton />
			</form>
		</>
	);
};

export default PostComment;
