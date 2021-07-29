import React from "react"
import { Link } from "gatsby"
import linkResolver from "./link-resolver"

const GatsbyLink = ({ type, element, content, className, children, index }) => {
  if (element.link_type === "Document") {
    return (
      <>
        {element.raw && (
          <Link
            to={linkResolver(element.raw)}
            key={element.raw.id}
            target={element.target}
            className={className}
          >
            {content}
          </Link>
        )}
      </>
    )
  }

  if (element.link_type === "Web" || element.link_type === "Media") {
    return (
      <a href={element.url} target={element.target} className={className}>
        {content}
      </a>
    )
  }
  return <></>
}

export default GatsbyLink