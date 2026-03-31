import CarListing from "@/Component/Home/Carlisting";
import Contact from "@/Component/Home/Contact";
import HeroSection from "@/Component/Home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
    <CarListing></CarListing>
    <Contact></Contact>
    </>
  );
}
