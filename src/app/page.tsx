import Hero from '@/components/LandingPage/Hero'
import TrustedIndustries from '@/components/LandingPage/TrustedIndustries'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <TrustedIndustries/>
    </main>
  )
}
