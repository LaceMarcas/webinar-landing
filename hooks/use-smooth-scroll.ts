"use client"

interface SmoothScrollOptions {
  duration?: number
  easing?: 'linear' | 'easeInOut' | 'easeIn' | 'easeOut'
  offset?: number
}

export function useSmoothScroll() {
  const scrollToElement = (
    elementId: string,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 800,
      easing = 'easeInOut',
      offset = 80 // Offset por defecto para header sticky
    } = options

    const element = document.getElementById(elementId)
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    // Función de easing personalizada
    const easingFunctions = {
      linear: (t: number) => t,
      easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeIn: (t: number) => t * t,
      easeOut: (t: number) => t * (2 - t)
    }

    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    let startTime: number | null = null

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      const easingFunction = easingFunctions[easing]
      const run = easingFunction(progress)

      window.scrollTo(0, startPosition + distance * run)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return { scrollToElement }
}