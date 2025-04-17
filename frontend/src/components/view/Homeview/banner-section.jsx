"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Link, Loader2, Search, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

export default function BannerSection() {
  const MotionButton = motion.create(Button);
  const MotionInput = motion.create(Input);
  const [prescription, setPrescription] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPrescription(file);
  };

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }
  }, []);

  const [address, setAddress] = useState("");

  useEffect(() => {
    if (location) {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`
      )
        .then((response) => response.json())
        .then((data) => {
          setAddress(data.display_name);
        })
        .catch((error) => console.error("Error fetching address:", error));
    }
  }, [location]);

  console.log("Prescription:", prescription);

  return (
    <section className="min-h-screen h-full flex items-center bg-white justify-center bg-[url('/banner3.png')] bg-cover bg-bottom bg-no-repeat">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full mx-auto px-5 sm:px-20 py-8">
        <div className="flex flex-col lg:col-span-3 items-center text-center justify-center gap-14 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl max-w-4xl flex flex-col items-center justify-center text-primary/90 font-bold gap-4 z-0">
            Get Medicines Delivered to Your Doorstep in Minutes
            <span className="text-sm sm:text-lg text-primary/70">
              Trust us with your health. We deliver prescribed medicines right
              to your door with verified authenticity and professional care.
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
              <div className="flex flex-col md:flex-row w-full gap-4 md:items-center">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center justify-start relative">
                    <MotionInput
                      initial={{ width: "180px" }}
                      whileFocus={{ width: "300px", scale: [1.05, 1] }}
                      onBlur={(e) => {
                        e.target.animate(
                          [
                            { transform: "scale(0.95)" },
                            { transform: "scale(1)" },
                          ],
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
                            <p className="hidden md:block">
                              Remove Prescription
                            </p>
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

                <MotionButton
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="default"
                  size={"lg"}
                  className="rounded-full dark:text-white"
                >
                  <BsWhatsapp /> <p>Order Now</p>
                </MotionButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-md whitespace-break-spaces z-50">
        {location ? (
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">📍 Your Current Location</h3>
            <div className="text-sm text-gray-600">
              {address && <p className="text-sm text-gray-700">📌 {address}</p>}
              <div className="flex items-center gap-2">
                <span className="font-medium">Location Details:</span>
                {location && (
                  <a
                    href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    View on Map
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Loader2 className="animate-spin h-4 w-4" />
            <p>Getting your location...</p>
          </div>
        )}
      </div>
    </section>
  );
}
