import ClientsReviewSection from "@/components/home/ClientsReviewSection";
import KnowHowSection from "@/components/home/KnowHowSection";
import MainSection from "@/components/home/MainSection";
import PresentationSection from "@/components/home/PresentationSection";

//Page d'accueil
//Chaque section est développée dans un composant dans @/components/home
export default function Home() {
  return (
    <main>
      {/*Section principale : titre, image, CTA*/}
      <MainSection />
      {/*Section présentation : histoire et promesse*/}
      <PresentationSection />
      {/*Section savoir-faire : 5 arguments*/}
      <KnowHowSection />
      {/*Section avis clients*/}
      <ClientsReviewSection />
    </main>
  );
}