import React, { useState } from 'react';
import { 
  FiMapPin, 
  FiPhone, 
  FiStar, 
  FiHeart,
  FiChevronRight,
  FiPlus,
  FiX,
  FiMail,
  FiGlobe,
  FiClock,
  FiAward,
  FiUsers
} from 'react-icons/fi';
import { FaWhatsapp, FaStore, FaGem } from 'react-icons/fa';
import { RiGeminiFill } from 'react-icons/ri';

const Location = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: "Ceylon Gems Store",
      type: "Gem Seller",
      address: "Colombo, Sri Lanka",
      phone: "+94 77 123 4567",
      rating: 4.8,
      description: "Premium quality natural sapphires, rubies, and certified gemstones since 2015.",
      image: "https://placehold.co/200x200/1a1a2e/d4af37?text=Gems",
      coverImage: "https://placehold.co/800x400/1a1a2e/d4af37?text=Ceylon+Gems+Store",
      whatsapp: "+94 77 123 4567",
      email: "ceylongems@example.com",
      established: "2015",
      products: 156
    },
    {
      id: 2,
      name: "Luxury Jewelry House",
      type: "Jewelry Seller",
      address: "Bangkok, Thailand",
      phone: "+66 89 234 5678",
      rating: 4.9,
      description: "Exquisite handcrafted jewelry featuring diamonds, gold, and precious stones.",
      image: "https://placehold.co/200x200/1a1a2e/d4af37?text=Jewelry",
      coverImage: "https://placehold.co/800x400/1a1a2e/d4af37?text=Luxury+Jewelry+House",
      whatsapp: "+66 89 234 5678",
      email: "luxuryjewelry@example.com",
      established: "2018",
      products: 89
    },
    {
      id: 3,
      name: "Gem & Jewelry World",
      type: "Both",
      address: "Jaipur, India",
      phone: "+91 98 345 6789",
      rating: 4.7,
      description: "Wholesale gemstones and custom jewelry designs. Direct from mines to market.",
      image: "https://placehold.co/200x200/1a1a2e/d4af37?text=Gem+World",
      coverImage: "https://placehold.co/800x400/1a1a2e/d4af37?text=Gem+%26+Jewelry+World",
      whatsapp: "+91 98 345 6789",
      email: "gemsindia@example.com",
      established: "2010",
      products: 234
    },
    {
      id: 4,
      name: "Royal Gemstones",
      type: "Gem Seller",
      address: "Ratnapura, Sri Lanka",
      phone: "+94 71 456 7890",
      rating: 4.9,
      description: "Family-owned business specializing in blue sapphires, star rubies, and cat's eye.",
      image: "https://placehold.co/200x200/1a1a2e/d4af37?text=Royal",
      coverImage: "https://placehold.co/800x400/1a1a2e/d4af37?text=Royal+Gemstones",
      whatsapp: "+94 71 456 7890",
      email: "royalgems@example.com",
      established: "2008",
      products: 312
    },
    {
      id: 5,
      name: "Elegant Jewelry Creations",
      type: "Jewelry Seller",
      address: "Mumbai, India",
      phone: "+91 99 567 8901",
      rating: 4.8,
      description: "Bridal jewelry sets, engagement rings, and custom wedding bands.",
      image: "https://placehold.co/200x200/1a1a2e/d4af37?text=Elegant",
      coverImage: "https://placehold.co/800x400/1a1a2e/d4af37?text=Elegant+Jewelry",
      whatsapp: "+91 99 567 8901",
      email: "elegantjewelry@example.com",
      established: "2012",
      products: 178
    },
    {
      id: 6,
      name: "Global Gem Exchange",
      type: "Both",
      address: "Antwerp, Belgium",
      phone: "+32 45 678 9012",
      rating: 4.9,
      description: "International diamond and gemstone dealer with certified stones worldwide.",
      image: "https://placehold.co/200x200/1a1a2e/d4af37?text=Global",
      coverImage: "https://placehold.co/800x400/1a1a2e/d4af37?text=Global+Gem+Exchange",
      whatsapp: "+32 45 678 9012",
      email: "globalgems@example.com",
      established: "2005",
      products: 567
    }
  ]);

  const [newSeller, setNewSeller] = useState({
    name: '',
    type: 'Gem Seller',
    address: '',
    phone: '',
    whatsapp: '',
    email: '',
    description: '',
    image: ''
  });

  const handleAddSeller = () => {
    if (newSeller.name && newSeller.address && newSeller.phone) {
      const seller = {
        id: sellers.length + 1,
        ...newSeller,
        rating: 0,
        established: new Date().getFullYear().toString(),
        products: 0,
        coverImage: "https://placehold.co/800x400/1a1a2e/d4af37?text=New+Shop",
        image: newSeller.image || "https://placehold.co/200x200/1a1a2e/d4af37?text=New"
      };
      setSellers([...sellers, seller]);
      setNewSeller({
        name: '',
        type: 'Gem Seller',
        address: '',
        phone: '',
        whatsapp: '',
        email: '',
        description: '',
        image: ''
      });
      setShowAddModal(false);
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'Gem Seller': return 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10';
      case 'Jewelry Seller': return 'border-pink-500/50 text-pink-400 bg-pink-500/10';
      case 'Both': return 'border-[#d4af37]/50 text-[#d4af37] bg-[#d4af37]/10';
      default: return 'border-gray-500/50 text-gray-400 bg-gray-500/10';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Gem Seller': return <FiAward className="text-cyan-400" />;
      case 'Jewelry Seller': return <FaGem className="text-pink-400" />;
      case 'Both': return <RiGeminiFill className="text-[#d4af37]" />;
      default: return <FaStore />;
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FiStar 
            key={i} 
            className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-[#d4af37] fill-[#d4af37]' : 'text-gray-600'}`} 
          />
        ))}
        <span className="text-gray-400 text-xs ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black border-b border-[#d4af37]/20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://placehold.co/1600x400/1a1a2e/d4af37?text=Gem+%26+Jewelry+Marketplace" 
            alt="Sellers background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 z-10">
          <div className="flex items-center gap-2 text-sm mb-4">
            <a href="/" className="text-gray-400 hover:text-[#d4af37] transition">Home</a>
            <span className="text-gray-600">›</span>
            <a href="/location" className="text-gray-400 hover:text-[#d4af37] transition">Location</a>
            <span className="text-gray-600">›</span>
            <span className="text-[#d4af37] font-medium">Sellers</span>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-4">
                <FiUsers className="text-[#d4af37] text-sm" />
                <span className="text-[#d4af37] text-sm font-medium">Trusted Sellers</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2">
                Gem & Jewelry Sellers
              </h1>
              <p className="text-gray-300 text-base max-w-xl">
                Find trusted gem and jewelry shops near you. Connect with verified sellers for authentic products.
              </p>
            </div>
            
           
          </div>
        </div>
      </div>

      {/* Main Content - Seller List */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Stats Bar */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800 flex-wrap gap-3">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-[#d4af37] font-semibold">{sellers.length}</span> trusted sellers
          </p>
          <div className="flex gap-2">
            <select className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 text-gray-300 text-sm focus:outline-none focus:border-[#d4af37]">
              <option>All Sellers</option>
              <option>Gem Sellers</option>
              <option>Jewelry Sellers</option>
              <option>Both</option>
            </select>
            <select className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 text-gray-300 text-sm focus:outline-none focus:border-[#d4af37]">
              <option>Sort by: Rating</option>
              <option>Sort by: Name</option>
              <option>Sort by: Established</option>
            </select>
          </div>
        </div>

        {/* Seller Cards - Vertical List */}
        <div className="space-y-5">
          {sellers.map((seller) => (
            <div 
              key={seller.id} 
              className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#d4af37]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/10"
            >
              <div className="flex flex-col md:flex-row">
                {/* Shop Image */}
                <div className="md:w-48 h-48 relative overflow-hidden">
                  <img 
                    src={seller.image} 
                    alt={seller.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r"></div>
                </div>
                
                {/* Seller Details */}
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap justify-between items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h2 className="text-xl font-serif text-white group-hover:text-[#d4af37] transition">
                          {seller.name}
                        </h2>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(seller.type)}`}>
                          {getTypeIcon(seller.type)} {seller.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{seller.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-400">
                          <FiMapPin className="text-[#d4af37]" /> {seller.address}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <FiClock className="text-[#d4af37]" /> Est. {seller.established}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <FaStore className="text-[#d4af37]" /> {seller.products} Products
                        </span>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="text-right">
                      {renderStars(seller.rating)}
                      <p className="text-gray-500 text-xs mt-1">{seller.products}+ sold</p>
                    </div>
                  </div>
                  
                  {/* Contact and Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <FiPhone className="text-[#d4af37]" /> {seller.phone}
                      </span>
                      <a href={`https://wa.me/${seller.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                        <button className="p-1.5 rounded-lg bg-green-600/20 text-green-500 hover:bg-green-600 hover:text-white transition">
                          <FaWhatsapp size={14} />
                        </button>
                      </a>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="px-4 py-1.5 rounded-lg bg-[#d4af37] text-black text-sm font-medium hover:bg-[#b8962e] transition flex items-center gap-1">
                        <FiPhone size={14} /> Call Now
                      </button>
                      <button className="px-4 py-1.5 rounded-lg border border-[#d4af37]/40 text-[#d4af37] text-sm font-medium hover:bg-[#d4af37]/10 transition flex items-center gap-1">
                        View Profile <FiChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300">
            Load More Sellers
          </button>
        </div>
      </div>

      {/* Add New Seller Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#d4af37]/30 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm p-5 border-b border-gray-800 flex justify-between items-center">
              
              <button 
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition"
              >
                <FiX />
              </button>
            </div>
            
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Shop Name *</label>
                <input 
                  type="text" 
                  value={newSeller.name}
                  onChange={(e) => setNewSeller({...newSeller, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  placeholder="Enter shop name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Seller Type *</label>
                <select 
                  value={newSeller.type}
                  onChange={(e) => setNewSeller({...newSeller, type: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option>Gem Seller</option>
                  <option>Jewelry Seller</option>
                  <option>Both</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Address *</label>
                <input 
                  type="text" 
                  value={newSeller.address}
                  onChange={(e) => setNewSeller({...newSeller, address: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  placeholder="City, Country"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  value={newSeller.phone}
                  onChange={(e) => setNewSeller({...newSeller, phone: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  value={newSeller.whatsapp}
                  onChange={(e) => setNewSeller({...newSeller, whatsapp: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  value={newSeller.email}
                  onChange={(e) => setNewSeller({...newSeller, email: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  placeholder="seller@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Shop Description</label>
                <textarea 
                  rows="2"
                  value={newSeller.description}
                  onChange={(e) => setNewSeller({...newSeller, description: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  placeholder="Brief description of your shop..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Image URL (Optional)</label>
                <input 
                  type="text" 
                  value={newSeller.image}
                  onChange={(e) => setNewSeller({...newSeller, image: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  placeholder="https://placehold.co/200x200/1a1a2e/d4af37?text=Shop"
                />
                <p className="text-gray-500 text-xs mt-1">Leave empty to use default image</p>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm p-5 border-t border-gray-800 flex gap-3">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddSeller}
                className="flex-1 px-4 py-2 rounded-lg bg-[#d4af37] text-black font-semibold hover:bg-[#b8962e] transition"
              >
                Add Seller
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 3px; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Location;