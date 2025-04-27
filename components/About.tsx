import Image from "next/image";
import DummyImage from "../public/AboutImage.png";

export const AboutUs = () => {
  return (
    <section className="py-8 md:py-20 px-4 border-b-2 flex items-center">
      <div className="flex flex-col lg:flex-row gap-8 justify-evenly items-center max-w-6xl mx-auto">
        <div className="max-w-[400px] w-100% lg:w-1/2 flex justify-center">
          <Image
            src={DummyImage}
            alt="Professional Cleaning"
            className="max-w-full h-auto md:order-first order-last"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-[#9569F2] text-lg font-bold">WHO ARE WE</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            About Us
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed">
            At Gold Shine Cleaning Company in Halifax, Nova Scotia, we offer
            reliable, top-quality cleaning services with a personal touch. Our
            vetted professionals guarantee a spotless clean with flexible
            scheduling, backed by a 100% satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};
