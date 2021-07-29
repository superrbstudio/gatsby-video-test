import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Video from "../components/video"

const IndexPage = ({
  data: {
    allPrismicVideo: { nodes },
  },
}) => (
  <>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    {nodes.map(node => (
      <Video data={node.data} />
    ))}

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allPrismicVideo {
      nodes {
        data {
          url {
            url
          }
          file {
            raw
          }
        }
      }
    }
  }
`
