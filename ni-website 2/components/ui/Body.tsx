import React from 'react'
import { cn } from '@/lib/cn'

type BodySize = 'lg' | 'base' | 'sm'

interface BodyProps {
  size?: BodySize
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const sizeClasses: Record<BodySize, string> = {
  lg: 'text-body-lg',
  base: 'text-body',
  sm: 'text-body-sm',
}

export const Body: React.FC<BodyProps> = ({
  size = 'base',
  children,
  className,
  as = 'p',
}) => {
  const Tag = as as keyof JSX.IntrinsicElements
  const baseClasses = sizeClasses[size]
  const classes = cn(baseClasses, 'text-text-primary leading-relaxed', className)

  return React.createElement(Tag, { className: classes }, children)
}
