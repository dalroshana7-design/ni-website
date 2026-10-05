import React from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'
import { Caption } from '@/components/ui/Caption'

interface WorkItemProps {
  title: string
  description: string
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description }) => (
  <div className="flex flex-col">
    <Heading level="h4" style="subsection" className="text-text-primary mb-3">
      {title}
    </Heading>
    <Body size="base" className="text-text-secondary">
      {description}
    </Body>
  </div>
)

export const HowIWorkSection: React.FC = () => {
  const workItems = [
    {
      title: 'BUILD',
      description: 'Turning ideas into something real.',
    },
    {
      title: 'CONNECT',
      description: 'Bridging people, information and business across cultures.',
    },
    {
      title: 'EXECUTE',
      description: 'Taking unclear problems and pushing them toward a result.',
    },
  ]

  return (
    <Section id="how-i-work">
      <Container>
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <Heading level="h2" style="section" className="mb-4">
            How I work
          </Heading>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          {workItems.map((item, idx) => (
            <WorkItem key={idx} title={item.title} description={item.description} />
          ))}
        </div>

        {/* Footer note */}
        <div className="border-t border-border pt-8 md:pt-12">
          <Caption className="text-text-tertiary italic">
            These aren't job titles. They're how I move.
          </Caption>
        </div>
      </Container>
    </Section>
  )
}