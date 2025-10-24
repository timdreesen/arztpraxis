// src/components/Aktuelles.tsx
import { OutOfOfficeNotice } from "@/lib/getActiveOOO";

export default function Aktuelles({ notice }: { notice: OutOfOfficeNotice }) {
  return (
    <div id="aktuelles" className="scroll-mt-24">
      <h2 className="text-5xl mb-4 font-bold tracking-wide text-center text-shadow-lg">
        Aktuelles
      </h2>
      <div className="text-neutral-800 max-w-5xl pb-8 mx-auto grid grid-cols-1 sm:grid-cols-1 px-6 border-l-4 border-secondary bg-neutral-100">
        <div className="pt-5 px-3">
          <p className="text-lg text-center">
            Die Praxis ist vom{" "}
            <span className="font-semibold text-xl">{notice.start_date}</span>{" "}
            bis zum{" "}
            <span className="font-semibold text-xl">{notice.end_date}</span>{" "}
            geschlossen.
          </p>
          {notice.message && (
            <p className="text-center text-lg">{notice.message}</p>
          )}
          <p className="text-lg text-center">
            Die Vertretung übernehmen freundlicherweise die Praxen von:
          </p>
        </div>

        <div className="grid gap-4 px-4 py-2 lg:grid-cols-3 md:grid-cols-2">
          {notice.available_doctors?.map((doc) => (
            <div
              className="bg-white shadow-md text-center p-3 hover:shadow-lg"
              key={doc.name}
            >
              <p>{doc.name}</p>
              <p>{doc.phone}</p>
              <p>{doc.address}</p>
              {doc.bonus && <p>{doc.bonus}</p>}
            </div>
          ))}
        </div>

        <p className="text-center pt-4">
          Wenn möglich, melden Sie sich bitte vorher telefonisch, da die
          Sprechzeiten abweichen können. Vielen Dank!
        </p>
      </div>
    </div>
  );
}
