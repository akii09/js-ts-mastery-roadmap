import { Rocket, Code, Zap, Sparkles, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function RoadmapHeader() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <Badge variant="outline" className="w-fit text-sm px-3 py-1 border-primary/50 bg-primary/5 text-primary">
          2024-2025 Edition
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
          Ultimate Roadmap to Mastering JavaScript & TypeScript
        </h1>
      </div>
      <p className="text-xl text-muted-foreground max-w-3xl">
        A comprehensive guide to becoming an expert JavaScript and TypeScript developer through deep learning, practical
        projects, and open source contributions.
      </p>

      <div className="mt-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Rocket className="h-5 w-5 mr-2 text-primary" />
          Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-lg bg-background/80 border border-border/50 flex flex-col items-center text-center">
            <Code className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-medium">Phase 1</h3>
            <p className="text-sm text-muted-foreground">Master Advanced JavaScript</p>
          </div>
          <div className="p-4 rounded-lg bg-background/80 border border-border/50 flex flex-col items-center text-center">
            <Zap className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-medium">Phase 2</h3>
            <p className="text-sm text-muted-foreground">Go Deep into TypeScript</p>
          </div>
          <div className="p-4 rounded-lg bg-background/80 border border-border/50 flex flex-col items-center text-center">
            <Layers className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-medium">Phase 3</h3>
            <p className="text-sm text-muted-foreground">Build Industry Projects</p>
          </div>
          <div className="p-4 rounded-lg bg-background/80 border border-border/50 flex flex-col items-center text-center">
            <Sparkles className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-medium">Phase 4</h3>
            <p className="text-sm text-muted-foreground">Contribute to Open Source</p>
          </div>
          <div className="p-4 rounded-lg bg-background/80 border border-border/50 flex flex-col items-center text-center">
            <Rocket className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-medium">Phase 5</h3>
            <p className="text-sm text-muted-foreground">Become an Industry Expert</p>
          </div>
        </div>
      </div>
    </div>
  )
}

