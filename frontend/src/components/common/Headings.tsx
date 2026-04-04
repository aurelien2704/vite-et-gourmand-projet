//Composants titres réutilisables

type MainTitleProps = {
  title: string;
  highlight: string;
};

//Composant MainTitle : titre principal
export function MainTitle({ title, highlight }: MainTitleProps) {
  return (
    <>
      < h1 className="font-serif font-normal text-white leading-[1.05] mb-4" >
        <span className="text-[48px] md:text-[68px] block">{title}</span>
        <span className="text-[48px] md:text-[68px] text-copper block">{highlight}</span>
      </h1 >
    </>
  );
}

type EyebrowProps = {
  label: string;
};

//Composant Eyebrow : petit titre au dessus du titre principal, avec une ligne à gauche
export function Eyebrow({ label }: EyebrowProps) {
  return (
    <>
      <div className="flex items-center gap-3 pb-4">
        <span className="inline-block w-8 h-px bg-copper" />
        <span className="text-[12px] tracking-[4px] uppercase text-copper">
          {label}
        </span>
      </div>
    </>
  );
}

type SectionTitleProps = {
  title: string;
  highlight: string;
};

//Composant SectionTitle : titre principal de chaque section
export function SectionTitle({ title, highlight }: SectionTitleProps) {
  return (
    <>
      <h2 className="text-[32px] md:text-[38px] font-normal text-ink leading-[1.1] mb-10">
        {title} <span className="italic text-copper">{highlight}</span>
      </h2>
    </>
  );
}