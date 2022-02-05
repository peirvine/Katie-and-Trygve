import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import './App.scss';

import Header from './compnents/header/Header'
import Nav from './compnents/nav/Nav'
import Home from './compnents/home/Home'
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
      <Router>
        <Header />
        <Nav />
        <div id="wrapper">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/accommodations" element={<Hotels />} />
            <Route path="/location" element={<Location />} />
            <Route path="/wedding-party" element={<WeddingParty />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/registry" element={<Registry />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
