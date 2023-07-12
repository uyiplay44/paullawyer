import { About } from "../components/About/About"
import { Body } from "../components/Body/Body"
import { Focus } from "../components/Focus/Focus"
import { Service } from "../components/Our Service/Service"
import { Testimonial } from "../components/Testimonial/Testimonial"


function Home() {
  return (
    <div>
      <Body />
      <About />
      <Focus />
      <Service />
      <Testimonial />
    </div>
  )
}

export default Home