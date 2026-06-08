import React from "react";

type HeroProps = {
  header: string;
  title: string;
  paragraph: string;
};
const HeroSection = ({ header, title, paragraph }: HeroProps) => {
  return (
    <section className="px-6 pb-20 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-primary">{header}</p>

          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
