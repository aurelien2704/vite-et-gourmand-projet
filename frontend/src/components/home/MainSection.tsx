import { stats } from "@/data/static_data";
import Image from "next/image";
import CallToAction from "../common/CallToAction";
import { Eyebrow, MainTitle } from "../common/Headings";

export default function MainSection() {
  return (
    <>

      {/*Grid : 2 colonnes sur desktop, 1 sur mobile*/}
      < section className="bg-ink grid grid-cols-1 lg:grid-cols-2" >

        {/*Colonne gauche : Texte et CTA*/}
        < div className="px-6 py-16 md:px-14 md:py-25" >

          {/*Slogan*/}
          <Eyebrow label="Traiteur bordelais · 25 ans d'excellence" />

          {/*Titre*/}
          <MainTitle title="L'art de recevoir" highlight=" à votre table" />

          {/*Séparateur*/}
          < div className="w-px h-10 bg-copper/40 my-6" />

          {/*Sous-titre*/}
          < p className="text-white/90 italic leading-[1.7] max-w-[420px] mb-10" >
            Des menus sur - mesure pour chaque occasion, préparés avec passion par Julie et José depuis 2001.
          </p >

          {/*CTA*/}
          <CallToAction href="/pages/page-nos-menus" label="Découvrir nos menus" />
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
        {/*On récupère les statistiques avec .map dans le fichier@/data/static_data*/}
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