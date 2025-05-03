"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Carousel1 from "../public/Carousel1.png";
import Carousel2 from "../public/Carousel2.png";
import Carousel4 from "../public/Carousel4.png";

// Define your images array
const workImages = [
  { src: Carousel1, alt: "Before and After 1" },
  { src: Carousel2, alt: "Before and After 2" },
  { src: Carousel4, alt: "Before and After 4" },
];

export const OurWork = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <section className="py-8 px-4 md:py-20 text-center bg-gray-50 border-b-2 w-full flex flex-col justify-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="w-full">
          <p className="text-[#9569F2] text-lg font-bold">
            OUR BEFORE-AND-AFTER SHOWCASES
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
            Our Work
          </h2>
        </div>

        {/* Full-width Carousel */}
        <div className="w-full mx-auto relative mt-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {workImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[80%] max-w-[700px] px-2"
                >
                  <Card className="overflow-hidden shadow-none rounded-xl border-none">
                    <CardContent className="p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        className="w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
