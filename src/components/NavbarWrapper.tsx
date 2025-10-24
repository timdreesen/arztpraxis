import { getActiveOOO } from "@/lib/getActiveOOO";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  const notice = await getActiveOOO();
  const hasOOO = !!notice;

  return <Navbar hasOOO={hasOOO} />;
}
