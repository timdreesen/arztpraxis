import Image from "next/image";
import praxisEingang from "@/app/praxis-eingang.jpg";

export default function Eingang() {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-4/3 overflow-hidden rounded-lg shadow-2xl">
      <Image
        src={praxisEingang}
        alt="der Eingang zur Praxis"
        fill
        sizes="(max-width: 640px) 372px, 50vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
