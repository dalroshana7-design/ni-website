import React from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  bgColor?: 'primary' | 'alt'
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  bgColor = 'primary',
}) => {
  const bgClasses = bgColor === 'alt' ? 'bg-bg-alt' : 'bg-bg-primary'
  
  const classes = cn(
    'w-full py-20 md:py-24 lg:py-32',
    bgClasses,
    className
  )

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
