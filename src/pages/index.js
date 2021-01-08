import React from "react"
import Layout from "../components/layout"
import Social from "../components/social"
import Data from "../components/data"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Home({data}) {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <div className="nav">
        <a aria-label="main" href="/">
          <h1 className="title">{data.site.siteMetadata.title}</h1>
        </a>
        <Social />
      </div>
      <Data />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
       }
    }
  }
`
