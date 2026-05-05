import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FiHeart, 
  FiShoppingCart, 
  FiStar, 
  FiFilter,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiGrid,
  FiList
} from 'react-icons/fi';
import { RiGeminiFill } from 'react-icons/ri';

const Gem = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedClarity, setSelectedClarity] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState([]);
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    type: true,
    color: true,
    clarity: true,
    origin: true,
    style: true
  });

  const currentPath = location.pathname;
  
  // Get gem category from URL
  const getGemCategory = () => {
    if (currentPath.includes('/diamonds')) return 'diamonds';
    if (currentPath.includes('/rubies')) return 'rubies';
    if (currentPath.includes('/emeralds')) return 'emeralds';
    if (currentPath.includes('/sapphires')) return 'sapphires';
    if (currentPath.includes('/amethyst')) return 'amethyst';
    if (currentPath.includes('/citrine')) return 'citrine';
    if (currentPath.includes('/garnet')) return 'garnet';
    if (currentPath.includes('/peridot')) return 'peridot';
    if (currentPath.includes('/aquamarine')) return 'aquamarine';
    if (currentPath.includes('/topaz')) return 'topaz';
    if (currentPath.includes('/tourmaline')) return 'tourmaline';
    if (currentPath.includes('/tanzanite')) return 'tanzanite';
    if (currentPath.includes('/morganite')) return 'morganite';
    if (currentPath.includes('/moonstone')) return 'moonstone';
    if (currentPath.includes('/opal')) return 'opal';
    if (currentPath.includes('/pearls')) return 'pearls';
    if (currentPath.includes('/precious')) return 'precious';
    if (currentPath.includes('/semi-precious')) return 'semi-precious';
    if (currentPath.includes('/organic')) return 'organic';
    return 'all';
  };
  
  const gemCategory = getGemCategory();
  
  // Category display names
  const categoryNames = {
    'diamonds': 'Diamonds',
    'rubies': 'Rubies',
    'emeralds': 'Emeralds',
    'sapphires': 'Sapphires',
    'amethyst': 'Amethyst',
    'citrine': 'Citrine',
    'garnet': 'Garnet',
    'peridot': 'Peridot',
    'aquamarine': 'Aquamarine',
    'topaz': 'Topaz',
    'tourmaline': 'Tourmaline',
    'tanzanite': 'Tanzanite',
    'morganite': 'Morganite',
    'moonstone': 'Moonstone',
    'opal': 'Opal',
    'pearls': 'Pearls',
    'precious': 'Precious Gemstones',
    'semi-precious': 'Semi-Precious Gemstones',
    'organic': 'Organic Gemstones',
    'all': 'Certified Gemstones'
  };

  // Function to get Google image URL - REPLACE THESE WITH YOUR ACTUAL GOOGLE IMAGE LINKS
  const getGemImage = (gemName) => {
    // Google Image Placeholders - Replace these URLs with your actual Google image links
    const imageMap = {
      'White Diamond': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_1',
      'Yellow Diamond': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_2',
      'Pink Diamond': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_3',
      'Burma Ruby': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_4',
      'Thai Ruby': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_5',
      'Colombian Emerald': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_6',
      'Zambian Emerald': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_7',
      'Blue Sapphire': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_8',
      'Yellow Sapphire': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_9',
      'Pink Sapphire': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_10',
      'Purple Amethyst': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_11',
      'Golden Citrine': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_12',
      'Red Garnet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_13',
      'Green Peridot': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_14',
      'Blue Aquamarine': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_15',
      'Blue Topaz': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_16',
      'Pink Tourmaline': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_17',
      'Blue Tanzanite': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_18',
      'Pink Morganite': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_19',
      'White Moonstone': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_20',
      'White Opal': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_21',
      'Freshwater Pearl': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_22',
      'South Sea Pearl': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_23',
    };
    return imageMap[gemName] || 'https://placehold.co/400x400/f5f5f5/d4af37?text=Gemstone';
  };

  // Gemstone product database
  const allGems = [
    // Diamonds
    { id: 1, name: "White Diamond", category: "gems", type: "Diamond", color: "White", clarity: "IF", origin: "South Africa", carat: 1.0, price: 5999, originalPrice: 7999, style: "Brilliant Cut", rating: 5.0, reviews: 67, image: getGemImage("White Diamond"), isNew: false, isBestseller: true, discount: 25, gemType: "diamonds" },
    { id: 2, name: "Yellow Diamond", category: "gems", type: "Diamond", color: "Yellow", clarity: "VS", origin: "South Africa", carat: 0.8, price: 4499, originalPrice: 5999, style: "Brilliant Cut", rating: 4.8, reviews: 34, image: getGemImage("Yellow Diamond"), isNew: true, discount: 25, gemType: "diamonds" },
    { id: 3, name: "Pink Diamond", category: "gems", type: "Diamond", color: "Pink", clarity: "VVS", origin: "Australia", carat: 0.5, price: 8999, originalPrice: 11999, style: "Brilliant Cut", rating: 5.0, reviews: 23, image: getGemImage("Pink Diamond"), isNew: true, isBestseller: true, discount: 25, gemType: "diamonds" },
    
    // Rubies
    { id: 4, name: "Burma Ruby", category: "gems", type: "Ruby", color: "Red", clarity: "VVS", origin: "Burma", carat: 1.8, price: 1899, originalPrice: 2599, style: "Cabochon", rating: 4.8, reviews: 38, image: getGemImage("Burma Ruby"), isBestseller: true, discount: 27, gemType: "rubies" },
    { id: 5, name: "Thai Ruby", category: "gems", type: "Ruby", color: "Red", clarity: "VS", origin: "Thailand", carat: 2.0, price: 1299, style: "Faceted", rating: 4.6, reviews: 45, image: getGemImage("Thai Ruby"), isNew: true, gemType: "rubies" },
    
    // Emeralds
    { id: 6, name: "Colombian Emerald", category: "gems", type: "Emerald", color: "Green", clarity: "SI", origin: "Colombia", carat: 3.2, price: 3299, originalPrice: 4499, style: "Faceted", rating: 4.9, reviews: 52, image: getGemImage("Colombian Emerald"), isNew: true, discount: 27, gemType: "emeralds" },
    { id: 7, name: "Zambian Emerald", category: "gems", type: "Emerald", color: "Green", clarity: "VS", origin: "Zambia", carat: 2.5, price: 2499, originalPrice: 3299, style: "Emerald Cut", rating: 4.7, reviews: 34, image: getGemImage("Zambian Emerald"), isBestseller: true, discount: 24, gemType: "emeralds" },
    
    // Sapphires
    { id: 8, name: "Blue Sapphire", category: "gems", type: "Sapphire", color: "Blue", clarity: "VS", origin: "Sri Lanka", carat: 2.5, price: 2499, originalPrice: 3499, style: "Faceted", rating: 4.9, reviews: 45, image: getGemImage("Blue Sapphire"), isNew: true, isBestseller: true, discount: 28, gemType: "sapphires" },
    { id: 9, name: "Yellow Sapphire", category: "gems", type: "Sapphire", color: "Yellow", clarity: "VS", origin: "Sri Lanka", carat: 3.0, price: 1599, originalPrice: 2199, style: "Faceted", rating: 4.7, reviews: 29, image: getGemImage("Yellow Sapphire"), isNew: true, discount: 27, gemType: "sapphires" },
    { id: 10, name: "Pink Sapphire", category: "gems", type: "Sapphire", color: "Pink", clarity: "VVS", origin: "Madagascar", carat: 1.5, price: 1899, originalPrice: 2499, style: "Faceted", rating: 4.8, reviews: 32, image: getGemImage("Pink Sapphire"), isNew: true, discount: 24, gemType: "sapphires" },
    
    // Amethyst
    { id: 11, name: "Purple Amethyst", category: "gems", type: "Amethyst", color: "Purple", clarity: "VVS", origin: "Brazil", carat: 4.5, price: 899, originalPrice: 1299, style: "Faceted", rating: 4.6, reviews: 41, image: getGemImage("Purple Amethyst"), isBestseller: true, discount: 31, gemType: "amethyst" },
    
    // Citrine
    { id: 12, name: "Golden Citrine", category: "gems", type: "Citrine", color: "Yellow", clarity: "VVS", origin: "Brazil", carat: 4.2, price: 399, style: "Faceted", rating: 4.5, reviews: 39, image: getGemImage("Golden Citrine"), isBestseller: true, gemType: "citrine" },
    
    // Garnet
    { id: 13, name: "Red Garnet", category: "gems", type: "Garnet", color: "Red", clarity: "VS", origin: "India", carat: 3.5, price: 499, style: "Cabochon", rating: 4.5, reviews: 48, image: getGemImage("Red Garnet"), isBestseller: true, gemType: "garnet" },
    
    // Peridot
    { id: 14, name: "Green Peridot", category: "gems", type: "Peridot", color: "Green", clarity: "VS", origin: "USA", carat: 2.5, price: 449, style: "Faceted", rating: 4.4, reviews: 27, image: getGemImage("Green Peridot"), isNew: true, gemType: "peridot" },
    
    // Aquamarine
    { id: 15, name: "Blue Aquamarine", category: "gems", type: "Aquamarine", color: "Blue", clarity: "VS", origin: "Brazil", carat: 2.8, price: 1299, originalPrice: 1799, style: "Emerald Cut", rating: 4.7, reviews: 34, image: getGemImage("Blue Aquamarine"), isNew: true, discount: 28, gemType: "aquamarine" },
    
    // Topaz
    { id: 16, name: "Blue Topaz", category: "gems", type: "Topaz", color: "Blue", clarity: "VS", origin: "Brazil", carat: 5.0, price: 699, style: "Faceted", rating: 4.4, reviews: 56, image: getGemImage("Blue Topaz"), isNew: true, gemType: "topaz" },
    
    // Tourmaline
    { id: 17, name: "Pink Tourmaline", category: "gems", type: "Tourmaline", color: "Pink", clarity: "VS", origin: "Afghanistan", carat: 2.0, price: 649, originalPrice: 899, style: "Faceted", rating: 4.6, reviews: 33, image: getGemImage("Pink Tourmaline"), isNew: true, discount: 28, gemType: "tourmaline" },
    
    // Tanzanite
    { id: 18, name: "Blue Tanzanite", category: "gems", type: "Tanzanite", color: "Blue", clarity: "VVS", origin: "Tanzania", carat: 1.5, price: 1499, originalPrice: 1999, style: "Faceted", rating: 4.8, reviews: 42, image: getGemImage("Blue Tanzanite"), isBestseller: true, discount: 25, gemType: "tanzanite" },
    
    // Morganite
    { id: 19, name: "Pink Morganite", category: "gems", type: "Morganite", color: "Pink", clarity: "VVS", origin: "Madagascar", carat: 2.2, price: 999, originalPrice: 1399, style: "Faceted", rating: 4.5, reviews: 23, image: getGemImage("Pink Morganite"), isBestseller: true, discount: 29, gemType: "morganite" },
    
    // Moonstone
    { id: 20, name: "White Moonstone", category: "gems", type: "Moonstone", color: "White", clarity: "N/A", origin: "Sri Lanka", carat: 3.8, price: 349, style: "Cabochon", rating: 4.3, reviews: 62, image: getGemImage("White Moonstone"), isBestseller: true, gemType: "moonstone" },
    
    // Opal
    { id: 21, name: "White Opal", category: "gems", type: "Opal", color: "White", clarity: "N/A", origin: "Australia", carat: 2.0, price: 799, originalPrice: 1099, style: "Cabochon", rating: 4.6, reviews: 31, image: getGemImage("White Opal"), isNew: true, discount: 27, gemType: "opal" },
    
    // Pearls
    { id: 22, name: "Freshwater Pearl", category: "gems", type: "Pearl", color: "White", clarity: "N/A", origin: "China", carat: 8.0, price: 299, style: "Round", rating: 4.4, reviews: 78, image: getGemImage("Freshwater Pearl"), isBestseller: true, gemType: "pearls" },
    { id: 23, name: "South Sea Pearl", category: "gems", type: "Pearl", color: "White", clarity: "N/A", origin: "Australia", carat: 10.0, price: 899, originalPrice: 1299, style: "Round", rating: 4.9, reviews: 45, image: getGemImage("South Sea Pearl"), isNew: true, discount: 31, gemType: "pearls" }
  ];

  // Get gems based on current URL
  const getCurrentGems = () => {
    let filtered = allGems.filter(g => g.category === 'gems');
    
    if (gemCategory !== 'all') {
      // Filter by gem type category
      if (gemCategory === 'precious') {
        const preciousGems = ['Diamond', 'Ruby', 'Emerald', 'Sapphire'];
        filtered = filtered.filter(g => preciousGems.includes(g.type));
      } else if (gemCategory === 'semi-precious') {
        const semiPrecious = ['Amethyst', 'Citrine', 'Garnet', 'Peridot', 'Aquamarine', 'Topaz', 'Tourmaline', 'Tanzanite', 'Morganite', 'Moonstone', 'Opal'];
        filtered = filtered.filter(g => semiPrecious.includes(g.type));
      } else if (gemCategory === 'organic') {
        const organic = ['Pearl'];
        filtered = filtered.filter(g => organic.includes(g.type));
      } else {
        // Filter by specific gem type
        const typeMap = {
          'diamonds': 'Diamond',
          'rubies': 'Ruby',
          'emeralds': 'Emerald',
          'sapphires': 'Sapphire',
          'amethyst': 'Amethyst',
          'citrine': 'Citrine',
          'garnet': 'Garnet',
          'peridot': 'Peridot',
          'aquamarine': 'Aquamarine',
          'topaz': 'Topaz',
          'tourmaline': 'Tourmaline',
          'tanzanite': 'Tanzanite',
          'morganite': 'Morganite',
          'moonstone': 'Moonstone',
          'opal': 'Opal',
          'pearls': 'Pearl'
        };
        const gemType = typeMap[gemCategory];
        if (gemType) {
          filtered = filtered.filter(g => g.type === gemType);
        }
      }
    }
    
    return filtered;
  };

  const [currentGems, setCurrentGems] = useState(getCurrentGems());

  // Update when URL changes
  useEffect(() => {
    setCurrentGems(getCurrentGems());
    // Reset filters
    setSelectedTypes([]);
    setSelectedColors([]);
    setSelectedClarity([]);
    setSelectedOrigin([]);
    setSelectedStyles([]);
    setPriceRange([0, 50000]);
  }, [currentPath]);

  // Filter options (dynamic based on available gems)
  const getFilterOptions = () => {
    const types = [...new Set(currentGems.map(g => g.type))];
    const colors = [...new Set(currentGems.map(g => g.color))];
    const clarities = [...new Set(currentGems.map(g => g.clarity))];
    const origins = [...new Set(currentGems.map(g => g.origin))];
    const styles = [...new Set(currentGems.map(g => g.style))];
    
    return { types, colors, clarities, origins, styles };
  };

  const filterOptions = getFilterOptions();

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const handleTypeToggle = (type) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const handleColorToggle = (color) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };

  const handleClarityToggle = (clarity) => {
    setSelectedClarity(prev => prev.includes(clarity) ? prev.filter(c => c !== clarity) : [...prev, clarity]);
  };

  const handleOriginToggle = (origin) => {
    setSelectedOrigin(prev => prev.includes(origin) ? prev.filter(o => o !== origin) : [...prev, origin]);
  };

  const handleStyleToggle = (style) => {
    setSelectedStyles(prev => prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]);
  };

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedColors([]);
    setSelectedClarity([]);
    setSelectedOrigin([]);
    setSelectedStyles([]);
    setPriceRange([0, 50000]);
  };

  const getFilteredGems = () => {
    let filtered = [...currentGems];
    
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(g => selectedTypes.includes(g.type));
    }
    if (selectedColors.length > 0) {
      filtered = filtered.filter(g => selectedColors.includes(g.color));
    }
    if (selectedClarity.length > 0) {
      filtered = filtered.filter(g => selectedClarity.includes(g.clarity));
    }
    if (selectedOrigin.length > 0) {
      filtered = filtered.filter(g => selectedOrigin.includes(g.origin));
    }
    if (selectedStyles.length > 0) {
      filtered = filtered.filter(g => selectedStyles.includes(g.style));
    }
    filtered = filtered.filter(g => g.price >= priceRange[0] && g.price <= priceRange[1]);
    
    // Sorting
    switch(sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'carat': filtered.sort((a, b) => b.carat - a.carat); break;
      case 'newest': filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      default: filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    
    return filtered;
  };

  const getPageTitle = () => {
    return categoryNames[gemCategory] || 'Certified Gemstones';
  };

  const getPageSubtitle = () => {
    const subtitles = {
      'diamonds': "Discover our collection of certified diamonds, ethically sourced and expertly cut.",
      'rubies': "Explore rich red rubies, the king of precious gemstones.",
      'emeralds': "Find stunning green emeralds with exceptional clarity and color.",
      'sapphires': "Discover beautiful sapphires in every color of the rainbow.",
      'amethyst': "Purple amethyst gemstones perfect for any jewelry.",
      'citrine': "Golden citrine gemstones that bring warmth and sunshine.",
      'garnet': "Deep red garnets with remarkable brilliance.",
      'peridot': "Fresh green peridot gemstones for a vibrant look.",
      'aquamarine': "Cool blue aquamarine gemstones inspired by the sea.",
      'topaz': "Blue topaz gemstones with stunning clarity.",
      'tourmaline': "Vibrant tourmaline gemstones in beautiful pink hues.",
      'tanzanite': "Rare tanzanite gemstones from Tanzania.",
      'morganite': "Soft pink morganite gemstones for an elegant touch.",
      'moonstone': "Mystical moonstones with adularescence.",
      'opal': "Opals with captivating play-of-color.",
      'pearls': "Lustrous pearls perfect for timeless elegance.",
      'precious': "Discover our collection of precious gemstones including diamonds, rubies, emeralds, and sapphires.",
      'semi-precious': "Beautiful semi-precious gemstones for every style and budget.",
      'organic': "Organic gemstones including pearls and other natural treasures.",
      'all': "Discover our collection of certified precious and semi-precious gemstones, sourced ethically from around the world."
    };
    return subtitles[gemCategory] || "Discover our collection of certified precious and semi-precious gemstones, sourced ethically from around the world.";
  };

  const filteredGems = getFilteredGems();
  const hasActiveFilters = selectedTypes.length > 0 || selectedColors.length > 0 || 
    selectedClarity.length > 0 || selectedOrigin.length > 0 || selectedStyles.length > 0 ||
    priceRange[0] > 0 || priceRange[1] < 50000;

  // Get unique sub-categories for quick links
  const getUniqueGemTypes = () => {
    const types = [...new Set(currentGems.map(g => g.gemType))];
    return types.filter(t => t);
  };

  const gemTypesList = getUniqueGemTypes();

  const typeDisplayNames = {
    'diamonds': 'Diamonds',
    'rubies': 'Rubies',
    'emeralds': 'Emeralds',
    'sapphires': 'Sapphires',
    'amethyst': 'Amethyst',
    'citrine': 'Citrine',
    'garnet': 'Garnet',
    'peridot': 'Peridot',
    'aquamarine': 'Aquamarine',
    'topaz': 'Topaz',
    'tourmaline': 'Tourmaline',
    'tanzanite': 'Tanzanite',
    'morganite': 'Morganite',
    'moonstone': 'Moonstone',
    'opal': 'Opal',
    'pearls': 'Pearls'
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-[#d4af37]/30">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://placehold.co/1600x400/1a1a2e/d4af37?text=Gemstones" 
            alt="Gemstone background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16 z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm mb-6 flex-wrap">
            <a href="/" className="text-gray-300 hover:text-[#d4af37] transition">Home</a>
            <span className="text-gray-400">›</span>
            <a href="/gems" className="text-gray-300 hover:text-[#d4af37] transition">Gemstones</a>
            {gemCategory !== 'all' && (
              <>
                <span className="text-gray-400">›</span>
                <span className="text-[#d4af37] font-medium">{getPageTitle()}</span>
              </>
            )}
            {gemCategory === 'all' && (
              <span className="text-[#d4af37] font-medium">All Gemstones</span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-white mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-center text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
            {getPageSubtitle()}
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 bg-[#d4af37]"></div>
          </div>

          {/* Gem type quick links - Only show when viewing main category */}
          {gemCategory === 'all' && gemTypesList.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {gemTypesList.map(type => (
                <a
                  key={type}
                  href={`/gems/${type}`}
                  className="px-4 py-2 rounded-full border border-[#d4af37]/40 text-gray-200 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10 text-sm transition-all duration-300"
                >
                  {typeDisplayNames[type] || type.replace(/-/g, ' ')}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-24 shadow-sm">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <FiFilter className="text-[#d4af37]" />
                  <h3 className="text-gray-800 font-semibold">Filters</h3>
                </div>
                {hasActiveFilters && (
                  <button onClick={clearAllFilters} className="text-xs text-gray-500 hover:text-[#d4af37] transition">
                    Clear All
                  </button>
                )}
              </div>

              {/* Price Range */}
              <div className="mb-5 pb-3 border-b border-gray-200">
                <button onClick={() => toggleFilter('price')} className="flex justify-between items-center w-full text-left">
                  <span className="text-gray-700 font-medium">Price Range</span>
                  {expandedFilters.price ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.price && (
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input type="range" min="0" max="50000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#d4af37]" />
                  </div>
                )}
              </div>

              {/* Type Filter */}
              {filterOptions.types && filterOptions.types.length > 0 && (
                <div className="mb-5 pb-3 border-b border-gray-200">
                  <button onClick={() => toggleFilter('type')} className="flex justify-between items-center w-full text-left">
                    <span className="text-gray-700 font-medium">Gem Type</span>
                    {expandedFilters.type ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedFilters.type && (
                    <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
                      {filterOptions.types.map(type => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={selectedTypes.includes(type)} onChange={() => handleTypeToggle(type)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                          <span className="text-gray-600 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Color Filter */}
              {filterOptions.colors && filterOptions.colors.length > 0 && (
                <div className="mb-5 pb-3 border-b border-gray-200">
                  <button onClick={() => toggleFilter('color')} className="flex justify-between items-center w-full text-left">
                    <span className="text-gray-700 font-medium">Color</span>
                    {expandedFilters.color ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedFilters.color && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {filterOptions.colors.map(color => (
                        <label key={color} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={selectedColors.includes(color)} onChange={() => handleColorToggle(color)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full" style={{ 
                              backgroundColor: color === 'Blue' ? '#4169E1' : 
                                             color === 'Red' ? '#DC143C' : 
                                             color === 'Green' ? '#228B22' : 
                                             color === 'White' ? '#F5F5F5' : 
                                             color === 'Yellow' ? '#FFD700' : 
                                             color === 'Purple' ? '#8B008B' : '#FF69B4',
                              border: '1px solid #ccc' 
                            }} />
                            <span className="text-gray-600 text-sm">{color}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Clarity Filter */}
              {filterOptions.clarities && filterOptions.clarities.length > 0 && (
                <div className="mb-5 pb-3 border-b border-gray-200">
                  <button onClick={() => toggleFilter('clarity')} className="flex justify-between items-center w-full text-left">
                    <span className="text-gray-700 font-medium">Clarity</span>
                    {expandedFilters.clarity ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedFilters.clarity && (
                    <div className="mt-3 space-y-2">
                      {filterOptions.clarities.map(clarity => (
                        <label key={clarity} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={selectedClarity.includes(clarity)} onChange={() => handleClarityToggle(clarity)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                          <span className="text-gray-600 text-sm">{clarity}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Origin Filter */}
              {filterOptions.origins && filterOptions.origins.length > 0 && (
                <div className="mb-5 pb-3 border-b border-gray-200">
                  <button onClick={() => toggleFilter('origin')} className="flex justify-between items-center w-full text-left">
                    <span className="text-gray-700 font-medium">Origin</span>
                    {expandedFilters.origin ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedFilters.origin && (
                    <div className="mt-3 space-y-2 max-h-40 overflow-y-auto">
                      {filterOptions.origins.map(origin => (
                        <label key={origin} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={selectedOrigin.includes(origin)} onChange={() => handleOriginToggle(origin)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                          <span className="text-gray-600 text-sm">{origin}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Style/Cut Filter */}
              {filterOptions.styles && filterOptions.styles.length > 0 && (
                <div className="mb-5">
                  <button onClick={() => toggleFilter('style')} className="flex justify-between items-center w-full text-left">
                    <span className="text-gray-700 font-medium">Cut Style</span>
                    {expandedFilters.style ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedFilters.style && (
                    <div className="mt-3 space-y-2">
                      {filterOptions.styles.map(style => (
                        <label key={style} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={selectedStyles.includes(style)} onChange={() => handleStyleToggle(style)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                          <span className="text-gray-600 text-sm">{style}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 flex flex-wrap justify-between items-center gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:text-[#d4af37] transition">
                  <FiFilter />
                  <span className="text-sm">Filters</span>
                </button>
                <p className="text-gray-500 text-sm">
                  Showing <span className="text-[#d4af37] font-semibold">{filteredGems.length}</span> gemstones
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button onClick={() => setViewMode('grid')} className={`p-2 transition ${viewMode === 'grid' ? 'bg-[#d4af37] text-white' : 'text-gray-500 hover:text-[#d4af37]'}`}><FiGrid /></button>
                  <button onClick={() => setViewMode('list')} className={`p-2 transition ${viewMode === 'list' ? 'bg-[#d4af37] text-white' : 'text-gray-500 hover:text-[#d4af37]'}`}><FiList /></button>
                </div>

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-600 text-sm focus:outline-none focus:border-[#d4af37]">
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="carat">Carat Weight</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedTypes.map(type => <span key={type} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{type}<button onClick={() => handleTypeToggle(type)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedColors.map(color => <span key={color} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{color}<button onClick={() => handleColorToggle(color)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedClarity.map(clarity => <span key={clarity} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{clarity}<button onClick={() => handleClarityToggle(clarity)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedOrigin.map(origin => <span key={origin} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{origin}<button onClick={() => handleOriginToggle(origin)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedStyles.map(style => <span key={style} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{style}<button onClick={() => handleStyleToggle(style)}><FiX className="w-3 h-3" /></button></span>)}
              </div>
            )}

            {/* Products Grid */}
            {filteredGems.length === 0 ? (
              <div className="text-center py-20">
                <RiGeminiFill className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl text-gray-700 mb-2">No gemstones found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
                <button onClick={clearAllFilters} className="mt-4 px-6 py-2 rounded-full bg-[#d4af37] text-white font-semibold hover:shadow-lg hover:shadow-[#d4af37]/30 transition">Clear All Filters</button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                {filteredGems.map(gem => (
                  <div key={gem.id} className={`group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-xl ${viewMode === 'list' ? 'flex' : ''}`}>
                    <div className={`relative overflow-hidden bg-gray-100 ${viewMode === 'list' ? 'w-48 shrink-0' : 'aspect-square'}`}>
                      <img src={gem.image} alt={gem.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      {gem.isNew && <span className="absolute top-3 left-3 bg-[#d4af37] text-white text-xs font-bold px-2 py-1 rounded">NEW</span>}
                      {gem.discount && <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{gem.discount}% OFF</span>}
                      <button className="absolute bottom-3 right-3 p-2 bg-white/80 rounded-full text-gray-500 hover:text-[#d4af37] transition backdrop-blur-sm"><FiHeart /></button>
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1"><FiStar className="text-[#d4af37] fill-[#d4af37] w-3 h-3" /><span className="text-gray-700 text-sm">{gem.rating}</span></div>
                        <span className="text-gray-400 text-xs">({gem.reviews} reviews)</span>
                      </div>
                      <h3 className="text-gray-800 font-medium text-lg mb-1 group-hover:text-[#d4af37] transition">{gem.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{gem.type}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{gem.carat} ct</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{gem.origin}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">Clarity: {gem.clarity} • Cut: {gem.style}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#d4af37] text-xl font-bold">${gem.price}</span>
                        {gem.originalPrice && <span className="text-gray-400 text-sm line-through">${gem.originalPrice}</span>}
                      </div>
                      <button className="w-full py-2 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <FiShoppingCart /><span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        input[type="range"] { -webkit-appearance: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #d4af37; cursor: pointer; border: 2px solid white; }
        input[type="checkbox"] { accent-color: #d4af37; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f5f5f5; }
        ::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 3px; }
      `}</style>
    </div>
  );
};

export default Gem;