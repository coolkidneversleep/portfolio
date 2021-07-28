import * as React from "react"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import "../styles/header.css"
import ContactMenu from "./contact_menu"
const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent:'space-between', padding: '1rem', paddingLeft:"50px"}}>
      <div>
        <a href="/" id="nav">Home</a>
      </div>
      <div style={{width: '50vw',display:'flex',justifyContent:'flex-end'}}>
        <a href="/my-works" id="nav">My works</a>
        <a href="/about-me" id="nav">About me</a>
        <ContactMenu />
      </div>
    </header >
    )
}
export default Header
