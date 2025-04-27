import Image from "next/image";
import GoldshineLogo from "../public/goldshine.svg";

export const TopNav = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-6xl px-6 py-4 md:py-6">
      <Image src={GoldshineLogo} alt="Goldshine Logo" width={74} height={53} />
      {/* <p className="text-md text-[#11024D80]  border-t border-b border-[#897F971F] py-1">
        Opens daily: 7:00 AM - 9:00 PM
      </p> */}
      <a
        href="#quote"
        className="underline decoration-dashed underline-offset-4 text-[#11024D] text-base font-medium"
      >
        Get Free Quote
      </a>
    </div>
  );
};
