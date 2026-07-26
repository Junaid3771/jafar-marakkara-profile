export type NewsCategory = 'Political' | 'Business' | 'Community' | 'Media' | 'Youth'

export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  category: NewsCategory
  featured?: boolean
  readTime: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'youth-entrepreneurship-summit-2024',
    title: 'Jafar Marakkara Hosts Landmark Youth Entrepreneurship Summit in Malappuram',
    excerpt:
      'Over 2,000 young entrepreneurs from across North Kerala gathered at the two-day summit, with sessions on digital business, startup funding, and community leadership. Marakkara announced a new mentorship programme connecting 100 youth with established business leaders.',
    date: 'December 12, 2024',
    category: 'Youth',
    featured: true,
    readTime: '4 min read',
  },
  {
    slug: 'infrastructure-development-initiative',
    title: 'Major Road Infrastructure Project Inaugurated in Marakkara Panchayat',
    excerpt:
      'A 12-kilometre stretch connecting five villages in Marakkara Panchayat was officially inaugurated, benefiting over 8,000 residents. The project, championed over three years by Jafar Marakkara, is expected to improve access to healthcare and education facilities.',
    date: 'November 28, 2024',
    category: 'Community',
    readTime: '3 min read',
  },
  {
    slug: 'scholarship-program-launch',
    title: 'New Scholarship Programme to Support 500 Students Annually from Malappuram',
    excerpt:
      'The JM Foundation launches an annual scholarship initiative targeting meritorious students from economically weaker backgrounds across Malappuram district, covering tuition, books, and coaching fees for competitive examinations.',
    date: 'November 10, 2024',
    category: 'Community',
    readTime: '3 min read',
  },
  {
    slug: 'business-expansion-gulf',
    title: 'Jafar Marakkara Expands Business Operations to Gulf Markets',
    excerpt:
      'Building on a decade of successful ventures in Kerala, Marakkara Group announces strategic partnerships with UAE-based firms in the logistics and hospitality sectors, projected to create 400 direct jobs for Keralites abroad.',
    date: 'October 22, 2024',
    category: 'Business',
    readTime: '5 min read',
  },
  {
    slug: 'healthcare-mobile-clinic',
    title: 'Free Mobile Medical Clinic Reaches 30 Remote Villages in Six Months',
    excerpt:
      'The Jafar Marakkara-backed mobile healthcare initiative crossed a milestone, delivering free consultations, medicines, and diagnostic screenings to over 15,000 residents who previously lacked access to primary healthcare.',
    date: 'October 5, 2024',
    category: 'Community',
    readTime: '3 min read',
  },
  {
    slug: 'media-interview-vision-2030',
    title: '"Malappuram Must Lead Kerala\'s Economic Renaissance" — Interview with Mathrubhumi',
    excerpt:
      'In a wide-ranging interview with Mathrubhumi, Jafar Marakkara outlines his Vision 2030 for Malappuram — a blueprint for transforming the district into a hub of youth enterprise, advanced education, and inclusive infrastructure.',
    date: 'September 18, 2024',
    category: 'Media',
    readTime: '6 min read',
  },
]
