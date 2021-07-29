export let animate
export let observer

if (typeof window !== "undefined" && "IntersectionObserver" in window) {
  const onIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        entry.target.classList.add("animated")
        observer.unobserve(entry.target)
      }
    })
  }

  observer = new IntersectionObserver(onIntersect, {
    rootMargin: "0px 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  animate = element => {
    if (!element || typeof element !== "object") {
      return
    }

    observer.observe(element)
  }
}
