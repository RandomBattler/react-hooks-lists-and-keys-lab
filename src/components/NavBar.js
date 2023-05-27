import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navlist = links.map((link) => {
    const l = "#"+link;
    return <a key={link} href={l}>{link}</a>;
  });

  return <nav>{navlist}</nav>;
}

export default NavBar;
