import identite from "@/assets/identite-visuelle.jpg";
import affiches from "@/assets/affiches.jpg";
import siteWeb from "@/assets/site-web.jpg";
import photo from "@/assets/photographie-portrait.jpg";
import video from "@/assets/videographie.jpg";
import montage from "@/assets/montage-video.jpg";
import social from "@/assets/reseaux-sociaux.jpg";
import studio from "@/assets/studio-photographe.jpg";
import mobile from "@/assets/application-mobile.jpg";
import equipe from "@/assets/equipe-developpeurs.jpg";
import reunion from "@/assets/reunion-client.jpg";

export const contact = {
  email: "daoudcreative@gmail.com",
  phone: "78 663 03 92",
  phoneIntl: "221786630392",
  handle: "@daoud.creative",
  city: "Dakar, Sénégal",
  whatsapp: "https://wa.me/221786630392",
  instagram: "https://instagram.com/daoud.creative",
  facebook: "https://www.facebook.com/share/1CH7hCxDyc/?mibextid=wwXIfr",
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
  | "globe"
  | "smartphone"
  | "layers"
  | "cart"
  | "layout"
  | "server"
  | "pen"
  | "megaphone"
  | "camera"
  | "film"
  | "scissors"
  | "share";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: ServiceIcon;
  image: string;
  points: string[];
};

/** Core offer: web & mobile development. */
export const services: Service[] = [
  {
    slug: "sites-web",
    title: "Sites web sur mesure",
    short: "Sites vitrines, institutionnels et associatifs, rapides et faciles à mettre à jour.",
    long: "Nous concevons et développons des sites qui présentent clairement votre activité, s'affichent parfaitement sur téléphone et que vous pouvez faire évoluer sans nous.",
    icon: "globe",
    image: siteWeb,
    points: [
      "Sites vitrines & institutionnels",
      "Sites d'associations & d'organisations",
      "Portfolios & pages de lancement",
    ],
  },
  {
    slug: "applications-mobiles",
    title: "Applications mobiles",
    short: "Des applis Android et iOS simples à prendre en main pour vos clients ou vos membres.",
    long: "De l'idée à la publication sur les stores : nous dessinons les écrans, développons l'application et l'accompagnons après son lancement.",
    icon: "smartphone",
    image: mobile,
    points: ["Applications Android & iOS", "Prototypes cliquables", "Publication sur les stores"],
  },
  {
    slug: "plateformes-web",
    title: "Plateformes & applications web",
    short:
      "Espaces membres, outils de gestion et tableaux de bord adaptés à votre façon de travailler.",
    long: "Quand un simple site ne suffit plus, nous construisons l'outil dont votre équipe a besoin : inscriptions, gestion, suivi, automatisations et intégration de l'IA.",
    icon: "layers",
    image: equipe,
    points: ["Espaces membres & clients", "Outils de gestion internes", "Intégration de l'IA"],
  },
  {
    slug: "boutiques-en-ligne",
    title: "Boutiques en ligne",
    short: "Vendez vos produits en ligne avec un catalogue clair et un paiement simple.",
    long: "Catalogue, panier, commandes et paiement : une boutique pensée pour vendre, y compris depuis un téléphone.",
    icon: "cart",
    image: social,
    points: ["Catalogue & fiches produits", "Paiement en ligne", "Suivi des commandes"],
  },
  {
    slug: "design-ui-ux",
    title: "Design d'interfaces (UI/UX)",
    short: "Des maquettes claires avant la première ligne de code.",
    long: "Nous imaginons le parcours de vos utilisateurs et dessinons chaque écran pour que votre site ou votre appli soit agréable et évident à utiliser.",
    icon: "layout",
    image: reunion,
    points: ["Parcours utilisateurs", "Maquettes & prototypes", "Refonte d'interfaces existantes"],
  },
  {
    slug: "hebergement-maintenance",
    title: "Mise en ligne & maintenance",
    short: "Nom de domaine, hébergement, mises à jour et référencement.",
    long: "Nous mettons votre projet en ligne et nous en occupons ensuite : sécurité, sauvegardes, corrections et améliorations pour qu'il reste rapide et visible sur Google.",
    icon: "server",
    image: montage,
    points: [
      "Nom de domaine & hébergement",
      "Mises à jour & sécurité",
      "Référencement Google (SEO)",
    ],
  },
];

/** Secondary offer: visual creation. */
export const creativeServices: Service[] = [
  {
    slug: "identite-visuelle",
    title: "Logos & identité visuelle",
    short: "Un logo et une charte qui racontent qui vous êtes.",
    long: "Logos, chartes graphiques et univers de marque cohérents, pour une image reconnaissable partout.",
    icon: "pen",
    image: identite,
    points: ["Création de logo", "Charte graphique", "Papeterie & cartes de visite"],
  },
  {
    slug: "supports-publicitaires",
    title: "Affiches & supports pub",
    short: "Des visuels qui attirent l'œil et font passer le message.",
    long: "Affiches, flyers, kakémonos et brochures, imprimés ou digitaux.",
    icon: "megaphone",
    image: affiches,
    points: ["Affiches & flyers", "Brochures & catalogues", "Bâches & kakémonos"],
  },
  {
    slug: "photographie",
    title: "Photographie",
    short: "Portraits, produits et événements, sublimés.",
    long: "Shootings studio ou en extérieur, photos produits et événements, avec une retouche soignée.",
    icon: "camera",
    image: photo,
    points: ["Portraits & corporate", "Photos produits", "Événements"],
  },
  {
    slug: "production-audiovisuelle",
    title: "Production audiovisuelle",
    short: "Des vidéos qui donnent vie à votre histoire.",
    long: "Spots, films institutionnels, clips et reportages, de l'écriture au tournage.",
    icon: "film",
    image: video,
    points: ["Spots publicitaires", "Films institutionnels", "Reportages"],
  },
  {
    slug: "montage-video",
    title: "Montage vidéo",
    short: "Un rythme, une couleur, une émotion.",
    long: "Montage, étalonnage, motion design et sous-titrage, prêts à diffuser.",
    icon: "scissors",
    image: montage,
    points: ["Montage & étalonnage", "Motion design", "Reels & TikTok"],
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

export type ProjectCategory = "Web" | "Mobile" | "Design" | "Photo" | "Vidéo";

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
  client?: string;
  url?: string;
  summary?: string;
};

export const featuredProject = {
  title: "DEESS Djamil",
  client: "Dahira des Élèves et Étudiants Sopey Seydi Djamil",
  url: "https://deess-djamil.org",
  domain: "deess-djamil.org",
  desktop: siteWeb,
  mobile,
  summary:
    "Le site officiel du dahira : sa présentation, son guide spirituel, ses commissions, ses activités et un parcours pour rejoindre la communauté.",
  scope: [
    "Design de l'interface",
    "Développement du site",
    "Affichage parfait sur téléphone",
    "Mise en ligne",
  ],
};

export const projects: Project[] = [
  {
    title: featuredProject.title,
    client: featuredProject.client,
    category: "Web",
    image: featuredProject.desktop,
    url: featuredProject.url,
  },
  { title: "Application mobile", category: "Mobile", image: mobile },
  { title: "Site vitrine", category: "Web", image: siteWeb },
  { title: "Identité de marque", category: "Design", image: identite },
  { title: "Série d'affiches", category: "Design", image: affiches },
  { title: "Portrait éditorial", category: "Photo", image: photo },
  { title: "Tournage au coucher du soleil", category: "Vidéo", image: video },
  { title: "Session studio", category: "Photo", image: studio },
  { title: "Montage & étalonnage", category: "Vidéo", image: montage },
];

export const values = [
  { title: "Écoute", text: "Nous prenons le temps de comprendre vos besoins et vos objectifs." },
  {
    title: "Solutions adaptées",
    text: "Chaque projet reçoit une réponse sur mesure, pensée pour vous.",
  },
  { title: "Souci du détail", text: "Chaque écran, chaque pixel, chaque ligne de code compte." },
  { title: "Satisfaction", text: "Votre réussite est notre meilleure carte de visite." },
];

export const steps = [
  {
    n: "01",
    title: "Écouter",
    text: "On échange sur votre projet, vos objectifs et vos utilisateurs.",
  },
  {
    n: "02",
    title: "Maquetter",
    text: "On dessine les écrans et le parcours avant de développer.",
  },
  {
    n: "03",
    title: "Développer",
    text: "On construit, on teste sur ordinateur et sur téléphone, on vous montre.",
  },
  {
    n: "04",
    title: "Lancer & suivre",
    text: "On met en ligne, on ajuste et on vous accompagne après.",
  },
];
