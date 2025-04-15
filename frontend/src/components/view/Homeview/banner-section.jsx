"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Link, Search, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export default function BannerSection() {
  const MotionButton = motion.create(Button);
  const MotionInput = motion.create(Input);
  const [prescription, setPrescription] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPrescription(file);
  };

  console.log("Prescription:", prescription);

  return (
    <section className="min-h-screen h-full flex items-center justify-center bg-[url('/banner2.png')] bg-cover bg-bottom bg-no-repeat">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full mx-auto px-5 sm:px-20 py-8">
        <div className="flex flex-col lg:col-span-2 items-start justify-center gap-14">
          <h1 className="text-4xl sm:text-6xl flex flex-col items-start justify-center text-black font-bold gap-4 z-0">
            Get Medicines Delivered to Your Doorstep in Minutes
            <span className="text-sm sm:text-base">
              Trust us with your health. We deliver prescribed medicines right
              to your door with verified authenticity and professional care.
            </span>
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-4 md:items-center">
            <div className="flex items-center gap-4">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="default"
                size={"lg"}
                className="rounded-full dark:text-white"
              >
                <BsWhatsapp /> <p>Order via WhatsApp</p>
              </MotionButton>

              <div
                className={`text-white flex items-center ${
                  prescription && "min-w-fit"
                }`}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        animate={
                          prescription
                            ? { width: "100%" }
                            : { width: "fit-content" }
                        }
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary p-2 rounded-full shadow-md cursor-pointer"
                      >
                        <Input
                          type="file"
                          className="hidden"
                          id="upload"
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                        {prescription ? (
                          <div
                            className="flex items-center justify-between gap-2 h-full"
                            onClick={() => setPrescription(null)}
                          >
                            <div className="flex items-center gap-2">
                              <Link className="text-white w-5 h-5" />
                              <p className="text-xs md:hidden">
                                {prescription?.name.substring(0, 8)}...
                              </p>
                              <p className="text-xs hidden md:block">
                                {prescription?.name}
                              </p>
                            </div>
                            <span className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full cursor-pointer">
                              <X className="text-white w-5 h-5" />
                            </span>
                          </div>
                        ) : (
                          <label htmlFor="upload">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="17 8 12 3 7 8" />
                              <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                          </label>
                        )}
                      </motion.div>
                    </TooltipTrigger>
                    {prescription ? (
                      <TooltipContent>
                        <p className="md:hidden">{prescription?.name}</p>
                        <p className="hidden md:block">Remove Prescription</p>
                      </TooltipContent>
                    ) : (
                      <TooltipContent>
                        <p>Upload Prescription</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="flex items-center justify-start relative w-full">
              <MotionInput
                initial={{ width: "180px" }}
                whileFocus={{ width: "100%", scale: [1.05, 1] }}
                onBlur={(e) => {
                  e.target.animate(
                    [{ transform: "scale(0.95)" }, { transform: "scale(1)" }],
                    {
                      duration: 500,
                    }
                  );
                }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                placeholder="Search Medicines..."
                className={"bg-white pl-8 h-10 rounded-full shadow-md"}
              />
              <Search className="absolute left-2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
