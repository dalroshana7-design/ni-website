import React from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'
import { Link } from '@/components/ui/Link'

export const FeaturedProjectSection: React.FC = () => {
  return (
    <Section id="featured-project" className="bg-bg-accent">
      <Container>
        {/* Project Cover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Cover Visual */}
          <div className="flex items-center justify-center bg-accent-navy p-12 md:p-16 min-h-80 md:min-h-96 rounded-lg">
            <div className="text-center">
              <Heading level="h3" style="section" className="text-bg-primary mb-3">
                AI CYBER
              </Heading>
              <Body size="lg" className="text-bg-primary mb-6">
                AI Security Copilot
              </Body>
              <Body size="sm" className="text-bg-primary/80 font-semibold tracking-wide">
                BUILDING · 2026
              </Body>
            </div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-center">
            <Heading level="h2" style="section" className="mb-6">
              What I'm building
            </Heading>

            <Body size="lg" className="text-text-secondary mb-8">
              Exploring how AI can help people understand suspicious security events and decide what to do next.
            </Body>

            <Link href="/work/ai-cyber" className="inline-flex items-center gap-2 text-accent-primary font-semibold hover:text-accent-dark transition-colors">
              View project
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}