import { useParams } from "react-router-dom";
import { getBook } from "../../api/books";

export function Book() {
  const { id } = useParams();
  const book = getBook(id);
  return (
    <div>
      <h1>{book?.author}</h1>
      <p>{book?.description}</p>
    </div>
  );
}
