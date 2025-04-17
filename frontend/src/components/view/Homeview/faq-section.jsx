import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "What is the purpose of this application?",
      answer:
        "This application is designed to help users manage and organize their files efficiently.",
    },
    {
      question: "How do I upload files?",
      answer:
        "You can upload files by clicking on the upload button or dragging and dropping files into the designated area.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "The application supports various file formats including PDF, PNG, JPG, JPEG, and GIF.",
    },
  ];
  return (
    <div className="w-full bg-primary-foreground/30 via-primary/10 to-popover/15 cursor-pointer">
      <div className="mx-auto max-w-3xl py-10">
        <div className="flex flex-col gap-2 p-4">
          <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
          <p className="text-sm text-gray-500">
            Here are some frequently asked questions. If you have any other
            questions you'd like answered please feel free to email us.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-4 ">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
