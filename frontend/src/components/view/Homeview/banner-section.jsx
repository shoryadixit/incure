"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "motion/react";

export default function BannerSection() {
  const MotionButton = motion.create(Button);

  return (
    <section className="min-h-[65vh] h-full flex items-center justify-center bg-gradient-to-br from-primary-foreground to-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full mx-auto px-5 sm:px-20 py-8">
        <div className="flex flex-col items-start justify-center gap-14">
          <h1 className="text-4xl sm:text-6xl flex flex-col items-start justify-center text-black font-bold gap-4">
            Get Medicines Delivered to Your Doorstep in Minutes
            <span className="text-sm sm:text-base">
              Trust us with your health. We deliver prescribed medicines right
              to your door with verified authenticity and professional care.
            </span>
          </h1>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant="default"
            size={"lg"}
            className="rounded-full"
          >
            <BsWhatsapp /> <p>Order via WhatsApp</p>
          </MotionButton>
        </div>
        <div className="relative w-full h-[450px] sm:h-[600px]">
          <Image
            src="/bannerImageBackgroundRemoved.png"
            alt="banner"
            fill
            quality={100}
            priority
            className="object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
