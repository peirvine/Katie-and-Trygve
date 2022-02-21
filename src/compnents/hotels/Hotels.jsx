import HotelListing from './hotelListing'
import amercinnImage from '../../images/amercinn.jfif'
import heiImage from '../../images/hei.jfif'
import bwpImage from '../../images/bwp.jfif'

import './Hotels.scss'

export default function Hotels () {
  const bwp = {
    name: "BEST WESTERN PLUS WHITE BEAR COUNTRY INN",
    image: bwpImage,
    address: "4940 HIGHWAY 61 NORTH, WHITE BEAR LAKE, MN, US",
    phone: "(651) 429-5393",
    link: "https://hotelblocks.theknot.com/Hotel/HotelRoomTypes.htm?hotelid=134123&sc=Attendee_TheKnot&kw=eventpage&InDate=06/24/2022&OutDate=06/26/2022",
  }

  const hie = {
    name: "HOLIDAY INN EXPRESS & SUITES VADNAIS HEIGHTS",
    image: heiImage,
    address: "1100 COUNTY RD E, VADNAIS HEIGHTS, MN, US",
    phone: "(651) 484-2400",
    link: "https://hotelblocks.theknot.com/Hotel/HotelRoomTypes.htm?hotelid=191314&sc=Attendee_TheKnot&kw=eventpage&InDate=06/24/2022&OutDate=06/26/2022",
  }

  const americinn = {
    name: "AMERICINN BY WYNDHAM WHITE BEAR LAKE ST. PAUL",
    image: amercinnImage,
    address: "4675 WHITE BEAR PKWY, WHITE BEAR LAKE, MN, US",
    phone: "(651) 429-7131",
    link: "https://hotelblocks.theknot.com/Hotel/HotelRoomTypes.htm?hotelid=194877&sc=Attendee_TheKnot&kw=eventpage&InDate=06/24/2022&OutDate=06/26/2022",
  }

  return (
    <div id="Hotels">
      <a id="accommodations" />
      <h2>Be Our Guest</h2>
      <p id="hotelText">A block of rooms has been reserved at the following hotels at discounted rates. Please mention the Riedel / Eggen Wedding when calling to make your reservations. Must book your room by May 25, 2022 to receive the special discounted rate. No online block reservations, you must call the hotels to make a room reservation under the block.</p>

      <HotelListing {...bwp} />
      <HotelListing {...hie} />
      <HotelListing {...americinn}/ >
    </div>
   )
}
