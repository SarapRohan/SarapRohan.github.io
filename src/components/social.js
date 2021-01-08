import React from "react"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import "./social.scss"
import {useStaticQuery, graphql } from "gatsby"
export default function Social() {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        social {
          instagram
          twitter
          github
        }
      }
    }
  }
`)
  return (
    <div className="icons">
      <a className="icon" aria-label="Instagram" href={data.site.siteMetadata.social.instagram}>
        <FaInstagram size={20} />
      </a>
      <a className="icon" aria-label="Twitter" href={data.site.siteMetadata.social.twitter}>
        <FaTwitter size={20} />
      </a>
      <a className="icon" aria-label="Github" href={data.site.siteMetadata.social.github}>
        <FaGithub size={20} />
      </a>
    </div>
  )
}
