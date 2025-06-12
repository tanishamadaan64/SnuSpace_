import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row py-10 md:py-12 gap-8">
        <div className="flex flex-col space-y-4 md:w-1/3">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          <p className="text-sm text-muted-foreground">
            Your one-stop platform for accessing past year papers, course materials, and resources for all departments
            at SNU.
          </p>
        
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 md:flex-1">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-muted-foreground hover:text-foreground">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Departments</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/departments/cse" className="text-muted-foreground hover:text-foreground">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/departments/ece" className="text-muted-foreground hover:text-foreground">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/departments/bms" className="text-muted-foreground hover:text-foreground">
                  BMS
                </Link>
              </li>
               <li>
                <Link href="/departments/eng" className="text-muted-foreground hover:text-foreground">
                  English
                </Link>
              </li>
               <li>
                <Link href="/departments/eco" className="text-muted-foreground hover:text-foreground">
                  Economics
                </Link>
              </li>
               <li>
                <Link href="/departments/des" className="text-muted-foreground hover:text-foreground">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/departments/ccc" className="text-muted-foreground hover:text-foreground">
                  CCC
                </Link>
              </li>
              <li>
                <Link href="/departments/mech" className="text-muted-foreground hover:text-foreground">
                  Mechanical
                </Link>
              </li>
              <li>
                <Link href="/departments/mat" className="text-muted-foreground hover:text-foreground">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link href="/departments/phy" className="text-muted-foreground hover:text-foreground">
                  Physics
                </Link>
              </li>
            </ul>
          </div>
         
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col sm:flex-row justify-between items-center py-6 text-sm">
          <p className="text-muted-foreground">© {new Date().getFullYear()} SnuSpace. All rights reserved.</p>
          <p className="text-muted-foreground mt-2 sm:mt-0">Made with ❤️ by students, for students</p>
        </div>
      </div>
    </footer>
  )
}
