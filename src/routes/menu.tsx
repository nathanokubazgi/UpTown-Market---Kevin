import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { SnapEbtBanner } from "@/components/SnapEbtBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import placeholderImage from "@/assets/placeholder-blank.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Food Menu — Uptown Fresh Market" },
      { name: "description", content: "Authentic prepared Mexican food menu: tacos, burritos, quesadillas, breakfast plates, and fresh drinks at Uptown Fresh Market, Nashville." },
      { property: "og:title", content: "Food Menu — Uptown Fresh Market" },
      { property: "og:description", content: "Authentic prepared Mexican food: tacos, burritos, breakfast & more." },
    ],
  }),
  component: MenuPage,
});

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
}

const menuCategories: Record<string, MenuItem[]> = {
  Tacos: [
    { name: "Carne Asada Taco", description: "Grilled steak with onions, cilantro, and salsa verde", price: "$3.49", image: placeholderImage, popular: true },
    { name: "Al Pastor Taco", description: "Marinated pork with pineapple, onion, and cilantro", price: "$3.49", popular: true },
    { name: "Chicken Taco", description: "Seasoned chicken with lettuce, cheese, and pico de gallo", price: "$3.29" },
    { name: "Chorizo Taco", description: "Spiced chorizo with onions and fresh cilantro", price: "$3.29" },
    { name: "Carnitas Taco", description: "Slow-cooked pulled pork with pickled onions", price: "$3.49" },
    { name: "Fish Taco", description: "Crispy battered fish with cabbage slaw and chipotle crema", price: "$3.99" },
  ],
  Burritos: [
    { name: "Super Burrito", description: "Choice of meat, rice, beans, cheese, sour cream, guacamole", price: "$10.99", image: placeholderImage, popular: true },
    { name: "Breakfast Burrito", description: "Eggs, cheese, potatoes, and choice of bacon or chorizo", price: "$8.99", popular: true },
    { name: "Bean & Cheese Burrito", description: "Refried beans, melted cheese, and salsa roja", price: "$6.99" },
    { name: "California Burrito", description: "Carne asada, fries, cheese, sour cream, guacamole", price: "$11.99" },
  ],
  Quesadillas: [
    { name: "Cheese Quesadilla", description: "Flour tortilla with melted Oaxaca cheese", price: "$5.99", image: placeholderImage },
    { name: "Chicken Quesadilla", description: "Grilled chicken with cheese, peppers, and onions", price: "$8.99", popular: true },
    { name: "Steak Quesadilla", description: "Carne asada with cheese and grilled peppers", price: "$9.99" },
  ],
  Breakfast: [
    { name: "Huevos Rancheros", description: "Two eggs on corn tortillas with ranchero sauce and beans", price: "$8.99" },
    { name: "Chilaquiles", description: "Crispy tortilla chips in salsa verde or roja, with eggs and cream", price: "$9.49", popular: true },
    { name: "Breakfast Plate", description: "Eggs any style with rice, beans, and fresh tortillas", price: "$7.99" },
  ],
  Drinks: [
    { name: "Agua de Horchata", description: "Sweet rice milk with cinnamon and vanilla", price: "$3.49", image: placeholderImage, popular: true },
    { name: "Agua de Jamaica", description: "Refreshing hibiscus flower water", price: "$3.49" },
    { name: "Fresh Fruit Smoothie", description: "Mango, strawberry, or mixed tropical fruit", price: "$5.49" },
    { name: "Mexican Coca-Cola", description: "Classic glass bottle Coke with real cane sugar", price: "$2.49" },
  ],
};

function MenuPage() {
  const categories = Object.keys(menuCategories);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Food Menu"
        subtitle="Made fresh daily with authentic recipes and quality ingredients"
      />

      <div className="mt-6">
        <SnapEbtBanner />
      </div>

      <Tabs defaultValue={categories[0]} className="mt-10">
        <TabsList className="flex flex-wrap gap-1 bg-muted p-1">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="text-sm font-medium">
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {menuCategories[cat].map((item) => (
                <Card key={item.name} className="overflow-hidden border-border transition-all hover:shadow-md">
                  {item.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                    </div>
                  )}
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          {item.popular && <Badge className="border-0 bg-accent text-xs text-accent-foreground">Popular</Badge>}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="shrink-0 font-bold text-primary">{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
