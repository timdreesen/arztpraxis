// src/components/Aktuelles.tsx
import fs from "fs";
import path from "path";
import dayjs from "dayjs";

export default function Aktuelles() {
  const dir = path.join(process.cwd(), "public/data/outofoffice");

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

  const activeNotice = notices
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

  return (
    <div className="bg-primary/10 border-l-4 border-primary text-primary-dark p-4 rounded-md shadow-sm my-4">
      <h2 className="font-bold">Praxis geschlossen</h2>
      <p>{activeNotice.message}</p>
      {activeNotice.available_doctors?.length > 0 && (
        <p className="text-sm mt-1">
          Vertretung:{" "}
          {activeNotice.available_doctors
            .map((d: { doctor: any }) => d.doctor)
            .join(", ")}
        </p>
      )}
    </div>
  );
}
