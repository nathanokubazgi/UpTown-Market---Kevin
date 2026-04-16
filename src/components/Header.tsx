import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-uptown.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/grocery", label: "Grocery" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/order", label: "Order Online" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Uptown Fresh Market Home">
          <img src={logoImage} alt="Uptown Fresh Market" className="h-10 w-auto" width={160} height={64} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="tel:+16155551234" aria-label="Call us">
            <Button variant="outline" size="sm" className="gap-1.5">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">(615) 555-1234</span>
            </Button>
          </a>
          <Link to="/order">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Order Now
            </Button>
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "block rounded-md px-3 py-2.5 text-sm font-medium bg-primary/10 text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-2">
            <a href="tel:+16155551234" className="flex-1">
              <Button variant="outline" size="sm" className="w-full gap-1.5">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
            <Link to="/order" className="flex-1" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Order Now
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
