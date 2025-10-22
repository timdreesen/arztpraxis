import { FaRegAddressBook } from "react-icons/fa";
import Link from "next/link";

export default function Adresse() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center text-4xl pb-5">Kontaktdaten</h3>
      <address className="not-italic leading-relaxed text-center">
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
        className="inline-flex items-center gap-2 px-4 py-2 my-4 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition sm:hidden"
      >
        <FaRegAddressBook className="text-lg" />
        Kontakt speichern
      </Link>
    </div>
  );
}
