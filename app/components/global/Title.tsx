import Header from '@/app/components/global/Header';

export default function Title({ title }: { title: string }) {
	return (
		<div className="flex flex-col items-center justify-center pt-12 pb-6 bg-[url('/global/titlebg.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/85 before:z-0">
			<Header title={title} />
		</div>
	);
}
