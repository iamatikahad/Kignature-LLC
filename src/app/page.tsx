import { Hero } from "@/components/sections/Hero";
import { About, Vision } from "@/components/sections/About";
import { NexBDProduct } from "@/components/sections/NexBDProduct";
import { Showcase } from "@/components/sections/Showcase";
import { Technology, Roadmap } from "@/components/sections/Technology";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <NexBDProduct />
      <Showcase />
      <Technology />
      <Roadmap />
      <Contact />
    </>
  );
}
