import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkDisplay = links.map((link)=> <a key={link} href={"#" + link}>{link}</a>)


  return <nav>{linkDisplay}</nav>;
}

export default NavBar;
