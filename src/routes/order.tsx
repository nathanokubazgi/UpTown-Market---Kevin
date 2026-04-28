import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SnapEbtBanner } from "@/components/SnapEbtBanner";
import locallyDelivrdIcon from "@/assets/locally-delivrd-icon.png";
import toastTabIcon from "@/assets/toast-tab-icon.png";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — Uptown Fresh Market" },
      { name: "description", content: "Order from Uptown Fresh Market Nashville online. Available on UberEats, DoorDash, Locally Delivrd, and Toast Tab for delivery or pickup." },
      { property: "og:title", content: "Order Online — Uptown Fresh Market" },
      { property: "og:description", content: "Order for delivery or pickup via UberEats, DoorDash, Locally Delivrd & more." },
    ],
  }),
  component: OrderPage,
});

const platforms = [
  { name: "UberEats", color: "bg-[#06C167]", textColor: "text-[#ffffff]", url: "https://www.ubereats.com/store/uptown-fresh-market/xuvU24kMT1286qYy23ViKw?utm_campaign=CM2508149-search-free-nonbrand-google-pas-grocohol_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas-grocohol&rwg_token=AFd1xnHk5VdNwhFqlQtideQU6hqZNwkI0_B0QRINsPeGgj0Y0PVxdLANMSHfny-LaKGaaaz5BMzex0u6H6-ifURWRLWlqx-vBDwb68zGIxx-1gx6yZ98WSo%3D", description: "Fast delivery, real-time tracking" },
  { name: "DoorDash", color: "bg-[#FF3008]", textColor: "text-[#ffffff]", url: "https://www.doordash.com/store/uptown-fresh-market-nashville-24619430/18661149/?rwg_token=AFd1xnGETMHNqW5JFcyGZ21EV4op2xFonXoS-AiAQ7WGiRsmpVSXfhlgGkimEpJ_nb_EPd_UTWlbgODH6V6FhbYefXtGkV76miBXoZ-s2VLnXGpuuwljgSI=&utm_campaign=gpa", description: "DashPass eligible, quick delivery" },
  { name: "Locally Delivrd", color: "bg-primary", textColor: "text-primary-foreground", icon: locallyDelivrdIcon, url: "https://locallydelivrd.com/place/420574/?rwg_token=AFd1xnFPc9BxW5wXAR8QQRDhP2rV36DhhQqvdE3TCLk3UzuzDjCePmxv921lm7LjwH97TbYDuYOcml-99EdIrVbcJqADX2OPET-G42hbF8NSuzq5-5ohrl4%3D", description: "Local delivery from Uptown Fresh Market" },
  { name: "Toast Tab", color: "bg-secondary", textColor: "text-secondary-foreground", icon: toastTabIcon, url: "https://order.toasttab.com/online/uptown-fresh-market-3901-apache-trail-antioch-tn-37013-vhlma?diningOption=takeout&rwg_token=AFd1xnGn6QQGfBb2arjdBlE6CIMQ4ND12GkTwGxufDAkB7KHQS9pn2y69JhB_wQyv_29Y3cR_X_0z3Cy6169Jf8BdrkmJVCHiXMe0pSSPAqM4jujXV9K4Rs%3D", description: "Order ahead for pickup" },
];

function OrderPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Order Online"
        subtitle="Get Uptown Fresh Market delivered to your door or ready for pickup"
      />

      <div className="mt-6">
        <SnapEbtBanner />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {platforms.map((platform) => (
          <Card key={platform.name} className="border-border transition-all hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className={`${platform.color} ${platform.textColor} mb-4 rounded-xl px-6 py-3 text-xl font-bold`}>
                {platform.icon ? <img src={platform.icon} alt="" className="mr-2 inline-block h-7 w-7 rounded-sm align-middle" loading="lazy" /> : null}
                {platform.name}
              </div>
              <p className="text-sm text-muted-foreground">{platform.description}</p>
              <a href={platform.url} target="_blank" rel="noopener noreferrer" className="mt-6 w-full">
                <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  Order on {platform.name} <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-market-cream p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">Prefer to Call?</h3>
        <p className="mt-2 text-muted-foreground">Call ahead for pickup orders and large catering requests</p>
        <a href="tel:+16153317405" className="mt-4 inline-block">
          <Button size="lg" variant="outline" className="gap-2">
            📞 Call (615) 331-7405
          </Button>
        </a>
      </div>
    </div>
  );
}
