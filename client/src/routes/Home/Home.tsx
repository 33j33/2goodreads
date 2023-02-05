import { getBooks } from "../../api/books";
import { BookCard } from "../../components";
import "./Home.scss";

export function Home() {
  const books = getBooks();
  return (
    <div className="book-listing">
      {books.map((book, i) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
