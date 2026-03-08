// Icons
import ghostImg from '../../public/icons/ghost.png'
import promisseImg from '../../public/icons/promisse.png'
import oldImg from '../../public/icons/old.png'
import tritonImg from '../../public/icons/triton.png'

// Images
import fabricio from '../../public/photos/fabriciossauroCard.jpg'
import andre from '../../public/photos/andreCard.jpg'
import vitor from '../../public/photos/vitorCard.jpg'
import marcos from '../../public/photos/marcosCard.jpg'

import type { CardProps } from './props'

export const cardInfo: CardProps[] = [
  {
    name: "Bibikossauro",
    img_front: ghostImg,
    img_back: fabricio,
    title: "O FANTASMA",
    url: "fabricio",
  },
  {
    name: "André Cabaço",
    img_front: promisseImg,
    img_back: andre,
    title: "O VIRGEM",
    url: "andre",
  },
  {
    name: "Vitor Ancião",
    img_front: oldImg,
    img_back: vitor,
    title: "O VELHO",
    url: "vitor",
  },
  {
    name: "Marcos Sereio",
    img_front: tritonImg,
    img_back: marcos,
    title: "O BRABO",
    url: "marcos",
  },
];