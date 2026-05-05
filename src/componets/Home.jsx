import React, { useState, useRef } from 'react';

const Home = () => {
  // Single background image (Google hosted - luxury jewelry background)
  const backgroundImage = "https://placehold.co/1920x1080/1a1a2e/d4af37?text=Luxury+Jewelry+Background";

  // Hero content
  const heroContent = {
    heading: "Where Elegance",
    highlight: "Meets Eternity",
    description: "Discover our exclusive collection of handcrafted jewelry, designed to celebrate life's most precious moments with unparalleled beauty and craftsmanship.",
    ctaText: "Shop Rings",
    ctaLink: "/rings"
  };

  // Featured Products - Replace these with your Google image URLs
  const featuredProducts = [
    {
      id: 1,
      name: "GEMLOX RADIANCE",
      price: "LKR 85,000",
      image: "https://placehold.co/500x600/f5f5f5/d4af37?text=GEMLOX+RADIANCE"
    },
    {
      id: 2,
      name: "GEMLOX EMBER",
      price: "LKR 95,000",
      image: "https://placehold.co/500x600/f5f5f5/d4af37?text=GEMLOX+EMBER"
    },
    {
      id: 3,
      name: "GEMLOX DAWN",
      price: "LKR 120,000",
      image: "https://placehold.co/500x600/f5f5f5/d4af37?text=GEMLOX+DAWN"
    },
    {
      id: 4,
      name: "GEMLOX IVY",
      price: "LKR 65,000",
      image: "https://placehold.co/500x600/f5f5f5/d4af37?text=GEMLOX+IVY"
    },
    {
      id: 5,
      name: "GEMLOX BLISS",
      price: "LKR 150,000",
      image: "https://placehold.co/500x600/f5f5f5/d4af37?text=GEMLOX+BLISS"
    }
  ];

  // Gemstones Collection - Replace these with your Google image URLs
  const gemstones = [
    {
      id: 1,
      name: "CEYLON SAPPHIRE",
      price: "LKR 250,000",
      image: "https://placehold.co/500x500/f5f5f5/d4af37?text=Ceylon+Sapphire"
    },
    {
      id: 2,
      name: "PADPARADSCHA",
      price: "LKR 450,000",
      image: "https://placehold.co/500x500/f5f5f5/d4af37?text=Padparadscha"
    },
    {
      id: 3,
      name: "BLUE STAR SAPPHIRE",
      price: "LKR 350,000",
      image: "https://placehold.co/500x500/f5f5f5/d4af37?text=Blue+Star+Sapphire"
    },
    {
      id: 4,
      name: "CEYLON RUBY",
      price: "LKR 180,000",
      image: "https://placehold.co/500x500/f5f5f5/d4af37?text=Ceylon+Ruby"
    },
    {
      id: 5,
      name: "YELLOW SAPPHIRE",
      price: "LKR 95,000",
      image: "https://placehold.co/500x500/f5f5f5/d4af37?text=Yellow+Sapphire"
    }
  ];

  // Ring images for Engagement and Wedding sections - Replace with your Google image URLs
  const ringImages = {
    engagement: "https://placehold.co/800x600/1a1a2e/d4af37?text=Engagement+Rings",
    wedding: "https://placehold.co/800x600/1a1a2e/d4af37?text=Wedding+Rings"
  };

  // Buyer section images - Replace with your Google image URLs
  const buyerImages = {
    jewelry: "https://placehold.co/800x600/1a1a2e/d4af37?text=Jewelry+Collection",
    gems: "https://placehold.co/800x600/1a1a2e/d4af37?text=Gemstones"
  };

  return (
    <>
      {/* Hero Section with Single Background Image */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={backgroundImage}
            alt="Luxury Jewelry Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up mb-4">
            <span className="inline-block px-4 py-1.5 text-xs tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full text-[#d4af37] border border-[#d4af37]/30 font-medium">
              Ceylon's Finest Gemstones Since 1965
            </span>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wider text-white max-w-5xl mx-auto leading-tight">
            {heroContent.heading}
            <span className="block text-[#d4af37]">{heroContent.highlight}</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            {heroContent.description}
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={heroContent.ctaLink}
              className="group relative px-8 py-3.5 overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105"
            >
              <span className="relative z-10">{heroContent.ctaText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#e8d5a3] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/collection"
              className="px-8 py-3.5 rounded-full border-2 border-[#d4af37] text-[#d4af37] font-semibold text-base transition-all duration-300 hover:bg-[#d4af37]/10 hover:scale-105 backdrop-blur-sm"
            >
              Explore Collection
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex justify-center">
              <div className="w-1 h-2 bg-[#d4af37] rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section - Clean White/Soft Background */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 tracking-wide">
              Featured Products
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
            <p className="text-gray-500 text-sm tracking-wide max-w-xl mx-auto">
              Discover iconic designs by our in-house team of master jewellers.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-gray-700 text-sm font-medium tracking-wide group-hover:text-[#b8860b] transition duration-300">
                    {product.name}
                  </h3>
                  <p className="text-[#b8860b] text-sm font-light mt-1">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Rings & Wedding Rings Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Engagement Rings Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={ringImages.engagement}
                  alt="Engagement Rings Collection" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 bg-[#d4af37]/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wider">
                    TIMELESS ELEGANCE
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 text-center">
                <h3 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-3">
                  Engagement Rings
                </h3>
                <p className="text-gray-500 text-sm tracking-wide mb-2">
                  Find the perfect symbol of love and commitment
                </p>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Find the perfect symbol of love and commitment with our exquisite collection of engagement rings. Choose from timeless designs crafted with precision to celebrate your unique journey.
                </p>
                <a 
                  href="/engagement-rings" 
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#d4af37] text-[#b8860b] font-medium rounded-full hover:bg-[#d4af37] hover:text-white transition-all duration-300 group-hover:shadow-lg"
                >
                  SHOP ENGAGEMENT RINGS
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Wedding Rings Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={ringImages.wedding}
                  alt="Wedding Rings Collection" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 bg-[#d4af37]/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wider">
                    ETERNAL BOND
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 text-center">
                <h3 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-3">
                  Wedding Rings
                </h3>
                <p className="text-gray-500 text-sm tracking-wide mb-2">
                  Seal your love with a beautifully crafted ring
                </p>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Seal your love with a beautifully crafted wedding ring that represents your everlasting bond. Explore our selection of elegant bands designed to mark the beginning of a lifetime together.
                </p>
                <a 
                  href="/wedding-rings" 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  SHOP WEDDING RINGS
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstones Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 text-xs tracking-wider uppercase bg-[#d4af37]/10 backdrop-blur-sm rounded-full text-[#b8860b] border border-[#d4af37]/30 font-medium mb-4">
              CEYLON'S FINEST
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-gray-800 tracking-wide">
              Precious Gemstones
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-5" />
            <p className="text-gray-500 text-sm tracking-wide max-w-xl mx-auto">
              Ethically sourced from the mines of Sri Lanka, each gemstone tells a story of nature's artistry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {gemstones.map((gem) => (
              <div
                key={gem.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={gem.image}
                      alt={gem.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="absolute top-3 right-3 bg-[#d4af37]/90 backdrop-blur-sm rounded-full px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </div>
                </div>
                <div className="text-center mt-5">
                  <h3 className="text-gray-800 text-base font-semibold tracking-wide group-hover:text-[#b8860b] transition duration-300">
                    {gem.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-[#d4af37] text-lg font-bold">
                      {gem.price}
                    </span>
                  </div>
                  <div className="w-8 h-px bg-[#d4af37]/50 mx-auto mt-3" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/gemstones" 
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#d4af37] text-[#b8860b] font-medium rounded-full hover:bg-[#d4af37] hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              View All Gemstones
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* For Buyers Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 tracking-wide">
              For Buyers
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
            <p className="text-gray-500 text-sm tracking-wide max-w-xl mx-auto">
              Whether you're looking for finished pieces or raw treasures, we connect you with the finest
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Jewelry Buyers */}
            <div className="group relative overflow-hidden rounded-2xl min-h-[500px] shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0">
                <img 
                  src={buyerImages.jewelry}
                  alt="Jewelry buyers collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] p-8 md:p-10 text-center">
                <div className="backdrop-blur-sm bg-white/10 rounded-full p-3 mb-6 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-3">
                  Jewelry Buyers
                </h3>
                <div className="w-12 h-px bg-[#d4af37] mx-auto my-4" />
                <p className="text-gray-200 leading-relaxed mb-6 max-w-sm">
                  Explore our exquisite collection of handcrafted jewelry. From elegant rings to timeless necklaces, each piece is a masterpiece of Ceylonese craftsmanship.
                </p>
                <ul className="text-left text-gray-200 space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> Certified precious metals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> Ethically sourced gemstones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> Bespoke design service
                  </li>
                </ul>
                <a 
                  href="/jewelry-collection" 
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-medium rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                >
                  Browse Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 - Gem Buyers */}
            <div className="group relative overflow-hidden rounded-2xl min-h-[500px] shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0">
                <img 
                  src={buyerImages.gems}
                  alt="Gem buyers - precious stones"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] p-8 md:p-10 text-center">
                <div className="backdrop-blur-sm bg-white/10 rounded-full p-3 mb-6 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-3">
                  Gem Buyers
                </h3>
                <div className="w-12 h-px bg-[#d4af37] mx-auto my-4" />
                <p className="text-gray-200 leading-relaxed mb-6 max-w-sm">
                  Source the finest Ceylon sapphires, rubies, and gemstones directly from Sri Lankan mines. Exceptional quality, certified authenticity.
                </p>
                <ul className="text-left text-gray-200 space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> Direct mine-to-market
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> Certified lab reports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> Loose & rough stones
                  </li>
                </ul>
                <a 
                  href="/gem-collection" 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Source Gems
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-[#0a0a0c] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">G</span>
                </div>
                <span className="text-2xl font-serif font-light tracking-wide">
                  Gemlox<span className="text-[#d4af37]">.</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting timeless jewelry and sourcing the finest Ceylon gemstones since 1965. 
                Each piece tells a story of elegance, love, and heritage.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.791.013 3.807.056 1.064.045 1.79.217 2.425.463.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.246.635.418 1.361.463 2.425.043 1.016.056 1.377.056 3.807 0 2.43-.013 2.791-.056 3.807-.045 1.064-.217 1.79-.463 2.425a4.908 4.908 0 0 1-1.153 1.772 4.908 4.908 0 0 1-1.772 1.153c-.635.246-1.361.418-2.425.463-1.016.043-1.377.056-3.807.056-2.43 0-2.791-.013-3.807-.056-1.064-.045-1.79-.217-2.425-.463a4.908 4.908 0 0 1-1.772-1.153 4.908 4.908 0 0 1-1.153-1.772c-.246-.635-.418-1.361-.463-2.425-.043-1.016-.056-1.377-.056-3.807 0-2.43.013-2.791.056-3.807.045-1.064.217-1.79.463-2.425a4.908 4.908 0 0 1 1.153-1.772 4.908 4.908 0 0 1 1.772-1.153c.635-.246 1.361-.418 2.425-.463C9.524 2.013 9.885 2 12.315 2zm0 4.812c-2.886 0-5.226 2.34-5.226 5.226 0 2.886 2.34 5.226 5.226 5.226 2.886 0 5.226-2.34 5.226-5.226 0-2.886-2.34-5.226-5.226-5.226zM18.18 5.412a1.22 1.22 0 1 0 0 2.44 1.22 1.22 0 0 0 0-2.44zM12.315 8.88a3.158 3.158 0 1 1 0 6.316 3.158 3.158 0 0 1 0-6.316z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.85.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072c-1.95.089-3.556.444-4.875 1.763C1.852 3.154 1.497 4.76 1.408 6.71.95 9.29.95 14.71 1.408 17.29c.089 1.95.444 3.556 1.763 4.875 1.319 1.319 2.925 1.674 4.875 1.763 2.58.458 7.58.458 10.16 0 1.95-.089 3.556-.444 4.875-1.763 1.319-1.319 1.674-2.925 1.763-4.875.458-2.58.458-7.58 0-10.16-.089-1.95-.444-3.556-1.763-4.875C20.244 1.057 18.638.702 16.688.613 15.668.569 15.259.45 12 .45v-.287z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-serif font-light mb-5 tracking-wide">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/rings" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Engagement Rings</a></li>
                <li><a href="/wedding-rings" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Wedding Rings</a></li>
                <li><a href="/necklaces" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Necklaces</a></li>
                <li><a href="/earrings" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Earrings</a></li>
                <li><a href="/bracelets" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Bracelets</a></li>
                <li><a href="/gemstones" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Gemstones</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="text-lg font-serif font-light mb-5 tracking-wide">Customer Care</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Contact Us</a></li>
                <li><a href="/shipping" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Shipping Info</a></li>
                <li><a href="/returns" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Returns & Exchanges</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">Terms of Service</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-serif font-light mb-5 tracking-wide">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to receive updates on new collections, special offers, and jewelry care tips.
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                />
                <button 
                  type="submit"
                  className="px-4 py-3 bg-[#d4af37] text-black font-medium rounded-lg hover:bg-[#b8860b] transition-all duration-300 text-sm"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Gemlox. All rights reserved. Crafted with love in Sri Lanka.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-[#d4af37] text-xs transition-colors">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-[#d4af37] text-xs transition-colors">Terms</a>
                <a href="#" className="text-gray-500 hover:text-[#d4af37] text-xs transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(8px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
    </>
  );
};

export default Home;