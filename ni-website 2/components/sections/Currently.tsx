import React from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'
import { Caption } from '@/components/ui/Caption'

interface CurrentlyItem {
  label: string
  items: string[]
}

const currentlyData: CurrentlyItem[] = [
  {
    label: 'LEARNING',
    items: ['AI', 'Product Development', 'Next.js'],
  },
  {
    label: 'BUILDING',
    items: ['AI CYBER', 'Personal AI tools'],
  },
  {
    label: 'EXPLORING',
    items: ['Independent work', 'AI × Business', 'Japan × Global'],
  },
]

export const Currently: React.FC = () => {
  return (
    <Section id="currently">
      <Container>
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <Heading level="h2" style="section" className="mb-2">
            Currently
          </Heading>
          <Caption className="text-text-tertiary">2026.09</Caption>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {currentlyData.map((section, idx) => (
            <div key={idx}>
              <Heading level="h4" style="subsection" className="text-text-primary mb-4 font-semibold tracking-wide">
                {section.label}
              </Heading>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Body size="base" className="text-text-secondary">
                      {item}
                    </Body>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}