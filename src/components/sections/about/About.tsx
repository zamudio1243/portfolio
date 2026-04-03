import { portfolioData } from "#/data/portfolio";

export default function About() {
  const { personal, skillHighlights } = portfolioData;

  return (
    <section id="about" className="mx-auto w-full max-w-270 px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        02 // Perfil
      </p>

      <div className="grid gap-16 md:grid-cols-2 items-start">
        {/* Left column — Bio + Highlights */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">
            Código, arquitectura
            <br />
            &amp; producto.
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            {personal.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {personal.location && (
            <p className="text-sm text-muted-foreground mb-10">
              📍 {personal.location}
            </p>
          )}

          <div className="grid gap-6 sm:grid-cols-3">
            {skillHighlights.map((highlight) => (
              <div key={highlight.title}>
                <h3 className="text-sm font-bold text-foreground mb-1">
                  {highlight.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Image + Skills */}
        <div className="space-y-8">
          <img
            src={personal.profileImage}
            alt={personal.name}
            className="w-full aspect-4/5 rounded-lg border border-border object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />


        </div>
      </div>
    </section>
  );
}
