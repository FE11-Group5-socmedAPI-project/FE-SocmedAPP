import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [cookie, setCookie] = useCookies([
    "token",
    "name",
    "user_id",
    "profile_foto",
  ]);

  const [name, setName] = useState();
  const [profile_foto, setProfile] = useState();

  useEffect(() => {
    setName(cookie.name);
    setProfile(cookie.profile_foto);
  }, []);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo px-20">
          <Link to="/home">SocialAPP</Link>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BsSearch className="searchIcon" />
          <input placeholder="search..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight px-46">
        <p className="people">{name}</p>
        <img
          src="https://cdn.kibrispdr.org/data/366/gambar-icon-orang-0.png"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Navbar;