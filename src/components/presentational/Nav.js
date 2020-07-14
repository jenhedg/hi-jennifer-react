import React from "react";
import NavLink from "./NavLink";

const Nav = ({ items }) => (
  <nav>
    <h1>Logo</h1>
    <ul className="nav-list">
      {items.map(({ href, title }) => {
        return (
          <NavLink
            href={href}
            title={title}
            key={`nav-link--${href}`}
          ></NavLink>
        );
      })}
    </ul>
  </nav>
);

export default Nav;
