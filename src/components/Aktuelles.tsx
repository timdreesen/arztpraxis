// src/components/Aktuelles.tsx
import { OutOfOfficeNotice } from "@/lib/getActiveOOO";

export default function Aktuelles({ notice }: { notice: OutOfOfficeNotice }) {
  return (
    <div id="aktuelles" className="scroll-mt-24">
      <h2 className="mb-4 text-center text-5xl font-bold tracking-wide text-shadow-lg">
        Aktuelles
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 border-l-4 border-secondary bg-neutral-100 px-6 pb-8 text-neutral-800 sm:grid-cols-1">
        <div className="px-3 pt-5">
          <p className="text-center text-lg">
            Die Praxis ist vom{" "}
            <span className="text-xl font-semibold">{notice.start_date}</span>{" "}
            bis zum{" "}
            <span className="text-xl font-semibold">{notice.end_date}</span>{" "}
            geschlossen.
          </p>
          {notice.message && (
            <p className="text-center text-lg">{notice.message}</p>
          )}
          <p className="text-center text-lg">
            Die Vertretung übernehmen freundlicherweise die Praxen von:
          </p>
        </div>

        <div className="grid gap-4 px-4 py-2 md:grid-cols-2 lg:grid-cols-3">
          {notice.available_doctors?.map((doc) => (
            <div
              className="bg-white p-3 text-center shadow-md hover:shadow-lg"
              key={doc.name}
            >
              <p>{doc.name}</p>
              <p>{doc.phone}</p>
              <p>{doc.address}</p>
              {doc.bonus && <p>{doc.bonus}</p>}
            </div>
          ))}
        </div>

        <p className="pt-4 text-center">
          Wenn möglich, melden Sie sich bitte vorher telefonisch, da die
          Sprechzeiten abweichen können. Vielen Dank!
        </p>
      </div>
    </div>
  );
}
