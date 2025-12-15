'use server';

// @ts-nocheck

export const newsletterSignup = async (prevState, formData) => {
	const emailAdress = formData.get('email');

	const state = {
		success: null,
		errors: {},
		fields: {
			emailAdress,
		},
	};

	if (!emailAdress) {
		state.errors.emailAdress = 'Please fill out your email';
	} else if (emailAdress.length < 5) {
		state.errors.emailAdress =
			'Your address must me at least 5 characters long';
	}

	if (Object.keys(state.errors).length > 0) {
		return state;
	}

	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch('http://localhost:4000/newsletters', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: emailAdress,
		}),
	});
	console.log(response);

	state.success = response.ok;
	return state;
};
