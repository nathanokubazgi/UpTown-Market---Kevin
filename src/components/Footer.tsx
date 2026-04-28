import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import logoImage from "@/assets/logo-uptown.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logoImage} alt="Uptown Fresh Market" className="h-16 w-auto sm:h-20" loading="lazy" width={256} height={102} />
            <p className="mt-3 text-sm text-muted-foreground">
              Nashville's favorite neighborhood grocery and prepared foods market. Fresh, affordable, and community-driven.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/uptownfreshmarket/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.yelp.com/biz/uptown-fresh-market-antioch" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10.208 0c-.787 0-1.417.63-1.417 1.418v8.16c0 .452.236.845.629 1.06.393.216.866.197 1.24-.04l2.458-1.554c.335-.216.531-.57.531-.964 0-.118-.02-.236-.059-.354L11.566 1.005C11.389.413 10.857 0 10.208 0zm6.604 7.095c-.393 0-.767.177-1.003.511l-2.398 3.227c-.236.314-.295.727-.137 1.102.157.374.491.629.904.687l5.9.905c.08.02.158.02.237.02.57 0 1.063-.393 1.2-.944l.688-2.754c.177-.708-.275-1.416-.984-1.554l-4.171-1.16a1.284 1.284 0 00-.236-.04zm-10.5 4.879c-.158 0-.315.02-.472.079L.829 13.96c-.669.256-1.003 1.004-.747 1.672l.924 2.42c.197.511.689.825 1.2.825.177 0 .354-.04.512-.099l4.663-1.849c.393-.157.668-.511.728-.924.058-.413-.118-.826-.453-1.082l-2.615-2.655a1.28 1.28 0 00-.728-.294zm7.08 2.616c-.354 0-.69.157-.925.433-.275.334-.354.806-.196 1.219l2.143 5.407c.197.492.669.807 1.18.807.157 0 .315-.02.472-.08l2.557-1.003c.65-.255.984-.983.767-1.652l-1.77-4.978c-.137-.413-.491-.728-.924-.826l-3.05-.59a1.27 1.27 0 00-.255-.02zm-3.936 1.849c-.413 0-.806.197-1.043.57l-3.128 4.84c-.393.61-.216 1.416.394 1.809l2.281 1.475c.217.138.453.197.689.197.433 0 .846-.216 1.082-.59l2.95-4.565c.216-.334.236-.767.06-1.12-.177-.375-.531-.63-.925-.69l-2.182-.313a1.536 1.536 0 00-.178-.02z"/></svg>
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
                <span>3901 Apache Trl, Antioch, TN 37013</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+16153317405" className="hover:text-primary">(615) 331-7405</a>
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
