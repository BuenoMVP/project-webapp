import fabricio from "../../public/photos/fabricio.jpg";
import andre from "../../public/photos/andre.jpg";
import vitor from "../../public/photos/vitor.jpg";
import marcos from "../../public/photos/marcos.jpg";

import type { InfoProps } from "./props";

export const personalInfo: InfoProps[] = [
  {
    name: "Fabrício Costa",
    perfilImg: fabricio,
    title: "O Fantasma",
    description: `Ninguém sabe direito onde ele fica no resto do tempo, 
    mas as teorias mais aceitas dizem que ele está ocupado limpando o banheiro de casa 
    ou cumprindo escala fixa na igreja. 
    Quando finalmente aparece, todo mundo até se surpreende: 
    “Ué, você ainda existe?”. E antes que alguém consiga confirmar, 
    ele já desapareceu de novo.`,
    age: 25,
    birthday: "08/06/2003",
    url: "fabricio",
  },
  {
    name: "André Ferraz",
    perfilImg: andre,
    title: "O Virgem",
    description: `Dizem que cada pessoa tem uma missão na vida. 
    Uns querem mudar o mundo, outros querem ficar ricos… 
    mas este homem escolheu uma jornada muito mais épica: 
    a lendária saga contra o próprio cabaço.`,
    age: 26,
    birthday: "07/03/2003",
    url: "andre",
  },
  {
    name: "Vitor Coutinho",
    perfilImg: vitor,
    title: "O VELHO",
    description: `Reclamou da invenção do fogo porque “antigamente era melhor”, 
    e sempre começa as histórias com “no meu tempo…”. Ninguém sabe exatamente a idade dele, 
    mas arqueólogos já consideram usar ele como referência histórica.`,
    age: 27,
    birthday: "12/11/2002",
    url: "vitor",
  },
  {
    name: "Marcos Bueno",
    perfilImg: marcos,
    title: "O BRABO",
    description: `Tão brabo que ninguém sabe exatamente por quê, mas todo mundo concorda que é. 
    Não importa a situação: no jogo, no rolê ou na discussão mais aleatória, 
    ele sempre dá um jeito de agir como se estivesse no nível máximo enquanto o 
    resto ainda tá no tutorial.`,
    age: 24,
    birthday: "23/07/2003",
    url: "marcos",
  },
];
