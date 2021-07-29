import { LiveNodeList } from "live-node-list"
import isInViewport from "./is-in-viewport"
import scrollToElement from "./scroll-to-element"
;(() => {
  const SELECTOR = 'a[href^="#"]'
  const links = new LiveNodeList(SELECTOR)

  links.addEventListener("click", event => {
    event.preventDefault()

    const link = event.currentTarget || event.target
    const element = document.getElementById(link.href.split("#").pop())

    if (element) {
      scrollToElement(element)
    }
  })
})()
