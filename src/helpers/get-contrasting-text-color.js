import hexToRgb from "./hex-to-rgb"

export default function getContrastingTextColor (backgroundColor = '#ffcd00') {
  const { r, g, b } = hexToRgb(backgroundColor)
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff'
}