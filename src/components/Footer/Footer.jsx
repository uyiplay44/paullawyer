
import { useState } from 'react';
import Logo from '../../assets/Logo1.png';
import './Footer.css';

export const Footer = () => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }

  return (
    <div className='FooterMain'>
      <div className="FooterLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="FooterSelect">
        <div className="FooterTaag">
          <h2>Address</h2>
          <p>Kingsley Napley LLP
            20 Bonhill Street
            London
            EC2A 4DN </p>
          <div className='FooterContact'>
            <h3>Contact Details</h3>
            <p>Telephone: +44 (0)20 7814 1200</p>
            <p>Telephone: +44 (0)20 7490 2288</p>
          </div>
        </div>
        <form className="FooterTaagAddress" onSubmit={handleSubmit}>
          <label>Submit</label>
          <input type="email" placeholder='Your Email' id='email' value={email} />
        </form>
          <button type='submit'>Submit</button>
      </div>
    </div>
  )
}
