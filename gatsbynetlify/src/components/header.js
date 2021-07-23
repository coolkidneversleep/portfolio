import * as React from "react"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import "../styles/header.css"
import ContactMenu from "./contact_menu"
const Header = () => {
    return(
      <AppBar className="appbar" position="fixed">
        <Toolbar>
        <div style={{display:"flex", paddingLeft:"45px", paddingTop: "15px"}}>
          <a href="/" className="header_txt">
              Home
          </a>
          <div style={{display:"flex", paddingLeft:"650px"}}>
              <a href="/" className="header_txt">My works</a>
              <a href="/about-me"className="header_txt">About me</a>
              <ContactMenu />
          </div>
        </div>
        </Toolbar>
      </AppBar>
    )
}
export default Header
