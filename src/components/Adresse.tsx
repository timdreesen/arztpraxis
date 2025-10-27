import { FaRegAddressBook } from "react-icons/fa";
import Link from "next/link";

export default function Adresse() {
  return (
    <div
      id="kontakt"
      className="flex scroll-mt-24 flex-col items-center text-neutral-800"
    >
      <h3 className="pb-4 text-center text-3xl font-bold sm:pb-2 sm:text-start">
        Kontaktdaten
      </h3>
      <address className="text-center leading-relaxed not-italic">
        <strong>Praxis Dr. med. Jens Dreesen</strong>
        <p>Strandallee 97</p>
        <p>23669 Timmendorfer Strand</p>
        <br />
        <p>Tel. 04503 4444</p>
        <p>Fax 04503 880530</p>
      </address>

      <Link
        href="/dr-jens-dreesen.vcf"
        download="dr-jens-dreesen.vcf"
        className="my-4 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-white shadow transition hover:bg-blue-800 sm:hidden"
      >
        <FaRegAddressBook className="text-lg" />
        Kontakt speichern
      </Link>
    </div>
  );
}
