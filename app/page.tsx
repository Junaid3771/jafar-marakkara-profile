import { HeroSection } from '@/components/home/HeroSection'
import { VisionTeaser } from '@/components/home/VisionTeaser'
import { ImpactNumbers } from '@/components/home/ImpactNumbers'
import { YouthBusinessSection } from '@/components/home/YouthBusinessSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { NewsTeaser } from '@/components/home/NewsTeaser'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionTeaser />
      <ImpactNumbers />
      <YouthBusinessSection />
      <TestimonialsSection />
      <NewsTeaser />
    </>
  )
}
