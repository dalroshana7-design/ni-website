import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'
import { Divider } from '@/components/ui/Divider'
import { Link } from '@/components/ui/Link'
import { pages } from '@/data/site-metadata'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: pages.work.title,
  description: pages.work.description,
  openGraph: {
    title: pages.work.og.title,
    description: pages.work.og.description,
    type: pages.work.og.type as any,
  },
}

export default function Work() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="max-w-3xl">
            <Heading level="h1" style="hero" className="mb-8">
              My Work
            </Heading>
            <Body size="lg" className="text-text-secondary">
              Projects and experiments in AI, product development and digital innovation.
            </Body>
            <Divider className="mt-12" />
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Heading level="h2" style="section" className="mb-12">
              Featured
            </Heading>

            <div className="space-y-16">
              {projects.filter((p) => p.featured).map((project) => (
                <div key={project.id} className="border-b border-border pb-16 last:border-b-0">
                  {/* Project Card */}
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <Heading level="h3" style="subsection" className="mb-4">
                        {project.title}
                      </Heading>
                      <Body size="base" className="text-text-secondary mb-6">
                        {project.description}
                      </Body>

                      {/* Status */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-caption font-semibold text-text-primary">
                          Status:
                        </span>
                        <span className="text-caption text-text-secondary">
                          {project.status}
                        </span>
                      </div>

                      {/* CTA */}
                      {project.link && (
                        <Link href={project.link} className="text-nav font-semibold hover:text-accent-primary">
                          View Project →
                        </Link>
                      )}
                    </div>

                    {/* Image Placeholder */}
                    {project.image && (
                      <div className="flex-shrink-0 w-full md:w-64 h-48 bg-bg-alt rounded flex items-center justify-center">
                        <span className="text-text-tertiary text-sm">Project image</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Projects Coming Soon */}
      <Section bgColor="alt">
        <Container>
          <div className="max-w-3xl text-center py-12">
            <Heading level="h2" style="section" className="mb-4">
              More Coming Soon
            </Heading>
            <Body size="lg" className="text-text-secondary">
              I'm working on additional projects and will share them as they take shape.
            </Body>
          </div>
        </Container>
      </Section>
    </>
  )
}
