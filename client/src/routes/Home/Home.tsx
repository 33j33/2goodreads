import { useEffect, useState } from "react";
// import { getBooks } from "../../api/books";
import { BookCard } from "../../components";
import { getBooks } from "../../store/book.slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./Home.scss";

export function Home() {
  // const books = getBooks();
  const dispatch = useAppDispatch();
  const [page] = useState(0);
  const books = useAppSelector((state) => state.book.list);

  useEffect(() => {
    dispatch(getBooks(page));
  }, [dispatch, page]);

  return (
    <div className="book-listing">
      {books.map((book, i) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
