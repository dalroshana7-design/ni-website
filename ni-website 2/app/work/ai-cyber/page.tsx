import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'
import { Divider } from '@/components/ui/Divider'
import { Link } from '@/components/ui/Link'
import { pages } from '@/data/site-metadata'
import { projects } from '@/data/projects'

const project = projects.find((p) => p.slug === 'ai-cyber')

export const metadata: Metadata = {
  title: pages.aiCyber.title,
  description: pages.aiCyber.description,
  openGraph: {
    title: pages.aiCyber.og.title,
    description: pages.aiCyber.og.description,
    type: pages.aiCyber.og.type as any,
  },
}

export default function AICyberProject() {
  if (!project) {
    return (
      <Section className="py-24 md:py-32 lg:py-40">
        <Container>
          <Heading level="h1" style="hero">
            Project not found
          </Heading>
        </Container>
      </Section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="max-w-3xl">
            <Link href="/work" className="text-nav text-text-secondary hover:text-text-primary mb-8">
              ← Back to Work
            </Link>
            <Heading level="h1" style="hero" className="mb-8">
              {project.title}
            </Heading>
            <Body size="lg" className="text-text-secondary mb-8">
              {project.description}
            </Body>
            <Divider />
          </div>
        </Container>
      </Section>

      {/* Project Image */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <div className="w-full aspect-video bg-bg-alt rounded flex items-center justify-center mb-12">
              <span className="text-text-tertiary">Project visual</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Heading level="h2" style="section" className="mb-8">
              About This Project
            </Heading>

            <div className="space-y-8">
              <Body size="lg" className="text-text-secondary">
                This is a detailed project page. Content to be added as the project develops.
              </Body>

              {/* Status Info */}
              <div className="py-8 border-t border-b border-border">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div>
                    <Body size="sm" className="text-text-tertiary mb-2">
                      Status
                    </Body>
                    <Body size="base" className="text-text-secondary">
                      {project.status}
                    </Body>
                  </div>
                  {project.year && (
                    <div>
                      <Body size="sm" className="text-text-tertiary mb-2">
                        Started
                      </Body>
                      <Body size="base" className="text-text-secondary">
                        {project.year}
                      </Body>
                    </div>
                  )}
                </div>
              </div>

              <Divider />

              <Body size="base" className="text-text-secondary italic">
                More details coming soon as this project progresses.
              </Body>
            </div>
          </div>
        </Container>
      </Section>

      {/* Back to Work */}
      <Section className="py-12 md:py-16 lg:py-20">
        <Container>
          <Link href="/work" className="text-nav font-semibold hover:text-accent-primary">
            ← Back to My Work
          </Link>
        </Container>
      </Section>
    </>
  )
}
