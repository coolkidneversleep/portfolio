import * as React from "react"
import "../styles/header.css"
import ContactMenu from "./contact_menu"

const Header = () => {
  return (
    <header className="header">
      <div>
        <a href="/" id="nav">Home</a>
      </div>
      <div className="nav_box" >
        <a href="/my-works"  id="nav_last">My works</a>
        <a href="/about-me" id="nav_last">About me</a>
        <ContactMenu style={{color:"#2C2E43"}}/>
      </div>
    </header >
    )
}
export default Header
