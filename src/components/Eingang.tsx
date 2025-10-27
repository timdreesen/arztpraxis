import Image from "next/image";
import praxisEingang from "@/app/praxis-eingang.webp";

export default function Eingang() {
  return (
    <div className="w-full">
      <Image
        src={praxisEingang}
        alt="der Eingang zur Praxis"
        width={640}
        height={480}
        className="mx-auto w-full max-w-md rounded-lg shadow-2xl"
        sizes="448px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
