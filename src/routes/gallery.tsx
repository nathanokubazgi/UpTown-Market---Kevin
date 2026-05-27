import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import deliCounterImage from "@/assets/deli-counter.jpg";
import meatCounter1 from "@/assets/meat-counter-1.jpg";
import meatCounter2 from "@/assets/meat-counter-2.jpg";
import meatCounter3 from "@/assets/meat-counter-3.jpg";
import meatCounter4 from "@/assets/meat-counter-4-real.jpg";
import meatCounter5 from "@/assets/meat-counter-5-real.jpg";
import groceryAisleImage from "@/assets/grocery-aisle-real.png";
import produceDisplay1 from "@/assets/produce-display-1.png";
import produceDisplay2 from "@/assets/produce-display-2.png";
import produceDisplay3 from "@/assets/produce-display-3.png";
import produceDisplay4 from "@/assets/produce-display-4.png";
import produceDisplay5 from "@/assets/produce-display-5.png";
import produceDisplay6 from "@/assets/produce-display-6.png";
import galleryMarket1 from "@/assets/gallery-market-1.png";
import galleryMarket2 from "@/assets/gallery-market-2.png";
import galleryMeat1 from "@/assets/gallery-meat-1.png";
import dairyDisplayImage from "@/assets/dairy-display.png";
import householdAisleImage from "@/assets/household-aisle.png";
import galleryCleaningAisle from "@/assets/gallery-cleaning-aisle.png";
import gallerySpiceAisle from "@/assets/gallery-spice-aisle.png";
import galleryCookingOilAisle from "@/assets/gallery-cooking-oil-aisle.png";
import galleryProduceCoolerWide from "@/assets/gallery-produce-cooler-wide.png";
import galleryPreparedFoodSpread from "@/assets/gallery-prepared-food-spread.png";
import galleryHotFoodBar from "@/assets/gallery-hot-food-bar.png";
import galleryHotFoodTrays from "@/assets/gallery-hot-food-trays.png";
import galleryElotesStand from "@/assets/gallery-elotes-stand.png";
import gallerySodaAisle from "@/assets/gallery-soda-aisle.png";
import galleryBeverageWall from "@/assets/gallery-beverage-wall.png";
import galleryMarinatedMeats from "@/assets/gallery-marinated-meats.png";
import personalCareAisleImage from "@/assets/personal-care-aisle.png";
import galleryCookiesAisle from "@/assets/gallery-cookies-aisle.png";
import galleryTortillasBeans from "@/assets/gallery-tortillas-beans.png";
import galleryButcherCase from "@/assets/gallery-butcher-case.png";
import gallerySaucesAisle from "@/assets/gallery-sauces-aisle.png";
import galleryJuicesMilk from "@/assets/gallery-juices-milk.png";
import galleryMeatSeafoodCase from "@/assets/gallery-meat-seafood-case.png";
import galleryProduceCollage from "@/assets/gallery-produce-collage.png";
import galleryFlowersPastries from "@/assets/gallery-flowers-pastries.png";
import galleryMarinatedMeatCase from "@/assets/gallery-marinated-meat-case.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Uptown Fresh Market" },
      {
        name: "description",
        content:
          "Browse photos of Uptown Fresh Market Nashville — our store, fresh produce, prepared foods, bakery, and more.",
      },
      { property: "og:title", content: "Photo Gallery — Uptown Fresh Market" },
      {
        property: "og:description",
        content: "Browse photos of our store, fresh produce, prepared foods, and more.",
      },
    ],
  }),
  component: GalleryPage,
});

const galleryImages = [
  {
    src: deliCounterImage,
    alt: "Uptown Fresh Market deli counter with prepared foods, drinks, and Tacos & Mas menu boards",
  },
  {
    src: meatCounter1,
    alt: "Meat counter with fresh beef cuts, ground meat, and Fud cold cuts on display",
  },
  { src: meatCounter2, alt: "Butcher case with marinated meats, chorizo, fajita, and pork chops" },
  {
    src: meatCounter3,
    alt: "Pork and chicken selection in the meat case with cookware on the shelf above",
  },
  {
    src: meatCounter4,
    alt: "Meat and seafood counter with tortillas, shrimp, fish fillets, pork cuts, and handwritten price signs",
  },
  {
    src: meatCounter5,
    alt: "Close-up of the meat and seafood counter with ceviche mix, fish fillets, pork belly, and tortillas",
  },
  {
    src: produceDisplay1,
    alt: "Fresh produce display with dragon fruit, melons, pomegranates, grapes, bananas, and plantains",
  },
  {
    src: produceDisplay2,
    alt: "Produce cooler with cabbage, corn, bell peppers, limes, lemons, jalapeños, carrots, and greens",
  },
  {
    src: produceDisplay3,
    alt: "Produce aisle with packaged greens, tortillas, peppers, tomatoes, herbs, mangoes, and avocados",
  },
  {
    src: produceDisplay4,
    alt: "Dried chiles, Jamaica, beans, corn, and pantry staples displayed in market bins",
  },
  {
    src: produceDisplay5,
    alt: "Fresh potatoes, onions, sweet potatoes, yams, malanga, plantains, and coconuts",
  },
  {
    src: produceDisplay6,
    alt: "Fruit display with pineapple, papaya, apples, mangoes, avocados, oranges, limes, and tomatoes",
  },
  {
    src: galleryMarket1,
    alt: "Produce section with sugar cane, tomatoes, mangoes, guavas, bananas, and fresh greens",
  },
  {
    src: galleryMarket2,
    alt: "Produce display with pomegranates, apples, pears, plantains, yuca, nopales, and citrus",
  },
  {
    src: galleryMeat1,
    alt: "Fresh meat counter with beef cuts, pork belly, chuck roll, knuckles, and eye round",
  },
  {
    src: dairyDisplayImage,
    alt: "Dairy case with cheeses, sour cream, butter, eggs, bacon, and deli meats",
  },
  {
    src: householdAisleImage,
    alt: "Household aisle with paper towels, bath tissue, napkins, soap, and cleaning supplies",
  },
  {
    src: galleryCleaningAisle,
    alt: "Cleaning aisle with laundry detergent, fabric softener, dish soap, and household supplies",
  },
  {
    src: gallerySpiceAisle,
    alt: "Seasoning aisle with spices, herbs, salt, sauces, taco kits, and pantry staples",
  },
  {
    src: galleryCookingOilAisle,
    alt: "Grocery aisle with cooking oils, vinegar, corn flour, rice, beans, and baking staples",
  },
  {
    src: galleryProduceCoolerWide,
    alt: "Wide produce cooler with cabbage, peppers, grapes, herbs, cucumbers, nopales, tortillas, and fresh fruit",
  },
  {
    src: galleryPreparedFoodSpread,
    alt: "Prepared Mexican food spread with tacos, tortas, plates, burritos, pancakes, fruit, and pickled vegetables",
  },
  {
    src: galleryHotFoodBar,
    alt: "Hot food bar with rice, beans, plantains, stews, roasted chicken, beef, potatoes, and pasta",
  },
  {
    src: galleryHotFoodTrays,
    alt: "Hot food trays with caldo de res, bistec a la mexicana, tamales, carne asada, plantains, taquitos, barbacoa, mole, and Mexican rice",
  },
  {
    src: galleryElotesStand,
    alt: "Elotes Preparados stand with Mexican street corn, esquites, hot Cheetos, Takis, fresh roses, sodas, and frozen chocolate bananas",
  },
  {
    src: gallerySodaAisle,
    alt: "Soda aisle stocked with Coca-Cola, Sprite, Fanta, Dr Pepper, Jarritos, Sangria, and Mexican imported sodas",
  },
  {
    src: galleryBeverageWall,
    alt: "Beverage wall with Prime, Gatorade, Jarritos, Boing, Sangria, juices, aguas frescas, Jumex, energy drinks, and imported sodas",
  },
  {
    src: galleryMarinatedMeats,
    alt: "Butcher case with marinated pollo adobado, bistec adobado, costilla de res, al pastor, chorizo, and fresh ribeye and round steak",
  },
  {
    src: personalCareAisleImage,
    alt: "Personal care aisle with shampoo, conditioner, body wash, deodorant, soap, and hair care products",
  },
  {
    src: galleryCookiesAisle,
    alt: "Cookies and galletas aisle with El Mexicano, Gamesa, Cuétara, Marinela, Oreo, Ritz, and Mexican wafers and crackers",
  },
  {
    src: galleryTortillasBeans,
    alt: "End-cap display with La Costeña pinto and black beans, Abuelita chocolate, fresh tortillas, sopes, and jasmine rice",
  },
  {
    src: galleryButcherCase,
    alt: "Butcher case with T-bone steak, chicharrón molido, cola de res, beef eye round, ribeye, pork belly, and chorizo",
  },
  {
    src: groceryAisleImage,
    alt: "Grocery aisle with tortillas, snacks, candy, and imported pantry items at Uptown Fresh Market",
  },
  {
    src: gallerySaucesAisle,
    alt: "Sauces and condiments aisle with hot sauces, salsas, mayo, mustard, ketchup, BBQ sauce, and Mexican adobos",
  },
  {
    src: galleryJuicesMilk,
    alt: "Refrigerated beverage aisle with Suero Oral, Electrolit, Simply juices, Tropicana, Sunny D, Lala milk, Silk, Lactaid, and creamers",
  },
  {
    src: galleryMeatSeafoodCase,
    alt: "Meat and seafood case with whole tilapia, catfish fillets, shrimp, pork belly, pork chops, chicken, and queso fresco",
  },
  {
    src: galleryProduceCollage,
    alt: "Produce section collage with tomatoes, melons, grapes, bananas, plantains, pumpkins, onions, potatoes, fresh greens, cabbage, peppers, and packaged vegetables",
  },
  {
    src: galleryFlowersPastries,
    alt: "Fresh flower bouquets with roses and baby's breath next to packaged Mexican pastries and cookies",
  },
  {
    src: galleryMarinatedMeatCase,
    alt: "Butcher case with pollo adobado, bistec adobado, costilla de res marinada, al pastor de puerco, chorizo, and fresh beef cuts",
  },
];

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null,
    );
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading title="Photo Gallery" subtitle="Take a look inside Uptown Fresh Market" />

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
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
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
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
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
