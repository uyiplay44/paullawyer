import './Navbar.css'
import Logo from "../../assets/logo1.png";
import {HiHome} from 'react-icons/hi';

export const Navbar = () => {
  return (
    <div className='Navbar_main'>
      <div className='Nav_logo'>
        <img src={Logo} alt="" />
      </div>
      <nav className='Nav-section'>
        <ul className='Nav_contain'>
          <li>
            <span className='active'><HiHome />Home</span>
            <span>About Us</span>
            <span>Our Service</span>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}
