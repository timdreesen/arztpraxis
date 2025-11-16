import Image from "next/image";
import profilePic from "@/app/jens.webp";

export default function UeberMich() {
  return (
    <section
      id="ueber-mich"
      className="mx-auto flex scroll-mt-24 flex-col flex-wrap gap-8 rounded-tr-2xl rounded-bl-2xl sm:flex-row"
    >
      <div className="mx-auto">
        <Image
          src={profilePic}
          alt="Dr. med. Jens Dreesen"
          width={630}
          height={959}
          className="mx-auto w-full max-w-3xs rounded-md opacity-95 shadow-2xl hover:opacity-100"
          sizes="256px"
        />
        <p className="pt-3 text-center text-lg font-medium">
          Dr. med. Jens Dreesen
        </p>
      </div>

      <div className="mx-auto flex max-w-96 flex-col px-5 text-center text-neutral-800 sm:text-start">
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="pb-4 text-3xl font-bold sm:pb-2">Moin!</h3>
          <p className="tracking-wider">
            Ich bin in Timmendorfer Strand aufgewachsen und verbringe meine
            Freizeit gerne mit Segeln, Schwimmen oder entspannten Stunden am
            Strand. Außerdem bin ich Hobbyfotograf.
          </p>
          <p className="py-3 tracking-wider">
            Seit über 25 Jahren bin ich als Hausarzt in Timmendorfer Strand
            tätig.
          </p>
        </div>
        <ul className="text-md list-inside list-disc pt-5 text-start font-medium tracking-wider">
          <li>Hausarzt (Allgemeinmedizin)</li>
          <li>Balneologie und Medizinische Klimatologie</li>
          <li>Naturheilverfahren</li>
          <li>Rettungsmedizin</li>
        </ul>
      </div>
    </section>
  );
}
