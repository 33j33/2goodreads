const books: Book[] = [
  {
    id: "1",
    author: "jai",
    name: "booke one",
    description: "lorem ispum",
    img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
    rating: 0,
  },
  {
    id: "2",
    author: "jai",
    name: "book two",
    description: "lorem ispum",
    img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
    rating: 0,
  },
  {
    id: "3",
    author: "jai",
    name: "book three",
    description: "lorem ispum",
    img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
    rating: 0,
  },
];

export const getBooks = () => books;

export const getBook = (id: string | undefined) =>
  books.find((book) => book.id === id);
