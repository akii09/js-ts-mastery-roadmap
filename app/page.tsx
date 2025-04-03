"use client"

import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { RoadmapHeader } from "@/components/roadmap-header"
import { RoadmapPhase } from "@/components/roadmap-phase"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TableOfContents } from "@/components/table-of-contents"
import { ProgressBar } from "@/components/progress-bar"
import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"
import { shareRoadmap, downloadAsPDF } from "@/lib/utils/roadmap-utils"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fix hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ProgressBar progress={scrollProgress} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8 sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-4 border-b">
          <h2 className="text-lg font-bold hidden sm:block">JS & TS Mastery Roadmap</h2>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex"
              onClick={shareRoadmap}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex"
              onClick={downloadAsPDF}
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents />
            </div>
          </div>

          <div className="lg:col-span-3">
            <RoadmapHeader />

            <div className="space-y-16 mt-12">
              <RoadmapPhase
                phase="1"
                title="Master Advanced JavaScript"
                description="Even if you have 4+ years of experience, going deeper will give you an edge over other developers."
                steps={[
                  {
                    title: "JavaScript Deep Dive",
                    topics: [
                      "Execution Context & Call Stack (How JS code runs internally)",
                      "Scopes & Closures (Memory optimization & security)",
                      "Event Loop & Concurrency (Master async behavior)",
                      "Prototype & Inheritance (Write efficient OOP code)",
                      "Memory Management & Performance (Prevent memory leaks)",
                    ],
                    resources: [
                      { title: "You Don't Know JS (Book)", link: "https://github.com/getify/You-Dont-Know-JS" },
                      { title: "JavaScript.info", link: "https://javascript.info/" },
                      {
                        title: "Event Loop Explained (Philip Roberts)",
                        link: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
                      },
                    ],
                    tip: "Build a custom JS debugger to visualize scopes & closures.",
                  },
                  {
                    title: "Functional Programming (FP) in JS",
                    description: "Functional Programming reduces bugs & makes code more readable.",
                    topics: [
                      "Higher-Order Functions (map, reduce, filter)",
                      "Immutability & Side Effects",
                      "Currying & Partial Application",
                      "Composition vs Inheritance",
                    ],
                    resources: [
                      {
                        title: "Functional-Light JavaScript (Book)",
                        link: "https://github.com/getify/Functional-Light-JS",
                      },
                      {
                        title: "Functional Programming in JavaScript",
                        link: "https://www.youtube.com/watch?v=e-5obm1G_FY",
                      },
                    ],
                    tip: "Rebuild Lodash utilities like _.compose(), _.memoize().",
                  },
                  {
                    title: "Master Asynchronous JavaScript",
                    description: "Async programming is used everywhere (APIs, DBs, WebSockets, etc.)",
                    topics: [
                      "Promises & Async/Await (Advanced)",
                      "Web APIs & Worker Threads",
                      "Event Loop in Detail",
                      "Streams & Generators",
                    ],
                    resources: [
                      {
                        title: "MDN Promises & Async/Await Guide",
                        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
                      },
                      { title: "JS Event Loop Deep Dive", link: "https://www.youtube.com/watch?v=8aGhZQkoFbQ" },
                    ],
                    tip: "Build an API rate limiter using Promises & Worker Threads.",
                  },
                ]}
              />

              <RoadmapPhase
                phase="2"
                title="Become a TypeScript Power User"
                steps={[
                  {
                    title: "Deep Dive into TypeScript",
                    description: "TypeScript reduces bugs & makes large-scale projects scalable.",
                    topics: [
                      "Type Inference & Structural Typing",
                      "Mapped, Conditional, & Utility Types",
                      "TSConfig Optimization",
                      "Module Augmentation & Declaration Merging",
                    ],
                    resources: [
                      { title: "TypeScript Handbook (Official)", link: "https://www.typescriptlang.org/docs/" },
                      { title: "Effective TypeScript (Book)", link: "https://effectivetypescript.com/" },
                      { title: "TypeScript Masterclass", link: "https://www.youtube.com/watch?v=RRubcjpTkks" },
                    ],
                    tip: "Build a TS-first utility library with mapped types.",
                  },
                ]}
              />

              <RoadmapPhase
                phase="3"
                title="Build High-Level Industry Projects"
                steps={[
                  {
                    title: "Build a Dev-Focused JS Library (Mini-Lodash)",
                    description: "Building a real-world dev library teaches modularization & publishing.",
                    topics: [
                      "String Utilities (e.g., camelCase, kebabCase)",
                      "Array Manipulation (e.g., deepFlatten, unique)",
                      "Async Helpers (e.g., retry, debounce, throttle)",
                      "Functional Utilities (e.g., compose, memoize)",
                    ],
                    resources: [
                      { title: "How to Publish an NPM Package", link: "https://docs.npmjs.com/packages-and-modules" },
                      {
                        title: "Creating a TypeScript Library",
                        link: "https://dev.to/dewaldels/javascript-library-starter-using-typescript-5o4g",
                      },
                    ],
                    tip: "Implement curry() & compose() like Ramda.",
                  },
                  {
                    title: "Contribute to Open Source Projects",
                    description: "Open Source lets you learn from industry pros.",
                    topics: ["Lodash (GitHub)", "TypeScript ESLint (GitHub)", "Deno/Bun (GitHub)"],
                    resources: [
                      {
                        title: "How to Contribute to Open Source",
                        link: "https://opensource.guide/how-to-contribute/",
                      },
                    ],
                    tip: "Start with fixing small bugs, then move to feature development.",
                  },
                ]}
              />

              <RoadmapPhase
                phase="4"
                title="Build a Custom Dev Tool & Become an Expert"
                steps={[
                  {
                    title: "Build an Industry-Level Dev Tool",
                    description: "Big companies need optimized developer tooling.",
                    topics: [
                      "JS Bundler (like Vite/ESBuild)",
                      "Static Site Generator (like Astro)",
                      "Modern UI Framework (like SolidJS)",
                      "Minimalist State Management (like Zustand)",
                    ],
                    resources: [
                      { title: "Writing a JS Runtime (Bun)", link: "https://github.com/oven-sh/bun" },
                      { title: "How Vite Works (Video)", link: "https://www.youtube.com/watch?v=U6IOp6l-UfM" },
                    ],
                    tip: "Start with a simple Babel/ESBuild plugin before making a full framework.",
                  },
                ]}
              />

              <RoadmapPhase
                phase="5"
                title="Lead Your Own Open Source Project"
                description="Final Goal: Build & maintain your own TypeScript-first Dev Library."
                steps={[
                  {
                    title: "Launch Your Library on:",
                    topics: ["GitHub (for visibility)", "NPM (for easy usage)", "Product Hunt (for marketing)"],
                    resources: [{ title: "The Ultimate Open Source Guide", link: "https://opensource.guide/" }],
                    tip: "Build a dev-friendly API with great docs.",
                  },
                ]}
              />
            </div>

            <div className="mt-16 p-8 border border-border rounded-xl bg-card/50 backdrop-blur-sm shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-2">🎯</span> Final Thoughts & Action Plan
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-background/50 p-4 rounded-lg border border-border/50 flex items-start">
                  <span className="mr-3 text-2xl">📅</span>
                  <div>
                    <h3 className="font-semibold">Timeline</h3>
                    <p>6-12 months of focused learning and building</p>
                  </div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border/50 flex items-start">
                  <span className="mr-3 text-2xl">💡</span>
                  <div>
                    <h3 className="font-semibold">Focus</h3>
                    <p>Deep dive into JS & TS, then build + contribute</p>
                  </div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border/50 flex items-start">
                  <span className="mr-3 text-2xl">📢</span>
                  <div>
                    <h3 className="font-semibold">Share</h3>
                    <p>Blog about learnings on Dev.to or Medium</p>
                  </div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border/50 flex items-start">
                  <span className="mr-3 text-2xl">💪</span>
                  <div>
                    <h3 className="font-semibold">End Goal</h3>
                    <p>Launch your own industry-level JS/TS dev tool 🚀</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 mb-8 text-center">
              <p className="text-muted-foreground">Created with ❤️ for JavaScript and TypeScript developers</p>
              <p className="text-xs text-muted-foreground mt-2">Last updated: April 2025</p>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>
    </div>
  )
}

