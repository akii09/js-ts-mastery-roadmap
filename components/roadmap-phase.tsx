"use client"

import { useState } from "react"
import { BookOpen, ExternalLink, Lightbulb, ListChecks, ChevronRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useLocalStorage } from "@/lib/hooks/use-local-storage"

type Resource = {
  title: string
  link: string
}

type Step = {
  title: string
  description?: string
  topics: string[]
  resources: Resource[]
  tip: string
}

interface RoadmapPhaseProps {
  phase: string
  title: string
  description?: string
  steps: Step[]
}

export function RoadmapPhase({ phase, title, description, steps }: RoadmapPhaseProps) {
  const [completedTopics, setCompletedTopics] = useLocalStorage<Record<string, boolean>>(
    `roadmap-phase-${phase}-completed`,
    {}
  )

  const phaseEmojis: Record<string, string> = {
    "1": "🌟",
    "2": "🔥",
    "3": "🚀",
    "4": "🏆",
    "5": "🌟",
  }

  const toggleTopic = (stepIndex: number, topicIndex: number) => {
    const key = `${stepIndex}-${topicIndex}`
    setCompletedTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section id={`phase-${phase}`} className="scroll-mt-16 relative">
      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-primary/5 hidden lg:block"></div>

      <div className="flex items-center space-x-3 mb-6">
        <Badge variant="outline" className="text-lg px-4 py-1.5 border-primary bg-primary/5 text-primary font-semibold">
          Phase {phase}
        </Badge>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {phaseEmojis[phase]} {title}
        </h2>
      </div>

      {description && <p className="text-muted-foreground mb-8 text-lg">{description}</p>}

      <div className="space-y-8">
        {steps.map((step, stepIndex) => (
          <Card key={stepIndex} className="border-border overflow-hidden transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3 bg-muted/30">
              <CardTitle className="text-xl flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  {stepIndex + 1}
                </span>
                {step.title}
              </CardTitle>
              {step.description && (
                <p className="text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">Why?</span> {step.description}
                </p>
              )}
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <div className="flex items-center mb-3">
                  <ListChecks className="h-5 w-5 mr-2 text-primary" />
                  <h4 className="font-semibold">Topics to Master:</h4>
                </div>
                <ul className="ml-7 space-y-2">
                  {step.topics.map((topic, topicIndex) => {
                    const isCompleted = completedTopics[`${stepIndex}-${topicIndex}`]
                    return (
                      <li key={topicIndex} className="flex items-start group">
                        <button
                          onClick={() => toggleTopic(stepIndex, topicIndex)}
                          className="mr-2 mt-0.5 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                        >
                          <CheckCircle2
                            className={`h-5 w-5 ${isCompleted ? "text-green-500 fill-green-500" : "text-muted-foreground group-hover:text-primary"}`}
                          />
                        </button>
                        <span className={isCompleted ? "line-through text-muted-foreground" : ""}>{topic}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <Separator />

              <div>
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  <h4 className="font-semibold">Best Resources:</h4>
                </div>
                <ul className="ml-7 space-y-2">
                  {step.resources.map((resource, i) => (
                    <li key={i} className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                      <Link
                        href={resource.link}
                        className="flex items-center hover:text-primary transition-colors underline-offset-4 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.title}
                        <ExternalLink className="h-3 w-3 ml-1.5 opacity-70" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start pt-2 bg-primary/5 p-4 rounded-lg border border-primary/10">
                <Lightbulb className="h-6 w-6 mr-3 text-yellow-500 dark:text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Pro Tip:</h4>
                  <p className="text-muted-foreground">{step.tip}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

