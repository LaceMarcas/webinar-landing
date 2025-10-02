"use client"

import { useSmoothScroll } from "./use-smooth-scroll"

export function useScrollToRegistration() {
  const { scrollToElement } = useSmoothScroll()

  const scrollToRegistration = () => {
    scrollToElement("registro", {
      duration: 800,
      easing: 'easeInOut',
      offset: 80 // Offset para header sticky
    })
  }

  return { scrollToRegistration }
}