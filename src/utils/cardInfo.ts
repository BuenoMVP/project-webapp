// Icons
import ghostImg from '/icons/ghost.png?url'
import promisseImg from '/icons/promisse.png?url'
import oldImg from '/icons/old.png?url'
import tritonImg from '/icons/triton.png?url'
import militaryImg from '/icons/military.png?url'
import sellerImg from '/icons/seller.png?url'

// Images
import fabricio from '/photos/fabriciossauroCard.jpg?url'
import andre from '/photos/andreCardNew.jpg?url'
import vitor from '/photos/vitorCard.jpg?url'
import marcos from '/photos/marcosCard.jpg?url'
import luis from '/photos/luisModelo.jpg?url'
import afonso from '/photos/afonsoCard.jpg?url'

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
  {
    name: "Luis Milíco",
    img_front: militaryImg,
    img_back: luis,
    title: "O GUERREIRO",
    url: "luis",
  },
  {
    name: "Afonseller",
    img_front: sellerImg,
    img_back: afonso,
    title: "O COMERCIANTE",
    url: "afonso",
  },
];