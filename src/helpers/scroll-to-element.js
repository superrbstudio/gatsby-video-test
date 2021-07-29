/**
 * Smoothly scroll to an element on the page
 *
 * @param {HTMLElement} element
 * @param {Number} duration
 *
 * @return {void}
 */
export default function scrollToElement(element) {
  const from = window.pageYOffset
  const to = element.getBoundingClientRect().top + window.pageYOffset

  window.scrollTo({
    top: to,
    left: 0,
    behavior: 'smooth'
  })
}