export const siteMetadata = {
  siteName: 'NI',
  author: 'NI',
  description: 'Japan-based builder exploring AI, business and digital products.',
  url: 'https://ni.dev',
  image: '/og-image.jpg',
  twitter: '@nibuilds', // Update with actual handle
  locale: 'en-US',
}

export const pages = {
  home: {
    title: 'NI — Builder',
    description: 'Japan-based builder exploring AI, business and digital products.',
    og: {
      title: 'NI — Builder',
      description: 'Japan-based builder exploring AI, business and digital products.',
      image: '/og-image.jpg',
      type: 'website',
    },
  },
  about: {
    title: 'About NI',
    description: 'My journey from business operations to building products. China-rooted, Japan-based.',
    og: {
      title: 'About NI',
      description: 'My journey from business operations to building products.',
      image: '/og-image.jpg',
      type: 'website',
    },
  },
  work: {
    title: 'My Work — NI',
    description: 'Projects and experiments in AI, product development and digital innovation.',
    og: {
      title: 'My Work — NI',
      description: 'Projects and experiments in AI, product development and digital innovation.',
      image: '/og-image.jpg',
      type: 'website',
    },
  },
  aiCyber: {
    title: 'AI CYBER — NI',
    description: 'Exploring how AI can help people understand suspicious security events and decide what to do next.',
    og: {
      title: 'AI CYBER',
      description: 'Exploring how AI can help people understand suspicious security events.',
      image: '/og-image.jpg',
      type: 'website',
    },
  },
}

export const structuredData = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: 'NI',
  url: siteMetadata.url,
  description: siteMetadata.description,
  jobTitle: 'Builder',
  sameAs: [
    'https://linkedin.com/in/your-linkedin', // Update
    'https://github.com/your-github', // Update
  ],
}
