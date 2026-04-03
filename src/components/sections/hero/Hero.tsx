import { portfolioData } from "#/data/portfolio";


export default function Hero() {
  const { personal } = portfolioData;
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
