const testimonials = [
  {
    name: "Alex Johnson",
    role: "Web Developer",
    content:
      "ToolBox has become an essential part of my daily workflow. The tools are intuitive and save me so much time!",
  },
  {
    name: "Sarah Lee",
    role: "Graphic Designer",
    content:
      "I love the simplicity of ToolBox. It has all the utilities I need in one place, without any unnecessary clutter.",
  },
  {
    name: "Michael Brown",
    role: "Content Creator",
    content:
      "ToolBox's URL shortener and image compressor have been game-changers for my social media content. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="my-16">
      <h2
        id="testimonials-heading"
        className="text-3xl font-light mb-8 text-center text-amber-950"
      >
        What Our Users Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="bg-amber-100 p-6 rounded-lg shadow-sm border border-amber-100"
          >
            <p className="text-gray-600 mb-4">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <footer>
              <p className="font-medium text-amber-950">{testimonial.name}</p>
              <p className="text-amber-800">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
