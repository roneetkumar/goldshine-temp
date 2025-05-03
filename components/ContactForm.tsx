"use client";

import {
  Broom,
  Envelope,
  IdentificationCard,
  MapPin,
  Phone,
  Repeat,
} from "@phosphor-icons/react";
import { CardContent } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

// import { DatePicker } from "./DatePicker";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("full-name") as HTMLInputElement)
        ?.value,
      address: (form.elements.namedItem("address") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      service: (form.elements.namedItem("service") as HTMLInputElement)?.value,
      frequency: (form.elements.namedItem("frequency") as HTMLInputElement)
        ?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        // Replace alert with toast notification
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        // Show error toast
        toast.error("Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      // Show error toast on catch
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="md:py-20 py-8 px-4 mx-auto bg-[#11024D] rounded-t-3xl flex flex-col justify-center"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <CardContent className="p-0 w-full">
          <p className="text-center text-lg font-bold capitalize text-white">
            You&apos;ve questions we&apos;ve got Answers
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-white">
            Get a Free Custom Quote
          </h2>

          <form onSubmit={handleSubmit} className="mx-auto">
            <div className="py-1 flex items-center bg-white rounded-lg px-2 my-2 gap-2">
              <IdentificationCard size={24} />
              <Input
                id="full-name"
                placeholder="Full name"
                className="text-base w-full border-none focus-visible:ring-0 shadow-none p-0 m-0"
              />
            </div>
            <div className="py-1 flex items-center bg-white rounded-lg px-2 gap-2 my-2">
              <MapPin size={24} />
              <Input
                id="address"
                placeholder="Address / Postal Code"
                type="text"
                className="text-base w-full border-none focus-visible:ring-0 shadow-none p-0 m-0"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full my-2">
              <div className="py-1 flex items-center bg-white rounded-lg px-2 gap-2 flex-1 ">
                <Envelope size={24} />
                <Input
                  id="email"
                  placeholder="Email"
                  className="text-base w-full border-none focus-visible:ring-0 shadow-none p-0 m-0"
                />
              </div>
              <div className="py-1 flex items-center bg-white rounded-lg px-2 gap-2 flex-1">
                <Phone size={24} />
                <Input
                  id="phone"
                  placeholder="Phone"
                  type="tel"
                  className="text-base w-full border-none focus-visible:ring-0 shadow-none p-0 m-0"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="bg-white rounded-lg py-1 basis-3/5">
                <Select>
                  <SelectTrigger
                    id="service"
                    className="shadow-none border-none focus:ring-0 focus:ring-transparent text-sm"
                  >
                    <Broom size={24} />
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">
                      Residential Cleaning
                    </SelectItem>
                    <SelectItem value="carpet">Carpet Cleaning</SelectItem>
                    <SelectItem value="commercial">
                      Commercial Cleaning
                    </SelectItem>
                    <SelectItem value="post-construction">
                      Post-Construction Cleaning
                    </SelectItem>
                    <SelectItem value="move-in-out">
                      Move-In/Move-Out Cleaning
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-white rounded-lg py-1 flex-1">
                <Select>
                  <SelectTrigger
                    id="frequency"
                    className=" shadow-none border-none focus:ring-0 focus:ring-transparent text-sm "
                  >
                    <Repeat size={24} />
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-time">One-time</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* 
            <div className="space-y-2 bg-white rounded-lg py-1 my-2 flex items-center">
              <DatePicker />
            </div> */}
            <div className="space-y-2 bg-white rounded-lg  my-2 flex items-center">
              <Textarea
                id="message"
                placeholder="Tell us more... (optional)"
                className="text-base min-h-24 bg-white resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="text-base w-full mt-2 py-4 hover:bg-[#9569F2] hover:text-white border-none"
              variant={"roundedSecondary"}
            >
              {loading ? "Sending..." : "Get Free Quote"}
            </Button>
          </form>
        </CardContent>
      </div>
    </section>
  );
};
