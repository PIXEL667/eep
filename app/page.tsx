import About from "@/components/About";
import Hero from "@/components/Hero";
import IconLoop from "@/components/IconLoop";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <IconLoop />
        <Projects /> 
        <Testimonials />
      </div>
    </div>
  );
}
