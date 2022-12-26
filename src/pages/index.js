import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import HeroSection from "../components/sections/heroSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
