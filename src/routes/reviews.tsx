import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Uptown Fresh Market" },
      { name: "description", content: "Read verified customer reviews for Uptown Fresh Market Nashville. See what our community says about our fresh groceries and prepared foods." },
      { property: "og:title", content: "Customer Reviews — Uptown Fresh Market" },
      { property: "og:description", content: "See what Nashville says about our fresh groceries and prepared foods." },
    ],
  }),
  component: ReviewsPage,
});

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  { name: "Maria G.", rating: 5, text: "Best tacos in Nashville! The carne asada is incredible and the produce is always fresh. My family shops here every week.", date: "2025-04-10" },
  { name: "James T.", rating: 5, text: "Amazing store! The butcher section has quality cuts at great prices. The staff is always friendly and helpful.", date: "2025-04-08" },
  { name: "Sophia R.", rating: 4, text: "Love the bakery section! The conchas and bolillos taste like they're straight from Mexico. Only wish they opened a bit earlier.", date: "2025-04-05" },
  { name: "Carlos M.", rating: 5, text: "This is my go-to market. The SNAP/EBT acceptance makes it accessible for everyone. Great community market.", date: "2025-04-03" },
  { name: "Ashley W.", rating: 5, text: "The breakfast burritos are HUGE and so good. Perfect grab-and-go option. Also love the fresh fruit agua frescas.", date: "2025-03-30" },
  { name: "David L.", rating: 4, text: "Great selection of specialty items you can't find elsewhere. Dried chiles, mole paste, fresh nopales — they have it all.", date: "2025-03-28" },
  { name: "Patricia H.", rating: 5, text: "The prepared food section is fantastic. Everything tastes homemade and authentic. The chilaquiles are my favorite!", date: "2025-03-25" },
  { name: "Roberto F.", rating: 5, text: "Finally a real Mexican market in Nashville! Reminds me of shopping back home. Fresh tortillas made daily.", date: "2025-03-22" },
  { name: "Keisha B.", rating: 4, text: "Clean store, friendly staff, affordable prices. The produce quality is way better than the big chain stores nearby.", date: "2025-03-20" },
  { name: "Michael S.", rating: 5, text: "Ordered through DoorDash and the food arrived fresh and delicious. The super burrito is absolutely loaded!", date: "2025-03-18" },
  { name: "Linda C.", rating: 5, text: "I bring visitors here to show them real Nashville food. Everyone always leaves impressed. A true gem!", date: "2025-03-15" },
  { name: "Anthony P.", rating: 4, text: "Good meat selection and fair prices. The chorizo here is the best I've had. Would love to see more seafood options.", date: "2025-03-12" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}

function ReviewsPage() {
  const [sortBy, setSortBy] = useState<string>("newest");

  const sorted = [...reviews].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Customer Reviews"
        subtitle="See what Nashville says about Uptown Fresh Market"
      />

      {/* Summary */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-foreground">{avg}</span>
          <div>
            <StarRating rating={Math.round(Number(avg))} />
            <p className="text-sm text-muted-foreground">{reviews.length} verified reviews</p>
          </div>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="highest">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((review, i) => (
          <Card key={i} className="border-border">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Share */}
      <div className="mt-12 rounded-lg bg-market-cream p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground">Share Your Experience</h3>
        <p className="mt-1 text-sm text-muted-foreground">Help others discover Uptown Fresh Market</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://uptownfreshmarket.com")}`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">Share on Facebook</Button>
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent("https://uptownfreshmarket.com")}&text=${encodeURIComponent("Check out Uptown Fresh Market in Nashville!")}`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">Share on Twitter</Button>
          </a>
          <a href={`https://wa.me/?text=${encodeURIComponent("Check out Uptown Fresh Market in Nashville! https://uptownfreshmarket.com")}`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">Share on WhatsApp</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
