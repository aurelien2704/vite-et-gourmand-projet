import Link from "next/link";

//Composant CTA
type CallToActionProps = {
  href: string;
  label: string;
};

export default function CallToAction({ href, label }: CallToActionProps) {
  return (
    <>
      <Link
        href={href}
        className="bg-copper text-ink px-10 py-4 text-[13px] tracking-[15%] uppercase font-bold
                hover:bg-copperlight hover:scale-105 transition-transform duration-300 inline-block">
        {label}
      </Link>
    </>
  );
}