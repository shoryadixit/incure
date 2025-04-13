import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { Clock } from "lucide-react";
import Image from "next/image";
import { BiSolidBadge } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

export default function WhyChooseIncure() {
  const content = [
    {
      title: "Ultra-Fast Delivery – Medicines delivered in minutes",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "100% Authentic Medicines – Sourced from verified pharmacies",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Easy Prescription Upload – Hassle-free ordering",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "24/7 Support – Always available customer service",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];

  const card = [
    {
      id: 1,
      icon: <Clock className="text-blue-500" size={30} />,
      title: "24x7 Ultra-Fast Delivery",
      description: "Emergency or regular delivery available round the clock",
    },
    {
      id: 2,
      icon: <BiSolidBadge className="text-blue-500" size={30} />,
      title: "Certified Medicines",
      description: "100% genuine medicines and surgical supplies",
    },
    {
      id: 3,
      icon: <FaLocationDot className="text-blue-500" size={30} />,
      title: "Real-Time Tracking",
      description: "Track your order status and delicery ETA",
    },
  ];

  return (
    <section className=" flex flex-col items-center justify-center gap-20 pt-20">
      <div>
        <h1 className="text-3xl font-bold text-center">Why Choose Incure?</h1>
        <p className="text-md text-center">
          We are committed to providing the best service possible
        </p>
      </div>
      <div className="flex items-center justify-evenly w-full flex-wrap gap-4">
        {/* {card.map((item, index) => (
          <Card key={item.id} className="w-[400px] shadow-xl mx-auto">
            <CardHeader className={"space-y-1.5"}>
              <div>{item.icon}</div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))} */}
        <div className="w-full relative">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}
