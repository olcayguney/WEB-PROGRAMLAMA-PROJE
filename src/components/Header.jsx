import React from "react";
import "./Header.css";

const Header = ({ username }) => {
  return (
    <header className="header">
      <h1 className="header-title">39 EMLAK</h1>
      {username && <p className="header-username">Hoş Geldiniz, {username}!</p>}
    </header>
  );
};

export default Header;