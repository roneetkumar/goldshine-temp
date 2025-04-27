"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";

export const QuoteEstimator = () => {
  // State to track user selections
  const [serviceType, setServiceType] = useState<string>("");
  const [area, setArea] = useState<number>(1500); // Default area is 1500
  const [frequency, setFrequency] = useState<string>("one-time");

  // Function to calculate the estimated price based on the area, service type, and frequency
  const calculatePrice = () => {
    let basePrice = 0;

    // Pricing logic based on service type
    switch (serviceType) {
      case "residential":
        basePrice = 100;
        break;
      case "carpet":
        basePrice = 80;
        break;
      case "commercial":
        basePrice = 200;
        break;
      case "post-construction":
        basePrice = 250;
        break;
      default:
        basePrice = 100;
        break;
    }

    // Adjust price based on area (e.g., $0.10 per sq. ft.)
    const priceByArea = area * 0.1;

    // Adjust price based on frequency (e.g., discount for weekly/bi-weekly/monthly)
    let frequencyDiscount = 0;
    if (frequency === "weekly") {
      frequencyDiscount = 0.1; // 10% off
    } else if (frequency === "bi-weekly") {
      frequencyDiscount = 0.05; // 5% off
    } else if (frequency === "monthly") {
      frequencyDiscount = 0.02; // 2% off
    }

    const price = basePrice + priceByArea;
    return price * (1 - frequencyDiscount); // Apply discount based on frequency
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 100), 4000);
    setArea(value);
  };

  return (
    <div
      id="quote"
      className="w-full px-4 bg-[#F9F7FC] border-b-2 flex flex-col justify-center items-center py-8 md:py-20"
    >
      <div className="text-center mb-8">
        <p className="text-[#9569F2] text-lg font-bold capitalize">
          Find the perfect package for your needs
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Quote Estimate
        </h2>
      </div>

      <Card className="w-full max-w-2xl mx-auto shadow-sm">
        <CardContent className="p-6">
          <form>
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div className="space-y-4 flex-1">
                <div className="space-y-2 flex items-center">
                  <Label htmlFor="service-type" className="text-base w-full">
                    Service Type
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger id="service-type" className="w-full">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent position="popper">
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
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 flex items-center">
                  <Label htmlFor="area" className="text-base w-full">
                    Area (sq. ft)
                  </Label>
                  <Input
                    type="number"
                    id="area"
                    className="w-full"
                    value={area}
                    onChange={handleAreaChange}
                  />
                </div>

                <div className="my-4">
                  <Slider
                    min={100}
                    max={4000}
                    value={[area]}
                    onValueChange={([value]) => setArea(value)}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 flex items-center">
                  <Label htmlFor="frequency" className="text-base w-full">
                    Frequency
                  </Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger id="frequency" className="w-full">
                      <SelectValue placeholder="One-time" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="bg-[#11024D] text-white text-center p-6 rounded-lg flex flex-col items-center justify-center gap-4 w-full md:w-1/3">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    ${calculatePrice().toFixed(2)}
                  </p>
                  <p className="text-base mt-1">Estimated Price</p>
                </div>
                <Button variant="roundedSecondary" className="w-full">
                  <a href="#contact">Book Now</a>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
