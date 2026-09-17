export interface Vetement {
  id: number;
  nom: string;
  prix: number;
  categorie: string;
  taille: string;
  etat: string;
  description: string;
  disponible: boolean;
}

export const VETEMENTS: Vetement[] = [
  {
    id: 1,
    nom: 'Robe fleurie vintage',
    prix: 8500,
    categorie: 'Robes',
    taille: 'M',
    etat: 'Très bon état',
    description: 'Robe légère à motifs floraux, parfaite pour l\'été. Coupe fluide et confortable.',
    disponible: true
  },
  {
    id: 2,
    nom: 'Veste en jean délavée',
    prix: 12000,
    categorie: 'Vestes',
    taille: 'L',
    etat: 'Bon état',
    description: 'Veste en jean classique, légèrement délavée pour un look authentique.',
    disponible: true
  },
  {
    id: 3,
    nom: 'Chemise à carreaux',
    prix: 6000,
    categorie: 'Hauts',
    taille: 'S',
    etat: 'Très bon état',
    description: 'Chemise en flanelle à carreaux, idéale pour un style casual chic.',
    disponible: false
  },
  {
    id: 4,
    nom: 'Pantalon cargo',
    prix: 9500,
    categorie: 'Pantalons',
    taille: 'M',
    etat: 'Comme neuf',
    description: 'Pantalon cargo streetwear avec poches multiples, coupe ample.',
    disponible: true
  },
  {
    id: 5,
    nom: 'Hoodie oversize',
    prix: 7000,
    categorie: 'Hauts',
    taille: 'L',
    etat: 'Bon état',
    description: 'Sweat à capuche oversize, coupe streetwear tendance.',
    disponible: true
  },
  {
    id: 6,
    nom: 'Jupe plissée',
    prix: 5500,
    categorie: 'Jupes',
    taille: 'S',
    etat: 'Très bon état',
    description: 'Jupe plissée élégante, à porter avec un haut simple.',
    disponible: true
  }
];