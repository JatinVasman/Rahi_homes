import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import VideoTour from '@/components/VideoTour'
import StudentLife from '@/components/StudentLife'
import Gallery from '@/components/Gallery'
import EventsHighlight from '@/components/EventsHighlight'
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
      <Team />
      <VideoTour />
      <StudentLife />
      <Gallery />
      <EventsHighlight />
      <Amenities />
      <NearbyColleges />
      <Location />
      <FloorPlan />
      <Contact />
      <Footer />
    </main>
  )
}
