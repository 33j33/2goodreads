import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";

export function Home() {
  const books = getBooks();
  return (
    <div className="home-wrapper">
      {books.map((book, i) => (
        <div key={book.id}>
          <div className="book-title">
            <Link to={`book/${book.id}`}>{book.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
