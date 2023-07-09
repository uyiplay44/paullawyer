import { About } from "../components/About/About"
import { Body } from "../components/Body/Body"
import { Focus } from "../components/Focus/Focus"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { Service } from "../components/Our Service/Service"
import { Testimonial } from "../components/Testimonial/Testimonial"


function Home() {
  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Focus />
      <Service />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home