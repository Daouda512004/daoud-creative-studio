import identite from "@/assets/identite-visuelle.jpg";
import affiches from "@/assets/affiches.jpg";
import siteWeb from "@/assets/site-web.jpg";
import photo from "@/assets/photographie-portrait.jpg";
import video from "@/assets/videographie.jpg";
import montage from "@/assets/montage-video.jpg";
import social from "@/assets/reseaux-sociaux.jpg";
import studio from "@/assets/studio-photographe.jpg";

export const contact = {
  email: "daoudcreative@gmail.com",
  phone: "78 663 03 92",
  phoneIntl: "221786630392",
  handle: "@daoud.creative",
  city: "Dakar, Sénégal",
  whatsapp: "https://wa.me/221786630392",
  instagram: "https://instagram.com/daoud.creative",
  facebook: "https://facebook.com/daoud.creative",
  youtube: "https://youtube.com/@daoud.creative",
  telegram: "https://t.me/daoud_creative",
};

export const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceIcon =
  | "pen"
  | "megaphone"
  | "globe"
  | "layers"
  | "camera"
  | "film"
  | "scissors"
  | "share";

export const services: {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: ServiceIcon;
  image: string;
  points: string[];
}[] = [
  {
    slug: "identite-visuelle",
    title: "Logos & identité visuelle",
    short: "Un logo et une charte qui racontent qui vous êtes.",
    long: "Nous concevons des logos, chartes graphiques et univers de marque cohérents pour que votre image soit reconnaissable partout.",
    icon: "pen",
    image: identite,
    points: ["Création de logo", "Charte graphique", "Papeterie & cartes de visite"],
  },
  {
    slug: "supports-publicitaires",
    title: "Affiches & supports pub",
    short: "Des visuels qui attirent l'œil et font passer le message.",
    long: "Affiches, flyers, kakémonos, brochures : des supports imprimés et digitaux pensés pour marquer les esprits.",
    icon: "megaphone",
    image: affiches,
    points: ["Affiches & flyers", "Brochures & catalogues", "Bâches & kakémonos"],
  },
  {
    slug: "sites-web",
    title: "Sites web professionnels",
    short: "Des sites modernes, rapides et faciles à utiliser.",
    long: "Sites vitrines, portfolios ou boutiques : nous créons des sites élégants qui s'adaptent à tous les écrans.",
    icon: "globe",
    image: siteWeb,
    points: ["Sites vitrines", "Portfolios", "Boutiques en ligne"],
  },
  {
    slug: "plateformes-numeriques",
    title: "Plateformes numériques",
    short: "Des outils sur mesure pour digitaliser votre activité.",
    long: "Applications web, espaces membres, outils de gestion : nous développons les solutions numériques dont vous avez besoin.",
    icon: "layers",
    image: siteWeb,
    points: ["Applications web", "Espaces clients", "Intégration IA"],
  },
  {
    slug: "photographie",
    title: "Photographie",
    short: "Portraits, produits et événements, sublimés.",
    long: "Shootings studio ou en extérieur, photos produits et couverture d'événements, avec une retouche soignée.",
    icon: "camera",
    image: photo,
    points: ["Portraits & corporate", "Photos produits", "Événements"],
  },
  {
    slug: "production-audiovisuelle",
    title: "Production audiovisuelle",
    short: "Des vidéos qui donnent vie à votre histoire.",
    long: "Spots publicitaires, films institutionnels, clips et reportages : de l'écriture au tournage.",
    icon: "film",
    image: video,
    points: ["Spots publicitaires", "Films institutionnels", "Reportages"],
  },
  {
    slug: "montage-video",
    title: "Montage vidéo",
    short: "Un rythme, une couleur, une émotion.",
    long: "Montage, étalonnage, motion design et sous-titrage pour des vidéos prêtes à être diffusées.",
    icon: "scissors",
    image: montage,
    points: ["Montage & étalonnage", "Motion design", "Formats courts (Reels, TikTok)"],
  },
  {
    slug: "reseaux-sociaux",
    title: "Contenus réseaux sociaux",
    short: "Une présence en ligne régulière et engageante.",
    long: "Visuels, vidéos courtes et calendrier éditorial pour faire grandir votre communauté.",
    icon: "share",
    image: social,
    points: ["Visuels & carrousels", "Vidéos courtes", "Gestion de pages"],
  },
];

export type ProjectCategory = "Design" | "Web" | "Photo" | "Vidéo" | "Social";

export const projects: {
  title: string;
  category: ProjectCategory;
  image: string;
  tall?: boolean;
}[] = [
  { title: "Identité de marque", category: "Design", image: identite },
  { title: "Portrait éditorial", category: "Photo", image: photo, tall: true },
  { title: "Site vitrine", category: "Web", image: siteWeb },
  { title: "Série d'affiches", category: "Design", image: affiches },
  { title: "Tournage au coucher du soleil", category: "Vidéo", image: video },
  { title: "Campagne Instagram", category: "Social", image: social },
  { title: "Session studio", category: "Photo", image: studio, tall: true },
  { title: "Montage & étalonnage", category: "Vidéo", image: montage },
];

export const values = [
  { title: "Écoute", text: "Nous prenons le temps de comprendre vos besoins et vos objectifs." },
  { title: "Solutions adaptées", text: "Chaque projet reçoit une réponse sur mesure, pensée pour vous." },
  { title: "Souci du détail", text: "Chaque pixel, chaque plan, chaque mot compte." },
  { title: "Satisfaction", text: "Votre réussite est notre meilleure carte de visite." },
];

export const steps = [
  { n: "01", title: "Écouter", text: "On échange sur votre projet, vos objectifs et votre public." },
  { n: "02", title: "Imaginer", text: "On propose des pistes créatives et une solution adaptée." },
  { n: "03", title: "Créer", text: "On produit avec soin, en vous tenant informé à chaque étape." },
  { n: "04", title: "Livrer", text: "On livre, on ajuste, et on vous accompagne après." },
];
