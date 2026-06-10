"use client";

import { SectionHeader } from "../shared/SectionHeader";
import { ProcessStep } from "./ProcessStep";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: readonly ProcessStepProps[];
}

const HowItWorksSection = ({ steps }: HowItWorksSectionProps) => {
  return (
    <section className="bg-secondary px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Simple Process"
          title="How It Works"
          description="Getting your cargo shipped is easier than you think"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[50%] hidden w-[40%] border-t-2 border-dashed border-primary/20 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
