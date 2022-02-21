import './Header.scss'

const getDays = () => {
  const start = Date.now()
  const end = new Date('25 Jun 2022 00:12:00 CST')
  const res = end - start
  return res / (1000 * 3600 * 24)
}

export default function Header () {
  const days = getDays()

  return (
    <div id="Header">
      <a id="header" />
      <h1>Katie + Trygve</h1>
      <h2>JUNE 25, 2022 • DELLWOOD, MN</h2>
      {/* <h2>{days.toFixed()} DAYS TO GO!</h2> */}
    </div>
   )
}
