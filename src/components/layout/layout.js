import * as React from "react"
import { GlobalStyle } from "../styles/globleStyle"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
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
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
