import { useParams } from "react-router-dom";
import { BookDetail } from "../../components";
import { useEffectOnceWhen } from "../../hooks";
import { getBook } from "../../store/book.slice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export function Book() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const book = useAppSelector((state) =>
    state.book.list.find((b) => b.id === id)
  );

  useEffectOnceWhen(
    !book && Boolean(id),
    () => {
      if (id) dispatch(getBook(id));
    },
    [id]
  );

  return <>{book ? <BookDetail book={book} /> : <h2>No book found</h2>}</>;
}
