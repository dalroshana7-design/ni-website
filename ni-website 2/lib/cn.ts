/**
 * Simple classname utility
 * Combines classnames and removes falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((c) => typeof c === 'string' && c.length > 0)
    .join(' ')
}
