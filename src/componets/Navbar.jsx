import React, { useState, useRef, useEffect } from 'react';
import { 
  FiSearch, 
  FiHeart, 
  FiShoppingCart, 
  FiUser, 
  FiLogOut, 
  FiChevronDown,
  FiStar,
  FiSettings,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { RiGeminiFill } from 'react-icons/ri';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const profileRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Jewelry Categories with their varieties - ALL are clickable links
  const jewelryData = {
    rings: {
      name: 'Rings',
      baseLink: '/rings',
      varieties: [
        { name: 'Engagement Rings', link: '/rings/engagement' },
        { name: 'Wedding Rings', link: '/rings/wedding' },
        { name: 'Fashion Rings', link: '/rings/fashion' },
        { name: 'Promise Rings', link: '/rings/promise' },
        { name: 'Eternity Rings', link: '/rings/eternity' },
        { name: "Men's Wedding Bands", link: '/rings/mens-wedding-bands' }
      ],
      metals: [
        { name: 'White Gold', link: '/rings/white-gold', color: '#E8E8E8', borderColor: '#C0C0C0' },
        { name: 'Yellow Gold', link: '/rings/yellow-gold', color: '#F5D76E', borderColor: '#D4AF37' },
        { name: 'Rose Gold', link: '/rings/rose-gold', color: '#E8A2A2', borderColor: '#D48B8B' },
        { name: 'Platinum', link: '/rings/platinum', color: '#C0C0C0', borderColor: '#A9A9A9' }
      ]
    },
    necklaces: {
      name: 'Chains / Necklaces',
      baseLink: '/necklaces',
      varieties: [
        { name: 'Pendant Necklaces', link: '/necklaces/pendant' },
        { name: 'Chokers', link: '/necklaces/chokers' },
        { name: 'Chain Necklaces', link: '/necklaces/chain' },
        { name: 'Statement Necklaces', link: '/necklaces/statement' },
        { name: 'Layered Necklaces', link: '/necklaces/layered' },
        { name: 'Lockets', link: '/necklaces/lockets' }
      ],
      metals: [
        { name: 'White Gold', link: '/necklaces/white-gold', color: '#E8E8E8', borderColor: '#C0C0C0' },
        { name: 'Yellow Gold', link: '/necklaces/yellow-gold', color: '#F5D76E', borderColor: '#D4AF37' },
        { name: 'Rose Gold', link: '/necklaces/rose-gold', color: '#E8A2A2', borderColor: '#D48B8B' },
        { name: 'Platinum', link: '/necklaces/platinum', color: '#C0C0C0', borderColor: '#A9A9A9' },
        { name: 'Silver', link: '/necklaces/silver', color: '#D4D4D4', borderColor: '#B0B0B0' }
      ]
    },
    earrings: {
      name: 'Earrings',
      baseLink: '/earrings',
      varieties: [
        { name: 'Stud Earrings', link: '/earrings/stud' },
        { name: 'Hoop Earrings', link: '/earrings/hoop' },
        { name: 'Drop Earrings', link: '/earrings/drop' },
        { name: 'Dangle Earrings', link: '/earrings/dangle' },
        { name: 'Chandelier Earrings', link: '/earrings/chandelier' },
        { name: 'Cluster Earrings', link: '/earrings/cluster' }
      ],
      metals: [
        { name: 'White Gold', link: '/earrings/white-gold', color: '#E8E8E8', borderColor: '#C0C0C0' },
        { name: 'Yellow Gold', link: '/earrings/yellow-gold', color: '#F5D76E', borderColor: '#D4AF37' },
        { name: 'Rose Gold', link: '/earrings/rose-gold', color: '#E8A2A2', borderColor: '#D48B8B' },
        { name: 'Platinum', link: '/earrings/platinum', color: '#C0C0C0', borderColor: '#A9A9A9' },
        { name: 'Silver', link: '/earrings/silver', color: '#D4D4D4', borderColor: '#B0B0B0' }
      ]
    },
    bracelets: {
      name: 'Bracelets',
      baseLink: '/bracelets',
      varieties: [
        { name: 'Gold Bangles', link: '/bracelets/gold-bangles' },
        { name: 'Charm Bracelets', link: '/bracelets/charm' },
        { name: 'Cuff Bracelets', link: '/bracelets/cuff' },
        { name: 'Beaded Bracelets', link: '/bracelets/beaded' },
        { name: 'Tennis Bracelets', link: '/bracelets/tennis' },
        { name: 'Chain Bracelets', link: '/bracelets/chain' }
      ],
      metals: [
        { name: 'White Gold', link: '/bracelets/white-gold', color: '#E8E8E8', borderColor: '#C0C0C0' },
        { name: 'Yellow Gold', link: '/bracelets/yellow-gold', color: '#F5D76E', borderColor: '#D4AF37' },
        { name: 'Rose Gold', link: '/bracelets/rose-gold', color: '#E8A2A2', borderColor: '#D48B8B' },
        { name: 'Platinum', link: '/bracelets/platinum', color: '#C0C0C0', borderColor: '#A9A9A9' }
      ]
    },
    anklets: {
      name: 'Anklets',
      baseLink: '/anklets',
      varieties: [
        { name: 'Gold Anklets', link: '/anklets/gold' },
        { name: 'Silver Anklets', link: '/anklets/silver' },
        { name: 'Beaded Anklets', link: '/anklets/beaded' },
        { name: 'Gemstone Anklets', link: '/anklets/gemstone' },
        { name: 'Charm Anklets', link: '/anklets/charm' },
        { name: 'Temple Anklets', link: '/anklets/temple' }
      ],
      metals: [
        { name: 'Yellow Gold', link: '/anklets/yellow-gold', color: '#F5D76E', borderColor: '#D4AF37' },
        { name: 'White Gold', link: '/anklets/white-gold', color: '#E8E8E8', borderColor: '#C0C0C0' },
        { name: 'Rose Gold', link: '/anklets/rose-gold', color: '#E8A2A2', borderColor: '#D48B8B' },
        { name: 'Silver', link: '/anklets/silver', color: '#D4D4D4', borderColor: '#B0B0B0' }
      ]
    },
    bridal: {
      name: 'Bridal Sets',
      baseLink: '/bridal-sets',
      varieties: [
        { name: 'Necklace & Earring Sets', link: '/bridal-sets/necklace-earring' },
        { name: 'Complete Bridal Sets', link: '/bridal-sets/complete' },
        { name: 'Temple Jewelry Sets', link: '/bridal-sets/temple' },
        { name: 'Wedding Collection', link: '/bridal-sets/wedding' },
        { name: 'Traditional Sets', link: '/bridal-sets/traditional' },
        { name: 'Kundan Sets', link: '/bridal-sets/kundan' }
      ],
      metals: [
        { name: 'Yellow Gold', link: '/bridal-sets/yellow-gold', color: '#F5D76E', borderColor: '#D4AF37' },
        { name: 'Rose Gold', link: '/bridal-sets/rose-gold', color: '#E8A2A2', borderColor: '#D48B8B' },
        { name: 'White Gold', link: '/bridal-sets/white-gold', color: '#E8E8E8', borderColor: '#C0C0C0' },
        { name: 'Platinum', link: '/bridal-sets/platinum', color: '#C0C0C0', borderColor: '#A9A9A9' }
      ]
    }
  };

  // Gems data with links
  const gemsData = {
    precious: {
      name: '💎 Precious Gems',
      baseLink: '/gems/precious',
      gems: [
        { name: 'Diamonds', link: '/gems/diamonds' },
        { name: 'Rubies', link: '/gems/rubies' },
        { name: 'Emeralds', link: '/gems/emeralds' },
        { name: 'Sapphires (Blue)', link: '/gems/sapphires-blue' },
        { name: 'Sapphires (Pink)', link: '/gems/sapphires-pink' },
        { name: 'Sapphires (Yellow)', link: '/gems/sapphires-yellow' }
      ]
    },
    semiPrecious: {
      name: '💠 Semi-Precious Gems',
      baseLink: '/gems/semi-precious',
      gems: [
        { name: 'Amethyst', link: '/gems/amethyst' },
        { name: 'Citrine', link: '/gems/citrine' },
        { name: 'Garnet', link: '/gems/garnet' },
        { name: 'Peridot', link: '/gems/peridot' },
        { name: 'Aquamarine', link: '/gems/aquamarine' },
        { name: 'Topaz', link: '/gems/topaz' },
        { name: 'Tourmaline', link: '/gems/tourmaline' },
        { name: 'Tanzanite', link: '/gems/tanzanite' }
      ]
    },
    colorGems: {
      name: '🌈 Color Gems',
      baseLink: '/gems/color',
      gems: [
        { name: 'Morganite', link: '/gems/morganite' },
        { name: 'Moonstone', link: '/gems/moonstone' },
        { name: 'Sunstone', link: '/gems/sunstone' },
        { name: 'Labradorite', link: '/gems/labradorite' },
        { name: 'Opal', link: '/gems/opal' },
        { name: 'Spinel', link: '/gems/spinel' },
        { name: 'Zircon', link: '/gems/zircon' },
        { name: 'Aventurine', link: '/gems/aventurine' }
      ]
    },
    organic: {
      name: '🪨 Organic Gems',
      baseLink: '/gems/organic',
      gems: [
        { name: 'Pearls', link: '/gems/pearls' },
        { name: 'Amber', link: '/gems/amber' },
        { name: 'Coral', link: '/gems/coral' },
        { name: 'Jet', link: '/gems/jet' },
        { name: 'Ivory (Vintage)', link: '/gems/ivory' },
        { name: 'Mother of Pearl', link: '/gems/mother-of-pearl' }
      ]
    }
  };

  // Handle dropdown with smooth delay
  const handleDropdownEnter = (dropdownName) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // Jewelry Mega Dropdown with ALL clickable links
  const JewelryMegaDropdown = () => (
    <div 
      className="relative group"
      onMouseEnter={() => handleDropdownEnter('jewelry')}
      onMouseLeave={handleDropdownLeave}
    >
      <button className="flex items-center gap-1.5 text-[#c4b998] hover:text-[#d4af37] font-sans text-sm tracking-wide transition-all duration-300 py-2 group-hover:translate-y-[-1px]">
        Jewelry
        <FiChevronDown className={`text-xs transition-transform duration-300 ${activeDropdown === 'jewelry' ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`
        absolute top-full left-0 mt-1 w-[950px] bg-[#0d0d10] 
        border border-[#d4af37]/20 rounded-xl shadow-2xl
        transition-all duration-300 ease-out z-50
        backdrop-blur-xl bg-opacity-95
        max-h-[80vh] overflow-y-auto
        ${activeDropdown === 'jewelry' 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-2'}
      `}>
        <div className="p-5">
          <div className="border-b border-[#d4af37]/20 pb-3 mb-4">
            <h3 className="text-[#d4af37] text-lg font-serif tracking-wide">Shop by Category</h3>
            <p className="text-[#8a7f6b] text-xs mt-1">YOUNIQUE JEWELLERY</p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            {Object.entries(jewelryData).map(([key, category]) => (
              <div key={key} className="border-b border-[#d4af37]/10 pb-3">
                {/* Category Header with Link */}
                <a 
                  href={category.baseLink}
                  className="text-[#d4af37] text-sm font-semibold tracking-wider mb-2 flex items-center gap-2 hover:opacity-80 transition"
                >
                  {category.name === 'Rings' && <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>}
                  {category.name === 'Chains / Necklaces' && <RiGeminiFill className="text-[#d4af37] text-sm" />}
                  {category.name === 'Earrings' && <span className="text-[#d4af37] text-sm">✦</span>}
                  {category.name === 'Bracelets' && <span className="text-[#d4af37] text-sm">⌘</span>}
                  {category.name === 'Anklets' && <span className="text-[#d4af37] text-sm">ϟ</span>}
                  {category.name === 'Bridal Sets' && <span className="text-[#d4af37] text-sm">♕</span>}
                  {category.name}
                </a>
                
                {/* Varieties - Clickable Links */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-2">
                  {category.varieties.map((variety, idx) => (
                    <a 
                      key={idx} 
                      href={variety.link} 
                      className="text-[#8a7f6b] hover:text-[#d4af37] text-xs transition py-0.5 hover:translate-x-0.5 duration-200"
                    >
                      {variety.name}
                    </a>
                  ))}
                </div>
                
                {/* Metal selector - Clickable Links with Color Swatches */}
                <div className="flex flex-wrap items-center gap-2 mt-2 pt-1 border-t border-[#d4af37]/5">
                  <span className="text-[#8a7f6b] text-[10px] tracking-wider">METALS:</span>
                  {category.metals.map((metal, idx) => (
                    <a 
                      key={idx} 
                      href={metal.link} 
                      className="group flex items-center gap-1 text-[#8a7f6b] hover:text-[#d4af37] text-[10px] transition"
                      title={metal.name}
                    >
                      <div 
                        className="w-3 h-3 rounded-full shadow-sm transition-transform group-hover:scale-110"
                        style={{ 
                          backgroundColor: metal.color, 
                          border: `1px solid ${metal.borderColor}`
                        }}
                      />
                      <span className="hidden group-hover:inline">{metal.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Links */}
          <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-[#d4af37]/10">
            <a href="/new-arrivals" className="text-[#d4af37] text-xs hover:underline">NEW ARRIVALS</a>
            <a href="/bestsellers" className="text-[#d4af37] text-xs hover:underline">BESTSELLERS</a>
            <a href="/sale" className="text-[#d4af37] text-xs hover:underline">SALE</a>
            <a href="/custom-design" className="text-[#d4af37] text-xs hover:underline">CUSTOM DESIGN</a>
            <a href="/gift-cards" className="text-[#d4af37] text-xs hover:underline">GIFT CARDS</a>
          </div>
        </div>
      </div>
    </div>
  );

  // Gems Mega Dropdown with ALL clickable links
  const GemsMegaDropdown = () => (
    <div 
      className="relative group"
      onMouseEnter={() => handleDropdownEnter('gems')}
      onMouseLeave={handleDropdownLeave}
    >
      <button className="flex items-center gap-1.5 text-[#c4b998] hover:text-[#d4af37] font-sans text-sm tracking-wide transition-all duration-300 py-2 group-hover:translate-y-[-1px]">
        Gems
        <FiChevronDown className={`text-xs transition-transform duration-300 ${activeDropdown === 'gems' ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`
        absolute top-full left-0 mt-1 w-[850px] bg-[#0d0d10] 
        border border-[#d4af37]/20 rounded-xl shadow-2xl
        transition-all duration-300 ease-out z-50
        backdrop-blur-xl bg-opacity-95
        ${activeDropdown === 'gems' 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-2'}
      `}>
        <div className="p-5">
          <div className="border-b border-[#d4af37]/20 pb-3 mb-4">
            <h3 className="text-[#d4af37] text-lg font-serif tracking-wide">Shop by Gemstone</h3>
            <p className="text-[#8a7f6b] text-xs mt-1">DISCOVER OUR GEM COLLECTION</p>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Precious Gems */}
            <div>
              <a href={gemsData.precious.baseLink} className="text-[#d4af37] text-sm font-semibold tracking-wider mb-3 flex items-center gap-1 hover:opacity-80 transition">
                <span className="text-base">💎</span> Precious Gems
              </a>
              {gemsData.precious.gems.map((gem, idx) => (
                <a 
                  key={idx} 
                  href={gem.link} 
                  className="flex items-center gap-2 py-1.5 text-[#8a7f6b] hover:text-[#d4af37] text-xs transition group"
                >
                  <RiGeminiFill className="text-[#d4af37] text-[10px] opacity-0 group-hover:opacity-100 transition" />
                  <span>{gem.name}</span>
                </a>
              ))}
            </div>
            
            {/* Semi-Precious Gems */}
            <div>
              <a href={gemsData.semiPrecious.baseLink} className="text-[#d4af37] text-sm font-semibold tracking-wider mb-3 flex items-center gap-1 hover:opacity-80 transition">
                <span className="text-base">💠</span> Semi-Precious
              </a>
              {gemsData.semiPrecious.gems.map((gem, idx) => (
                <a 
                  key={idx} 
                  href={gem.link} 
                  className="flex items-center gap-2 py-1.5 text-[#8a7f6b] hover:text-[#d4af37] text-xs transition group"
                >
                  <RiGeminiFill className="text-[#d4af37] text-[10px] opacity-0 group-hover:opacity-100 transition" />
                  <span>{gem.name}</span>
                </a>
              ))}
            </div>
            
            {/* Color Gems */}
            <div>
              <a href={gemsData.colorGems.baseLink} className="text-[#d4af37] text-sm font-semibold tracking-wider mb-3 flex items-center gap-1 hover:opacity-80 transition">
                <span className="text-base">🌈</span> Color Gems
              </a>
              {gemsData.colorGems.gems.map((gem, idx) => (
                <a 
                  key={idx} 
                  href={gem.link} 
                  className="flex items-center gap-2 py-1.5 text-[#8a7f6b] hover:text-[#d4af37] text-xs transition group"
                >
                  <RiGeminiFill className="text-[#d4af37] text-[10px] opacity-0 group-hover:opacity-100 transition" />
                  <span>{gem.name}</span>
                </a>
              ))}
            </div>
            
            {/* Organic Gems */}
            <div>
              <a href={gemsData.organic.baseLink} className="text-[#d4af37] text-sm font-semibold tracking-wider mb-3 flex items-center gap-1 hover:opacity-80 transition">
                <span className="text-base">🪨</span> Organic Gems
              </a>
              {gemsData.organic.gems.map((gem, idx) => (
                <a 
                  key={idx} 
                  href={gem.link} 
                  className="flex items-center gap-2 py-1.5 text-[#8a7f6b] hover:text-[#d4af37] text-xs transition group"
                >
                  <RiGeminiFill className="text-[#d4af37] text-[10px] opacity-0 group-hover:opacity-100 transition" />
                  <span>{gem.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-[#d4af37]/10">
            <a href="/lab-grown-diamonds" className="text-[#d4af37] text-xs hover:underline">LAB GROWN DIAMONDS</a>
            <a href="/certified-gemstones" className="text-[#d4af37] text-xs hover:underline">CERTIFIED GEMSTONES</a>
            <a href="/gemstone-jewelry" className="text-[#d4af37] text-xs hover:underline">GEMSTONE JEWELRY</a>
            <a href="/loose-gemstones" className="text-[#d4af37] text-xs hover:underline">LOOSE GEMSTONES</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0c] border-b border-[#d4af37]/20 shadow-lg backdrop-blur-sm bg-opacity-95">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section - Left */}
            <a href="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f9e79f] to-[#b8860b] flex items-center justify-center shadow-lg shadow-[#d4af37]/30 group-hover:scale-105 transition-transform duration-300">
                <RiGeminiFill className="text-[#0a0a0c] text-xl" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-serif tracking-[4px] bg-gradient-to-r from-[#e8d5a3] via-[#d4af37] to-[#b8860b] bg-clip-text text-transparent font-light block leading-tight">
                  GEMLOX
                </span>
                <span className="text-[8px] tracking-[2px] text-[#8a7f6b] block">YOUNIQUE JEWELLERY</span>
              </div>
            </a>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              <JewelryMegaDropdown />
              <GemsMegaDropdown />
              <a href="/profile" className="nav-link">Profile</a>
              <a href="/news" className="nav-link">News</a>
              <a href="/location" className="nav-link">Location</a>
              <a href="/shop" className="shop-now-btn">Shop Now</a>
            </div>

            {/* Right Section - Icons & Auth */}
            <div className="flex items-center gap-2 md:gap-3">
              <a href="/search" className="icon-btn" aria-label="Search">
                <FiSearch />
              </a>
              <a href="/wishlist" className="icon-btn" aria-label="Wishlist">
                <FiHeart />
              </a>
              <a href="/cart" className="icon-btn relative" aria-label="Cart">
                <FiShoppingCart />
                <span className="absolute -top-1 -right-2 bg-[#d4af37] text-[#0a0a0c] text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[16px] text-center">
                  0
                </span>
              </a>
              
              {!isAuthenticated ? (
                <div className="hidden sm:flex items-center gap-2 ml-2">
                  <button 
                    onClick={() => setIsAuthenticated(true)}
                    className="px-4 py-1.5 text-sm rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 transition-all hover:scale-105 font-medium"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => setIsAuthenticated(true)}
                    className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0a0c] font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/30"
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className="relative" ref={profileRef}>
                  <button 
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="w-9 h-9 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#c4b998] hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                  >
                    <FiUser className="text-sm" />
                  </button>
                  
                  <div className={`
                    absolute top-12 right-0 w-56 bg-[#0d0d10] border border-[#d4af37]/20 rounded-xl shadow-2xl
                    transition-all duration-300 origin-top-right z-50 backdrop-blur-xl bg-opacity-95
                    ${profileOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}
                  `}>
                    <div className="py-2">
                      <a href="/my-profile" className="flex items-center gap-3 px-4 py-2.5 text-[#c4b998] hover:text-[#d4af37] hover:bg-[#d4af37]/10 text-sm transition-all">
                        <FiUser size={14} /> My Profile
                      </a>
                      <a href="/orders" className="flex items-center gap-3 px-4 py-2.5 text-[#c4b998] hover:text-[#d4af37] hover:bg-[#d4af37]/10 text-sm transition-all">
                        <FiStar size={14} /> Orders
                      </a>
                      <a href="/saved-items" className="flex items-center gap-3 px-4 py-2.5 text-[#c4b998] hover:text-[#d4af37] hover:bg-[#d4af37]/10 text-sm transition-all">
                        <FiHeart size={14} /> Saved Items
                      </a>
                      <a href="/seller-dashboard" className="flex items-center gap-3 px-4 py-2.5 text-[#c4b998] hover:text-[#d4af37] hover:bg-[#d4af37]/10 text-sm transition-all">
                        <FiSettings size={14} /> Seller Dashboard
                      </a>
                      <hr className="my-1 border-[#d4af37]/20" />
                      <a 
                        href="#" 
                        onClick={() => setIsAuthenticated(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-[#c4b998] hover:text-[#d4af37] hover:bg-[#d4af37]/10 text-sm transition-all"
                      >
                        <FiLogOut size={14} /> Logout
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[#d4af37] text-2xl p-2"
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with ALL clickable links */}
        <div className={`
          fixed top-20 left-0 right-0 bg-[#0a0a0c] border-b border-[#d4af37]/20
          transition-all duration-400 ease-in-out z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]
          ${mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}
        `}>
          <div className="px-5 py-4 space-y-4">
            {/* Jewelry Categories for Mobile */}
            {Object.entries(jewelryData).map(([key, category]) => (
              <div key={key} className="py-2 border-b border-[#d4af37]/10">
                <a href={category.baseLink} className="text-[#d4af37] text-sm font-semibold mb-2 block hover:opacity-80">
                  {category.name}
                </a>
                <div className="grid grid-cols-2 gap-1 pl-2">
                  {category.varieties.map((variety, idx) => (
                    <a key={idx} href={variety.link} className="py-1 text-[#c4b998] text-xs hover:text-[#d4af37] transition">
                      {variety.name}
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-2 pt-1 pl-2">
                  {category.metals.map((metal, idx) => (
                    <a key={idx} href={metal.link} className="flex flex-col items-center gap-0.5 text-[#8a7f6b] text-[10px] hover:text-[#d4af37] transition">
                      <div 
                        className="w-5 h-5 rounded-full shadow-sm"
                        style={{ 
                          backgroundColor: metal.color, 
                          border: `1px solid ${metal.borderColor}`
                        }}
                      />
                      <span>{metal.name.split(' ')[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Gems Categories for Mobile */}
            <div className="py-2 border-b border-[#d4af37]/10">
              <div className="text-[#d4af37] text-sm font-semibold mb-2">Gems</div>
              {Object.entries(gemsData).map(([key, category]) => (
                <div key={key} className="ml-2 mb-2">
                  <a href={category.baseLink} className="text-[#d4af37]/80 text-xs font-medium mb-1 block hover:opacity-80">
                    {category.name}
                  </a>
                  <div className="grid grid-cols-2 gap-1 pl-2">
                    {category.gems.map((gem, idx) => (
                      <a key={idx} href={gem.link} className="py-1 text-[#c4b998] text-xs hover:text-[#d4af37] transition">
                        {gem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <a href="/profile" className="block py-3 text-[#c4b998] hover:text-[#d4af37] border-b border-[#d4af37]/10 text-base transition">Profile</a>
            <a href="/news" className="block py-3 text-[#c4b998] hover:text-[#d4af37] border-b border-[#d4af37]/10 text-base transition">News</a>
            <a href="/location" className="block py-3 text-[#c4b998] hover:text-[#d4af37] border-b border-[#d4af37]/10 text-base transition">Location</a>
            
            <div className="flex gap-3 pt-4 pb-2">
              <button onClick={() => setIsAuthenticated(true)} className="flex-1 py-2.5 rounded-full border border-[#d4af37] text-[#d4af37] text-sm font-medium">Sign In</button>
              <button onClick={() => setIsAuthenticated(true)} className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0a0c] text-sm font-semibold">Register</button>
            </div>
            
            <a href="/shop" className="w-full mt-2 mb-4 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0a0c] font-bold text-base shadow-lg shadow-[#d4af37]/30 text-center block">
              Shop Now
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .font-serif, h3, .logo-text {
          font-family: 'Playfair Display', serif;
        }
        
        .nav-link {
          position: relative;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          color: #c4b998;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          color: #d4af37;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, #f9e79f);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .shop-now-btn {
          background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          padding: 0.6rem 1.6rem;
          border-radius: 40px;
          color: #0a0a0c;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
          text-decoration: none;
          display: inline-block;
        }
        
        .shop-now-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(212, 175, 55, 0.8);
          background: linear-gradient(135deg, #e8d5a3, #d4af37);
        }
        
        .icon-btn {
          background: transparent;
          border: none;
          color: #c4b998;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          border-radius: 50%;
          text-decoration: none;
        }
        
        .icon-btn:hover {
          color: #d4af37;
          transform: translateY(-2px);
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0c;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
};

export default Navbar;