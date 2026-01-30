import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Amenities from '@/components/Amenities'
import NearbyColleges from '@/components/NearbyColleges'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <NearbyColleges />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
