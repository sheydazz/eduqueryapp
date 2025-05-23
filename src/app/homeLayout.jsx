"use client";

import AddQuestion from "@/components/AddQuestion";
import Image from "next/image";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-1 justify-center items-center px-4 py-8">
      <div className="flex flex-col justify-center items-center align-middle w-full max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-2xl h-auto">
            <Image
              src="/assets/logo.png"
              width={700}
              height={500}
              alt="Logo de la aplicación"
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <h6 className="font-monaco text-purple-700 mb-5 text-xl sm:text-2xl text-center px-4">
            Genera automáticamente Google Forms con AI ✨
          </h6>
        </div>
        <AddQuestion />
      </div>
    </div>
  );
};

export default HomeLayout;