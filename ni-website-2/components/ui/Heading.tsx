import React from 'react'
import { cn } from '@/lib/cn'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
export type HeadingStyle = 'hero' | 'section' | 'subsection' | 'accent'

interface HeadingProps {
  level?: HeadingLevel
  style?: HeadingStyle
  children: React.ReactNode
  className?: string
  id?: string
}

const headingStyles: Record<HeadingStyle, Record<HeadingLevel, string>> = {
  hero: {
    h1: 'text-h1-hero font-bold tracking-tight',
    h2: 'text-h2-section font-semibold',
    h3: 'text-h3-subsection font-semibold',
    h4: 'text-h4-journey font-semibold',
  },
  section: {
    h1: 'text-h2-section font-semibold',
    h2: 'text-h2-section font-semibold',
    h3: 'text-h3-subsection font-semibold',
    h4: 'text-h4-journey font-semibold',
  },
  subsection: {
    h1: 'text-h3-subsection font-semibold',
    h2: 'text-h3-subsection font-semibold',
    h3: 'text-h3-subsection font-semibold',
    h4: 'text-h4-journey font-semibold',
  },
  accent: {
    h1: 'text-h1-hero font-bold tracking-tight',
    h2: 'text-h2-section font-semibold',
    h3: 'text-h3-subsection font-semibold',
    h4: 'text-h4-journey font-semibold',
  },
}

export const Heading: React.FC<HeadingProps> = ({
  level = 'h1',
  style = 'hero',
  children,
  className,
  id,
}) => {
  const Tag = level as keyof JSX.IntrinsicElements
  const baseClasses = headingStyles[style][level]
  const classes = cn(baseClasses, className)

  return React.createElement(Tag, { className: classes, id }, children)
}
