import { useEffect, useState } from "react";
import { OFFSET } from "../../api/books";
// import { getBooks } from "../../api/books";
import { BookCard } from "../../components";
import { getBooks } from "../../store/book.slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./Home.scss";

export function Home() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const books = useAppSelector((state) => state.book.list);
  const isLastPage = books.length < OFFSET;

  const onNext = () => {
    dispatch(getBooks(page + 1));
    setPage((p) => p + 1);
  };
  const onPrev = () => {
    dispatch(getBooks(page - 1));
    setPage((p) => p - 1);
  };

  useEffect(() => {
    dispatch(getBooks(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="book-listing">
        {books.map((book, i) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="paginate-cta">
        <button disabled={page === 0} onClick={onPrev}>
          Prev
        </button>
        <button disabled={isLastPage} onClick={onNext}>
          Next
        </button>
      </div>
    </>
  );
}
