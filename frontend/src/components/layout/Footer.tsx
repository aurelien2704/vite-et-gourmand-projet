import { legal, nav, schedule } from "@/data/static_data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pl-6 pb-8">

        {/*Logo réduit*/}
        <div className="group flex flex-col leading-tight">
          <div className="text-[13px] tracking-[15%] uppercase text-copper mb-1">
            Bordeaux · depuis 2001
          </div>
          <div>
            <span className="text-white text-[22px] italic"> Vite & </span>
            <span className="text-copper text-[22px]">Gourmand</span>
          </div>
        </div>

        {/*On récupère les horaires depuis le tableau schedule */}
        <div>
          <div className="text-[13px] tracking-[15%] uppercase text-copperlight mb-4">
            Horaires
          </div>

          <div className="flex flex-col gap-3">
            {schedule.map((s) => (
              <div className="text-[13px] text-white/80" key={s.day}>
                {s.day} : {s.hours}
              </div>
            ))}
          </div>
        </div>

        {/*On récupère les liens de navigation depuis le fichier @/data/static_data */}
        <div>
          <div className="text-[13px] tracking-[15%] uppercase text-copperlight mb-4">
            Navigation
          </div>
          <nav className="flex flex-col gap-3"
            aria-label="Navigation de pied de page">
            {nav.map((navlink) => (
              <Link
                key={navlink.href} href={navlink.href}
                className={`text-[13px] tracking-[10%] hover:text-copperlight link text-white/80 `}>
                {navlink.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/*Mentions légales, CGV, RGPD*/}
      {/*On récupère les liens depuis le tableau legal depuis le fichier @/data/static_data */}
      <div className="flex justify-end gap-4 pt-4 px-6 border-t border-copper/15">
        {legal.map((l) => {
          return (
            <Link
              key={l.href} href={l.href}
              className={`text-[12px] text-white/60 hover:text-white/80`}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </footer>
  )
}