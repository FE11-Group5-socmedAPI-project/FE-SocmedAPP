import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo px-20">
          <Link to="/">SocialAPP</Link>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BsSearch className="searchIcon" />
          <input placeholder="search..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight px-46">
        <p className="people">Devi Andri</p>
        <img
          src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Navbar;
