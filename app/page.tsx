import Apropos from "./composants/apropos/apropos";
import Hero from "./composants/heros/page";
import Navbar from "./composants/navbar/page";
import Services from "./composants/noservices/page";
import Packs from "./composants/packs/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Packs />
      <Apropos />
    </>
  );
}
