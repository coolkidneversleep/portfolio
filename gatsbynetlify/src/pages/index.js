import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => {
  return(
    <div>
      <Header />
      <div style={{padding:"150px", fontFamily:"Quicksand"}}>
        <h2 style={{fontWeight:"normal", fontFamily:"Quicksand"}}>kaewket saelee</h2>
        <h1 style={{fontFamily:"Quicksand"}}>Computer Science Student, KMUTT</h1>
      </div>
    
    </div>
    
  )
}

export default IndexPage
