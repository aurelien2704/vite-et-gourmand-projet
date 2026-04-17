import { Eyebrow, MainTitle } from "@/components/common/Headings";
export default function Header() {
  return (
    <header className="bg-velvet p-6 md:p-12">
      <Eyebrow label="Nos Menus" />
      <MainTitle title="Découvrez" highlight=" tous nos menus" />
    </header>
  );
}