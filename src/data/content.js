// Content extracted from the original Claude Design "Portfolio minimaliste Geist" project.

export const PROJECTS = [
  {
    slug: 'shoptongba', n: '01', title: 'Shoptongba', bg: '#E3DDCF', fg: '#111110',
    tagline: "Louer un véhicule en Côte d'Ivoire, simplement.",
    type: 'Plateforme web & mobile', role: 'Produit, UI/UX, Full Stack', market: "Côte d'Ivoire",
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Figma'],
    intro: "Une plateforme qui met en relation les clients et les agences de location de véhicules, pour rendre la recherche et la réservation aussi simples qu'un achat en ligne.",
    context: "En Côte d'Ivoire, la location de véhicules passe encore beaucoup par le bouche-à-oreille, les appels et les messageries. Les agences manquent de visibilité ; les clients manquent de transparence sur les prix et les disponibilités.",
    problem: "Rendre l'offre lisible, comparable et réservable — sans compliquer la vie des agences.",
    goals: ["Centraliser l'offre des agences sur une seule plateforme", "Rendre la recherche, la comparaison et la réservation fluides", "Donner aux agences un outil simple pour gérer flotte et réservations"],
    roleText: "De la définition du produit au déploiement : cadrage, parcours utilisateurs, design des interfaces client et agence, puis développement front-end et back-end.",
    da: "Une interface sobre, pensée mobile d'abord, où le véhicule reste le héros. Hiérarchie claire des prix et des disponibilités, et un espace agence volontairement utilitaire.",
    result: "Une plateforme qui réunit clients et agences autour d'un parcours de réservation clair, et une base solide pour faire évoluer le service.",
    learn: "Concevoir pour deux publics à la fois oblige à arbitrer en permanence entre simplicité et contrôle.",
  },
  {
    slug: 'subci', n: '02', title: 'Subci', bg: '#F77F00', fg: '#111110',
    tagline: 'Partager ses abonnements. Revendre ce qui ne sert plus.',
    type: 'Marketplace web', role: 'Produit, UI/UX, Full Stack', market: 'Abonnements numériques',
    stack: ['React', 'Node.js', 'MongoDB', 'Figma'],
    intro: "Une marketplace de partage et de revente d'abonnements numériques, pensée pour alléger le coût des services du quotidien.",
    context: "Streaming, musique, outils : les abonnements se multiplient et pèsent sur les budgets. Beaucoup de places restent inutilisées, et les échanges informels entre particuliers manquent de cadre et de confiance.",
    problem: "Créer de la confiance entre inconnus autour d'un bien immatériel.",
    goals: ["Structurer le partage et la revente d'abonnements", "Installer la confiance entre vendeurs et acheteurs", "Offrir un parcours d'achat rapide et transparent"],
    roleText: "Conception du concept et du modèle, design de l'expérience d'achat et de vente, développement de la plateforme.",
    da: "Une identité directe et rassurante : des écrans épurés, des statuts explicites et une information toujours visible au bon moment.",
    result: "Un produit qui transforme un usage informel en un service structuré, lisible et fiable.",
    learn: "Sur une marketplace, la confiance se conçoit : chaque micro-texte, chaque statut, chaque confirmation compte.",
  },
  {
    slug: 'tiakoli', n: '03', title: 'Tiakolisé et fière', bg: '#0d0907', fg: '#F4EFE8',
    tagline: 'Mélo Décalé — série limitée.', type: 'E-commerce · drop', role: 'Conception & développement',
    market: 'Abidjan', stack: ['Web', 'Mobile', 'Paiement mobile'],
    intro: '', context: '', problem: '', goals: [], roleText: '', da: '', result: '', learn: '',
  },
  {
    slug: 'thelab', n: '05', title: 'Thelab', bg: '#111110', fg: '#EDEBE6',
    tagline: 'Un studio pour transformer les idées en produits.',
    type: 'Studio indépendant', role: 'Fondateur, direction créative', market: 'Marques & entreprises',
    stack: ['Stratégie', 'Design', 'Web', 'Mobile'],
    intro: "Mon studio indépendant de conception et de développement de solutions digitales — de la réflexion stratégique jusqu'au produit livré.",
    context: "Beaucoup de porteurs de projet doivent coordonner plusieurs prestataires pour passer de l'idée au produit. Le sens se perd entre la stratégie, le design et le code.",
    problem: "Une seule équipe qui tient le fil, de la première idée au produit final.",
    goals: ["Accompagner les projets de bout en bout", "Allier exigence de design et rigueur technique", "Construire une identité de studio claire et reconnaissable"],
    roleText: "Fondateur : vision du studio, direction créative, conception des offres et réalisation des projets.",
    da: "Une identité typographique, minimaliste et assumée — le travail parle, la marque s'efface juste assez.",
    result: "Un cadre pour mener des projets digitaux complets avec une approche cohérente et exigeante.",
    learn: "Monter un studio, c'est concevoir un produit comme un autre : il faut une promesse claire et des preuves.",
  },
  {
    slug: 'helloci', n: '04', title: 'Hello-ci', bg: '#102E6A', fg: '#EDEBE6', tagline: 'Faites grande impression.',
    type: 'Site vitrine', role: 'Design & développement web', market: "Signalétique & branding — Côte d'Ivoire",
    stack: ['HTML / CSS', 'JavaScript', 'Responsive', 'Brief WhatsApp'],
    url: 'https://www.hello-ci.com/',
    srcHero: 'https://www.hello-ci.com/assets/amani.jpg', srcG2: 'https://www.hello-ci.com/assets/wolf.jpg',
    srcG3: 'https://www.hello-ci.com/assets/villa.jpg', srcG4: 'https://www.hello-ci.com/assets/abok.jpg',
    intro: "Le site de Hello-ci, fabrique d'identités visibles en Côte d'Ivoire : façades en Alucobond, enseignes lumineuses, totems, branding et stands.",
    context: "Le métier de Hello-ci est physique : de la matière, du volume, de la lumière. Le défi était de transmettre cette présence à l'écran, et de transformer la visite en demande de projet.",
    problem: "Faire ressentir une enseigne en relief sur un écran plat.",
    goals: ["Mettre les réalisations au premier plan, en grand", "Présenter clairement les cinq savoir-faire", "Transformer l'intérêt en brief, directement sur WhatsApp"],
    roleText: "Conception de l'expérience, direction visuelle et développement du site, du parcours des réalisations jusqu'au formulaire de brief.",
    da: "Un ton affirmé et une typographie expressive, des photos de réalisations en plein cadre, un bleu profond qui laisse briller la lumière des enseignes.",
    result: "Un site vitrine qui donne du caractère à la marque et un parcours de contact direct : le visiteur choisit son besoin, le message est prêt dans WhatsApp.",
    learn: "Quand le produit est physique, le site doit vendre une sensation avant de vendre un service.",
  },
  {
    slug: 'pro', n: '06', title: 'Projets pro.', bg: '#CDD3C8', fg: '#111110',
    tagline: 'Réalisations en entreprise & collaborations clients.',
    type: 'Sélection de missions', role: 'Développement, design', market: 'Entreprises & clients',
    stack: ['Web', 'Mobile', 'UI/UX', 'API'],
    intro: "Une sélection de réalisations développées dans le cadre de mes expériences en entreprise et de collaborations avec des clients.",
    context: "Chaque mission a ses contraintes : équipes en place, délais, systèmes existants. L'enjeu est de s'intégrer vite et d'apporter de la valeur sans tout reconstruire.",
    problem: "Livrer de la qualité dans un cadre qui n'est pas le sien.",
    goals: ["S'intégrer rapidement aux équipes et aux outils", "Livrer des interfaces solides et maintenables", "Porter une attention constante à l'expérience utilisateur"],
    roleText: "Selon les missions : conception d'interfaces, développement front-end et back-end, accompagnement produit.",
    da: "Des réponses adaptées à chaque marque, avec une constante : clarté, cohérence et soin du détail.",
    result: "Des projets livrés en équipe, dans des contextes variés.",
    learn: "Le contexte est une contrainte de design comme une autre.",
  },
];
PROJECTS.sort((a, b) => a.n.localeCompare(b.n));

export const CUSTOM = { shoptongba: 1, subci: 1, tiakoli: 1, helloci: 1 };

export const WORLDS = [
  { slug: 'shoptongba', bg: '#0d0a09', fg: '#f3ede2', kind: 'Mobilité' },
  { slug: 'subci', bg: '#FF5A1F', fg: '#16130F', kind: 'Abonnements' },
  { slug: 'tiakoli', bg: '#0d0907', fg: '#F4EFE8', kind: 'Drop' },
  { slug: 'helloci', bg: '#102E6A', fg: '#F3F1EC', kind: 'Enseignes' },
];

const STI = 'https://shoptongba.ci/images/';

export const CARS = [
  { name: 'Suzuki Swift', ag: 'Yopougon Drive', st: 'Disponible', price: '18 000 FCFA / jour', img: STI + 'photos/swift.jpg' },
  { name: 'Hyundai Tucson', ag: 'Cocody Rent', st: 'Disponible', price: '30 000 FCFA / jour', img: STI + 'photos/tucson.jpg' },
  { name: 'Toyota RAV4', ag: 'Abidjan Auto Location', st: 'Disponible', price: '35 000 FCFA / jour', img: STI + 'photos/rav4.jpg' },
  { name: 'Mercedes Classe C', ag: 'Prestige Cars CI', st: 'Dès demain', price: '65 000 FCFA / jour', img: STI + 'photos/classe-c.jpg' },
  { name: 'Toyota Land Cruiser', ag: 'Abidjan Auto Location', st: 'Disponible', price: '90 000 FCFA / jour', img: STI + 'photos/land-cruiser.jpg' },
];

export const SHOP_STEPS = [
  { n: '01', t: 'Choisis ton véhicule', d: 'Découvre les véhicules disponibles autour de toi.', img: STI + 'app/step-1.webp' },
  { n: '02', t: 'Compare les offres', d: 'Compare les prix et les conditions en quelques secondes.', img: STI + 'app/step-2.webp' },
  { n: '03', t: 'Réserve simplement', d: 'Choisis ton véhicule et prépare ton prochain trajet.', img: STI + 'app/step-3.webp' },
];

export const SHOP_ROLES = [
  { t: 'UI/UX', d: 'Parcours de recherche, de comparaison et de réservation ; interfaces client et agence.' },
  { t: 'Front-end', d: "Une interface rapide et responsive, pensée mobile d'abord." },
  { t: 'Back-end', d: 'Agences, véhicules, disponibilités et réservations : la logique métier.' },
  { t: 'Mobile', d: "L'expérience de réservation dans la poche du conducteur." },
];

export const TIAKO_STEPS = [
  { n: '01', t: 'Panier', d: "On choisit sa pièce, sa taille, on ajoute au panier." },
  { n: '02', t: 'Coordonnées', d: 'Nom, téléphone, commune : la livraison Yango se prépare.' },
  { n: '03', t: 'Paiement', d: "Orange Money ou Wave, puis la capture est envoyée sur WhatsApp pour valider la précommande." },
];

export const HELLO_SERVICES = [
  { n: '01', t: 'Façades en Alucobond', d: 'Habillage architectural, devantures, finitions.' },
  { n: '02', t: 'Enseignes & lettres en relief', d: 'Lettres 3D, rétroéclairage, caissons lumineux.' },
  { n: '03', t: 'Totems & signalétique', d: 'Totems, plaques, signalétique directionnelle.' },
  { n: '04', t: 'Branding & impression', d: 'Identité visuelle, grand format, supports de marque.' },
  { n: '05', t: 'Stands & événementiel', d: 'Stands, roll-up, kakémonos, oriflammes, photocalls.' },
];

export const HELLO_CHOICES = ['Habiller mon bâtiment', 'Faire remarquer mon commerce', 'Déployer mon image de marque', 'Me démarquer à un événement'];

export const TERMS = {
  code: { k: 'Développement', d: 'Full Stack, web & mobile. Des produits robustes, rapides et maintenables.', tags: 'Front-end · Back-end · API · Mobile' },
  design: { k: 'Design', d: 'UI/UX, interfaces et expériences. Des parcours clairs, des interfaces qui ont du caractère.', tags: 'Interfaces · Parcours · Prototypes' },
  produit: { k: 'Produit', d: "Conception, réflexion et réalisation de produits digitaux — de l'idée au lancement.", tags: 'Cadrage · Stratégie · MVP' },
  exp: { k: 'Le résultat', d: "Je conçois et développe des expériences digitales, de la première idée jusqu'au produit final.", tags: 'Une seule personne · trois disciplines' },
};

export const EXPERIENCE = [
  { period: "Aujourd'hui", org: 'THELAB', role: 'Fondateur', kind: 'Studio' },
  { period: '[Période]', org: '[Entreprise]', role: '[Poste]', kind: 'Entreprise' },
  { period: '[Période]', org: '[Client]', role: '[Mission]', kind: 'Collaboration' },
];

export const PRINCIPLES = [
  { n: '01', t: 'Comprendre avant de construire.', d: "Chaque projet commence par des questions : pour qui, pourquoi, et qu'est-ce qui compte vraiment." },
  { n: '02', t: 'La simplicité est un choix.', d: "Retirer jusqu'à ce qu'il ne reste que l'essentiel — dans l'interface comme dans le code." },
  { n: '03', t: 'Livrer, puis affiner.', d: 'Un produit vit. On le met entre de vraies mains, on observe, on améliore.' },
];

export const SKILLS = [
  { t: 'Je code', items: ['Front-end', 'Back-end', 'Web & mobile', 'API & intégrations'] },
  { t: 'Je dessine', items: ['Interfaces (UI)', 'Expérience (UX)', 'Prototypage', 'Systèmes de design'] },
  { t: 'Je conçois', items: ['Conception produit', 'Réflexion stratégique', 'Direction créative', 'Lancement de MVP'] },
];

export const FICHE = [
  { k: 'Basé à', v: "Abidjan, Côte d'Ivoire" },
  { k: 'Profil', v: 'Développeur · Designer · Produit' },
  { k: 'Studio', v: 'THELAB (fondateur)' },
  { k: 'Statut', v: 'Disponible pour projets' },
];

export const LENS = [['idee', 'Idée'], ['maquette', 'Maquette'], ['code', 'Code'], ['produit', 'Produit']];
export const TYPES = ['un produit digital', 'un site web', 'une application mobile', 'une interface'];
export const GOALS = ["qu'on en discute", 'un devis', 'travailler ensemble'];

export const PROCESS_STEPS = [
  { n: '01', t: 'Idée', d: 'Comprendre le contexte, les usagers et les enjeux. Poser les bonnes questions avant toute solution.' },
  { n: '02', t: 'Maquette', d: 'Structurer les parcours, prototyper, tester puis affiner les interfaces.' },
  { n: '03', t: 'Code', d: 'Construire une base solide, intégrer, sécuriser, optimiser.' },
  { n: '04', t: 'Produit', d: 'Déployer, observer les usages réels et itérer.' },
];
