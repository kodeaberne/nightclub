import Hero from "@/app/components/index/Hero";
import Navigation from "@/app/components/global/Navigation";
import Welcome from "@/app/components/index/Welcome";

export default function Home() {
  return (
    <>
    <div className="flex flex-col font-sans">
        <Hero />
    </div>   
        <Navigation />
        <Welcome />
    </>
  );
}