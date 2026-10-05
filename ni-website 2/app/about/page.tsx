import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'
import { Divider } from '@/components/ui/Divider'
import { pages } from '@/data/site-metadata'
import { JourneyTimeline } from '@/components/sections/JourneyTimeline'
import { HowIWorkSection } from '@/components/sections/HowIWorkSection'
import { Currently } from '@/components/sections/Currently'
import { ContactCTA } from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
  openGraph: {
    title: pages.about.og.title,
    description: pages.about.og.description,
    type: pages.about.og.type as any,
  },
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="max-w-3xl">
            <Heading level="h1" style="hero" className="mb-8">
              About
            </Heading>
            <Body size="lg" className="text-text-secondary mb-8">
              Built in China. Working in Japan. Learning to build.
            </Body>
            <Divider />
          </div>
        </Container>
      </Section>

      {/* Who I Am */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Heading level="h2" style="section" className="mb-8">
              Who I Am
            </Heading>

            <div className="space-y-8">
              <Body size="lg" className="text-text-secondary">
                I've worked across languages, industries, and business models. From business operations to cross-border coordination, I've spent years learning how to push things toward results.
              </Body>

              <Body size="lg" className="text-text-secondary">
                What I've learned is this: I'm most engaged when I'm in motion between things. Between people and processes. Between information and action. Between what exists and what could exist.
              </Body>

              <Body size="lg" className="text-text-secondary">
                Now I'm learning to redirect that energy. Instead of executing for others, I'm building for myself. Instead of optimizing existing systems, I'm exploring what's possible.
              </Body>

              <Divider />

              <Body size="base" className="text-text-secondary italic">
                This is the transition I'm in right now. And I'm curious where it leads.
              </Body>
            </div>
          </div>
        </Container>
      </Section>

      {/* How I Work */}
      <HowIWorkSection />

      {/* Journey */}
      <JourneyTimeline />

      {/* Currently */}
      <Currently />

      {/* Contact */}
      <ContactCTA />
    </>
  )
}
