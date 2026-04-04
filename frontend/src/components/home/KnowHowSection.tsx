import CallToAction from "../common/CallToAction";
import { Eyebrow, SectionTitle } from "../common/Headings";

//Arguments de qualité
const args: Record<string, string>[] = [
  {
    num: "01",
    icon: "🥩",
    title: "Produits",
    title2: "locaux",
    description: "Chaque ingrédient est sélectionné auprès de producteurs bordelais.",
    bg: "bg-white",
  },
  {
    num: "02",
    icon: "👨‍🍳",
    title: "Préparation",
    title2: "maison",
    description: "Tout est préparé le jour même de la livraison. Aucun plat industriel, aucun sous-traitant.",
    bg: "bg-linen",
  },
  {
    num: "03",
    icon: "🤝",
    title: "Service",
    title2: "personnalisé",
    description: "Julie et José prennent le temps d'échanger avec chaque client pour adapter le menu à leurs envies.",
    bg: "bg-linen",
  },
  {
    num: "04",
    icon: "🚚",
    title: "Livraison",
    title2: "soignée",
    description: "Chaque commande est livrée à l'heure convenue, avec une présentation soignée.",
    bg: "bg-white",
  },
];

export default function KnowHowSection() {
  return (
    <>

      {/* Titre */}
      <section className="py-10 border-t border-cream">
        <div className="px-6 md:px-14">
          <Eyebrow label="Notre savoir-faire" />
          <SectionTitle title="Ce qui nous " highlight="distingue" />
        </div>

        {/* Grid : 4 colonnes sur desktop, 2 sur tablette, 1 sur mobile */}
        {/* On récupère les données de args avec .map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {args.map((arg) => (
            <div
              key={arg.num}
              className={`${arg.bg} flex flex-col items-center text-center border border-cream p-8`}>

              <div className="text-[48px] md:text-[58px]">{arg.icon}</div>

              <h3 className="text-[24px] md:text-[32px]">{arg.title} {" "}
                <span className="text-copper italic">{arg.title2}</span>
              </h3>

              <p className="pt-4 italic leading-[1.7]">{arg.description}</p>

              <div className="mt-auto font-serif text-[42px] md:text-[52px] italic font-bold text-cream">
                {arg.num}
              </div>
            </div>
          ))}
        </div>

        {/* 5ème argument */}
        <div className="bg-velvet flex flex-col items-center sm:flex-row gap-6 px-6 py-10">
          <div className="text-[48px] md:text-[58px]">🎉</div>
          <div>
            <h3 className="text-[24px] md:text-[32px] font-normal text-white pb-6 leading-[1.2]">
              Un menu pour{" "}
              <span className="italic text-copperlight">chaque occasion</span>
            </h3>
            <p className="text-white/80 italic leading-[1.5] pb-10">
              <div className="pb-2">Noël, Pâques, mariage, anniversaire, Toussaint, événement professionnel.</div>
              <div>9 menus pensés pour chaque occasion, avec des options classique, végétarien et vegan.</div>
            </p>

            {/* CTA */}
            <CallToAction label="Commander ici" href="/pages/page-nos-menus" />
          </div>
        </div>
      </section>

    </>
  );
}

