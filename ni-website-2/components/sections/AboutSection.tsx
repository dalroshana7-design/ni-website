import React from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'
import { Divider } from '@/components/ui/Divider'
import { Link } from '@/components/ui/Link'

export const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <div className="max-w-3xl">
          {/* Section Heading */}
          <Heading level="h2" style="section" className="mb-8">
            About
          </Heading>

          {/* Main content */}
          <div className="space-y-8">
            <Body size="lg">
              Built in China. Working in Japan. Learning to build.
            </Body>

            <Divider />

            <Body size="lg" className="text-text-secondary">
              I've worked across languages, industries, and business models. From business operations to cross-border coordination, I've learned to push things toward results.
            </Body>

            <Body size="lg" className="text-text-secondary">
              Now I'm learning to turn that experience into my own creative work. Building products. Exploring AI. Creating things.
            </Body>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/about" className="text-nav font-semibold hover:text-accent-primary">
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
