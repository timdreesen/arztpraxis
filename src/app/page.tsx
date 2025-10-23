import Notfaelle from "@/components/Notfaelle";
import Oeffnungszeiten from "@/components/Oeffnungszeiten";
import Eingang from "@/components/Eingang";
import UeberMich from "@/components/UeberMich";
import Adresse from "@/components/Adresse";
import Aktuelles from "@/components/Aktuelles";

export default function Home() {
  return (
    <div className="mx-auto w-full flex flex-col gap-y-16">
      <Aktuelles />
      <Notfaelle />

      <div className="py-18 w-full bg-neutral ">
        <div className="mx-auto flex flex-col max-w-7xl sm:grid grid-cols-2 gap-5">
          <Oeffnungszeiten />
          <Eingang />
        </div>
      </div>

      <div className="mx-auto max-w-7xl my-8 flex flex-col sm:grid grid-cols-3 gap-12 sm:py-18">
        <div className="sm:col-span-2 sm:border-r sm:border-secondary pr-5">
          <UeberMich />
        </div>
        <div className="sm:col-span-1 pl-5 flex justify-center">
          <Adresse />
        </div>
      </div>
    </div>
  );
}
