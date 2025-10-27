import Image from "next/image";
import praxisEingang from "@/app/praxis-eingang.jpg";

export default function Eingang() {
  return (
    <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-lg shadow-2xl">
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
