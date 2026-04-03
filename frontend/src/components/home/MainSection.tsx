import Image from "next/image";
import Link from "next/link";

//Statistiques page d'accueil
const stats: { value: string; label: string }[] = [
  { value: "25", label: "Années d'expertise" },
  { value: "700+", label: "Événements réalisés" },
  { value: "9", label: "Thèmes de menus" },
  { value: "100%", label: "Fait maison" },
]

export default function MainSection() {
  return (
    <>

      {/*Grid : 2 colonnes sur desktop, 1 sur mobile*/}
      < section className="bg-ink grid grid-cols-1 lg:grid-cols-2" >

        {/*Colonne gauche : Texte et CTA*/}
        < div className="px-6 py-16 md:px-14 md:py-25" >

          {/*Slogan*/}
          < div className="flex items-center gap-3 mb-4" >
            <span className="inline-block w-8 h-px bg-copperlight" />
            <span className="text-[12px] tracking-[4px] uppercase text-copperlight">Traiteur bordelais · 25 ans d'excellence</span>
          </div >

          {/*Titre*/}
          < h1 className="font-serif font-normal text-white leading-[1.05] mb-4" >
            <span className="text-[48px] md:text-[68px] block">L'art de recevoir,</span>
            <span className="text-[48px] md:text-[68px] text-copper block">à votre table</span>
          </h1 >

          {/*Séparateur*/}
          < div className="w-px h-10 bg-copper/40 my-6" />

          {/*Sous-titre*/}
          < p className="text-white/90 italic leading-[1.7] max-w-[420px] mb-10" >
            Des menus sur - mesure pour chaque occasion, préparés avec passion par Julie et José depuis 2001.
          </p >

          {/*CTA*/}
          <Link
            href="/pages/page-nos-menus"
            className="bg-copper text-ink px-10 py-4 text-[13px] tracking-[15%] uppercase font-bold
                hover:bg-copperlight hover:scale-105 transition-transform duration-300 inline-block">
            Découvrir nos menus
          </Link>
        </div >

        {/*Colonne droite : Image*/}
        < div className="hidden lg:block relative" >
          <Image
            src="/images/canapes-accueil.jpg"
            alt="Image de canapés"
            fill
            sizes="(max-width: 1024px)"
            className="object-cover" />
        </div >
      </section >

      {/*Section statistiques clées*/}
      <section>
        {/*On récupère les statistiques avec .map*/}
        <div className=" bg-velvet grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 text-center border border-copper/15">
              <span className="font-serif text-[36px] md:text-[46px] italic text-copper block mb-2">{stat.value}</span>
              <span className="text-[12px] md:text-[14px] tracking-[15%] uppercase text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </section >
    </>
  );
}