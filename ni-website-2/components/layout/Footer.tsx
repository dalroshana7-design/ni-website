import React from 'react'
import { Container } from './Container'
import { Caption } from '@/components/ui/Caption'
import { Link } from '@/components/ui/Link'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-bg-primary border-t border-border mt-32">
      <Container>
        <div className="py-16 md:py-20">
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
            <div>
              <h3 className="text-nav font-semibold mb-4">Get in touch</h3>
              <div className="flex flex-col gap-2">
                <Link href="mailto:dalroshana7@gmail.com" external>
                  Email
                </Link>
                <Link href="https://www.linkedin.com/in/ジンジン-二イ-9a747a156/?isSelfProfile=true" external>
                  LinkedIn
                </Link>
                <Link href="https://github.com/dalroshana7-design" external>
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-12" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <Caption>© {currentYear} NI. All rights reserved.</Caption>
            <div className="flex gap-4">
             <a href="#" className="hover:text-text-primary">
  <Caption>Privacy</Caption>
</a>
              <Caption className="text-border">•</Caption>
              <Caption as="a" href="#" className="hover:text-text-primary">
                Terms
              </Caption>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
