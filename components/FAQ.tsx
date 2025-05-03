"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useState } from "react";

export const FAQ = () => {
  // State to track the currently opened accordion item
  const [openItem, setOpenItem] = useState<string | undefined>("item-1");

  const handleAccordionToggle = (value: string) => {
    // If the item is already open, close it by setting state to undefined
    setOpenItem(openItem === value ? undefined : value);
  };

  return (
    <section className="py-8 md:py-20 px-4 text-center bg-[#F9F7FC] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[#9569F2] text-lg font-bold capitalize">
          You&apos;ve questions we&apos;ve got Answers
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single" // Only one item can be open at a time
          collapsible // Allows the accordion item to collapse
          value={openItem} // Controlled value for open item
          className="w-full max-w-2xl mx-auto mt-12 text-left space-y-2"
        >
          <AccordionItem
            value="item-1"
            className="border-b px-4 border-gray-200 bg-white"
          >
            <AccordionTrigger
              className="text-base font-medium py-4"
              onClick={() => handleAccordionToggle("item-1")} // Toggle on click
            >
              What cleaning products do you use?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-base text-gray-700">
              We use eco-friendly and safe cleaning products that are effective
              yet gentle on surfaces and safe for your family and pets.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-b px-4 border-gray-200 bg-white"
          >
            <AccordionTrigger
              className="py-4 text-base font-medium"
              onClick={() => handleAccordionToggle("item-2")} // Toggle on click
            >
              Are your cleaners insured?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-base text-gray-700">
              Yes, all our cleaners are fully insured and bonded for your peace
              of mind and protection.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-b px-4 border-gray-200 bg-white"
          >
            <AccordionTrigger
              className="py-4 text-base font-medium"
              onClick={() => handleAccordionToggle("item-3")} // Toggle on click
            >
              How do I schedule a cleaning service?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-base text-gray-700">
              You can easily schedule a cleaning service by filling out our
              online form, calling our customer service, or sending us an email.
              We&apos;ll respond promptly to arrange a convenient time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border-b px-4 border-gray-200 bg-white"
          >
            <AccordionTrigger
              className="py-4 text-base font-medium"
              onClick={() => handleAccordionToggle("item-4")} // Toggle on click
            >
              Do you offer recurring cleaning services?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-base text-gray-700">
              Yes, we offer weekly, bi-weekly, and monthly recurring cleaning
              services with flexible scheduling options to suit your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
