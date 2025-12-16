'use server';

// @ts-nocheck

import { revalidatePath } from 'next/cache';

export const submitComment = async (prevState: any, formData: any) => {
	const blogpostId = parseInt(formData.get('blogpostId'), 10);
	const name = formData.get('name');
	const content = formData.get('content');
	const date = new Date().toISOString();

	const state = {
		success: null,
		errors: {},
		fields: {
			blogpostId,
			name,
			content,
			date,
		},
	};

	if (!name) {
		state.errors.name = 'Please fill out your name';
	} else if (name.length < 3) {
		state.errors.name = 'Your name must me at least 3 characters long';
	}

	if (!content) {
		state.errors.content = 'Please fill out your content';
	} else if (content.length < 10) {
		state.errors.content =
			'Your content must me at least 10 characters long';
	}

	if (Object.keys(state.errors).length > 0) {
		return state;
	}

	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch('http://localhost:4000/comments', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			blogpostId: blogpostId,
			name: name,
			content: content,
			date: date,
		}),
	});
	console.log(response);

	state.success = response.ok;

	if (response.ok) {
		revalidatePath(`/blog/${blogpostId}`);
	}

	return state;
};
