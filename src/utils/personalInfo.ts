import fabricio from '../../public/photos/fabricioCard.jpg';
import andre from '../../public/photos/andreCard.jpg';
import vitor from '../../public/photos/vitorCard.jpg';
import marcos from '../../public/photos/marcosCard.jpg';

import type { InfoProps } from './props';

export const personalInfo: InfoProps[] = [
  {
    name: "Fabrício Bibiko",
    perfilImg: fabricio,
    description: "O FANTASMA",
    age: 25,
    birthday: "1999-05-15",
    url: "fabricio",
  },
  {
    name: "André Viado",
    perfilImg: andre,
    description: "O VIRGEM",
    age: 26,
    birthday: "1998-03-22",
    url: "andre",
  },
  {
    name: "Vitor Ancião",
    perfilImg: vitor,
    description: "O VELHO",
    age: 27,
    birthday: "1997-11-10",
    url: "vitor",
  },
  {
    name: "Marcos Sereio",
    perfilImg: marcos,
    description: "O BRABO",
    age: 24,
    birthday: "2000-07-08",
    url: "marcos",
  },
];