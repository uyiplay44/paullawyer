import { About } from "./components/About/About"
import { Body } from "./components/Body/Body"
import { Contact } from "./components/Contact/Contact"
import { Focus } from "./components/Focus/Focus"
import { Navbar } from "./components/Navbar/Navbar"
import { Service } from "./components/Our Service/Service"
import { Testimonial } from "./components/Testimonial/Testimonial"


function App() {

  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Focus />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App
