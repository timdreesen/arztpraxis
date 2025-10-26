import Image from "next/image";
import profilePic from "@/app/jens.jpg";

export default function UeberMich() {
  return (
    <section
      id="ueber-mich"
      className="scroll-mt-24 mx-auto flex flex-col sm:flex-row flex-wrap gap-8 rounded-tr-2xl rounded-bl-2xl"
    >
      <div className="mx-auto">
        <Image
          src={profilePic}
          alt="Dr. med. Jens Dreesen"
          width={256} // display width for mobile
          height={390} // display height for mobile
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 640px) 100vw, 256px"
          className="w-64 rounded-md shadow-2xl opacity-95 mx-auto hover:opacity-100"
          quality={75} // default 75, can reduce to 60 to save more KB
        />
        <p className="text-center pt-3 font-medium text-lg">
          Dr. med. Jens Dreesen
        </p>
      </div>

      <div className="text-neutral-800 max-w-96 flex flex-col px-5 mx-auto text-center sm:text-start">
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-3xl font-bold pb-4 sm:pb-2">Moin!</h3>
          <p className="tracking-wider">
            Ich bin in Timmendorfer Strand aufgewachsen und verbringe meine
            Freizeit gerne mit Segeln, Schwimmen oder entspannten Stunden am
            Strand. Außerdem bin ich leidenschaftlicher Vogelbeobachter und höre
            gern Musik.
          </p>
          <p className="tracking-wider py-3">
            Seit über 25 Jahren bin ich als Hausarzt in Timmendorfer Strand
            tätig.
          </p>
        </div>
        <ul className="list-disc list-inside tracking-wider font-medium text-md text-start pt-5">
          <li>Hausarzt (Allgemeinmedizin)</li>
          <li>Balneologie und Medizinische Klimatologie</li>
          <li>Naturheilverfahren</li>
          <li>Rettungsmedizin</li>
        </ul>
      </div>
    </section>
  );
}
