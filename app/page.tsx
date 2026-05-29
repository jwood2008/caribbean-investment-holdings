import { SiteNav } from "./_components/site-nav";
import { Hero } from "./_components/hero";
import { Approach } from "./_components/approach";
import { Portfolio } from "./_components/portfolio";
import { TierraDex } from "./_components/tierradex";
import { Leadership } from "./_components/leadership";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Approach />
        <Portfolio />
        <TierraDex />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
