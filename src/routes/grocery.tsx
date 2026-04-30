import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SnapEbtBanner } from "@/components/SnapEbtBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import placeholderImage from "@/assets/placeholder-blank.jpg";
import meatImage from "@/assets/meat-counter-1.jpg";
import groceryAisleImage from "@/assets/grocery-aisle-real.png";
import produceDisplayImage from "@/assets/produce-display-1.png";
import dairyDisplayImage from "@/assets/dairy-display.png";
import householdAisleImage from "@/assets/household-aisle.png";

export const Route = createFileRoute("/grocery")({
  head: () => ({
    meta: [
      { title: "Grocery — Uptown Fresh Market" },
      { name: "description", content: "Fresh produce, quality meats, bakery, dairy, and specialty items at Uptown Fresh Market Nashville. SNAP/EBT accepted." },
      { property: "og:title", content: "Grocery — Uptown Fresh Market" },
      { property: "og:description", content: "Fresh produce, quality meats, bakery & specialty items. SNAP/EBT accepted." },
    ],
  }),
  component: GroceryPage,
});

interface GroceryCategory {
  name: string;
  description: string;
  image: string;
  icon: string;
  products: string[];
}

const categories: GroceryCategory[] = [
  {
    name: "Fresh Produce",
    description: "Locally sourced and imported fruits and vegetables, delivered fresh daily.",
    image: produceDisplayImage,
    icon: "🥬",
    products: ["Dragon Fruit", "Pomegranates", "Cantaloupe", "Honeydew", "Papaya", "Pineapple", "Plantains", "Bananas", "Kiwi", "Peaches", "Plums", "Grapes", "Cabbage", "Cucumbers", "Carrots", "Bell Peppers", "Jalapeños", "Serrano Peppers", "Limes", "Lemons", "Tomatoes", "Onions", "Mangoes", "Cilantro", "Parsley", "Avocados", "Yuca", "Nopales", "Ancho Chiles", "Árbol Chiles", "Guajillo Chiles", "Pasilla Chiles", "Puya Chiles", "Chipotle Chiles", "Jamaica", "White Corn", "Pinto Beans", "Black Beans", "Red Beans", "Sweet Potatoes", "White Potatoes", "Red Potatoes", "Yams", "Malanga", "Green Bananas", "Coconuts", "Oranges", "Apples"],
  },
  {
    name: "Meat & Seafood",
    description: "Premium cuts of beef, chicken, pork, and fresh seafood from trusted suppliers.",
    image: meatImage,
    icon: "🥩",
    products: ["Carne Asada", "Chicken Thighs", "Pork Shoulder", "Chorizo", "Tilapia", "Shrimp", "Beef Tripe", "Goat Meat"],
  },
  {
    name: "Bakery",
    description: "Fresh-baked breads, pastries, and traditional Mexican sweet bread daily.",
    image: placeholderImage,
    icon: "🍞",
    products: ["Conchas", "Bolillos", "Pan Dulce", "Tres Leches Cake", "Tortillas (Corn & Flour)", "Empanadas", "Churros"],
  },
  {
    name: "Dairy & Deli",
    description: "Fresh cheeses, cream, eggs, and deli items for your home cooking.",
    image: dairyDisplayImage,
    icon: "🧀",
    products: ["Queso Fresco", "Oaxaca Cheese", "Crema Mexicana", "Cotija Cheese", "Fresh Eggs", "Whole Milk", "Butter"],
  },
  {
    name: "Specialty & Pantry",
    description: "Authentic spices, salsas, dried chiles, canned goods, and imported specialties.",
    image: groceryAisleImage,
    icon: "🌶️",
    products: ["Dried Chiles", "Mole Paste", "Hominy", "Mexican Rice", "Refried Beans", "Hot Sauces", "Tamarind Candy", "Maseca"],
  },
  {
    name: "Home Necessities",
    description: "Cleaning supplies, paper goods, laundry, and everyday household essentials.",
    image: householdAisleImage,
    icon: "🧻",
    products: ["Paper Towels", "Bath Tissue", "Napkins", "Laundry Detergent", "Fabric Softener", "Dish Soap", "Hand Soap", "Bleach", "All-Purpose Cleaner", "Trash Bags", "Sponges", "Aluminum Foil", "Plastic Wrap", "Storage Bags"],
  },
];

function GroceryPage() {
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Grocery Selection"
        subtitle="Everything you need for authentic home cooking and everyday essentials"
      />

      <div className="mt-6">
        <SnapEbtBanner />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Card
            key={cat.name}
            className="group cursor-pointer overflow-hidden border-border transition-all hover:shadow-lg"
            onClick={() => setExpandedCat(expandedCat === cat.name ? null : cat.name)}
            role="button"
            tabIndex={0}
            aria-expanded={expandedCat === cat.name}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExpandedCat(expandedCat === cat.name ? null : cat.name);
              }
            }}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label={cat.name}>{cat.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>

              {expandedCat === cat.name && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.products.map((product) => (
                    <Badge key={product} variant="secondary" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                </div>
              )}

              <p className="mt-3 text-xs font-medium text-primary">
                {expandedCat === cat.name ? "Click to collapse" : "Click to see products →"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
