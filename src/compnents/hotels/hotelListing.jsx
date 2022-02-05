import './Hotels.scss'

export default function HotelListing(payload) {
  const {name, image, address, phone, blurb, link} = payload
  return ( 
    <div className="listing">
      <h3>{name}</h3>
      <img src={image} alt="hotel" />
      <h4>{address}</h4>
      <h4>{phone}</h4>
      <p>{blurb}</p>
      <a href={link} className='button' target="_blank" rel="noreferrer">Website</a>
    </div>
   )
}