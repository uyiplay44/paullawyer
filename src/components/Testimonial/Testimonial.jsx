import './Testimonial.css';
import { BiSolidQuoteAltRight } from "react-icons/bi"
import { MdOutlineTrendingFlat } from "react-icons/md"

export const Testimonial = () => {
  return (
    <div className='TestimonialMain'>
      <div className="TestimonialContainer">
        <div className="TestimonalTitle">
          <h1>Testimonial From Clients</h1>
          <h4>An Honest look into how we work</h4>
        </div>

        <div className="TestimonialSection">
            <div className="TestimonialTag_1">
              <BiSolidQuoteAltRight className='TestimonialIcon' />
              <p>I cannot express enough gratitude to Paul Holm Chambers for the exceptional job they did in winning my case. Their expertise, dedication, and attention to detail were evident throughout the entire process. They fought tirelessly on my behalf, and I couldn't be happier with the outcome. I highly recommend their services to anyone in need of a skilled and reliable lawyer.</p>
              <span><MdOutlineTrendingFlat className='TestimonialIcons' /></span>
              <h3>Hannah Williams</h3>
            </div>
            <div className="TestimonialTag_2">
              <BiSolidQuoteAltRight className='TestimonialIcon' />
              <p>I was facing a complex legal matter, and I was fortunate to have such a brilliant PauL Chamber by my side. Their knowledge of the law and strategic approach to my case were instrumental in achieving a positive outcome. They took the time to understand my situation, provided guidance every step of the way, and ultimately secured a victory for me. I am immensely grateful for their professionalism and would highly recommend them to anyone seeking legal representation.</p>
              <span><MdOutlineTrendingFlat className='TestimonialIcons' /></span>
              <h3>Sarah D. Johnson</h3>
            </div>

            <div className="TestimonialTag_4">
              <BiSolidQuoteAltRight className='TestimonialIcon' />
              <p>When I found myself in a legal battle,Paul Holm my lawyer provided the guidance and support I needed. it was a serious case that involved me been scammed of my money but with the help of this chamber i was able to recover all my funds taken by the scammer. Their deep understanding of the law, attention to detail, and strategic approach were invaluable in achieving a positive outcome. They fought tirelessly on my behalf and ensured that my voice was heard throughout the entire process. I am immensely grateful for their dedication and would highly recommend them to anyone in search of an exceptional lawyer.</p>
              <span><MdOutlineTrendingFlat className='TestimonialIcons' /></span>
              <h3>Michael Mazzeo</h3>
            </div>
        </div>
      </div>
    </div>
  )
}
