import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Amenities from '@/components/Amenities'
import NearbyColleges from '@/components/NearbyColleges'
import Location from '@/components/Location'
import FloorPlan from '@/components/FloorPlan'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ContactPopup from '@/components/ContactPopup'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <ContactPopup />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <NearbyColleges />
      <Location />
      <FloorPlan />
      <Contact />
      <Footer />
    </main>
  )
}
