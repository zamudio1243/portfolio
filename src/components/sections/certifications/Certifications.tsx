import { portfolioData } from "#/data/portfolio";
import { CertificationCard } from "./CertificationCard";

export default function Certifications() {
  const { certifications } = portfolioData;
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="mx-auto w-full max-w-270 px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        04 // Credenciales
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-foreground mb-12">
        Certificaciones
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} certification={cert} />
        ))}
      </div>
    </section>
  );
}
