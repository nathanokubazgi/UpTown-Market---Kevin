import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { SnapEbtBanner } from "@/components/SnapEbtBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import empanadasImage from "@/assets/dd-food-1.jpg";
import smoothieImage from "@/assets/dd-food-2.jpg";
import friesImage from "@/assets/dd-food-3.jpg";
import tacosImage from "@/assets/dd-food-4.jpg";
import tortaImage from "@/assets/dd-food-5.jpg";
import sandwichImage from "@/assets/dd-food-6.jpg";
import breakfastImage from "@/assets/dd-food-7.jpg";
import tacoPlateImage from "@/assets/dd-food-8.jpg";
import burritoImage from "@/assets/dd-food-9.jpg";
import cheesecakeImage from "@/assets/dd-food-10.jpg";
import foodMenuBoardImage from "@/assets/food-menu-board.png";

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
  Featured: [
    { name: "Burrito (Build your Own)", description: "Choice of meat, rice & beans, and mozzarella cheese.", price: "$11.99", image: burritoImage, popular: true },
    { name: "Breakfast Taco", description: "Breakfast-style taco made fresh to order.", price: "$10.52", image: tacosImage },
    { name: "Morning Burrito", description: "A hearty morning burrito from Uptown Fresh Market.", price: "$11.69", image: burritoImage },
    { name: "Quesadilla (Build your Own)", description: "Choice of meat and mozzarella cheese.", price: "$11.99", popular: true },
    { name: "Torta (Build your Own)", description: "Choice of meat, lettuce, tomatoes, avocado, pickled jalapeño, mayo, and mozzarella cheese.", price: "$11.99", image: tortaImage },
    { name: "2pc Colombian Empanadas", description: "Two Colombian empanadas with your choice of beef or chicken filling.", price: "$6.99", image: empanadasImage },
  ],
  Tacos: [
    { name: "Steak Fajita Taco", description: "Marinated skirt steak with sautéed onions and peppers, topped with pico de gallo and jack cheese in a flour tortilla.", price: "$4.99", image: tacosImage, popular: true },
    { name: "Taco Birria", description: "Corn tortilla with birria, cilantro, onions, and consomé.", price: "$3.99", image: tacoPlateImage, popular: true },
    { name: "Hot Chicken Taco", description: "Crispy fried chicken with slaw, pico de gallo, and spicy mayo in a soft tortilla.", price: "$3.99" },
    { name: "Lettuce Tacos", description: "Fresh lettuce tacos prepared to order.", price: "$9.99" },
    { name: "Taco (Build your Own)", description: "Choice of chicken, steak, pastor, chorizo, barbacoa, carnitas, fish, or shrimp.", price: "$2.99", image: tacosImage },
    { name: "Mango Shrimp Taco", description: "Grilled shrimp, fresh mango salsa, shredded cabbage, cilantro, and lime on a corn tortilla.", price: "$4.99" },
  ],
  Burritos: [
    { name: "Burrito (Build your Own)", description: "Choice of meat, rice & beans, and mozzarella cheese.", price: "$11.99", image: burritoImage, popular: true },
  ],
  Quesadillas: [
    { name: "Quesadilla (Build your Own)", description: "Choice of meat and mozzarella cheese.", price: "$11.99", popular: true },
  ],
  Tortas: [
    { name: "Torta Cubana", description: "Fried chicken steak, chorizo, pork ham, smoked pork, bacon, hot dog sausage, two fried eggs, beans, queso fresco, American cheese, and mozzarella.", price: "$18.71", image: tortaImage, popular: true },
    { name: "Torta (Build your Own)", description: "Choice of meat, lettuce, tomatoes, avocado, pickled jalapeño, mayo, and mozzarella cheese.", price: "$11.99", image: tortaImage },
    { name: "Torta Hawaiiana", description: "Turkey ham, pork ham, fried eggs, beans, lettuce, tomato, jalapeño, avocado, pineapple, queso fresco, and mozzarella cheese.", price: "$18.71" },
  ],
  Sandwiches: [
    { name: "Chicken Cheesesteak Combo", description: "Chicken, grilled green pepper, pepper jack cheese, and onions. Combo includes fries and a can drink.", price: "$12.99", image: sandwichImage, popular: true },
    { name: "Philly Cheesesteak Sandwich Combo", description: "Steak with grilled green pepper, onions, and pepper jack cheese. Comes with fries and a can drink.", price: "$12.99" },
    { name: "Uptown Chopped Cheese Combo", description: "Ground beef, peppers, red onions, American cheese, lettuce, tomato, and chipotle mayo on hero bread.", price: "$12.99" },
    { name: "Chicken Cheesesteak", description: "Chicken, green pepper, onions, and pepper jack cheese in a sandwich.", price: "$9.99" },
    { name: "Grilled Chicken Sandwich", description: "Grilled chicken breast, American cheese, lettuce, tomatoes, mayo, and pickled red onion.", price: "$11.99" },
    { name: "Philly Cheesesteak Sandwich", description: "Steak with grilled green pepper, pepper jack cheese, and onions.", price: "$9.99" },
    { name: "Turkey Avocado Egg Sandwich", description: "Smoked turkey, avocado, and scrambled egg on toasted multi-grain bread with lettuce, tomato, and mayonnaise.", price: "$9.99" },
    { name: "Uptown Chicken Sandwich", description: "Breaded chicken breast, bacon, jalapeño, mozzarella cheese, and mayo.", price: "$11.99" },
  ],
  Burgers: [
    { name: "Smash Burger", description: "Smashed beef patties with American cheese, pickles, onions, tomato, lettuce, and house sauce on a grilled bun.", price: "$10.99", popular: true },
    { name: "Chicago Hotdog", description: "Hotdog sausage with caramelized onions, grilled green pepper, mustard, ketchup, and mayo.", price: "$9.99" },
    { name: "Mexican Bacon Hot Dog", description: "Bacon-wrapped beef hot dog with jalapeños, cheddar cheese, and avocado on a grilled bun.", price: "$10.99" },
    { name: "Uptown Classic Burger", description: "Beef patty, American cheese, lettuce, tomatoes, mayo, and pickled red onion.", price: "$11.99" },
    { name: "BBQ Burger", description: "Pulled pork thigh, mayo, lettuce, and tomato with optional fries on the side.", price: "$10.52" },
  ],
  Breakfast: [
    { name: "Uptown Hot Chicken & Waffle", description: "Crispy hot chicken paired with a house-made waffle and maple syrup.", price: "$14.99", popular: true },
    { name: "Uptown Classic Breakfast", description: "Three pancakes, bacon, and scrambled egg.", price: "$12.99", image: breakfastImage },
    { name: "Sausage, Bacon, Egg & Cheese Biscuit", description: "Buttermilk biscuit with fried egg, cheddar cheese, pork sausage, and smoked bacon.", price: "$7.99" },
    { name: "Simple Baleada", description: "Traditional Honduran flour tortilla filled with beans, Honduran cream, and cheese.", price: "$5.99" },
    { name: "Omelette", description: "Choice of meat, bell peppers, onions, tomatoes, mozzarella cheese, and a slice of toast.", price: "$15.20" },
    { name: "Special Baleada", description: "Warm flour tortilla with beans, cheese, eggs, and choice of steak or chicken.", price: "$8.99" },
    { name: "Super Waffle", description: "Homemade Belgian waffle topped with powdered sugar and fresh fruit.", price: "$12.99" },
    { name: "Uptown Bagel", description: "Toasted bagel with cream cheese, smoked salmon, tomato, red onion, and capers.", price: "$7.99" },
  ],
  Sides: [
    { name: "2pc Colombian Empanadas", description: "Two Colombian empanadas with your choice of beef or chicken filling.", price: "$6.99", image: empanadasImage, popular: true },
    { name: "Rice", description: "Flavorful rice prepared as the perfect side for any meal.", price: "$4.67" },
    { name: "Fries", description: "Crispy golden potato strips, seasoned and fried fresh.", price: "$3.50", image: friesImage },
    { name: "Green Salsa", description: "Tomatillos, jalapeños, cilantro, onions, lime juice, and garlic.", price: "$3.50" },
    { name: "Red Salsa", description: "Tomatoes, onions, and spicy chiles blended into a classic salsa.", price: "$3.50" },
    { name: "Beans", description: "Freshly simmered, seasoned beans.", price: "$4.67" },
    { name: "Guacamole", description: "Fresh avocado dip seasoned with lime and cilantro.", price: "$4.67" },
    { name: "Side Salad", description: "Crisp, refreshing green salad.", price: "$4.67" },
  ],
  Desserts: [
    { name: "Cheese Cake", description: "Smooth, rich, and creamy cheesecake.", price: "$5.84", image: cheesecakeImage, popular: true },
    { name: "Red Velvet Cake", description: "Red velvet cake with cream cheese frosting and subtle cocoa flavor.", price: "$5.84" },
  ],
  Drinks: [
    { name: "Sodas", description: "A selection of carbonated beverages including cola, root beer, and orange soda.", price: "$3.50" },
    { name: "Jumex", description: "Fruit juice available in assorted flavors.", price: "$1.98" },
    { name: "Aquas", description: "Still water for simple, refreshing hydration.", price: "$4.10" },
    { name: "Coca Lata", description: "Canned Coca-Cola with the iconic crisp taste.", price: "$1.86" },
    { name: "Bottled Water", description: "Pure and refreshing bottled water.", price: "$1.76" },
  ],
  Platters: [
    { name: "Taco Birria Plate", description: "Braised beef birria tacos served with cilantro, onions, and a side of consommé.", price: "$17.99", image: tacoPlateImage, popular: true },
    { name: "Fried Tilapia", description: "Whole fried tilapia served with rice, beans, and salad.", price: "$21.05" },
    { name: "Grilled Chicken Salad", description: "Grilled chicken, lettuce, tomato, cucumber, spinach, and avocado.", price: "$11.69" },
    { name: "Carne Asada", description: "Beef chuck roll with rice, beans, guacamole, and pico de gallo.", price: "$19.88" },
    { name: "Pollo con Tajadas", description: "Fried chicken, fried green plantains, shredded cabbage, tomato sauce, pickled vegetables, pink sauce, and chismol.", price: "$19.88" },
  ],
  "Fresh Juices": [
    { name: "Smoothie — Strawberry Banana", description: "Strawberries and bananas blended with yogurt and orange juice.", price: "$9.99", image: smoothieImage, popular: true },
    { name: "Green Juice", description: "Lemon, spinach, cucumber, ginger, and green apple blended fresh.", price: "$9.99" },
    { name: "Smoothie — Orange Piña", description: "Fresh orange juice and pineapple blended with tropical fruit.", price: "$9.99" },
    { name: "Smoothie — Berries", description: "Strawberries, blueberries, and raspberries blended with orange juice.", price: "$9.99" },
    { name: "Choose Your Own Juice", description: "Choose up to two: banana, strawberry, papaya, melon, pineapple, mango, blueberry, blackberry, orange, lemon, green apple, or ginger.", price: "$9.99" },
    { name: "Fresh Squeezed Orange Juice", description: "Freshly squeezed orange juice with natural pulp.", price: "$9.99" },
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

      <div className="mt-10 overflow-hidden rounded-lg border border-border">
        <img
          src={foodMenuBoardImage}
          alt="Uptown Fresh Market food menu counter and menu boards"
          className="h-auto w-full object-cover"
          width={1708}
          height={1284}
        />
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
