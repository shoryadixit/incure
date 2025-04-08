import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { BiSolidBadge } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

export default function WhyChooseIncure() {
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
    <section className="py-20 px-10 flex flex-col items-center justify-center gap-10">
      <div>
        <h1 className="text-2xl font-bold text-center">Why Choose Incure?</h1>
        <p className="text-md text-center">
          We are committed to providing the best service possible
        </p>
      </div>
      <div className="flex items-center justify-evenly w-full flex-wrap gap-4">
        {card.map((item, index) => (
          <Card key={item.id} className="w-[400px] shadow-xl mx-auto">
            <CardHeader className={"space-y-1.5"}>
              <div>{item.icon}</div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
