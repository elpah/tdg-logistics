import HeroImage from "@/components/shared/HeroImage";

type HeroProps = {
  header?: string;
  title: string;
  paragraph: string;
  image?: string;
};

export default function HeroSection({
  header,
  title,
  paragraph,
  image,
}: HeroProps) {
  return (
    <section className="relative h-150 overflow-hidden mt-20 lg:mt-22">
      {image && (
        <HeroImage
          src={image}
          alt="Global shipping and logistics operations"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/30" />

      <div className="relative z-10 flex h-full items-center px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl ">
          <div className="max-w-3xl ">
            {header && (
              <p className="inline-flex rounded-lg bg-primary-foreground/10 px-4 py-1 text-xs md:text-sm md:py-2 font-medium text-primary-foreground backdrop-blur-sm">
                {header}
              </p>
            )}

            <h1 className="mt-6 font-extrabold tracking-tight text-primary-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.2]">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
