"use client";

import { House, Truck, Building, Toolbox, Broom } from "@phosphor-icons/react";

const services = [
  {
    title: "Residential",
    description:
      "Comprehensive home cleaning services for a spotless living space",
    icon: House,
  },
  {
    title: "Post-Construction",
    description: "Thorough cleaning after construction or renovation",
    icon: Toolbox,
  },
  {
    title: "Carpet Cleaning",
    description:
      "Deep cleaning to eliminate dirt, stains, and allergens for a refreshed carpet",
    icon: Broom,
  },
  {
    title: "Move-In/Move-Out",
    description:
      "Thorough cleaning to ensure a pristine space for new tenants or homeowners",
    icon: Truck,
  },
  {
    title: "Commercial",
    description: "Professional cleaning solutions for businesses and offices",
    icon: Building,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 text-center text-[#11024D]">
      <div className="text-center mb-12">
        <p className="text-[#9569F2] text-lg font-bold">
          What We Can Do For You
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[#11024D]">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">
              <service.icon size={42} className="text-[#9569F2]" />
            </div>
            <h3 className="text-xl font-semibold text-[#11024D] mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-[#11024D]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
