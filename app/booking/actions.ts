'use server';

// @ts-nocheck

// Fetch booking data from API to check if the table is available
const fetchBooking = async () => {
	const response = await fetch(`http://localhost:4000/reservations`);
	const data = await response.json();
	return data;
};

export const submitBooking = async (prevState: any, formData: any) => {
	const data = await fetchBooking();

	const name = formData.get('name');
	const email = formData.get('email');
	const table = formData.get('table');
	const guests = formData.get('guests');
	const date = formData.get('date');
	const phone = formData.get('phone');

	const isTableBooked = data.some(
		(item: any) => item.table === table && item.date === date,
	);

	const state = {
		success: null,
		errors: {},
		fields: {
			name,
			email,
			table,
			guests,
			date,
			phone,
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

	if (!table) {
		state.errors.table = 'Please select your table';
	} else if (table.length < 1) {
		state.errors.table = 'Please select your table';
	}

	if (!guests) {
		state.errors.guests = 'Please fill out your guests';
	} else if (guests.length < 1) {
		state.errors.guests = 'Your guests must me at least 1 characters long';
	}

	if (!date) {
		state.errors.date = 'Please fill out your date';
	} else if (date.length < 10) {
		state.errors.date = 'Your date must me at least 10 characters long';
	}

	if (!phone) {
		state.errors.phone = 'Please fill out your phone';
	} else if (phone.length < 6) {
		state.errors.phone = 'Your phone must me at least 6 characters long';
	}

	// Check availability after validation but before submission
	if (isTableBooked) {
		state.errors.table = 'Table is already booked on this date';
	}

	if (Object.keys(state.errors).length > 0) {
		return state;
	}

	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch('http://localhost:4000/reservations', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: name,
			email: email,
			table: table,
			guests: guests,
			date: date,
			phone: phone,
		}),
	});
	console.log(response);

	state.success = response.ok;

	return state;
};
