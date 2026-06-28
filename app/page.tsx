import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceCertificate from "@/components/ExperienceCertificate";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceCertificate />
      <Projects />
      <BlogSection />
      <Contact />
      <Footer />
    </>
  );
}
