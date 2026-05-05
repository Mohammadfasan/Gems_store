import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../src/componets/Navbar";
import Home from "../src/componets/Home";
import Jewelry from "../src/componets/Jewelary";
import Gem from "../src/componets/Gem";
import Profile from './componets/Profile';
import News from './componets/News';
import Location from "./componets/Location"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rings Routes - All show rings */}
          <Route path="/rings" element={<Jewelry />} />
          <Route path="/rings/engagement" element={<Jewelry />} />
          <Route path="/rings/wedding" element={<Jewelry />} />
          <Route path="/rings/fashion" element={<Jewelry />} />
          <Route path="/rings/promise" element={<Jewelry />} />
          <Route path="/rings/eternity" element={<Jewelry />} />
          <Route path="/rings/mens-wedding-bands" element={<Jewelry />} />
          
          {/* Necklaces Routes */}
          <Route path="/necklaces" element={<Jewelry />} />
          <Route path="/necklaces/pendant" element={<Jewelry />} />
          <Route path="/necklaces/chokers" element={<Jewelry />} />
          <Route path="/necklaces/chain" element={<Jewelry />} />
          <Route path="/necklaces/statement" element={<Jewelry />} />
          <Route path="/necklaces/layered" element={<Jewelry />} />
          <Route path="/necklaces/lockets" element={<Jewelry />} />
          
          {/* Earrings Routes */}
          <Route path="/earrings" element={<Jewelry />} />
          <Route path="/earrings/stud" element={<Jewelry />} />
          <Route path="/earrings/hoop" element={<Jewelry />} />
          <Route path="/earrings/drop" element={<Jewelry />} />
          <Route path="/earrings/dangle" element={<Jewelry />} />
          <Route path="/earrings/chandelier" element={<Jewelry />} />
          <Route path="/earrings/cluster" element={<Jewelry />} />
          
          {/* Bracelets Routes */}
          <Route path="/bracelets" element={<Jewelry />} />
          <Route path="/bracelets/gold-bangles" element={<Jewelry />} />
          <Route path="/bracelets/charm" element={<Jewelry />} />
          <Route path="/bracelets/cuff" element={<Jewelry />} />
          <Route path="/bracelets/beaded" element={<Jewelry />} />
          <Route path="/bracelets/tennis" element={<Jewelry />} />
          <Route path="/bracelets/chain" element={<Jewelry />} />
          
          {/* Anklets Routes */}
          <Route path="/anklets" element={<Jewelry />} />
          <Route path="/anklets/gold" element={<Jewelry />} />
          <Route path="/anklets/silver" element={<Jewelry />} />
          <Route path="/anklets/beaded" element={<Jewelry />} />
          <Route path="/anklets/gemstone" element={<Jewelry />} />
          <Route path="/anklets/charm" element={<Jewelry />} />
          <Route path="/anklets/temple" element={<Jewelry />} />
          
          {/* Bridal Sets Routes */}
          <Route path="/bridal-sets" element={<Jewelry />} />
          <Route path="/bridal-sets/necklace-earring" element={<Jewelry />} />
          <Route path="/bridal-sets/complete" element={<Jewelry />} />
          <Route path="/bridal-sets/temple" element={<Jewelry />} />
          <Route path="/bridal-sets/wedding" element={<Jewelry />} />
          <Route path="/bridal-sets/traditional" element={<Jewelry />} />
          <Route path="/bridal-sets/kundan" element={<Jewelry />} />
          
          {/* Gems Routes - NOW USING Gem COMPONENT */}
          <Route path="/gems" element={<Gem />} />
          <Route path="/gems/precious" element={<Gem />} />
          <Route path="/gems/semi-precious" element={<Gem />} />
          <Route path="/gems/color" element={<Gem />} />
          <Route path="/gems/organic" element={<Gem />} />
          <Route path="/gems/diamonds" element={<Gem />} />
          <Route path="/gems/rubies" element={<Gem />} />
          <Route path="/gems/emeralds" element={<Gem />} />
          <Route path="/gems/sapphires-blue" element={<Gem />} />
          <Route path="/gems/sapphires-pink" element={<Gem />} />
          <Route path="/gems/sapphires-yellow" element={<Gem />} />
          <Route path="/gems/amethyst" element={<Gem />} />
          <Route path="/gems/citrine" element={<Gem />} />
          <Route path="/gems/garnet" element={<Gem />} />
          <Route path="/gems/peridot" element={<Gem />} />
          <Route path="/gems/aquamarine" element={<Gem />} />
          <Route path="/gems/topaz" element={<Gem />} />
          <Route path="/gems/tourmaline" element={<Gem />} />
          <Route path="/gems/tanzanite" element={<Gem />} />
          <Route path="/gems/morganite" element={<Gem />} />
          <Route path="/gems/moonstone" element={<Gem />} />
          <Route path="/gems/sunstone" element={<Gem />} />
          <Route path="/gems/labradorite" element={<Gem />} />
          <Route path="/gems/opal" element={<Gem />} />
          <Route path="/gems/spinel" element={<Gem />} />
          <Route path="/gems/zircon" element={<Gem />} />
          <Route path="/gems/aventurine" element={<Gem />} />
          <Route path="/gems/pearls" element={<Gem />} />
          <Route path="/gems/amber" element={<Gem />} />
          <Route path="/gems/coral" element={<Gem />} />
          <Route path="/gems/jet" element={<Gem />} />
          <Route path="/gems/ivory" element={<Gem />} />
          <Route path="/gems/mother-of-pearl" element={<Gem />} />
          
          {/* Profile Route */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-profile" element={<Profile />} />
          
          {/* Other Routes */}
        
          <Route path="/shop" element={<Jewelry />} />
          <Route path="/search" element={<Home />} />
          <Route path="/wishlist" element={<Profile />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/new-arrivals" element={<Jewelry />} />
          <Route path="/bestsellers" element={<Jewelry />} />
          <Route path="/sale" element={<Jewelry />} />
          <Route path="/custom-design" element={<Home />} />
          <Route path="/gift-cards" element={<Home />} />
          <Route path="/lab-grown-diamonds" element={<Jewelry />} />
          <Route path="/certified-gemstones" element={<Jewelry />} />
          <Route path="/gemstone-jewelry" element={<Jewelry />} />
          <Route path="/loose-gemstones" element={<Gem />} />
          <Route path="/orders" element={<Profile />} />
          <Route path="/saved-items" element={<Profile />} />
          <Route path="/seller-dashboard" element={<Home />} />

          <Route path="/news" element={<News />} />
          <Route path="/Location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;