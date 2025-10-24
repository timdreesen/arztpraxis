export default function Page() {
  return (
    <section className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          Dr. med. Jens Dreesen
          <br />
          Strandallee 97,
          <br />
          23669 Timmendorfer Strand, Deutschland
          <br />
          Telefon: 04503 4444
          <br />
          E-Mail:{" "}
          <a
            href="mailto:jdreesen4444@gmail.com"
            className="text-blue-600 hover:underline"
          >
            jdreesen4444@gmail.com
          </a>
        </p>
        <p>
          Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung personenbezogener
          Daten.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          2. Erhebung und Speicherung personenbezogener Daten
        </h2>
        <p>
          Beim Besuch dieser Website werden von Ihrem Browser automatisch
          Informationen übermittelt und temporär in sogenannten Server-Logfiles
          gespeichert. Diese Daten umfassen insbesondere IP-Adresse, Datum und
          Uhrzeit des Zugriffs sowie die aufgerufenen Seiten. Eine
          personenbezogene Auswertung findet nicht statt. Die Daten werden
          ausschließlich zur Sicherstellung des Betriebs und der Sicherheit der
          Website verarbeitet. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Cookies</h2>
        <p>
          Diese Website verwendet keine Cookies. Es findet keine Speicherung von
          personenbezogenen Daten in Cookies statt.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. Kontaktaufnahme</h2>
        <p>
          Diese Website enthält keine Kontaktformulare. Eine freiwillige
          Übermittlung personenbezogener Daten durch Nutzer erfolgt daher nicht.
          Sollten Sie uns per E-Mail kontaktieren, gelten die dortigen Hinweise
          zur Datenverarbeitung gemäß Art. 6 Abs. 1 lit. a und b DSGVO.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Datensicherheit</h2>
        <p>
          Wir treffen alle angemessenen technischen und organisatorischen
          Maßnahmen, um Ihre personenbezogenen Daten vor Verlust, Manipulation
          oder unberechtigtem Zugriff zu schützen. Die Übertragung von Daten
          erfolgt ausschließlich verschlüsselt über HTTPS.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          6. Rechte der betroffenen Personen
        </h2>
        <p>
          Sie haben als Nutzer das Recht, jederzeit Auskunft über die zu Ihrer
          Person gespeicherten Daten zu erhalten sowie Berichtigung, Löschung
          oder Einschränkung der Verarbeitung zu verlangen. Zudem können Sie der
          Verarbeitung widersprechen oder Ihr Recht auf Datenübertragbarkeit
          geltend machen. Des Weiteren haben Sie das Recht, eine Beschwerde bei
          der zuständigen Aufsichtsbehörde einzureichen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          7. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Diese Datenschutzerklärung kann jederzeit angepasst werden. Die
          jeweils aktuelle Version ist auf dieser Website veröffentlicht und
          gültig.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">8. Rechtsgrundlagen</h2>
        <p>
          Diese Datenschutzerklärung basiert auf den Bestimmungen der
          Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz
          (BDSG) sowie dem Telekommunikation-Telemedien-Datenschutzgesetz
          (TTDSG) und weiteren einschlägigen Vorschriften des deutschen Rechts.
        </p>
      </section>
    </section>
  );
}
