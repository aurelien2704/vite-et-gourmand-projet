"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { nav } from "@/data/static_data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

//Logo
function Logo() {

  return (
    <Link href="/" className="group flex flex-col leading-tight">
      <div className="text-copperlight text-[16px] tracking-[15%] uppercase">Bordeaux · depuis 2001</div>
      <div>
        <span className="text-white text-[26px] italic">Vite & </span>
        <span className="text-copperlight text-[26px]">Gourmand</span>
      </div>
    </Link>
  );
}

//onNavigate : Callback qui permettra d'appeler la fonction onClick

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  {/*On utilise usePathname pour détecter le lien actif*/ }
  const pathname = usePathname();
  return (
    <>
      {/*On récupère les liens et labels de navigation avec .map dans le fichier@/data/static_data*/}
      {/*On appelle la fonction onNavigate lors du clic sur un lien via onClick*/}

      {nav.map((navlink) => (
        <Link
          key={navlink.href} href={navlink.href} className={`text-[16px] tracking-[10%] uppercase
            hover:text-copperlight link ${pathname === navlink.href ? 'text-copperlight' : 'text-white'} `}
          onClick={onNavigate}
        >
          {navlink.label}
        </Link>
      ))}

      <Link
        className={`text-[16px] tracking-[2px] uppercase border border-copper px-6 py-2.5 hover:bg-copper hover:text-ink
            link ${pathname === "/pages/page-connexion" ? 'bg-copper text-ink' : 'text-copper'} `}
        href="/pages/page-connexion"
        onClick={onNavigate}
      >
        Connexion
      </Link>

    </>
  );
}

//Menu de navigation mobile
//useState pour fermer le menu mobile au clic sur un lien de navigation
//composant Sheet de Shadcn
function NavigationMobile() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/*Icône burger*/}
      <SheetTrigger asChild>
        <button className="lg:hidden text-white hover:text-copperlight" aria-label="Ouvrir le menu">
          <Menu size={28} />
        </button>
      </SheetTrigger>

      {/*Panneau latéral*/}
      <SheetContent
        side="right" className="bg-velvet border-l border-copper/20 flex flex-col pt-14" aria-describedby={undefined}
      >
        {/*Accessibilité*/}
        <SheetTitle className="sr-only">Menu de navigation mobile</SheetTitle>

        {/*Composant logo*/}
        <div className="mb-8 px-6">
          <Logo />
        </div>

        {/*Composant liens et labels de navigation*/}
        <nav className="flex flex-col px-6 gap-5" aria-label="Navigation mobile">
          <NavigationLinks onNavigate={() => setOpen(false)} />
        </nav>

      </SheetContent>
    </Sheet>
  );
}

//Composant principal
export default function Navbar() {
  return (
    <header className="sticky top-0 w-full bg-ink border-b border-copper">
      <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9" aria-label="Navigation principale">
          <NavigationLinks />
        </nav>
        <NavigationMobile />
      </div>
    </header>
  )
}