'use server';

// @ts-nocheck

export const submitContact = async (prevState: any, formData: any) => {
	const name = formData.get('name');
	const email = formData.get('email');
	const content = formData.get('content');
	const date = new Date().toISOString();

	const state = {
		success: null,
		errors: {},
		fields: {
			name,
			email,
			content,
			date,
		},
	};

	if (!name) {
		state.errors.name = 'Please fill out your name';
	} else if (name.length < 3) {
		state.errors.name = 'Your name must me at least 3 characters long';
	}


	if (!email) {
		state.errors.email = 'Please fill out your email';
	} else if (email.length < 5) {
		state.errors.email = 'Your email must me at least 5 characters long';
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
	const response = await fetch('http://localhost:4000/contact_messages', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: name,
			email: email,
			content: content,
			date: date,
		}),
	});
	console.log(response);

	state.success = response.ok;

	return state;
};
