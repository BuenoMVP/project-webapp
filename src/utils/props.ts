export type CardProps = {
  img_front: string;
  img_back: string;
  name: string;
  title: string;
  url?: string;
};

export type InfoProps = {
  perfilImg: string;
  description: string;
  title: string
  name: string;
  age: number;
  birthday: string;
  url?: string;
  daysUntilBirthday: number;
  kisses: number;
  beers: number;
  rejections: number;
};