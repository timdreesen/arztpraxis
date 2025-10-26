export default function Oeffnungszeiten() {
  return (
    <section
      id="sprechzeiten"
      className="p-5 scroll-mt-24 bg-gray-5 text-neutral-800"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5">Sprechzeiten</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left text-lg sm:pl-12">
          <span className="font-medium">Montag:</span>
          <span>
            <span className="whitespace-nowrap">08:30&nbsp;–&nbsp;12:00</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> / </span>
            <span className="whitespace-nowrap">17:00&nbsp;–&nbsp;18:30</span>
          </span>

          <span className="font-medium">Dienstag:</span>
          <span>
            <span className="whitespace-nowrap">08:30&nbsp;–&nbsp;12:00</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> / </span>
            <span className="whitespace-nowrap">17:00&nbsp;–&nbsp;18:30</span>
          </span>

          <span className="font-medium">Mittwoch:</span>
          <span className="whitespace-nowrap">08:30&nbsp;–&nbsp;12:00</span>

          <span className="font-medium">Donnerstag:</span>
          <span>
            <span className="whitespace-nowrap">08:30&nbsp;–&nbsp;12:00</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> / </span>
            <span className="whitespace-nowrap">17:00&nbsp;–&nbsp;18:30</span>
          </span>

          <span className="font-medium">Freitag:</span>
          <span className="whitespace-nowrap">08:30&nbsp;–&nbsp;12:00</span>

          <span className="font-medium">Samstag & Sonntag:</span>
          <span>geschlossen</span>
        </div>

        <p className="mt-4 text-sm text-neutral-800 pt-4">
          Termine nach Vereinbarung auch außerhalb der Sprechzeiten möglich
        </p>
      </div>
    </section>
  );
}
