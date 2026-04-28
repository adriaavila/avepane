"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/activities/integracion.jpg",
  "/activities/arte-manualidades.jpg",
  "/activities/capacitacion.jpg",
  "/activities/deporte.jpg"
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-96 lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Imagen ${index + 1} de la comunidad AVEPANE`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}
