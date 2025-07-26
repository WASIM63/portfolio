import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


export default function Home() {
  return (
		<main className="flex flex-col space-y-16 ">
			<Hero />
			<AboutSection />
			<Projects />
		</main>
  );
} 