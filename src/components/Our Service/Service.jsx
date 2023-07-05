import './Service.css'
import Photo from '../../assets/Photo0.png';

export const Service = () => {
  return (
    <div className='Service_main'>
      <div className='Service_container'>
        <div className='Service'>
          <img src={Photo } alt="" />
        </div>
        <div className='Service_title'>
          <div>
            <h1>Our Main Service</h1>
          </div>
          <div className='Service_sect'>
            <div>
              <p>We specialize in the follow areas below and trust our service totally and completely ready to put the best for you to have all the listed serice to your will as our client.</p>
            </div>
            <ul>
              <li>Legal consultation and advice</li>
              <li>Contract drafting and review</li>
              <li>Representation in court proceedings</li>
              <li>Negotiation and settlement</li>
              <li>Legal research and analysis</li>
              <li>Legal consultation and advice</li>
              <li>Document preparation and filing</li>
              <li>Due diligence and legal opinions</li>
              <li>Intellectual property protection</li>
              <li>Estate planning and administration</li>
              <li>Immigration law assistance</li>
              <li>Criminal defense</li>
              <li>Family law matters (divorce, child custody, adoption, etc.)</li>
              <li>Employment law guidance (discrimination, harassment, wrongful termination, etc.)</li>
              <li>Business formation and corporate law</li>
              <li>Real estate transactions and property law</li>
              <li>Personal injury claims</li>
              <li>Tax planning and dispute resolution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
