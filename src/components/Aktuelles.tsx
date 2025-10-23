// src/components/Aktuelles.tsx
import fs from "fs";
import path from "path";
import dayjs from "dayjs";

export default function Aktuelles() {
  const dir = path.join(process.cwd(), "public/content/ooo");
  type Doctor = {
    name: string;
    phone: string;
    address: string;
  };
  type OutOfOfficeNotice = {
    start_date: string;
    end_date: string;
    message: string;
    published: boolean;
    available_doctors?: Doctor[];
  };

  let notices = [];
  try {
    const files = fs.readdirSync(dir);
    notices = files.map((file) => {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    });
  } catch {
    return null; // no folder or files
  }

  const now = dayjs();
  const preNoticeDays = 3;

  const activeNotice: OutOfOfficeNotice | undefined = notices
    .filter((n) => {
      if (!n.published) return false;
      const start = dayjs(n.start_date);
      const end = dayjs(n.end_date);
      return (
        now.isAfter(start.subtract(preNoticeDays, "day")) &&
        now.isBefore(end.add(1, "day"))
      );
    })
    .sort((a, b) => dayjs(b.start_date).diff(dayjs(a.start_date)))[0];

  if (!activeNotice) return null;

  const doctors = activeNotice.available_doctors ?? [];
  const vertreter = doctors?.map((doc) => {
    return (
      <div key={doc.name}>
        <p>{doc.name}</p>
        <p>{doc.phone}</p>
        <p>{doc.address}</p>
      </div>
    );
  });

  return (
    <div className="text-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 sm:flex-row sm:items-start">
        <div className="p-4 sm:max-w-1/2">
          <p className="font-bold text-2xl">
            Die Praxis ist vom {activeNotice.start_date} bis zum{" "}
            {activeNotice.end_date} geschlossen
          </p>
          {activeNotice.message ? <p>{activeNotice.message}</p> : null}
        </div>
        {doctors.length > 0 ? (
          <div className="p-4 sm:max-w-1/2">
            <p>Die Vertretung übernehmen die Praxen von:</p>
            {vertreter ? vertreter : <p>Keine Vertretung definiert</p>}
          </div>
        ) : null}
      </div>
    </div>
  );
}
