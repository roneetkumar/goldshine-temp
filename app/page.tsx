// "use client";

import { AboutUs } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import ServicesSection from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TopNav } from "@/components/TopNav";
import { OurWork } from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen font-inter text-base text-[#11024D] bg-[#FCFBFE] flex flex-col items-center">
      <TopNav />
      <main className="w-full flex-grow">
        <HeroSection />
        <AboutUs />
        <OurWork />
        <QuoteEstimator />
        <ServicesSection />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
