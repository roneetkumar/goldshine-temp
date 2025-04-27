import Image from "next/image";
import { Button } from "./ui/button";
import DummyImage from "../public/Hero2.png";

export const HeroSection = () => {
  return (
    <section className="text-[#11024D] py-6 md:py-0 w-full flex flex-col items-center px-4 sm:px-6 md:px-8 border-b-2 min-h-screen justify-center">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Professional Cleaning Done Right
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
            Experience the joy of a professional cleaning. Schedule a
            hassle-free service today and let us restore your home&apos;s shine!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button
              variant="roundedPrimary"
              className="text-base px-6 py-4 w-full sm:w-auto"
            >
              <a href="#quote" className="w-full block">
                {" "}
                Get Free Quote
              </a>
            </Button>
            <Button
              variant="roundedSecondary"
              className="text-base px-6 py-4 w-full sm:w-auto"
            >
              <a href="tel:+19024766652" className="w-full block">
                {" "}
                Call +1 (902) 476-6652
              </a>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-md">
            <Image
              src={DummyImage}
              alt="Professional Cleaning"
              width={351}
              layout="responsive"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
