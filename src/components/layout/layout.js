import * as React from "react"
import { GlobalStyle } from "../styles/globleStyle"
import Header from "./Header"
// import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
