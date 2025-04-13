"use client";

import { Separator } from "@/components/ui/separator";
import { CloudUpload } from "lucide-react";
import { BsCreditCard, BsWhatsapp } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

export default function HowItWorksSection() {
  const options = [
    {
      id: 1,
      icon: <CloudUpload size={35} className="text-primary" />,
      title: "Upload Prescription",
      description: "Upload your prescription through our secure platofrm",
    },
    {
      id: 2,
      icon: <BsWhatsapp size={35} className="text-primary" />,
      title: "Send via WhatsApp",
      description: "Connect instantly through WhatsApp for order confirmation",
    },
    {
      id: 3,
      icon: <BsCreditCard size={35} className="text-primary" />,
      title: "Confirm & Pay",
      description: "Recieve confirmation and complete secure payment",
    },
    {
      id: 4,
      icon: <TbTruckDelivery size={35} className="text-primary" />,
      title: "Fast Delivery",
      description: "Get your medicines delivered to your doorstep",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-between gap-8 bg-primary-foreground/20 text-center py-20 px-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">How It Works</h1>
        <p className="text-md">
          Four simple steps to get your medicines delivered
        </p>
      </div>
      <div className="flex items-center w-full justify-evenly flex-wrap gap-10">
        {options.map((item, index) => (
          <div key={item.id}>
            <div className="w-[300px] flex flex-col items-start justify-between gap-5 bg-primary-foreground/40 p-6 rounded-2xl">
              <div className="bg-primary-foreground/70 p-4 rounded-none">{item.icon}</div>
              <div className="flex flex-col gap-2 text-start">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
            {index < options.length - 1 && (
              <Separator className={"sm:hidden"} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
