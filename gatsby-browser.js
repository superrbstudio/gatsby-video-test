/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

 exports.onRouteUpdate = ({ location: { pathname }, prevLocation }) => {
  if (pathname === "/") {
    pathname = "home"
  }

  document.body.setAttribute(
    "class",
    `page ${[
      ...pathname
        .split("/")
        .filter(x => !!x)
        .map(slug => `page--${slug}`),
    ].join(" ")}`
  )
}