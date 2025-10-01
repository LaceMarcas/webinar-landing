"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Card className="p-4 min-w-[100px] bg-primary text-primary-foreground">
        <div className="text-3xl sm:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <div className="text-sm text-center mt-1">Días</div>
      </Card>
      <Card className="p-4 min-w-[100px] bg-primary text-primary-foreground">
        <div className="text-3xl sm:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <div className="text-sm text-center mt-1">Horas</div>
      </Card>
      <Card className="p-4 min-w-[100px] bg-primary text-primary-foreground">
        <div className="text-3xl sm:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <div className="text-sm text-center mt-1">Minutos</div>
      </Card>
      <Card className="p-4 min-w-[100px] bg-primary text-primary-foreground">
        <div className="text-3xl sm:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <div className="text-sm text-center mt-1">Segundos</div>
      </Card>
    </div>
  )
}
