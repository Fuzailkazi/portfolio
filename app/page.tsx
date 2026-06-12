import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import HowIWork from "@/components/HowIWork";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Portfolio Skeleton</h1>
      <Hero />
      <About />
      <SelectedWork />
      <HowIWork />
      <Writing />
      <Contact />
    </main>
  );
}
