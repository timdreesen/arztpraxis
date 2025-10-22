import Notfaelle from "@/components/Notfaelle";
import Oeffnungszeiten from "@/components/Oeffnungszeiten";
import Eingang from "@/components/Eingang";
import UeberMich from "@/components/UeberMich";
import Adresse from "@/components/Adresse";

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col gap-y-16">
      <p>Aktuelles</p>
      <Notfaelle />

      <div className="flex flex-col p-5 sm:grid grid-cols-2 gap-5">
        <Oeffnungszeiten />
        <div className="w-full h-64 sm:h-auto relative">
          <Eingang />
        </div>
      </div>
      <div className="my-8 flex flex-col p-5 sm:grid grid-cols-2 gap-5">
        <UeberMich />
        <div className="w-full h-64 sm:h-auto relative">
          <Adresse />
        </div>
      </div>
    </div>
  );
}
