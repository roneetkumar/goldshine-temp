"use client";
import Image from "next/image";
import GoldshineLogo from "../public/goldshine.svg";
import { TiktokLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-[#11024D] w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-8 bg-white rounded-t-2xl">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="space-y-4">
            <Image
              src={GoldshineLogo}
              alt="Goldshine Logo"
              width={100}
              height={70}
              className="bg-white p-2 rounded"
            />
            <p className="text-base">
              Gold Shine Cleaning – Bringing brilliance to every space!
            </p>
            <p className="text-base">Open daily: 7:00 AM - 9:00 PM</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li className="text-base">Residential Cleaning</li>
                <li className="text-base">Carpet Cleaning</li>
                <li className="text-base">Commercial Cleaning</li>
                <li className="text-base">Post-Construction Cleaning</li>
                <li className="text-base">Move-In/Move-Out Cleaning</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li className="text-base">About Us</li>
                <li className="text-base">Our Team</li>
                <li className="text-base">Testimonials</li>
                <li className="text-base">Blog</li>
                <li className="text-base">Career</li>
              </ul>
            </div> */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="text-base">Halifax, Nova Scotia</li>
                <li className="text-base hover:underline">
                  <a href="tel:+19024766652">+1 (902) 476-6652</a>
                </li>
                <li className="text-base hover:underline">
                  <a href="mailto:goldshinecleaning.inc@gmail.com">
                    goldshinecleaning.inc@gmail.com
                  </a>
                </li>
                <li className="text-base">Support: 24/7 Available</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#F9F7FC] mt-8 py-6 px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base mb-4 md:mb-0">
            © {new Date().getFullYear()} Gold Shine Cleaning Company. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/gold_shine_cleaning/"
              target="_blank"
              className="w-10 h-10 rounded-full text-white bg-[#11024D] flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <InstagramLogo size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@gold.shine.cleaning"
              target="_blank"
              className="w-10 h-10 rounded-full text-white bg-[#11024D] flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <TiktokLogo size={24} />
            </a>
            <a
              href="https://wa.me/19024766652"
              target="_blank"
              className="w-10 h-10 rounded-full text-white bg-[#11024D] flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <WhatsappLogo size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
