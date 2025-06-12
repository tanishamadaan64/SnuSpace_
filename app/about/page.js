import { Briefcase, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">About SnuSpace</h1>

        <div className="prose prose-lg max-w-none prose-invert">
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
              alt="SNU Campus Library"
              width={800}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

          <p className="text-xl text-white mb-8">
            SnuSpace is a student-led initiative designed to make academic resources more accessible to all students at
            Shiv Nadar University.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Our Mission</h2>
          <p className="mb-6 text-white">
            Our mission is to create a centralized platform where students can easily access past year papers, course
            materials, and other academic resources across all departments. We believe that having access to these
            materials can significantly improve the learning experience and help students prepare better for their
            examinations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Academic Excellence</h3>
              <p className="text-white/80">
                Supporting students in achieving their academic goals through better resource access.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Community Building</h3>
              <p className="text-white/80">
                Creating a collaborative environment where students help each other succeed.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Resource Sharing</h3>
              <p className="text-white/80">
                Facilitating the sharing of valuable academic resources among students.
              </p>
            </div>
          </div>

        

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">How It Works</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-6">
            <div className="md:w-1/2">
              <p className="mb-4 text-white">
                SnuSpace organizes resources by department, course, and academic year, making it easy for students to
                find exactly what they need. All materials are contributed by students and faculty members who want to
                help others succeed.
              </p>
              <p className="text-white">
                We verify all uploaded content to ensure it meets our quality standards and is free from copyright
                issues. Our platform is continuously updated with new resources as they become available.
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
                alt="Resource Organization"
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Join Us</h2>
          <p className="mb-6 text-white">
            SnuSpace is a community-driven platform, and we welcome contributions from all students. If you have past
            year papers, notes, or other academic resources that you'd like to share, please use our contribute feature
            to upload them.
          </p>
          <p className="mb-6 text-white">Together, we can create a valuable resource that benefits the entire SNU community.</p>
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=300&q=80"
              alt="Join Our Community"
              width={800}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}