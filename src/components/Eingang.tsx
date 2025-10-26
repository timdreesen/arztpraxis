import Image from "next/image";
import praxisEingang from "@/app/praxis-eingang.jpg";

export default function Eingang() {
  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-2xl aspect-4/3 sm:my-auto">
      <Image
        src={praxisEingang}
        alt="der Eingang zur Praxis"
        className="rounded-lg shadow-2xl w-full h-auto"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
}
