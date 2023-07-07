import './Service.css'
import Photo from '../../assets/Photo0.png';

export const Service = () => {
  return (
    <div className='Service_main'>
      <div className='Service'>
        <img src={Photo} alt="service" />
        <h1>Our Main Service</h1>
      </div>
      <div className='Service_container'>
        <div className='Service_page'>
          <p>We specialize in the follow areas below and trust our service totally and completely ready to put the best for you to have all the listed serice to your will as our client.</p>
        </div>

        <ul className='Serivce_title'>
          <div className='Service_body'>
            <li>Legal consultation and advice</li>
            <li>Contract drafting and review</li>
            <li>Representation in court proceedings</li>
            <li>Negotiation and settlement</li>
            <li>Legal research and analysis</li>
            <li>Legal consultation and advice</li>
          </div>
          <div className='Service_body'>
            <li>Document preparation and filing</li>
            <li>Due diligence and legal opinions</li>
            <li>Intellectual property protection</li>
            <li>Estate planning and administration</li>
            <li>Immigration law assistance</li>
            <li>Criminal defense</li>
            <li>Family law matters (divorce, child custody, adoption, etc.)</li>
            <li>Employment law guidance (discrimination, harassment, wrongful termination, etc.)</li>
          </div>
          <div className='Service_body'>
            <li>Business formation and corporate law</li>
            <li>Real estate transactions and property law</li>
            <li>Personal injury claims</li>
            <li>Tax planning and dispute resolution</li>
          </div>
          <div className='Service_body'>
            <li>Control and ownership of cryptoassets</li>
            <li> Tracing cryptoassets</li>
            <li>Fraud relating to cryptoassets</li>
            <li>Using proceeds from cryptoasset investments for the purchase of property
            </li>
            <li>Advising in divorce proceedings where cryptoassets form part of the assets for consideration</li>
            <li>Cryptoassets and the regulatory perimeter</li>
            <li>Registration as a cryptoasset firm with the FCA</li>
            <li>Investigations by the FCA and other regulators and law enforcement agencies</li>
            <li>Security Token Offerings (STOs) and Initial Coin Offerings (ICOs) including:</li>
            <li>Drafting and advising on the terms of contribution agreements to issue coins and tokens</li>
            <li>Reviewing and advising on the terms and conditions of coin and token platform exchanges</li>
            <li>  Anti-money laundering (AML) and Know Your Customer (KYC) risk assessment and compliance advice</li>
            <li> Wills and Trust advice in relation to cryptoassets</li>
          </div>
        </ul>
      </div>
    </div>
  )
}
