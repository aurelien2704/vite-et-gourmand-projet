import { Eyebrow } from "../common/Headings";

const presentation: Record<string, string>[] = [
  {
    title: "Notre histoire",
    text: "Fondée à Bordeaux, Vite & Gourmand met à l'honneur à la gastronomie bordelaise depuis 2001.",
    text2: "A l'origine, Vite & Gourmand était une petite adresse que les bordelais se transmettaient de bouche à oreille.",
    bg: "bg-white",
    text3: "Au fil des années, les recettes se sont affinées, la clientèle s'est agrandie et ce qui était un projet artisanal est devenu une référence incontournable de la restauration évènementielle à Bordeaux."
  },
  {
    title: "Notre promesse",
    text: " Depuis 25 ans, Julie et José ont bâti leur réputation sur une promesse simple : la satisfaction client avant tout.",
    text2: "Aucun compromis sur la qualité, aucune prestation sans passion. Produits locaux, préparation le jour même, livraison soignée.",
    bg: "bg-warm",
  },
];

export default function PresentationSection() {
  return (
    <>
      < section className="grid grid-cols-1 md:grid-cols-2" >

        {/* On récupère les données de présentation avec .map */}
        {presentation.map((pres) => (
          <div key={pres.title}
            className={`${pres.bg} px-10 lg:px-20 py-16 border-r border-cream`}>
            <Eyebrow label={pres.title} />

            <div className="italic leading-[1.85]">
              <p className="py-4">{pres.text}</p>
              <p className="py-4">{pres.text2}</p>
              <p className="py-4">{pres.text3}</p>
            </div>
          </div>

        ))}
      </section >
    </>
  );
}