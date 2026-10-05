/**
 * Journey Timeline Data
 * 
 * This file contains verified work history and experiences.
 */

export interface JourneyEntry {
  id: string
  year: number
  title: string
  description: string
  location?: string
  industry?: string
  keySkills?: string[]
}

export const journeyEntries: JourneyEntry[] = [
  {
    id: 'ecadi',
    year: 2018,
    title: 'Design Project & Document Coordinator',
    description: 'Technical documentation, cross-departmental coordination, technical drawing specifications, meeting synthesis',
    location: 'China',
    industry: 'Architecture & Design',
    keySkills: ['Documentation', 'Coordination', 'Technical Writing']
  },
  {
    id: 'shanghai-chaoji',
    year: 2021,
    title: 'Client Content & Relationship Coordinator',
    description: 'Tailored proposal generation, customer database management, sales records organization, client feedback structuring',
    location: 'China',
    industry: 'Business Operations',
    keySkills: ['Client Relations', 'Content Strategy', 'Data Management']
  },
  {
    id: 'hiyori-shoji',
    year: 2023,
    title: 'Event & Operations Content Coordinator',
    description: 'Promotional content creation, localization for Japanese market, event evaluation reports, operational analysis',
    location: 'Japan',
    industry: 'Events & Operations',
    keySkills: ['Event Management', 'Content Localization', 'Reporting']
  },
  {
    id: 'skk-co',
    year: 2024,
    title: 'Cross-Border Content & AI Workflow Coordinator',
    description: 'AI tools integration (ChatGPT, Claude, Gemini), multilingual documentation (CN/JP), business deck production, data quality management',
    location: 'Japan',
    industry: 'AI & Cross-Border Business',
    keySkills: ['AI Integration', 'Multilingual Content', 'Workflow Automation', 'Data Structuring']
  },
]

/**
 * Helper function to check if journey data is available
 */
export const hasJourneyData = (): boolean => journeyEntries.length > 0