import Split from '../split/Split'

import './Home.scss'

import homeCollage from '../../images/homeCollage.png'

const payload = {
  left: 'June 25, 2022',
  right: 'Dellwood,\n MN'
}

export default function Home () {
  return ( 
    <div id="Home">
      <img src={homeCollage} alt="a collage of katie and trygve" />
      <Split {...payload} />
      <h2>Wedding Day</h2>
      <h3> June 25, 2022</h3>
    </div>
   )
}