// Client rendered component
'use client';

// @ts-nocheck

// Imports
import { useActionState } from 'react';
import { submitBooking } from '@/app/booking/actions';
import { useFormStatus } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Response message
const ResponseMessage = ({ state }) => {
	return (
		<>
			{state.success === true && (
				<p className="text-green-400 self-center">
					Your table has been booked.
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
const BookingForm = () => {
	const [state, postBooking] = useActionState(submitBooking, {
		success: null,
		errors: {},
		fields: {},
	});
	console.log(state);

	return (
		<>
			<ResponseMessage state={state} />
			<form
				action={postBooking}
				className="flex flex-col gap-4 w-[90%] items-center justify-center mx-auto"
			>
				{state.errors?.name && (
					<p className="text-pink">{state.errors.name}</p>
				)}
				<input
					type="text"
					name="name"
					required
					placeholder="Your Name"
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
				/>
				{state.errors?.email && (
					<p className="text-pink">{state.errors.email}</p>
				)}
				<input
					type="email"
					name="email"
					required
					placeholder="Your Email"
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
				/>
				{state.errors?.table && (
					<p className="text-pink">{state.errors.table}</p>
				)}
				<select
					name="table"
					required
					defaultValue=""
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
				>
					<option value="" disabled>
						Table Number
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
				</select>
				{state.errors?.guests && (
					<p className="text-pink">{state.errors.guests}</p>
				)}
				<select
					name="guests"
					required
					defaultValue=""
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
				>
					<option value="" disabled>
						Number of Guests
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
				</select>
				{state.errors?.date && (
					<p className="text-pink">{state.errors.date}</p>
				)}
				<input
					type="date"
					name="date"
					required
					defaultValue=""
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
					style={{
						colorScheme: 'dark',
					}}
				/>
				{state.errors?.phone && (
					<p className="text-pink">{state.errors.phone}</p>
				)}
				<input
					type="tel"
					name="phone"
					required
					placeholder="Your Contact Number"
					className="border-2 text-lg font-ubuntu text-white py-4 px-4 w-full focus:outline-none placeholder:text-white"
				/>
				<SubmitButton />
			</form>
		</>
	);
};

export default BookingForm;
