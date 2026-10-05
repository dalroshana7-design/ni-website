import React from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Link } from '@/components/ui/Link'

export const ContactCTA: React.FC = () => {
  return (
    <Section id="contact" className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="max-w-2xl text-center">
          <Heading level="h2" style="section" className="mb-8">
            Have an idea, opportunity or project?
          </Heading>

          <Heading level="h3" style="subsection" className="text-h3-subsection md:text-h3-subsection-sm mb-12">
            Let's talk.
          </Heading>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12">
            <Link href="mailto:dalroshana7@gmail.com" external className="text-nav font-semibold hover:text-accent-primary">
              Email
            </Link>
            <Link href="https://www.linkedin.com/feed/" external className="text-nav font-semibold hover:text-accent-primary">
              LinkedIn
            </Link>
            <Link href="https://github.com/dalroshana7-design" external className="text-nav font-semibold hover:text-accent-primary">
              GitHub
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}