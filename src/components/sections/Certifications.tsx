import type { Certification } from "#/data/interfaces/data";
import { ArrowRight, Award } from "lucide-react";

type Props = {
  certifications: Certification[];
};

export default function Certifications({ certifications }: Props) {
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
          <div
            key={cert.title}
            className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            {cert.image ? (
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-md"
                style={cert.imageBg ? { backgroundColor: cert.imageBg } : undefined}
              >
                <img
                  src={cert.image}
                  alt={cert.issuer}
                  className="h-7 w-7 object-contain"
                />
              </div>
            ) : (
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <Award className="h-5 w-5 text-primary" />
              </div>
            )}

            <h3 className="text-base font-bold text-foreground mb-1">
              {cert.title}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
              {cert.issuer}
            </p>
            {cert.date && (
              <p className="text-xs text-muted-foreground mb-4">
                {cert.date}
                {cert.expiresDate && ` · Expira ${cert.expiresDate}`}
              </p>
            )}

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:gap-2.5"
              >
                Ver certificado
                <ArrowRight className="h-3 w-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
