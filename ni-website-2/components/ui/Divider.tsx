import React from 'react'
import { cn } from '@/lib/cn'

interface DividerProps {
  className?: string
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <hr
      className={cn(
        'border-0 border-t border-border my-8',
        className
      )}
      aria-hidden="true"
    />
  )
}
