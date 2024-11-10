import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/">YouTube</Link>
        <input type="text" placeholder="Search" />
        <Link to="/login">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
