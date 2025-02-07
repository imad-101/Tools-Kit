import type { Metadata } from "next";
import Header from "./components/Header";
import ToolCard from "./components/ToolCard";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testemonials";
import { Key, Palette, Link, Type, Image, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "ToolBox - Your Ultimate Tools & Utilities Resource",
  description:
    "Discover a wide range of free online tools and utilities to boost your productivity. From password generators to image compressors, ToolBox has everything you need.",
  keywords: "online tools, utilities, productivity, web tools",
  openGraph: {
    title: "ToolBox - Your Ultimate Tools & Utilities Resource",
    description:
      "Discover a wide range of free online tools and utilities to boost your productivity.",
    url: "https://toolbox.example.com",
    siteName: "ToolBox",
    images: [
      {
        url: "https://toolbox.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ToolBox - Online Tools and Utilities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const allTools = [
  {
    name: "Password Generator",
    description: "Create strong, unique passwords",
    icon: Key,
  },
  {
    name: "Color Picker",
    description: "Select and convert colors",
    icon: Palette,
  },
  {
    name: "URL Shortener",
    description: "Shorten long URLs quickly",
    icon: Link,
  },
  {
    name: "Text Formatter",
    description: "Format and clean up text",
    icon: Type,
  },
  {
    name: "Image Compressor",
    description: "Optimize images for the web",
    icon: Image,
  },
  {
    name: "JSON Validator",
    description: "Validate and format JSON",
    icon: Code,
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.q === "string" ? searchParams.q.toLowerCase() : "";
  const filteredTools = allTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search)
  );

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-light mb-12 text-center text-amber-800">
          Tools & Utilities
        </h1>
        <section aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="sr-only">
            Available Tools
          </h2>
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No tools found matching your search.
            </p>
          )}
        </section>
        {!search && (
          <>
            <FAQ />
            <Testimonials />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
