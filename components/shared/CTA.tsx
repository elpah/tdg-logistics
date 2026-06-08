import { QuoteButton } from "../home/CtaButton";
type CTAProps = {
  title: string;
  paragraph: string;
};
const CTA = ({ title, paragraph }: CTAProps) => {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center shadow-xl md:px-16">
          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-md md:text-lg leading-relaxed text-primary-foreground/80">
            {paragraph}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <QuoteButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
