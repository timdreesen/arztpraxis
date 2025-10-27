export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-3xl space-y-6 p-6 text-gray-800">
        <h1 className="text-3xl font-bold">Impressum</h1>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>
            Jens Dreesen
            <br />
            Allgemeinarzt
            <br />
            Strandallee 97
            <br />
            23669 Timmendorfer Strand
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href="tel:+4945034444" className="text-blue-600 hover:underline">
              04503 4444
            </a>
            <br />
            Telefax: 04503 880530
            <br />
            E-Mail:{" "}
            <a
              href="mailto:jdreesen4444@gmail.com"
              className="text-blue-600 hover:underline"
            >
              jdreesen4444@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            DE219511829
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Aufsichtsbehörde</h2>
          <p>
            Kassenärztliche Vereinigung Schleswig-Holstein
            <br />
            Bismarckallee 1 – 6, 23795 Bad Segeberg
            <br />
            <a
              href="https://www.kvsh.de/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://www.kvsh.de/
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <p>
            <strong>Berufsbezeichnung:</strong> Arzt
          </p>
          <p>
            <strong>Zuständige Kammer:</strong> Ärztekammer Schleswig-Holstein,
            Körperschaft des öffentlichen Rechts
            <br />
            Bismarckallee 8 – 12, 23795 Bad Segeberg
          </p>
          <p>
            <strong>Verliehen in:</strong> Deutschland
          </p>
          <p>
            Es gelten folgende berufsrechtliche Regelungen:
            <br />
            <a
              href="https://www.aeksh.de/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Berufsordnung der Ärztekammer Schleswig-Holstein
            </a>
            <br />
            <a
              href="http://www.gesetze-rechtsprechung.sh.juris.de/jportal/?quelle=jlink&query=HeilBerG%20SH&psml=bsshoprod.psml&max=true&aiz=true"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Heilberufekammergesetz
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            Angaben zur Berufshaftpflichtversicherung
          </h2>
          <p>
            <strong>Name und Sitz des Versicherers:</strong>
            <br />
            Württembergische Versicherung
            <br />
            Gutenbergstraße 30
            <br />
            70176 Stuttgart
          </p>
          <p>
            <strong>Geltungsraum der Versicherung:</strong> Deutschland
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <p>
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://www.e-recht24.de
            </a>
          </p>
        </section>
      </section>
    </>
  );
}
