"use client"

import { ExternalLink } from "lucide-react"

export default function ContributePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
      <h1 className="text-4xl font-bold mb-4">Contribute to SnuSpace</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Help fellow students by sharing past year papers, assignments, or notes.
      </p>

      <a
        href="https://forms.gle/ufQb9qRoaLcVsc137"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition"
      >
        Go to Contribution Form
        <ExternalLink className="ml-2 h-5 w-5" />
      </a>
    </div>
  )
}