"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/departments" className="text-sm font-medium hover:text-primary transition-colors">
            Departments
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/contribute">
            <Button>Contribute</Button>
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="container py-4 flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/departments" className="text-sm font-medium" onClick={toggleMenu}>
              Departments
            </Link>
            <Link href="/faq" className="text-sm font-medium" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/contribute" onClick={toggleMenu}>
              <Button className="w-full">Contribute</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
