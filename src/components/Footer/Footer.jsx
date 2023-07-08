import Logo from '../../assets/Logo1.png';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='FooterMain'>
      <div className="FooterLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="FooterSelect">
        <div className="FooterTaag">
          <h2>Address</h2>
          <p></p>
        </div>
        <div className="FooterTaag">

        </div>
        <div className="FooterTaag">
          <h4>Policy</h4>
          <p></p>
        </div>
        <div className="FooterTaag">
          <h3>Submit Email</h3>
          <input type="email" placeholder='Submit Email' id='email' />
        </div>
      </div>
    </div>
  )
}
