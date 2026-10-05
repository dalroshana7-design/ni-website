import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { HowIWorkSection } from '@/components/sections/HowIWorkSection'
import { JourneyTimeline } from '@/components/sections/JourneyTimeline'
import { FeaturedProjectSection } from '@/components/sections/FeaturedProjectSection'
import { Currently } from '@/components/sections/Currently'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HowIWorkSection />
      <JourneyTimeline />
      <FeaturedProjectSection />
      <Currently />
      <ContactCTA />
    </>
  )
}
