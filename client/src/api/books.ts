// const books: Book[] = [
//   {
//     id: "1",
//     author: "Stephen King",
//     name: "booke one",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//     img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
//     avgRating: 1,
//     price: 300,
//   },
//   {
//     id: "2",
//     author: "jai",
//     name: "book two",
//     description: "lorem ispum",
//     img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
//     avgRating: 2,
//     price: 300,
//   },
//   {
//     id: "3",
//     author: "jai",
//     name: "book three",
//     description: "lorem ispum",
//     img: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png",
//     avgRating: 3.3,
//     price: 300,
//   },
// ];

// export const getBooks = () => books;

// export const getBook = (id: string | undefined) =>
//   books.find((book) => book.id === id);

export const fetchBooks = async (page: number = 0) => {
  try {
    const OFFSET = 5;
    const take = OFFSET;
    const skip = page * OFFSET;
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/books?skip=${skip}&take=${take}`
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const books = (await res.json()) as Book[];
    return books;
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

export const createRating = async ({
  review,
  rating,
  bookId,
}: {
  review: string;
  rating: number;
  bookId: string;
}) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review, rating, bookId }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return (await res.json()) as Rating;
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
