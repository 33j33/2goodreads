const books: Book[] = [
  {
    id: "1",
    author: "Stephen King",
    name: "booke one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
    rating: 1,
    price: 300,
  },
  {
    id: "2",
    author: "jai",
    name: "book two",
    description: "lorem ispum",
    img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
    rating: 2,
    price: 300,
  },
  {
    id: "3",
    author: "jai",
    name: "book three",
    description: "lorem ispum",
    img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
    rating: 3.3,
    price: 300,
  },
];

export const getBooks = () => books;

export const getBook = (id: string | undefined) =>
  books.find((book) => book.id === id);
