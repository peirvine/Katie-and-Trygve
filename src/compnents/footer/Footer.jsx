import './Footer.scss'

export default function Footer () {
  return ( 
    <div id="Footer">
      <div id="logo">
        <h2>K&T</h2>
        <h3>6.25.2022</h3>
      </div>
      <div id="copy">
        &copy;{new Date().getFullYear()}  Katie and Trygve <br />
        Site by <a href="https://minnedev.com" rel="noreferrer" target="_BLANK">Peter at Minnedev</a> {/* &#183; Design by Eli at The Knot */}
      </div>
    </div>
   )
}