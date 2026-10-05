import React from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: React.ReactNode
  maxWidth?: 'container' | 'full'
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'container',
  className,
}) => {
  const classes = cn(
    'mx-auto px-6 md:px-12 lg:px-16',
    maxWidth === 'container' && 'max-w-container',
    className
  )

  return <div className={classes}>{children}</div>
}
