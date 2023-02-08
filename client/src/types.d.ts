declare module "*.module.scss";
declare module "*.svg";

type Book = {
  id: string;
  name: string;
  author: string;
  description: string;
  img: string;
  avgRating: number;
  price: number;
  ratings: Rating[];
};

type Rating = {
  id: string;
  review: string;
  rating: number;
  bookId: string;
};
