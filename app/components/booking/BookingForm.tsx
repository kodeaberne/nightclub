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

// Tables data
const smallTable = '/booking/table1.svg';
const mediumTable = '/booking/table2.svg';
const largeTable = '/booking/table3.svg';

const tables = [
	{ id: 1, number: 1, size: smallTable },
	{ id: 2, number: 2, size: smallTable },
	{ id: 3, number: 3, size: mediumTable },
	{ id: 4, number: 4, size: smallTable },
	{ id: 5, number: 5, size: largeTable },
	{ id: 6, number: 6, size: smallTable },
	{ id: 7, number: 7, size: smallTable },
	{ id: 8, number: 8, size: mediumTable },
	{ id: 9, number: 9, size: smallTable },
	{ id: 10, number: 10, size: largeTable },
	{ id: 11, number: 11, size: smallTable },
	{ id: 12, number: 12, size: smallTable },
	{ id: 13, number: 13, size: mediumTable },
	{ id: 14, number: 14, size: smallTable },
	{ id: 15, number: 15, size: largeTable },
];

// Tables Swiper
function TablesSwiper() {
	return (
		<Swiper
			modules={[Pagination]}
			spaceBetween={50}
			slidesPerView={1}
			pagination={{ type: 'bullets', clickable: true }}
			className="w-full h-full"
			style={{
				'--swiper-pagination-color': '#FF2A70',
				'--swiper-pagination-bullet-inactive-color': '#ffffff',
				'--swiper-pagination-bullet-inactive-opacity': '1',
				'--swiper-pagination-bullet-size': '12px',
				'--swiper-pagination-bullet-horizontal-gap': '6px',
				'--swiper-pagination-bullet-border-radius': '0px',
				'--swiper-navigation-color': '#FFf',
			}}
		>
			{tables.map((table) => (
				<SwiperSlide key={table.id}>
					<button className="w-full h-full grid grid-cols-1 grid-rows-1 place-items-center my-10"
					onClick={() => {
						document.getElementById('table-select').value = table.number;
					}}
					>
						<img
							src={table.size}
							alt={`Table ${table.number}`}
							className="col-start-1 row-start-1"
						/>
						<h2 className="text-2xl font-medium uppercase col-start-1 row-start-1">
							{table.number}
						</h2>
					</button>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

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
			{pending ? 'Submitting..' : 'RESERVE'}
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
			<div className="w-full h-full flex flex-col gap-10 md:hidden items-center justify-center">
				<h1 className="text-4xl font-bold text-center font-ubuntu uppercase">
					Select your table
				</h1>
				<TablesSwiper />
			</div>
			<div className="hidden md:grid md:grid-cols-5 md:grid-rows-3 gap-18 w-[80%] mx-auto my-10">
				{tables.map((table) => (
					<button key={table.id} className="w-auto h-auto place-items-center"
					onClick={() => {
						document.getElementById('table-select').value = table.number;
					}}
					>
						<img src={table.size} alt={`Table ${table.number}`} className="w-full h-full object-fit" />
						<h2 className="text-2xl font-medium uppercase">{table.number}</h2>
					</button>
				))}
			</div>
			<h2 className="text-4xl font-bold w-[90%] mx-auto font-ubuntu uppercase">Book a table</h2>
			<ResponseMessage state={state} />
			<form
				action={postBooking}
				className="flex flex-col gap-4 w-[90%] items-center justify-center mx-auto"
			>
				{state.errors?.name && (
					<p className="text-pink">{state.errors.name}</p>
				)}
				<div className="flex flex-col md:flex-row gap-4 w-full">
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
				</div>
				{state.errors?.table && (
					<p className="text-pink">{state.errors.table}</p>
				)}
				<div className="flex flex-col md:flex-row gap-4 w-full">
				<select
					name="table"
					id="table-select"
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
				</div>
				{state.errors?.date && (
					<p className="text-pink">{state.errors.date}</p>
				)}
				<div className="flex flex-col md:flex-row gap-4 w-full">
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
				</div>
				<SubmitButton />
			</form>
		</>
	);
};

export default BookingForm;
