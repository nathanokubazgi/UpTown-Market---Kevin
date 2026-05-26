import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Tag, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { SnapEbtBanner } from "@/components/SnapEbtBanner";
import orderOnlineImage from "@/assets/order-online-real-v2.jpg";
import deliCounterImage from "@/assets/deli-counter-hot-food.png";
import foodMenuImage from "@/assets/food-menu-home.png";
import frontCoverImage from "@/assets/uptown-front-cover.png";
import groceryAisleImage from "@/assets/grocery-aisle-real.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uptown Fresh Market — Nashville's Neighborhood Grocery" },
      { name: "description", content: "Fresh groceries, prepared Mexican food, and weekly specials at Uptown Fresh Market in Nashville, TN. SNAP/EBT accepted. Order online or visit us today!" },
      { property: "og:title", content: "Uptown Fresh Market — Nashville's Neighborhood Grocery" },
      { property: "og:description", content: "Fresh groceries, prepared Mexican food, and weekly specials. SNAP/EBT accepted." },
    ],
  }),
  component: HomePage,
});

const weeklySpecials = [
  { name: "Taco Birria", description: "Corn tortilla with birria, cilantro, onions, and consomé", price: "$3.99", badge: "Fan Favorite" },
  { name: "Burrito (Build Your Own)", description: "Choice of meat, rice & beans, and mozzarella cheese", price: "$11.99", badge: "Popular" },
  { name: "Smash Burger", description: "Smashed beef patties, American cheese, pickles & house sauce", price: "$10.99", badge: "Hot Deal" },
  { name: "Strawberry Banana Smoothie", description: "Strawberries & bananas blended with yogurt and orange juice", price: "$9.99", badge: "Fresh" },
];

const quickLinks = [
  { to: "/menu", label: "Food Menu", description: "Tacos, burritos, breakfast & more", icon: "🌮", image: foodMenuImage },
  { to: "/grocery", label: "Grocery", description: "Fresh produce, meats & specialty items", icon: "🥑", image: groceryAisleImage },
  { to: "/order", label: "Order Online", description: "UberEats, DoorDash & more", icon: "📱", image: orderOnlineImage },
] as const;

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={frontCoverImage} alt="Uptown Fresh Market storefront sign" className="h-full w-full object-cover" width={1264} height={716} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-xl">
            <Badge className="mb-4 bg-accent text-accent-foreground border-0">Nashville's Favorite Market</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Fresh Food, Every Day
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Your neighborhood grocery and taqueria. Fresh produce, quality meats, and authentic prepared foods — all under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  View Menu <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/order">
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  Order Online
                </Button>
              </Link>
            </div>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-1.5 text-sm text-primary-foreground backdrop-blur">
                <CreditCard className="h-4 w-4" />
                <span className="font-medium">SNAP / EBT Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNAP Banner */}
      <div className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8">
        <SnapEbtBanner />
      </div>

      {/* Quick Links */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="What We Offer" subtitle="From fresh groceries to made-to-order meals" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <Card className="group overflow-hidden border-border transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={link.image}
                    alt={link.label}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label={link.label}>{link.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{link.label}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Deli Counter Feature */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto">
            <img
              src={deliCounterImage}
              alt="Uptown Fresh Market deli counter with hot food, fresh juices, imported sodas, and the Tacos & Mas menu board"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <Badge variant="secondary" className="mb-3 w-fit">Visit the Deli</Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Hot Food, Fresh Juices & More</h2>
            <p className="mt-4 text-muted-foreground">
              Step up to our deli counter for tacos, burritos, burgers, breakfast plates, and authentic Mexican platillos — made fresh daily. Pair your meal with a fresh-pressed jugo or pick from our wall of imported sodas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/menu">
                <Button className="gap-2">View Full Menu <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link to="/order">
                <Button variant="outline">Order Online</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Specials */}
      <section className="bg-market-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Weekly Specials" subtitle="Fresh deals every week — don't miss out!" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {weeklySpecials.map((special) => (
              <Card key={special.name} className="border-border bg-card transition-all hover:shadow-md">
                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-3">{special.badge}</Badge>
                  <h3 className="font-semibold text-foreground">{special.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{special.description}</p>
                  <p className="mt-3 text-xl font-bold text-primary">{special.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Why Uptown Fresh?" subtitle="Nashville trusts us for quality and value" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Star className="h-6 w-6" />, title: "4.8★ Rated", desc: "Hundreds of 5-star reviews from local shoppers" },
            { icon: <Tag className="h-6 w-6" />, title: "Best Prices", desc: "Affordable everyday prices on fresh produce and meats" },
            { icon: <Truck className="h-6 w-6" />, title: "Delivery Available", desc: "Order via UberEats, DoorDash, or GrubHub" },
            { icon: <CreditCard className="h-6 w-6" />, title: "SNAP/EBT Accepted", desc: "We accept SNAP, EBT, and all major payment methods" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to Order?</h2>
          <p className="mt-3 text-lg text-primary-foreground/80">
            Skip the line — order online for pickup or delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/order">
              <Button size="lg" variant="secondary" className="gap-2">
                Order Online <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
