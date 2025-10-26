import Image from "next/image";
import praxisEingang from "@/app/praxis-eingang.jpg";

export default function Eingang() {
  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-2xl aspect-4/3 sm:my-auto">
      <Image
        src={praxisEingang}
        alt="der Eingang zur Praxis"
        width={750} // optimal source width for desktop
        height={563} // matches 4:3 aspect ratio
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="rounded-lg shadow-2xl"
        quality={75} // default is 75; you can reduce to 60 for smaller files
      />
    </div>
  );
}
