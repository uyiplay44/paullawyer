import './InfoContact.css';
import Photo from '../../assets/Photo3.jpg';

export const InfoContact = () => {
  return (
    <div className='Info_Contact'>
      <div className="InfoContact-Main">
        <div className='InfoImage'>
          <img src={Photo} alt="info" />
        </div>
        <div className="InforRight">
          <form>
            <label htmlFor="">First Name:</label>
            <input type="name" />
            <label htmlFor="">Last Name</label>
            <input type="name" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <textarea name="" id="" cols="" rows="10"></textarea>
          </form>
        </div>
      </div>
    </div>
  )
}
