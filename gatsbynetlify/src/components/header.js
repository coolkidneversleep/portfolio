import * as React from "react"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import "../styles/header.css"
import ContactMenu from "./contact_menu"
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <header className="header">
      <div>
        <a href="/" id="nav">Home</a>
      </div>
      <div className="nav_box" >
        <a href="/my-works"  id="nav_last">My works</a>
        <a href="/about-me" id="nav_last">About me</a>
        <ContactMenu />
      </div>
    </header >
    )
}
export default Header
