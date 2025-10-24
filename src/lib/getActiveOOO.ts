import fs from "fs";
import path from "path";
import { DateTime } from "luxon";

export type Doctor = {
  name: string;
  phone: string;
  address: string;
  bonus?: string;
};
export type OutOfOfficeNotice = {
  start_date: string;
  end_date: string;
  message?: string;
  published: boolean;
  available_doctors?: Doctor[];
};

export function getActiveOOO(): OutOfOfficeNotice | null {
  const dir = path.join(process.cwd(), "public/content/ooo");
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".json"))
    : [];

  if (files.length === 0) return null;

  const latestFile = files.sort().reverse()[0];
  const content = fs.readFileSync(path.join(dir, latestFile), "utf-8");
  const notice = JSON.parse(content) as OutOfOfficeNotice;

  if (!notice.published) return null;

  const start = DateTime.fromFormat(notice.start_date, "dd.MM.yy", {
    zone: "Europe/Berlin",
  });
  const end = DateTime.fromFormat(notice.end_date, "dd.MM.yy", {
    zone: "Europe/Berlin",
  });
  const now = DateTime.now().setZone("Europe/Berlin");

  if (now < start || now > end.endOf("day")) return null;

  return notice;
}

export function getSecondsUntilEnd(notice: OutOfOfficeNotice): number {
  const end = DateTime.fromFormat(notice.end_date, "dd.MM.yy", {
    zone: "Europe/Berlin",
  }).set({ hour: 23, minute: 0, second: 0 });
  const now = DateTime.now().setZone("Europe/Berlin");
  const diff = end.diff(now, "seconds").seconds;
  return Math.max(60, Math.round(diff)); // never less than 1 minute
}
