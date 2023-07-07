import { About } from "./components/About/About"
import { Body } from "./components/Body/Body"
import { Focus } from "./components/Focus/Focus"
import { Navbar } from "./components/Navbar/Navbar"
import { Service } from "./components/Our Service/Service"


function App() {

  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Service />
      <Focus />
    </div>
  )
}

export default App
