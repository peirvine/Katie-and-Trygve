import './App.scss';

import Header from './compnents/header/Header'
import Nav from './compnents/nav/Nav'
import Story from './compnents/ourStory/Story'
import Hotels from './compnents/hotels/Hotels'
import Location from './compnents/location/Location'
import WeddingParty from './compnents/weddingParty/WeddingParty'
import Photos from './compnents/photos/Photos'
import Registry from './compnents/registry/Registry'
import Footer from './compnents/footer/Footer'



function App() {
  return (
    <div id="site">
      <Header />
      <Nav />
      <Story />
      <Hotels />
      <Location />
      <WeddingParty />
      <Photos />
      <Registry />
      <Footer />
    </div>
  );
}

export default App;
