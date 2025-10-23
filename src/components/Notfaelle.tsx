export default function Notfaelle() {
  return (
    <section className="text-neutral-800 pt-15 pb-5">
      <h2 className="pb-3 text-5xl font-bold tracking-wide text-center text-shadow-lg">
        Notfälle
      </h2>
      <div className="p-5 text-center flex flex-wrap gap-4 justify-center">
        <div className="max-w-sm shadow-md p-4">
          <p className="py-2">
            In<span className="font-bold"> lebensbedrohlichen Notfällen </span>
            erreichen Sie den Rettungsdienst jederzeit unter
          </p>
          <p className="inline-block text-2xl font-bold border-danger border-4 text-neutral-800 px-4 py-2 rounded tracking-widest">
            112
          </p>
        </div>
        <div className="max-w-sm shadow-md p-4">
          <p className="py-2">
            Nachts und an den Wochenenden erreichen Sie den hausärztlichen
            Bereitschaftsdienst unter
          </p>
          <p className="inline-block text-2xl font-bold border-secondary border-4 text-black  px-5 py-2 rounded tracking-widest">
            116117
          </p>
        </div>
        <div className="max-w-sm shadow-md p-4">
          <p className="py-2">
            Außerhalb der Sprechzeiten erreichen Sie mich im Notfall unter
          </p>
          <p className="inline-block text-2xl font-semibold border-accent border-4 text-black  px-5 py-2 rounded tracking-widest">
            0172 400 4554
          </p>
        </div>
      </div>
    </section>
  );
}
