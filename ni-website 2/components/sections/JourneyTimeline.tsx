import React from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'
import { Body } from '@/components/ui/Body'

interface JourneyEntry {
  period: string
  company: string
  companyNameCn: string
}

const journeyData: JourneyEntry[] = [
  {
    period: '2018.02 – 2020.02',
    company: 'ECADI',
    companyNameCn: '華東建築設計研究院',
  },
  {
    period: '2021.03 – 2023.06',
    company: 'Shanghai Chaoji',
    companyNameCn: '上海超級智慧家',
  },
  {
    period: '2023.11 – 2024.08',
    company: 'Hiyori Shoji',
    companyNameCn: '日和商事',
  },
  {
    period: '2024.10 – 2026.06',
    company: 'SKK Co.',
    companyNameCn: 'SKK Co.',
  },
]

export const JourneyTimeline: React.FC = () => {
  return (
    <Section id="journey">
      <Container>
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <Heading level="h2" style="section">
            Journey
          </Heading>
        </div>

        {/* Timeline */}
        <div className="space-y-12 md:space-y-16 max-w-2xl">
          {journeyData.map((entry, idx) => (
            <div key={idx} className="flex gap-6 md:gap-12">
              {/* Period */}
              <div className="flex-shrink-0 w-32 md:w-40">
                <Body size="sm" className="text-text-primary font-semibold font-mono">
                  {entry.period}
                </Body>
              </div>

              {/* Company */}
              <div className="flex-grow border-l border-border pl-6 md:pl-8">
                <Heading level="h4" style="subsection" className="mb-1">
                  {entry.company}
                </Heading>
                {entry.companyNameCn !== entry.company && (
                  <Body size="sm" className="text-text-tertiary">
                    {entry.companyNameCn}
                  </Body>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}