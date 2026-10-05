import React from 'react'
import { Container } from '@/components/layout/Container'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 lg:pb-40 bg-bg-primary">
      <Container>
        <div className="max-w-3xl">
          {/* Main Hero */}
          <div className="mb-16 md:mb-20 lg:mb-24">
            <Heading level="h1"  className="mb-4">
              NI
            </Heading>
            <Heading level="h2"  className="text-h2-subhero md:text-h2-subhero-lg">
              I build things.
            </Heading>
          </div>

          {/* Subtitle */}
          <div className="mb-12 md:mb-16">
            <Body size="lg" className="text-text-secondary mb-6">
              Based in Japan.<br />
              Working across business, technology and cultures.
            </Body>
          </div>

          {/* Description */}
          <Body size="lg" className="text-text-secondary max-w-xl">
            I like turning unclear ideas into things people can actually use.
          </Body>
        </div>
      </Container>
    </section>
  )
}
