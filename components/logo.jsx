import { BookOpen } from "lucide-react"

export function Logo({ className }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="p-1 bg-primary rounded-md">
        <BookOpen className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">SnuSpace</span>
    </div>
  )
}