"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I use these tools?",
    answer:
      "Each tool has a dedicated page with instructions. Simply click on the tool you want to use and follow the on-screen guidance.",
  },
  {
    question: "Are these tools free to use?",
    answer:
      "Yes, all tools on ToolBox are completely free to use. We believe in providing accessible resources for everyone.",
  },
  {
    question: "Is my data safe when using these tools?",
    answer:
      "We prioritize your privacy and data security. We don't store any of the data you input into our tools. For more information, please check our Privacy Policy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="my-16">
      <h2
        id="faq-heading"
        className="text-3xl font-light mb-8 text-center text-amber-950"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-amber-200 rounded-md">
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-amber-950">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-amber-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-amber-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
