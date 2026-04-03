// import { portfolioData } from '#/data'
// Available: portfolioData.personal.name, portfolioData.personal.role,
//            portfolioData.personal.headline, portfolioData.personal.subtitle,

import type { PortfolioData } from "#/data/interfaces/data";

type Props = Pick<PortfolioData, "personal">;

export default function Hero({ personal }: Props) {
  return (
    <section className="mx-auto w-full max-w-270 px-4 pt-20 pb-8">
      <h1 className="text-6xl md:text-[5rem] font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
        Hey, I'm <span className="text-primary">{personal.name}</span>
      </h1>
      <p className="text-2xl md:text-3xl text-primary-foreground font-light max-w-2xl leading-relaxed">{personal.role}</p>
      <p className="text-lg text-primary-foreground mb-6">{personal.headline}</p>
    </section>
  )
}
