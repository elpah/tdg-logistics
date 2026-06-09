import Image from "next/image";
import {
  Ship,
  Plane,
  Package,
  FileCheck,
  Warehouse,
  Truck,
  Clock,
  CheckCircle,
} from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import CTA from "@/components/shared/CTA";

const services = [
  {
    id: "sea-freight",
    icon: Ship,
    title: "Sea Freight",
    description:
      "Our ocean freight services offer cost-effective solutions for shipping large volumes of cargo worldwide. We work with major shipping lines to provide flexible options including Full Container Load (FCL) and Less than Container Load (LCL).",
    features: [
      "Full Container Load (FCL) shipping",
      "Less than Container Load (LCL) options",
      "Door-to-door and port-to-port services",
      "Refrigerated container options",
      "Real-time container tracking",
    ],
    image:
      "https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969761/sea-freight_trlk3q.avif",
  },
  {
    id: "air-freight",
    icon: Plane,
    title: "Air Freight",
    description:
      "When speed is essential, our air freight services deliver. We partner with leading airlines to ensure your time-sensitive cargo reaches its destination quickly and safely.",
    features: [
      "Express and standard air cargo options",
      "Dangerous goods handling",
      "Temperature-controlled shipments",
      "Charter services for urgent cargo",
      "Airport-to-airport and door-to-door",
    ],
    image:
      "https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969758/air-freight_onsh93.avif",
  },
  {
    id: "consolidation",
    icon: Package,
    title: "Cargo Consolidation",
    description:
      "Optimize your shipping costs by combining smaller shipments with other cargo. Our consolidation services help you benefit from bulk shipping rates without needing a full container.",
    features: [
      "Cost savings through shared shipping",
      "Regular consolidation schedules",
      "Secure cargo handling",
      "Flexible pickup and delivery",
      "Detailed shipment documentation",
    ],
    image:
      "https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969764/warehouse_lcc4yg.avif",
  },
  {
    id: "customs",
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "Navigate complex customs regulations with ease. Our experienced customs brokers handle all documentation and compliance requirements to ensure smooth border crossings.",
    features: [
      "Import and export clearance",
      "Tariff classification",
      "Duty and tax calculation",
      "Documentation preparation",
      "Compliance consulting",
    ],
    image:
      "https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969760/hero-port_g2x3i5.avif",
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehousing & Delivery",
    description:
      "From secure storage to last-mile delivery, we provide comprehensive warehousing and distribution services to keep your supply chain running smoothly.",
    features: [
      "Short and long-term storage",
      "Inventory management",
      "Pick and pack services",
      "Last-mile delivery",
      "Home delivery options",
    ],
    image:
      "https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969759/fleet_rlsi9z.avif",
  },
];
const timelines = [
  { route: "China to Ghana (Air Freight)", duration: "5-10 days" },
  { route: "China to Ghana (Sea Freight)", duration: "30-45 days" },
  { route: "Express Air Cargo", duration: "3-7 days" },
  { route: "Consolidated Air Freight", duration: "7-12 days" },
  { route: "Less Container Load (LCL)", duration: "35-50 days" },
  { route: "Full Container Load (FCL)", duration: "30-45 days" },
];

const goodsTypes = [
  "Electronics & Technology",
  "Textiles & Garments",
  "Machinery & Equipment",
  "Food & Perishables",
  "Automotive Parts",
  "Pharmaceuticals",
  "Consumer Goods",
  "Raw Materials",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        header="Our Services"
        title="Reliable Logistics Services"
        paragraph=" From sea and air freight to customs clearance and last-mile
              delivery, we offer end-to-end services tailored to your needs."
        image="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969714/services_m9o094.avif"
      />

      {/* Services List */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="size-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative h-87.5 rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping Timelines */}
      <section className="py-20 px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-medium mb-2">
                Shipping Timelines
              </p>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Estimated Transit Times
              </h2>
              <p className="text-muted-foreground mb-8">
                Transit times vary based on origin, destination, and shipping
                method. Below are typical estimates for common routes.
              </p>
              <div className="space-y-4">
                {timelines.map((item) => (
                  <div
                    key={item.route}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                  >
                    <span className="font-medium text-foreground">
                      {item.route}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-2">
                      <Clock className="size-4" />
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-primary font-medium mb-2">Types of Goods</p>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What We Handle
              </h2>
              <p className="text-muted-foreground mb-8">
                We have experience shipping a wide range of products. Our team
                ensures proper handling for each cargo type.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {goodsTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border"
                  >
                    <Truck className="size-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Need a Custom Solution?"
        paragraph="Every business is unique. Contact us to discuss your specific
            logistics requirements."
      />
    </main>
  );
}
