export interface Project {
  id: string
  slug: string
  title: string
  description: string
  status: 'Building' | 'Completed' | 'Exploring'
  image?: string
  link?: string
  featured: boolean
  year?: number
}

export const projects: Project[] = [
  {
    id: 'ai-cyber',
    slug: 'ai-cyber',
    title: 'AI CYBER',
    description:
      'Exploring how AI can help people understand suspicious security events and decide what to do next.',
    status: 'Building',
    image: '/projects/ai-cyber.jpg',
    link: '/work/ai-cyber',
    featured: true,
    year: 2026,
  },
  // Future projects can be added here
]

export const featuredProject = projects.find((p) => p.featured)
