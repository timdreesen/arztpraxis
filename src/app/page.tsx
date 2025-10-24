import Notfaelle from "@/components/Notfaelle";
import Oeffnungszeiten from "@/components/Oeffnungszeiten";
import Eingang from "@/components/Eingang";
import UeberMich from "@/components/UeberMich";
import Adresse from "@/components/Adresse";
import Aktuelles from "@/components/Aktuelles";
import { getActiveOOO, getSecondsUntilEnd } from "@/lib/getActiveOOO";

let revalidateSeconds = 60 * 60 * 12;
try {
  const notice = getActiveOOO();
  if (notice) revalidateSeconds = getSecondsUntilEnd(notice);
} catch {}

export const revalidate = revalidateSeconds;

export default function Home() {
  const notice = getActiveOOO();
  return (
    <div className="mx-auto w-full flex flex-col gap-y-16 py-16">
      {notice ? <Aktuelles notice={notice} /> : null}
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
