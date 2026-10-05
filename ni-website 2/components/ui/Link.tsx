import React from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/cn'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  underline?: boolean
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  external = false,
  underline = true,
}) => {
  const classes = cn(
    'text-text-primary hover:text-accent-primary transition-colors duration-150',
    underline && 'hover:underline',
    className
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className={classes}>
      {children}
    </NextLink>
  )
}
