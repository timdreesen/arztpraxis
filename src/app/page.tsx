import Notfaelle from "@/components/Notfaelle";
import Oeffnungszeiten from "@/components/Oeffnungszeiten";
import Eingang from "@/components/Eingang";
import UeberMich from "@/components/UeberMich";
import Adresse from "@/components/Adresse";
import Aktuelles from "@/components/Aktuelles";
import getActiveOOO from "@/lib/getActiveOOO";

export const revalidate = 43200;

export default function Home() {
  const notice = getActiveOOO();
  return (
    <div className="mx-auto flex w-full flex-col gap-y-16 py-16">
      {notice ? <Aktuelles notice={notice} /> : null}
      <Notfaelle />

      <div className="w-full bg-neutral p-5 py-18">
        <div className="mx-auto flex max-w-7xl grid-cols-2 flex-col gap-5 md:grid">
          <Oeffnungszeiten />
          <Eingang />
        </div>
      </div>

      <div className="mx-auto my-8 flex max-w-7xl grid-cols-3 flex-col gap-12 sm:grid sm:py-18">
        <div className="sm:col-span-2 sm:border-r sm:border-secondary sm:pr-5">
          <UeberMich />
        </div>
        <div className="flex justify-center pl-5 sm:col-span-1">
          <Adresse />
        </div>
      </div>
    </div>
  );
}
