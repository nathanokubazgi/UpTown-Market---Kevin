import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import placeholderImage from "@/assets/placeholder-blank.jpg";
import deliCounterImage from "@/assets/deli-counter.jpg";
import meatCounter1 from "@/assets/meat-counter-1.jpg";
import meatCounter2 from "@/assets/meat-counter-2.jpg";
import meatCounter3 from "@/assets/meat-counter-3.jpg";
import meatCounter4 from "@/assets/meat-counter-4-real.jpg";
import meatCounter5 from "@/assets/meat-counter-5-real.jpg";
import groceryAisleImage from "@/assets/grocery-aisle-real.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Uptown Fresh Market" },
      { name: "description", content: "Browse photos of Uptown Fresh Market Nashville — our store, fresh produce, prepared foods, bakery, and more." },
      { property: "og:title", content: "Photo Gallery — Uptown Fresh Market" },
      { property: "og:description", content: "Browse photos of our store, fresh produce, prepared foods, and more." },
    ],
  }),
  component: GalleryPage,
});

const galleryImages = [
  { src: deliCounterImage, alt: "Uptown Fresh Market deli counter with prepared foods, drinks, and Tacos & Mas menu boards" },
  { src: meatCounter1, alt: "Meat counter with fresh beef cuts, ground meat, and Fud cold cuts on display" },
  { src: meatCounter2, alt: "Butcher case with marinated meats, chorizo, fajita, and pork chops" },
  { src: meatCounter3, alt: "Pork and chicken selection in the meat case with cookware on the shelf above" },
  { src: meatCounter4, alt: "Meat and seafood counter with tortillas, shrimp, fish fillets, pork cuts, and handwritten price signs" },
  { src: meatCounter5, alt: "Close-up of the meat and seafood counter with ceviche mix, fish fillets, pork belly, and tortillas" },
  { src: groceryAisleImage, alt: "Grocery aisle with tortillas, snacks, candy, and imported pantry items at Uptown Fresh Market" },
  { src: placeholderImage, alt: "Blank photo placeholder for future produce image" },
  { src: placeholderImage, alt: "Blank photo placeholder for future bakery image" },
  { src: placeholderImage, alt: "Blank photo placeholder for future dairy image" },
  { src: placeholderImage, alt: "Blank photo placeholder for future specialty grocery image" },
  { src: placeholderImage, alt: "Blank photo placeholder for future prepared food image" },
  { src: placeholderImage, alt: "Blank photo placeholder for future market interior image" },
];

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Photo Gallery"
        subtitle="Take a look inside Uptown Fresh Market"
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            className="group aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => openLightbox(i)}
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
              loading="lazy"
              width={400}
              height={400}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-primary-foreground/70">
            {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </div>
  );
}
