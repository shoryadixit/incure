"use client";

import Image from "next/image";

export default function HomeView() {
  return (
    <section className="min-h-[65vh] h-full flex items-center justify-center bg-gradient-to-br from-primary-foreground to-primary-foreground">
      <div className="grid grid-cols-2 gap-4 w-full h-full mx-auto px-20 py-8">
        <h1 className="text-6xl flex flex-col items-start justify-center text-black font-bold gap-4">
          Get Medicines Delivered to Your Doorstep in Minutes
          <span className="text-base">
            Trust us with your health. We deliver prescribed medicines right to
            your door with verified authenticity and professional care.
          </span>
        </h1>
        <div className="relative w-full h-[350px]">
          <Image
            src="/bannerImage.png"
            alt="banner"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
