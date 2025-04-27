import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-12 px-4 text-center bg-[#F9F7FC] min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[#9569F2] text-lg font-bold capitalize">
          You&apos;ve questions we&apos;ve got Answers
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto mt-12 text-left space-y-2"
        >
          <AccordionItem
            value="item-1"
            className="border-b px-4 border-gray-200 bg-white"
          >
            <AccordionTrigger className="text-base font-medium py-4">
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
            <AccordionTrigger className="py-4 text-base font-medium">
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
            <AccordionTrigger className="py-4 text-base font-medium">
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
            <AccordionTrigger className="py-4 text-base font-medium">
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
