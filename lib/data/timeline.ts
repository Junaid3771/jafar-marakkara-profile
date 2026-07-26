export interface TimelineMilestone {
  year: string
  title: string
  description: string
  category: 'personal' | 'business' | 'community' | 'politics' | 'education'
  highlight?: boolean
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: '1990s',
    title: 'Born in Marakkara, Malappuram',
    description:
      'Jafar Marakkara was born and raised in the culturally rich town of Marakkara, Malappuram — a community that shaped his values of service, resilience, and ambition.',
    category: 'personal',
  },
  {
    year: '2005',
    title: 'School Years & Early Leadership',
    description:
      'Demonstrated natural leadership qualities from an early age — class representative, debate champion, and organiser of community cultural events. First seeds of public service were sown here.',
    category: 'education',
  },
  {
    year: '2009',
    title: 'Higher Education & Formative Years',
    description:
      'Pursued higher education in Commerce and Business Administration, where exposure to economics and social sciences deepened his understanding of the challenges facing youth and underserved communities.',
    category: 'education',
  },
  {
    year: '2012',
    title: 'First Business Venture',
    description:
      'Launched his first entrepreneurial venture in the trade sector at the age of 22 — a move that defied conventional paths and established the foundation for what would become the Marakkara Group of Businesses.',
    category: 'business',
    highlight: true,
  },
  {
    year: '2015',
    title: 'Community Service Begins in Earnest',
    description:
      'Founded the first formal community welfare initiative, providing free coaching and career guidance to underprivileged students preparing for competitive examinations across Malappuram district.',
    category: 'community',
  },
  {
    year: '2018',
    title: 'Youth Welfare Movement',
    description:
      'Organised and led a district-level youth welfare movement, conducting 50+ programmes reaching 10,000+ young people. Became widely recognised as a voice for the aspirations of Malappuram\'s youth.',
    category: 'community',
    highlight: true,
  },
  {
    year: '2020',
    title: 'Business Expansion & Employment',
    description:
      'Expanded Marakkara Group into real estate, logistics, and digital services — creating over 500 direct employment opportunities for local youth during a period of economic disruption.',
    category: 'business',
  },
  {
    year: '2021',
    title: 'JM Foundation Established',
    description:
      'Formally established the JM Foundation — a non-profit body dedicated to healthcare access, educational scholarships, women\'s empowerment, and infrastructure development across Malappuram.',
    category: 'community',
    highlight: true,
  },
  {
    year: '2023',
    title: 'Political Journey Begins',
    description:
      'Formally entered the political arena with a commitment to representing the aspirations of Malappuram\'s people — carrying forward a vision of development, inclusion, and a modern Kerala.',
    category: 'politics',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Vision 2030 — Building Tomorrow',
    description:
      'Launched Vision 2030: a comprehensive blueprint for transforming Malappuram into a hub of youth enterprise, digital infrastructure, quality education, and progressive governance — one community at a time.',
    category: 'politics',
    highlight: true,
  },
]
