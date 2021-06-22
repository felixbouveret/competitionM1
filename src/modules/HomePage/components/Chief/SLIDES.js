import chop from './assets/chop.png'
import cleanclean from './assets/chop.png'
import chopchop from './assets/chopchop.png'
import vegetables from './assets/vegetables.png'

export default [
  {
    menuText: 'LA SELECTION',
    step: 'PREMIÈRE ÉTAPE',
    title: 'VOS PLATS DE LA SEMAINE',
    description: 'Choisissez vos plats, le nombre de convives et vos disponibilités. Nous vous proposons de nouvelles recettes toutes les semaines et les personnalisons à vos besoins.',
    img: chop
  },
  {
    menuText: 'LES ALIMENTS',
    step: 'deuxième ÉTAPE',
    title: 'Les courses gérées par votre chef',
    description: 'Votre chef s\'occupe de vos courses alimentaires auprès de nos boutiques partenaires sélectionnées pour la qualité de leurs produits.',
    img: vegetables
  },
  {
    menuText: 'LA PRÉPARATION',
    step: 'TROISième ÉTAPE',
    title: 'La préparation à domicile',
    description: 'Une fois par semaine, votre chef cuisine à votre domicile et range vos plats prêts à être dégustés dans votre frigo.',
    img: chopchop
  },
  {
    menuText: 'LE NETTOYAGE',
    step: 'quatrième ÉTAPE',
    title: 'Le nettoyage de votre cuisine',
    description: 'Votre chef s\'occupe de vos courses alimentaires auprès de nos boutiques partenaires sélectionnées pour la qualité de leurs produits.',
    img: cleanclean
  },
]