import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-blue-900 text-neutral-100 py-4">
      <ul className="flex justify-center gap-5">
        <li>
          <Link href="/impressum">Impressum</Link>
        </li>
        <li>
          <Link href="/datenschutzerklaerung">Datenschutz­erklärung</Link>
        </li>
      </ul>
    </footer>
  );
}
