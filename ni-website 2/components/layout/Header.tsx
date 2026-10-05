'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import { Container } from './Container'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
]

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-nav font-semibold text-text-primary hover:text-accent-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            NI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-bg-hover rounded transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={cn(
                'w-5 h-0.5 bg-text-primary transition-all duration-300',
                isMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-5 h-0.5 bg-text-primary transition-all duration-300',
                isMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-5 h-0.5 bg-text-primary transition-all duration-300',
                isMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
