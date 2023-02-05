import { useParams } from "react-router-dom";
import { getBook } from "../../api/books";
import { BookDetail } from "../../components";

export function Book() {
  const { id } = useParams();
  const book = getBook(id);
  return <>{book && <BookDetail book={book} />}</>;
}
