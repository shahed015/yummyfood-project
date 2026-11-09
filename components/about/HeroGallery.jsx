import Image from "next/image";

const GALLERY = [
  {
    src: "/img/AboutBanner.jpg",
    alt: "Inside the YummyFood dining experience",
    sizes: "(min-width: 768px) 58vw, 100vw",
    className: "aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto",
    priority: true,
    caption: {
      eyebrow: "Fresh. Warm. Made to share.",
      text: "Made with care, delivered to your door.",
    },
  },
  {
    src: "/img/hero-banner.jpg",
    alt: "A signature YummyFood dish",
    sizes: "(min-width: 768px) 42vw, 100vw",
    className: "aspect-[16/9] md:col-span-5 md:aspect-auto",
  },
  {
    src: "/img/Banner-3.jpg",
    alt: "A freshly plated meal",
    sizes: "(min-width: 768px) 42vw, 100vw",
    className: "aspect-[16/9] md:col-span-5 md:aspect-auto",
  },
];

export default function HeroGallery() {
  return (
    <section aria-label="Gallery" className="bg-background pb-10 md:pb-14">
      <div className="container-custom grid gap-4 md:h-136 md:grid-cols-12 md:grid-rows-2 lg:h-160">
        {GALLERY.map(({ src, alt, sizes, className, priority, caption }) => (
          <figure
            key={src}
            className={`group relative overflow-hidden rounded-card ${className}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />

            {caption && (
              <figcaption className="absolute inset-x-4 bottom-4 flex max-w-xs flex-col gap-1 rounded-card border border-white/20 bg-secondary/40 p-4 text-white backdrop-blur-md sm:right-auto">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {caption.eyebrow}
                </span>
                <span className="font-heading text-lg leading-snug">
                  {caption.text}
                </span>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
