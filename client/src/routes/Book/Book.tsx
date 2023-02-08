import { useParams } from "react-router-dom";
import { BookDetail } from "../../components";
import { useAppSelector } from "../../store/store";

export function Book() {
  const { id } = useParams();
  const book = useAppSelector((state) =>
    state.book.list.find((b) => b.id === id)
  );
  return <>{book ? <BookDetail book={book} /> : <h2>No book found</h2>}</>;
}
