import { Link } from "@tantml/react-router";
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Uptown Fresh Market</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Nashville's favorite neighborhood grocery and prepared foods market. Fresh, affordable, and community-driven.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {[
                { to: "/menu", label: "Food Menu" },
                { to: "/grocery", label: "Grocery" },
                { to: "/gallery", label: "Gallery" },
                { to: "/reviews", label: "Reviews" },
                { to: "/order", label: "Order Online" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>4501 Clarksville Pike, Nashville, TN 37218</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+16155551234" className="hover:text-primary">(615) 555-1234</a>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Mon–Sat: 7AM–9PM<br />Sun: 8AM–8PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">We Accept</h4>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-primary">
                <span className="font-semibold">✓ SNAP / EBT</span>
              </div>
              <p>Cash, Debit, Credit, Apple Pay, Google Pay</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Uptown Fresh Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
