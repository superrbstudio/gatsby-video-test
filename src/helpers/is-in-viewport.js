/**
 * Check if the element is currently within the viewport
 *
 * @param {HTMLElement} element
 * @param {object}      offset
 *
 * @return {bool}
 */
export default function isInViewport(element, offset = { x: 0, y: 0 }) {
  const {
    top,
    left,
    bottom,
    right,
    width,
    height,
  } = element.getBoundingClientRect()

  return (
    !(width === 0 && height === 0) &&
    top <= window.innerHeight + offset.y &&
    bottom >= 0 - offset.y &&
    left <= window.innerWidth + offset.x &&
    right >= 0 - offset.x
  )
}
