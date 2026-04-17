//Liens de navigation
export const nav: { href: string; label: string }[] = [
  { href: "/", label: "Accueil" },
  { href: "/pages/page-nos-menus", label: "Nos menus" },
  { href: "/pages/page-contact", label: "Contact" },
];

//Statistiques page d'accueil
export const stats: { value: string; label: string }[] = [
  { value: "25", label: "Années d'expertise" },
  { value: "700+", label: "Événements réalisés" },
  { value: "9", label: "Thèmes de menus" },
  { value: "100%", label: "Fait maison" },
]

//Section de présentation page d'accueil
export const presentation: Record<string, string>[] = [
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

//Arguments de qualité page d'accueil
export const args: Record<string, string>[] = [
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

//Avis clients page d'accueil
export const reviews: Record<string, string>[] = [
  {
    author: "Marie D.",
    note: "★★★★★",
    comment: "Un repas de Noël mémorable. La qualité des produits et la présentation étaient irréprochables. Nos invités en parlent encore trois mois après.",
    menu: "Menu Noël",
    date: "Décembre 2025",
  },
  {
    author: "Camille T.",
    note: "★★★★★",
    comment: "Le banquet de notre séminaire d'entreprise était très raffiné et le service impeccable.",
    menu: "Menu Événement pro",
    date: "Juin 2025",
  },
  {
    author: "Frédéric L.",
    note: "★★★★★",
    comment: "L'expérience Vite & Gourmand pour l'anniversaire de mes 50 ans a été une réussite. Les plats et le gâteau étaient sublimes.",
    menu: "Menu Anniversaire",
    date: "Mars 2026",
  },
];