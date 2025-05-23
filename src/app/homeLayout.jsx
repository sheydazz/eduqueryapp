"use client";

import AddQuestion from "@/components/AddQuestion";
import Image from "next/image";
const HomeLayout = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="flex flex-col  justify-center items-center align-middle">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo Eduquery"
            width={700}
            height={500}
            className="w-[90%] max-w-sm h-auto"
          />

          <h6 className="font-monaco  text-purple-700  mb-5 text-2xl text-center">
            Genera automáticamente Google Forms con AI ✨
          </h6>
        </div>
        <AddQuestion />
      </div>
    </div>
  );
};

export default HomeLayout;
