import facebookIcon from '@/assets/icons/facebook.svg'
import instagramIcon from '@/assets/icons/instagram.svg'

export const socials = [
  {
    icon: facebookIcon,
    text: 'facebookIcon',
    url: '#'
  },
  {
    icon: instagramIcon,
    text: 'instagramIcon',
    url: '#'
  }
]
export const items = [
  {
    text: 'Accueil',
    url: '#',
  },
  {
    text: 'Le concept',
    url: '#',
    hasSubMenu: true,
    subItems: [
      {
        text: 'Le concept',
        url: '#',
      },
      {
        text: 'Contactez-nous',
        url: '#',
      },
      {
        text: 'Carte cadeau',
        url: '#',
      },
      {
        text: 'Parrainage',
        url: '#',
      },
    ]
  },
  {
    text: 'Contactez-nous',
    url: '#',
  },
  {
    text: 'Carte cadeau',
    url: '#',
  },
  {
    text: 'Parrainage',
    url: '#',
  },
]