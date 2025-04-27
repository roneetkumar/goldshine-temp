"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarImage } from "./ui/avatar";

import { Star } from "@phosphor-icons/react";

type Review = {
  author_name: string;
  author_url: string;
  language: "en";
  original_language: "en";
  profile_photo_url: string;
  rating: 5;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

export const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [reviews, setReviews] = React.useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        // console.log(data);

        setReviews((data.result.reviews as Review[]) || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-12 px-0 text-center border-b-2 min-h-screen flex flex-col justify-center">
      <div className="max-w-full mx-0 w-screen">
        <p className="text-[#9569F2] text-lg font-bold capitalize">
          What People Are Saying
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Testimonials
        </h2>
        <div className="w-full relative mt-12 px-4">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              inViewThreshold: 0.1,
            }}
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 p-2"
                >
                  <Card className="bg-[#F5F0FF] h-full shadow-none border-none">
                    <CardContent className="p-6 text-left h-full flex flex-col gap-4">
                      <p className="italic text-gray-700 flex-grow text-base">
                        {review.text.slice(0, 200).concat(" ...")}
                      </p>
                      <div className="flex items-start gap-4 justify-between">
                        <a href={review.author_url} target="_blank">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={review.profile_photo_url} />
                            </Avatar>
                            <div className="flex flex-col">
                              <p className="font-semibold text-base">
                                {review.author_name}
                              </p>
                              <span className="text-xs">
                                {review.relative_time_description}
                              </span>
                            </div>
                          </div>
                        </a>

                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={20}
                              weight="fill"
                              color={
                                i >= review.rating ? "#00000030" : "#9569F2"
                              }
                            />
                          ))}
                        </div>
                      </div>
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
