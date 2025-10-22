import Image from "next/image";
import praxisEingang from "@/app/praxis-eingang.jpg";

export default function Eingang() {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
      <Image
        src={praxisEingang}
        alt="der Eingang zur Praxis"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
}
