import React, { useState } from 'react';
import { 
  FiCalendar, 
  FiUser, 
  FiHeart, 
  FiBookmark,
  FiTrendingUp,
  FiAward,
  FiChevronRight,
  FiClock,
  FiHexagon
} from 'react-icons/fi';
import { RiGeminiFill } from 'react-icons/ri';
import { GiDiamondRing, GiGoldBar, GiGemPendant } from 'react-icons/gi';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: <RiGeminiFill />, color: 'gold' },
    { id: 'diamonds', name: 'Diamonds', icon: <GiDiamondRing />, color: 'silver' },
    { id: 'gold', name: 'Gold', icon: <GiGoldBar />, color: 'gold' },
    { id: 'gemstones', name: 'Gemstones', icon: <GiGemPendant />, color: 'gold' },
    { id: 'market', name: 'Market Trends', icon: <FiTrendingUp />, color: 'silver' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Record-Breaking Pink Diamond Sells for $45 Million at Auction",
      description: "A rare 18-carat fancy vivid pink diamond has shattered auction records, becoming one of the most expensive gemstones ever sold. The stone, dubbed 'The Eternal Pink', features exceptional clarity and a mesmerizing hue that captivated collectors worldwide.",
      date: "March 25, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson",
      category: "diamonds",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
      trending: true,
      featured: true,
      comments: 42,
      likes: 328
    },
    {
      id: 2,
      title: "Gold Prices Reach All-Time High: What Investors Need to Know",
      description: "Global gold prices have surged to unprecedented levels, driven by economic uncertainty and increased demand from central banks. Experts analyze the market trends and predict future movements for the precious metal.",
      date: "March 24, 2024",
      readTime: "4 min read",
      author: "Michael Chen",
      category: "gold",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600",
      trending: true,
      featured: false,
      comments: 28,
      likes: 156
    },
    {
      id: 3,
      title: "Emerald Discovery in Colombia: 2,000-Carat Crystal Unearthed",
      description: "Miners in Colombia have discovered one of the largest emeralds ever found. The 2,000-carat crystal exhibits remarkable color and transparency, sparking excitement among gemologists and collectors.",
      date: "March 23, 2024",
      readTime: "3 min read",
      author: "Elena Rodriguez",
      category: "gemstones",
      image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600",
      trending: false,
      featured: true,
      comments: 19,
      likes: 234
    },
    {
      id: 4,
      title: "Lab-Grown Diamonds: The Future of the Jewelry Industry",
      description: "The market for lab-grown diamonds is expanding rapidly, with millennials and Gen Z leading the charge. Explore how technology is reshaping the diamond industry and what it means for traditional mining.",
      date: "March 22, 2024",
      readTime: "6 min read",
      author: "David Kim",
      category: "diamonds",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600",
      trending: false,
      featured: false,
      comments: 35,
      likes: 189
    },
    {
      id: 5,
      title: "Sustainable Gold Mining: New Eco-Friendly Practices",
      description: "Leading mining companies are adopting innovative sustainable practices to reduce environmental impact. Discover how the gold industry is evolving to meet modern environmental standards.",
      date: "March 21, 2024",
      readTime: "4 min read",
      author: "Lisa Wang",
      category: "gold",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",
      trending: false,
      featured: false,
      comments: 14,
      likes: 98
    },
    {
      id: 6,
      title: "Top 10 Rarest Gemstones in the World",
      description: "From Painite to Grandidierite, discover the world's most elusive and valuable gemstones. Learn about their unique properties, origins, and why they command astronomical prices.",
      date: "March 20, 2024",
      readTime: "8 min read",
      author: "Olivia Martinez",
      category: "gemstones",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
      trending: true,
      featured: false,
      comments: 56,
      likes: 412
    },
    {
      id: 7,
      title: "Global Jewelry Market Forecast 2024-2028",
      description: "Analysts predict strong growth in the luxury jewelry sector, driven by emerging markets and changing consumer preferences. Get the latest insights on market trends and opportunities.",
      date: "March 19, 2024",
      readTime: "5 min read",
      author: "Robert Taylor",
      category: "market",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
      trending: false,
      featured: false,
      comments: 23,
      likes: 145
    },
    {
      id: 8,
      title: "Investment-Grade Gemstones: A Complete Guide",
      description: "Learn how to evaluate and invest in high-quality gemstones. Expert insights on what makes a gemstone investment-worthy and how to avoid common pitfalls.",
      date: "March 18, 2024",
      readTime: "7 min read",
      author: "Amanda White",
      category: "market",
      image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600",
      trending: false,
      featured: false,
      comments: 31,
      likes: 267
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  const featuredArticle = newsArticles.find(article => article.featured);

  const getCategoryColor = (category) => {
    switch(category) {
      case 'diamonds': return 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10';
      case 'gold': return 'border-[#d4af37]/50 text-[#d4af37] bg-[#d4af37]/10';
      case 'gemstones': return 'border-purple-500/50 text-purple-400 bg-purple-500/10';
      case 'market': return 'border-blue-500/50 text-blue-400 bg-blue-500/10';
      default: return 'border-gray-500/50 text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen  pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black border-b border-[#d4af37]/20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1600" 
            alt="News background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16 z-10">
          <div className="flex items-center gap-2 text-sm mb-6">
            <a href="/" className="text-gray-400 hover:text-[#d4af37] transition">Home</a>
            <span className="text-gray-600">›</span>
            <span className="text-[#d4af37] font-medium">News & Insights</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-6">
              <RiGeminiFill className="text-[#d4af37] text-sm" />
              <span className="text-[#d4af37] text-sm font-medium">Latest Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              Gem & Jewelry News
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              Stay informed with the latest trends, discoveries, and insights from the world of luxury gems and jewelry.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/20">
            <div className="absolute inset-0">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>
            <div className="relative p-6 md:p-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(featuredArticle.category)}`}>
                  {featuredArticle.category.toUpperCase()}
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-sm">
                  <FiTrendingUp className="text-[#d4af37]" /> Featured Story
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {featuredArticle.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-1"><FiCalendar /> {featuredArticle.date}</span>
                <span className="flex items-center gap-1"><FiUser /> {featuredArticle.author}</span>
                <span className="flex items-center gap-1"><FiClock /> {featuredArticle.readTime}</span>
              </div>
              <button className="px-6 py-2 rounded-full bg-[#d4af37] text-black font-semibold hover:bg-[#b8962e] transition-all duration-300 flex items-center gap-2">
                Read Full Story <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30'
                  : 'bg-gray-900 text-gray-300 border border-gray-700 hover:border-[#d4af37]/50 hover:text-[#d4af37]'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div 
              key={article.id} 
              className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/10"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                {article.trending && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#d4af37]/90 text-black text-xs font-semibold flex items-center gap-1">
                    <FiTrendingUp size={12} /> Trending
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                    {article.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FiCalendar /> {article.date}</span>
                  <span className="flex items-center gap-1"><FiClock /> {article.readTime}</span>
                </div>
                
                <h3 className="text-white font-serif text-xl mb-2 group-hover:text-[#d4af37] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <button className="text-gray-500 hover:text-[#d4af37] transition flex items-center gap-1">
                      <FiHeart /> {article.likes}
                    </button>
                    <button className="text-gray-500 hover:text-[#d4af37] transition flex items-center gap-1">
                      <FiBookmark />
                    </button>
                  </div>
                  <button className="text-[#d4af37] text-sm font-medium hover:gap-2 transition-all duration-300 flex items-center gap-1">
                    Read More <FiChevronRight className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto">
            Load More Articles <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-[#d4af37]/20 p-8 md:p-12 text-center">
          <RiGeminiFill className="text-4xl text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Get the latest news, trends, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition"
            />
            <button className="px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#b8962e] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default News;