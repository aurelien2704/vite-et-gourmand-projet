import { presentation } from "../../data/static_data";
import { Eyebrow } from "../common/Headings";

export default function PresentationSection() {
  return (
    <>
      < section className="grid grid-cols-1 md:grid-cols-2" >

        {/* On récupère les données de présentation avec .map dans le fichier @/data/static_data */}
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