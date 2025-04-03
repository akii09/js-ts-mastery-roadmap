"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const phases = [
    { id: "phase-1", title: "Master Advanced JavaScript" },
    { id: "phase-2", title: "Become a TypeScript Power User" },
    { id: "phase-3", title: "Build High-Level Industry Projects" },
    { id: "phase-4", title: "Build a Custom Dev Tool" },
    { id: "phase-5", title: "Lead Your Own Open Source Project" },
  ]

  return (
    <div className="bg-card rounded-xl p-5 border border-border shadow-sm">
      <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {phases.map((phase) => (
          <li key={phase.id}>
            <button
              onClick={() => scrollToSection(phase.id)}
              className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors ${
                activeSection === phase.id ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              <ChevronRight
                className={`h-4 w-4 mr-2 transition-transform ${activeSection === phase.id ? "rotate-90" : ""}`}
              />
              {phase.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

