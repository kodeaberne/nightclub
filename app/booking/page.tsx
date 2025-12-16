// Imports
import Navigation from '@/app/components/global/Navigation';
import Title from '@/app/components/global/Title';
import BookingForm from '@/app/components/booking/BookingForm';

export default function Booking() {
	return (
		<>
			<Navigation />
			<Title title="Book Table" />
            <section className="w-full flex flex-col relative py-10 gap-12">
            <BookingForm />
            </section>
		</>
	);
}