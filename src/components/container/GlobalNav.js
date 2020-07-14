import React from "react";
import Nav from "../presentational/Nav";

class GlobalNav extends React.Component {
  state = {
    items: [
      {
        href: "/",
        title: "Home",
      },
      {
        href: "/work",
        title: "Work",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return <Nav items={items}></Nav>;
  }
}

export default GlobalNav;
