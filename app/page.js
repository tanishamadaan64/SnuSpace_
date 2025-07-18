import Link from "next/link"
import { ArrowRight, BookOpen, FileText, GraduationCap, PenTool } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedHero } from "@/components/animated-hero"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to <span className="text-primary">SnuSpace</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your one-stop platform for accessing past year papers, course materials, and resources for all
                departments at SNU.
              </p>
            </div>

            {/* Animated Hero */}
            <AnimatedHero />

            <div className="space-x-4 pt-6">
              <Link href="/departments">
                <Button className="px-8">
                  Browse Departments
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Everything You Need</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Access resources from all departments and courses in one place.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Past Year Papers</CardTitle>
                <CardDescription>Access previous years' question papers for better exam preparation.</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Past Year Papers"
                    width={250}
                    height={150}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Course Materials</CardTitle>
                <CardDescription>Organized by year and course for easy navigation.</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Course Materials"
                    width={250}
                    height={150}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full mb-2">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Study Notes</CardTitle>
                <CardDescription>Student-contributed lecture notes and study materials for exam prep.</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550592704-6c76defa9985?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Study Notes"
                    width={250}
                    height={150}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="w-full py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Popular Departments</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Explore resources from our most accessed departments.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Computer Science"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Computer Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access past papers, course materials, and resources.</p>
              </CardContent>
              <CardFooter>
                <Link href="/departments/cse" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <Image
                  src= "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop"
                  alt="Electronics"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Electrical and Computer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access past papers, course materials, and resources.</p>
              </CardContent>
              <CardFooter>
                <Link href="/departments/ece" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
             <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <Image
                  src= "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                  alt="Business Management Studies"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>BMS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access past papers, course materials, and resources.</p>
              </CardContent>
              <CardFooter>
                <Link href="/departments/bms" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          
           
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/departments">
              <Button variant="outline">
                View All Departments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contribute to SnuSpace</h2>
              <p className="max-w-[600px] md:text-xl">
                Help your fellow students by sharing past year papers and resources.
              </p>
              <Link href="/contribute">
                <Button variant="secondary" size="lg" className="px-8">
                  Contribute Now
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-lg overflow-hidden max-w-md">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Students collaborating"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
