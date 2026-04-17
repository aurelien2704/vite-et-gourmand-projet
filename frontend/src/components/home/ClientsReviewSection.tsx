import { reviews } from "../../data/static_data";
import { SectionTitle } from "../common/Headings";

export default function ClientsReviewSection() {
  return (
    <>
      <section className="bg-white py-10 px-6 md:px-14">
        <SectionTitle title="Ce que disent " highlight="nos clients" />

        <div className="inline-flex items-center gap-3 bg-velvet px-5 py-3 mt-5">
          <div className="font-serif text-[28px] italic text-copper leading-none">4,9</div>
          <div className="text-copper tracking-[2px] text-[13px]">★★★★★</div>
        </div>

        {/* On récupère les données du tableau reviews avec .map dans le fichier @/data/static_data */}
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-6">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="border border-cream border-t-[3px] border-t-copper p-6 bg-linen h-[286px] overflow-scroll"
            >
              <div className="text-copper tracking-[3px] text-[14px] pb-4">{r.note}</div>
              <p className="font-serif text-[15px] lg:text-[17px] italic text-ink leading-[1.8] pb-4">
                "{r.comment}"
              </p>

              <div className="text-[12px] font-bold uppercase text-ink">
                {r.author}
              </div>

              <div className="text-[12px] text-stone italic mt-1">
                {r.menu} - {r.date}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


