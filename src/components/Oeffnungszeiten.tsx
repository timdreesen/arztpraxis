export default function Oeffnungszeiten() {
  return (
    <section className="p-5 bg-gray-50 dark:bg-gray-800 text-neutral-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5">Sprechzeiten</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left text-lg">
          <span className="font-medium">Montag:</span>
          <span>08:30 – 12:00 / 17:00 – 18:30</span>

          <span className="font-medium">Dienstag:</span>
          <span>08:30 – 12:00 / 17:00 – 18:30</span>

          <span className="font-medium">Mittwoch:</span>
          <span>08:30 – 12:00</span>

          <span className="font-medium">Donnerstag:</span>
          <span>08:30 – 12:00 / 17:00 – 18:30</span>

          <span className="font-medium">Freitag:</span>
          <span>08:30 – 12:00</span>

          <span className="font-medium">Samstag & Sonntag:</span>
          <span>geschlossen</span>
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          Termine nach Vereinbarung auch außerhalb der Sprechzeiten möglich
        </p>
      </div>
    </section>
  );
}
