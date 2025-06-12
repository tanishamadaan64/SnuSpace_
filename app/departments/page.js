import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const departments = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    description: "Access resources for CSD courses",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "ece",
    name: "Electrical and Computer Engineering",
    description: "Resources for ECE and EED courses",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    description: "Materials for MED courses",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "bms",
    name: "Business Management Studies",
    description: "Resources for  MGT, MKT, DOM, OHM, STM, ISM courses",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "eng",
    name: "English",
    description: "Resources for ENG courses",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "eco",
    name: "Economics",
    description: "Resources for ECO courses",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "phy",
    name: "Physics",
    description: "Resources for PHY courses",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "des",
    name: "Design",
    description: "Resources for DES courses",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "ccc",
    name: "CCC",
    description: "Resources for CCCs",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "mat",
    name: "Mathematics",
    description: "Resources for MAT courses",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "fac",
    name: "Finance, Accounting and Control",
    description: "Resources for FAC courses",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "com",
    name: "Communication",
    description: "Resources for COM courses",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "sw",
    name: "Swayam",
    description: "Resources for swayam",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop",
  }
]

export default function DepartmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Academic Departments</h1>
          <p className="text-xl text-muted-foreground">
            Browse resources by department to find past year papers and course materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Card key={dept.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <Image
                  src={dept.image || "/placeholder.svg"}
                  alt={dept.name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{dept.name}</CardTitle>
                <CardDescription>{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">View available resources</p>
              </CardContent>
              <CardFooter>
                <Link href={`/departments/${dept.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Browse Department
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Find Your Department?</h2>
          <p className="text-muted-foreground mb-6">
            We're constantly expanding our collection. If your department isn't listed, please let us know.
          </p>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}