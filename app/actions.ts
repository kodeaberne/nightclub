'use server';

import * as z from 'zod';

const EmailSchema = z.object({
	email: z.string().email('Invalid email address'),
});

export const newsletterSignup = async (prevState: any, formData: FormData) => {
	const emailAddress = formData.get('email');
	const state: {
		succes: string | null;
		errors: { emailAddress?: string };
		fields: { emailAddress: FormDataEntryValue | null };
	} = {
		succes: null,
		errors: {},
		fields: {
			emailAddress,
		},
	};

	if (!emailAddress) {
		state.errors.emailAddress = 'Email is required';
	} else {
		const result = EmailSchema.safeParse({ email: emailAddress });
		if (!result.success) {
			const emailError = result.error.issues.find(
				(issue) => issue.path[0] === 'email',
			);
			state.errors.emailAddress =
				emailError?.message ?? 'Invalid email address';
		} else {
			state.succes = 'Successfully subscribed!';
		}
	}

	return state;
};
