import getActiveOOO from "@/lib/getActiveOOO";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const notice = getActiveOOO();
  const hasOOO = !!notice;

  return <Navbar hasOOO={hasOOO} />;
}
