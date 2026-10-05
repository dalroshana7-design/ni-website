import React from 'react'
import { cn } from '@/lib/cn'

interface CaptionProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const Caption: React.FC<CaptionProps> = ({
  children,
  className,
  as = 'span',
}) => {
  const Tag = as as keyof JSX.IntrinsicElements
  const classes = cn(
    'text-caption text-text-tertiary',
    className
  )

  return React.createElement(Tag, { className: classes }, children)
}
