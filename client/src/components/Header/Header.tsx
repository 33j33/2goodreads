import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.scss";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="title">
          <Logo />
          <Link to={`/`}>2goodreads</Link>
        </div>
      </div>
    </header>
  );
}
