import type { Certification } from "#/data/interfaces/data";
import { getCertificationTitle } from "#/data/i18n-helpers";
import * as m from "@/paraglide/messages.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight, Award } from "lucide-react";

type Props = {
  certification: Certification;
};

export function CertificationCard({ certification: cert }: Props) {
  return (
    <Card className="transition-colors hover:ring-primary/40">
      <CardHeader>
        {cert.image ? (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-md"
            style={cert.imageBg ? { backgroundColor: cert.imageBg } : undefined}
          >
            <img
              src={cert.image}
              alt={cert.issuer}
              className="h-7 w-7 object-contain"
            />
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
            <Award className="h-5 w-5 text-primary" />
          </div>
        )}
        <CardTitle className="font-bold">{getCertificationTitle(cert.id)}</CardTitle>
        <CardDescription className="text-xs font-medium uppercase tracking-wider">
          {cert.issuer}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        {cert.date && (
          <p className="text-xs text-muted-foreground mb-3">
            {cert.date}
            {cert.expiresDate && ` · ${m.cert_expires({ date: cert.expiresDate })}`}
          </p>
        )}

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:gap-2.5"
          >
            {m.cert_view()}
            <ArrowRight className="h-3 w-3" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}
