import fabricio from "/photos/fabricio.jpg?url";
import andre from "/photos/andre.jpg?url";
import vitor from "/photos/vitor.jpg?url";
import marcos from "/photos/marcos.jpg?url";
import luis from "/photos/luis.jpg?url";
import afonso from "/photos/afonso.jpg?url";

import type { InfoProps } from "./props";

const dateConverter = (date: string) => {
  const [day, month] = date.split("/").map(Number);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let nextBirthdayDate = new Date(currentYear, month - 1, day);
  
  if (nextBirthdayDate < currentDate) {
    nextBirthdayDate = new Date(currentYear + 1, month - 1, day);
  }
  
  const dayUntilBirthday = Math.ceil((nextBirthdayDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

  return dayUntilBirthday;
}

const ageCalculator = (birthday: string) => {
  const birth = birthday.split("/").map(Number);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  
  let age = currentYear - birth[2];
  
  if (currentMonth < birth[1] || (currentMonth === birth[1] && currentDay < birth[0])) {
    age--;
  }
  
  return age;
}

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
    age: ageCalculator("09/06/2003"),
    birthday: "09/06/2003",
    url: "fabricio",
    daysUntilBirthday: dateConverter("09/06/2003"),
    kisses: 123412,
    beers: 12341234,
    rejections: 5678,
  },
  {
    name: "André Ferraz",
    perfilImg: andre,
    title: "O Virgem",
    description: `Dizem que cada pessoa tem uma missão na vida. 
    Uns querem mudar o mundo, outros querem ficar ricos… 
    mas este homem escolheu uma jornada muito mais épica: 
    a lendária saga contra o próprio cabaço.`,
    age: ageCalculator("07/03/2003"),
    birthday: "07/03/2003",
    url: "andre",
    daysUntilBirthday: dateConverter("07/03/2003"),
    kisses: 0,
    beers: 12341234,
    rejections: 5678,
  },
  {
    name: "Vitor Coutinho",
    perfilImg: vitor,
    title: "O VELHO",
    description: `Reclamou da invenção do fogo porque “antigamente era melhor”, 
    e sempre começa as histórias com “no meu tempo…”. Ninguém sabe exatamente a idade dele, 
    mas arqueólogos já consideram usar ele como referência histórica.`,
    age: ageCalculator("12/09/2002"),
    birthday: "12/09/2002",
    url: "vitor",
    daysUntilBirthday: dateConverter("12/09/2002"),
    kisses: 15,
    beers: 13,
    rejections: 8,
  },
  {
    name: "Marcos Bueno",
    perfilImg: marcos,
    title: "O BRABO",
    description: `Tão brabo que ninguém sabe exatamente por quê, mas todo mundo concorda que é. 
    Não importa a situação: no jogo, no rolê ou na discussão mais aleatória, 
    ele sempre dá um jeito de agir como se estivesse no nível máximo enquanto o 
    resto ainda tá no tutorial.`,
    age: ageCalculator("23/07/2003"),
    birthday: "23/07/2003",
    url: "marcos",
    daysUntilBirthday: dateConverter("23/07/2003"),
    kisses: 123412,
    beers: 12341234,
    rejections: 56782,
  },
  {
    name: "Luis Felipe",
    perfilImg: luis,
    title: "O GUERREIRO",
    description: `Tão brabo que ninguém sabe exatamente por quê, mas todo mundo concorda que é. 
    Não importa a situação: no jogo, no rolê ou na discussão mais aleatória, 
    ele sempre dá um jeito de agir como se estivesse no nível máximo enquanto o 
    resto ainda tá no tutorial.`,
    age: ageCalculator("23/07/2003"),
    birthday: "23/07/2003",
    url: "luis",
    daysUntilBirthday: dateConverter("23/07/2003"),
    kisses: 123412,
    beers: 12341234,
    rejections: 56782,
  },
  {
    name: "Afonso Holtman",
    perfilImg: afonso,
    title: "O comerciante",
    description: `Tão brabo que ninguém sabe exatamente por quê, mas todo mundo concorda que é. 
    Não importa a situação: no jogo, no rolê ou na discussão mais aleatória, 
    ele sempre dá um jeito de agir como se estivesse no nível máximo enquanto o 
    resto ainda tá no tutorial.`,
    age: ageCalculator("23/07/2003"),
    birthday: "23/07/2003",
    url: "afonso",
    daysUntilBirthday: dateConverter("23/07/2003"),
    kisses: 123412,
    beers: 12341234,
    rejections: 56782,
  },
];
