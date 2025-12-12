import Hero from "@/app/components/index/Hero";
import Navigation from "@/app/components/global/Navigation";

export default function Home() {
  return (
    <>
    <div className="flex flex-col font-sans">
        <Hero />
    </div>   
        <Navigation />
    </>
  );
}