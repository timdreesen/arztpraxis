import { BsTelephone } from "react-icons/bs";

export default function Notfaelle() {
  return (
    <section id="notfaelle" className="scroll-mt-24 pb-5 text-neutral-800">
      <h2 className="pb-3 text-center text-5xl font-bold tracking-wide text-shadow-lg">
        Notfälle
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-5 text-center">
        <div className="max-w-sm p-4 shadow-md">
          <p className="py-2">
            In<span className="font-bold"> lebensbedrohlichen Notfällen </span>
            erreichen Sie den Rettungsdienst jederzeit unter
          </p>
          <p className="inline-flex items-center gap-2 border-2 border-danger px-4 py-2 text-2xl font-bold tracking-widest text-neutral-800">
            <BsTelephone />
            112
          </p>
        </div>
        <div className="max-w-sm p-4 shadow-md">
          <p className="py-2">
            Nachts und an den Wochenenden erreichen Sie den hausärztlichen
            Bereitschaftsdienst unter
          </p>
          <p className="inline-flex items-center gap-2 border-2 border-secondary px-5 py-2 text-2xl font-bold tracking-widest text-black">
            <BsTelephone />
            116117
          </p>
        </div>
        <div className="max-w-sm p-4 shadow-md">
          <p className="py-2">
            Außerhalb der Sprechzeiten erreichen Sie mich tagsüber unter
          </p>
          <p className="inline-flex items-center gap-2 border-2 border-accent px-5 py-2 text-2xl font-semibold tracking-widest text-black">
            <BsTelephone />
            0172 400 4554
          </p>
        </div>
      </div>
    </section>
  );
}
