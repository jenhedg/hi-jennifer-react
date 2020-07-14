import React from "react";
import { NavLink } from "react-router-dom";

export default ({ href, title }) => (
  <li>
    <NavLink exact activeClassName="active" to={href}>
      {title}
    </NavLink>
  </li>
);
