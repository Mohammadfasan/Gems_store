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

const Jewelry = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedMetals, setSelectedMetals] = useState([]);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedStoneTypes, setSelectedStoneTypes] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    style: true,
    metal: true,
    shape: true,
    stoneType: true,
    gender: true
  });

  const currentPath = location.pathname;
  
  // Get main category from URL
  const getMainCategory = () => {
    if (currentPath.includes('/rings')) return 'rings';
    if (currentPath.includes('/necklaces')) return 'necklaces';
    if (currentPath.includes('/earrings')) return 'earrings';
    if (currentPath.includes('/bracelets')) return 'bracelets';
    if (currentPath.includes('/anklets')) return 'anklets';
    if (currentPath.includes('/bridal-sets')) return 'bridal-sets';
    if (currentPath.includes('/gems')) return 'gems';
    return 'rings';
  };
  
  // Get specific sub-category
  const getSubCategory = () => {
    const parts = currentPath.split('/').filter(p => p);
    if (parts.length < 2) return 'all';
    const lastPart = parts[parts.length - 1];
    const mainCategories = ['rings', 'necklaces', 'earrings', 'bracelets', 'anklets', 'bridal-sets', 'gems'];
    if (mainCategories.includes(lastPart)) return 'all';
    return lastPart;
  };
  
  const mainCategory = getMainCategory();
  const subCategory = getSubCategory();
  
  // Category display names
  const categoryNames = {
    'rings': 'Rings',
    'necklaces': 'Necklaces',
    'earrings': 'Earrings',
    'bracelets': 'Bracelets',
    'anklets': 'Anklets',
    'bridal-sets': 'Bridal Sets',
    'gems': 'Gemstones'
  };
  
  const subCategoryNames = {
    'engagement': 'Engagement Rings',
    'wedding': 'Wedding Rings',
    'fashion': 'Fashion Rings',
    'promise': 'Promise Rings',
    'eternity': 'Eternity Rings',
    'mens-wedding-bands': "Men's Wedding Bands",
    'pendant': 'Pendant Necklaces',
    'chokers': 'Chokers',
    'chain': 'Chain Necklaces',
    'statement': 'Statement Necklaces',
    'layered': 'Layered Necklaces',
    'lockets': 'Lockets',
    'stud': 'Stud Earrings',
    'hoop': 'Hoop Earrings',
    'drop': 'Drop Earrings',
    'dangle': 'Dangle Earrings',
    'chandelier': 'Chandelier Earrings',
    'cluster': 'Cluster Earrings',
    'gold-bangles': 'Gold Bangles',
    'charm': 'Charm Bracelets',
    'cuff': 'Cuff Bracelets',
    'beaded': 'Beaded Bracelets',
    'tennis': 'Tennis Bracelets',
    'gold': 'Gold Anklets',
    'silver': 'Silver Anklets',
    'gemstone': 'Gemstone Anklets',
    'complete': 'Complete Bridal Sets',
    'temple': 'Temple Jewelry',
    'traditional': 'Traditional Sets',
    'kundan': 'Kundan Sets',
    'diamonds': 'Diamonds',
    'rubies': 'Rubies',
    'emeralds': 'Emeralds',
    'pearls': 'Pearls'
  };

  // Function to get Google image URL - REPLACE THESE WITH YOUR ACTUAL GOOGLE IMAGE LINKS
  const getProductImage = (productName) => {
    // Google Image Placeholders - Replace these URLs with your actual Google image links
    const imageMap = {
      'Solitaire Diamond Ring': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R1',
      'Halo Diamond Ring': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R2',
      'Three Stone Ring': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R3',
      'Vintage Sapphire Ring': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R4',
      'Classic Wedding Band': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R5',
      'Rose Gold Wedding Band': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R6',
      'Eternity Diamond Band': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R7',
      "Men's Tungsten Band": 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R8',
      "Men's Gold Band": 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R9',
      'Fashion Cocktail Ring': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R10',
      'Promise Knot Ring': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R11',
      'Infinity Promise Ring': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_R12',
      'Diamond Pendant Necklace': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N1',
      'Gold Chain Necklace': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N2',
      'Pearl Pendant Necklace': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N3',
      'Layered Chain Necklace': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N4',
      'Emerald Pendant': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N5',
      'Choker Necklace': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N6',
      'Statement Necklace': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N7',
      'Locket Necklace': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_N8',
      'Diamond Stud Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E1',
      'Gold Hoop Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E2',
      'Chandelier Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E3',
      'Drop Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E4',
      'Dangle Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E5',
      'Cluster Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E6',
      'Ruby Stud Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E7',
      'Small Hoop Earrings': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_E8',
      'Tennis Bracelet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B1',
      'Gold Bangle Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B2',
      'Charm Bracelet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B3',
      'Cuff Bracelet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B4',
      'Beaded Bracelet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B5',
      'Chain Bracelet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B6',
      'Diamond Tennis Bracelet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B7',
      'Bangle Bracelet Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_B8',
      'Gold Anklet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_A1',
      'Gemstone Anklet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_A2',
      'Silver Anklet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_A3',
      'Beaded Anklet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_A4',
      'Charm Anklet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_A5',
      'Temple Anklet': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_A6',
      'Complete Bridal Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_S1',
      'Kundan Bridal Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_S2',
      'Temple Bridal Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_S3',
      'Necklace & Earring Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_S4',
      'Traditional Bridal Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_S5',
      'Wedding Collection Set': 'https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_S6',
    };
    return imageMap[productName] || 'https://placehold.co/400x400/f5f5f5/d4af37?text=Jewelry';
  };

  // Complete product database for ALL categories
  const allProducts = [
    // ========== RINGS - All types (12 products) ==========
    { id: 1, name: "Solitaire Diamond Ring", category: "rings", subCategory: "engagement", price: 2999, originalPrice: 3999, metal: "Platinum", style: "Classic", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.9, reviews: 128, image: getProductImage("Solitaire Diamond Ring"), isNew: true, isBestseller: true, discount: 25 },
    { id: 2, name: "Halo Diamond Ring", category: "rings", subCategory: "engagement", price: 4599, originalPrice: 5899, metal: "White Gold", style: "Halo", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.9, reviews: 94, image: getProductImage("Halo Diamond Ring"), isNew: true, discount: 22 },
    { id: 3, name: "Three Stone Ring", category: "rings", subCategory: "engagement", price: 3899, metal: "Rose Gold", style: "Three Stone", shape: "Princess", stoneType: "Diamond", gender: "Women", rating: 4.8, reviews: 156, image: getProductImage("Three Stone Ring"), isBestseller: true },
    { id: 4, name: "Vintage Sapphire Ring", category: "rings", subCategory: "engagement", price: 2899, originalPrice: 3799, metal: "Yellow Gold", style: "Vintage", shape: "Oval", stoneType: "Sapphire", gender: "Women", rating: 4.7, reviews: 87, image: getProductImage("Vintage Sapphire Ring"), discount: 24 },
    { id: 5, name: "Classic Wedding Band", category: "rings", subCategory: "wedding", price: 1299, metal: "Platinum", style: "Classic", shape: "Round", stoneType: "None", gender: "Unisex", rating: 4.9, reviews: 234, image: getProductImage("Classic Wedding Band"), isBestseller: true },
    { id: 6, name: "Rose Gold Wedding Band", category: "rings", subCategory: "wedding", price: 999, metal: "Rose Gold", style: "Classic", shape: "Round", stoneType: "None", gender: "Women", rating: 4.8, reviews: 167, image: getProductImage("Rose Gold Wedding Band"), isNew: true },
    { id: 7, name: "Eternity Diamond Band", category: "rings", subCategory: "eternity", price: 3299, originalPrice: 4299, metal: "White Gold", style: "Eternity", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.8, reviews: 67, image: getProductImage("Eternity Diamond Band"), discount: 23 },
    { id: 8, name: "Men's Tungsten Band", category: "rings", subCategory: "mens-wedding-bands", price: 899, metal: "Tungsten", style: "Modern", shape: "Round", stoneType: "None", gender: "Men", rating: 4.8, reviews: 189, image: getProductImage("Men's Tungsten Band"), isNew: true },
    { id: 9, name: "Men's Gold Band", category: "rings", subCategory: "mens-wedding-bands", price: 1599, metal: "Yellow Gold", style: "Classic", shape: "Round", stoneType: "None", gender: "Men", rating: 4.7, reviews: 112, image: getProductImage("Men's Gold Band"), isBestseller: true },
    { id: 10, name: "Fashion Cocktail Ring", category: "rings", subCategory: "fashion", price: 899, metal: "Rose Gold", style: "Modern", shape: "Oval", stoneType: "Sapphire", gender: "Women", rating: 4.6, reviews: 78, image: getProductImage("Fashion Cocktail Ring"), isNew: true },
    { id: 11, name: "Promise Knot Ring", category: "rings", subCategory: "promise", price: 599, metal: "White Gold", style: "Modern", shape: "Round", stoneType: "None", gender: "Women", rating: 4.7, reviews: 203, image: getProductImage("Promise Knot Ring"), isBestseller: true },
    { id: 12, name: "Infinity Promise Ring", category: "rings", subCategory: "promise", price: 799, metal: "Rose Gold", style: "Modern", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.8, reviews: 145, image: getProductImage("Infinity Promise Ring"), isNew: true },
    
    // ========== NECKLACES - All types (8 products) ==========
    { id: 13, name: "Diamond Pendant Necklace", category: "necklaces", subCategory: "pendant", price: 2499, originalPrice: 3299, metal: "White Gold", style: "Classic", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.9, reviews: 156, image: getProductImage("Diamond Pendant Necklace"), isBestseller: true, discount: 24 },
    { id: 14, name: "Gold Chain Necklace", category: "necklaces", subCategory: "chain", price: 599, metal: "Yellow Gold", style: "Modern", shape: "None", stoneType: "None", gender: "Unisex", rating: 4.7, reviews: 234, image: getProductImage("Gold Chain Necklace"), isNew: true },
    { id: 15, name: "Pearl Pendant Necklace", category: "necklaces", subCategory: "pendant", price: 1899, metal: "White Gold", style: "Classic", shape: "Round", stoneType: "Pearl", gender: "Women", rating: 4.8, reviews: 89, image: getProductImage("Pearl Pendant Necklace"), isBestseller: true },
    { id: 16, name: "Layered Chain Necklace", category: "necklaces", subCategory: "layered", price: 899, metal: "Yellow Gold", style: "Modern", shape: "None", stoneType: "None", gender: "Women", rating: 4.6, reviews: 67, image: getProductImage("Layered Chain Necklace"), isNew: true },
    { id: 17, name: "Emerald Pendant", category: "necklaces", subCategory: "pendant", price: 1599, metal: "Platinum", style: "Classic", shape: "Oval", stoneType: "Emerald", gender: "Women", rating: 4.7, reviews: 78, image: getProductImage("Emerald Pendant"), isBestseller: true },
    { id: 18, name: "Choker Necklace", category: "necklaces", subCategory: "chokers", price: 799, metal: "Rose Gold", style: "Modern", shape: "None", stoneType: "None", gender: "Women", rating: 4.5, reviews: 123, image: getProductImage("Choker Necklace"), isNew: true },
    { id: 19, name: "Statement Necklace", category: "necklaces", subCategory: "statement", price: 1299, metal: "Yellow Gold", style: "Vintage", shape: "None", stoneType: "Sapphire", gender: "Women", rating: 4.8, reviews: 56, image: getProductImage("Statement Necklace"), isBestseller: true },
    { id: 20, name: "Locket Necklace", category: "necklaces", subCategory: "lockets", price: 399, metal: "Silver", style: "Classic", shape: "Round", stoneType: "None", gender: "Women", rating: 4.6, reviews: 89, image: getProductImage("Locket Necklace"), isNew: true },
    
    // ========== EARRINGS - All types (8 products) ==========
    { id: 21, name: "Diamond Stud Earrings", category: "earrings", subCategory: "stud", price: 1899, originalPrice: 2499, metal: "Platinum", style: "Classic", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.9, reviews: 203, image: getProductImage("Diamond Stud Earrings"), isBestseller: true, discount: 24 },
    { id: 22, name: "Gold Hoop Earrings", category: "earrings", subCategory: "hoop", price: 799, metal: "Yellow Gold", style: "Modern", shape: "Round", stoneType: "None", gender: "Women", rating: 4.8, reviews: 167, image: getProductImage("Gold Hoop Earrings"), isNew: true },
    { id: 23, name: "Chandelier Earrings", category: "earrings", subCategory: "chandelier", price: 1299, metal: "Rose Gold", style: "Vintage", shape: "Drop", stoneType: "Sapphire", gender: "Women", rating: 4.7, reviews: 98, image: getProductImage("Chandelier Earrings"), isBestseller: true },
    { id: 24, name: "Drop Earrings", category: "earrings", subCategory: "drop", price: 999, metal: "White Gold", style: "Classic", shape: "Drop", stoneType: "Pearl", gender: "Women", rating: 4.6, reviews: 112, image: getProductImage("Drop Earrings"), isNew: true },
    { id: 25, name: "Dangle Earrings", category: "earrings", subCategory: "dangle", price: 699, metal: "Silver", style: "Modern", shape: "None", stoneType: "None", gender: "Women", rating: 4.5, reviews: 134, image: getProductImage("Dangle Earrings"), isBestseller: true },
    { id: 26, name: "Cluster Earrings", category: "earrings", subCategory: "cluster", price: 1499, metal: "White Gold", style: "Modern", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.8, reviews: 67, image: getProductImage("Cluster Earrings"), isNew: true },
    { id: 27, name: "Ruby Stud Earrings", category: "earrings", subCategory: "stud", price: 899, metal: "Yellow Gold", style: "Classic", shape: "Round", stoneType: "Ruby", gender: "Women", rating: 4.7, reviews: 89, image: getProductImage("Ruby Stud Earrings"), isBestseller: true },
    { id: 28, name: "Small Hoop Earrings", category: "earrings", subCategory: "hoop", price: 399, metal: "Rose Gold", style: "Modern", shape: "Round", stoneType: "None", gender: "Women", rating: 4.6, reviews: 156, image: getProductImage("Small Hoop Earrings"), isNew: true },
    
    // ========== BRACELETS - All types (8 products) ==========
    { id: 29, name: "Tennis Bracelet", category: "bracelets", subCategory: "tennis", price: 3999, originalPrice: 5499, metal: "White Gold", style: "Classic", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.9, reviews: 89, image: getProductImage("Tennis Bracelet"), isBestseller: true, discount: 27 },
    { id: 30, name: "Gold Bangle Set", category: "bracelets", subCategory: "gold-bangles", price: 1299, metal: "Yellow Gold", style: "Traditional", shape: "Round", stoneType: "None", gender: "Women", rating: 4.7, reviews: 145, image: getProductImage("Gold Bangle Set"), isNew: true },
    { id: 31, name: "Charm Bracelet", category: "bracelets", subCategory: "charm", price: 699, metal: "Silver", style: "Modern", shape: "None", stoneType: "None", gender: "Women", rating: 4.6, reviews: 178, image: getProductImage("Charm Bracelet"), isBestseller: true },
    { id: 32, name: "Cuff Bracelet", category: "bracelets", subCategory: "cuff", price: 899, metal: "Rose Gold", style: "Modern", shape: "None", stoneType: "None", gender: "Women", rating: 4.5, reviews: 67, image: getProductImage("Cuff Bracelet"), isNew: true },
    { id: 33, name: "Beaded Bracelet", category: "bracelets", subCategory: "beaded", price: 299, metal: "Silver", style: "Bohemian", shape: "Round", stoneType: "Semi-precious", gender: "Women", rating: 4.4, reviews: 234, image: getProductImage("Beaded Bracelet"), isBestseller: true },
    { id: 34, name: "Chain Bracelet", category: "bracelets", subCategory: "chain", price: 499, metal: "White Gold", style: "Classic", shape: "None", stoneType: "None", gender: "Unisex", rating: 4.6, reviews: 123, image: getProductImage("Chain Bracelet"), isNew: true },
    { id: 35, name: "Diamond Tennis Bracelet", category: "bracelets", subCategory: "tennis", price: 5999, metal: "Platinum", style: "Classic", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 5.0, reviews: 45, image: getProductImage("Diamond Tennis Bracelet"), isBestseller: true },
    { id: 36, name: "Bangle Bracelet Set", category: "bracelets", subCategory: "gold-bangles", price: 899, metal: "Rose Gold", style: "Traditional", shape: "Round", stoneType: "None", gender: "Women", rating: 4.7, reviews: 89, image: getProductImage("Bangle Bracelet Set"), isNew: true },
    
    // ========== ANKLETS - All types (6 products) ==========
    { id: 37, name: "Gold Anklet", category: "anklets", subCategory: "gold", price: 399, metal: "Yellow Gold", style: "Classic", shape: "None", stoneType: "None", gender: "Women", rating: 4.5, reviews: 67, image: getProductImage("Gold Anklet"), isNew: true },
    { id: 38, name: "Gemstone Anklet", category: "anklets", subCategory: "gemstone", price: 599, metal: "Silver", style: "Modern", shape: "Round", stoneType: "Sapphire", gender: "Women", rating: 4.6, reviews: 45, image: getProductImage("Gemstone Anklet"), isBestseller: true },
    { id: 39, name: "Silver Anklet", category: "anklets", subCategory: "silver", price: 299, metal: "Silver", style: "Classic", shape: "None", stoneType: "None", gender: "Women", rating: 4.4, reviews: 89, image: getProductImage("Silver Anklet"), isNew: true },
    { id: 40, name: "Beaded Anklet", category: "anklets", subCategory: "beaded", price: 199, metal: "None", style: "Bohemian", shape: "Round", stoneType: "Semi-precious", gender: "Women", rating: 4.3, reviews: 156, image: getProductImage("Beaded Anklet"), isBestseller: true },
    { id: 41, name: "Charm Anklet", category: "anklets", subCategory: "charm", price: 249, metal: "Silver", style: "Modern", shape: "None", stoneType: "None", gender: "Women", rating: 4.5, reviews: 78, image: getProductImage("Charm Anklet"), isNew: true },
    { id: 42, name: "Temple Anklet", category: "anklets", subCategory: "temple", price: 449, metal: "Yellow Gold", style: "Traditional", shape: "None", stoneType: "None", gender: "Women", rating: 4.7, reviews: 34, image: getProductImage("Temple Anklet"), isBestseller: true },
    
    // ========== BRIDAL SETS - All types (6 products) ==========
    { id: 43, name: "Complete Bridal Set", category: "bridal-sets", subCategory: "complete", price: 5999, originalPrice: 7999, metal: "White Gold", style: "Classic", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 5.0, reviews: 34, image: getProductImage("Complete Bridal Set"), isBestseller: true, discount: 25 },
    { id: 44, name: "Kundan Bridal Set", category: "bridal-sets", subCategory: "kundan", price: 3499, metal: "Yellow Gold", style: "Traditional", shape: "Round", stoneType: "Kundan", gender: "Women", rating: 4.8, reviews: 56, image: getProductImage("Kundan Bridal Set"), isNew: true },
    { id: 45, name: "Temple Bridal Set", category: "bridal-sets", subCategory: "temple", price: 2799, metal: "Yellow Gold", style: "Traditional", shape: "None", stoneType: "None", gender: "Women", rating: 4.7, reviews: 45, image: getProductImage("Temple Bridal Set"), isBestseller: true },
    { id: 46, name: "Necklace & Earring Set", category: "bridal-sets", subCategory: "necklace-earring", price: 2499, metal: "Rose Gold", style: "Modern", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 4.6, reviews: 67, image: getProductImage("Necklace & Earring Set"), isNew: true },
    { id: 47, name: "Traditional Bridal Set", category: "bridal-sets", subCategory: "traditional", price: 3999, metal: "Yellow Gold", style: "Traditional", shape: "Round", stoneType: "Ruby", gender: "Women", rating: 4.9, reviews: 78, image: getProductImage("Traditional Bridal Set"), isBestseller: true },
    { id: 48, name: "Wedding Collection Set", category: "bridal-sets", subCategory: "wedding", price: 4499, metal: "Platinum", style: "Classic", shape: "Round", stoneType: "Diamond", gender: "Women", rating: 5.0, reviews: 23, image: getProductImage("Wedding Collection Set"), isNew: true },
  ];

  // Filter options
  const filterOptions = {
    style: ['Classic', 'Halo', 'Three Stone', 'Vintage', 'Modern', 'Eternity', 'Solitaire', 'Traditional', 'Bohemian'],
    metal: ['Platinum', 'White Gold', 'Yellow Gold', 'Rose Gold', 'Tungsten', 'Silver'],
    shape: ['Round', 'Princess', 'Oval', 'Drop', 'Emerald'],
    stoneType: ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Pearl', 'Kundan', 'Semi-precious', 'None'],
    gender: ['Women', 'Men', 'Unisex']
  };

  // Get products based on current URL
  const getCurrentProducts = () => {
    let filtered = allProducts.filter(p => p.category === mainCategory);
    
    // If subCategory is not 'all', filter by subCategory
    if (subCategory !== 'all') {
      filtered = filtered.filter(p => p.subCategory === subCategory);
    }
    
    return filtered;
  };

  const [currentProducts, setCurrentProducts] = useState(getCurrentProducts());

  // Update when URL changes
  useEffect(() => {
    setCurrentProducts(getCurrentProducts());
    // Reset filters
    setSelectedStyles([]);
    setSelectedMetals([]);
    setSelectedShapes([]);
    setSelectedStoneTypes([]);
    setSelectedGender([]);
    setPriceRange([0, 10000]);
  }, [currentPath]);

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const handleStyleToggle = (style) => {
    setSelectedStyles(prev => prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]);
  };

  const handleMetalToggle = (metal) => {
    setSelectedMetals(prev => prev.includes(metal) ? prev.filter(m => m !== metal) : [...prev, metal]);
  };

  const handleShapeToggle = (shape) => {
    setSelectedShapes(prev => prev.includes(shape) ? prev.filter(s => s !== shape) : [...prev, shape]);
  };

  const handleStoneTypeToggle = (type) => {
    setSelectedStoneTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const handleGenderToggle = (gender) => {
    setSelectedGender(prev => prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]);
  };

  const clearAllFilters = () => {
    setSelectedStyles([]);
    setSelectedMetals([]);
    setSelectedShapes([]);
    setSelectedStoneTypes([]);
    setSelectedGender([]);
    setPriceRange([0, 10000]);
  };

  const getFilteredProducts = () => {
    let filtered = [...currentProducts];
    
    if (selectedStyles.length > 0) {
      filtered = filtered.filter(p => selectedStyles.includes(p.style));
    }
    if (selectedMetals.length > 0) {
      filtered = filtered.filter(p => selectedMetals.includes(p.metal));
    }
    if (selectedShapes.length > 0) {
      filtered = filtered.filter(p => selectedShapes.includes(p.shape));
    }
    if (selectedStoneTypes.length > 0) {
      filtered = filtered.filter(p => selectedStoneTypes.includes(p.stoneType));
    }
    if (selectedGender.length > 0) {
      filtered = filtered.filter(p => selectedGender.includes(p.gender));
    }
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Sorting
    switch(sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'newest': filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      default: filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    
    return filtered;
  };

  const getPageTitle = () => {
    if (subCategory !== 'all' && subCategoryNames[subCategory]) {
      return subCategoryNames[subCategory];
    }
    return categoryNames[mainCategory];
  };

  const getPageSubtitle = () => {
    const subtitles = {
      'rings': "Find the perfect ring to cherish every moment of your journey.",
      'necklaces': "Discover elegant necklaces that complement every style.",
      'earrings': "Find the perfect pair to illuminate your features.",
      'bracelets': "Add elegance to your wrist with our stunning bracelets.",
      'anklets': "Beautiful anklets to adorn your feet.",
      'bridal-sets': "Complete bridal jewelry sets for your special day.",
      'gems': "Discover certified gemstones of exceptional quality."
    };
    return subtitles[mainCategory] || "Explore our exquisite collection of fine jewelry.";
  };

  const getHeroBackgroundImage = () => {
    const bgImages = {
      'rings': "https://placehold.co/1600x400/1a1a2e/d4af37?text=Rings",
      'necklaces': "https://placehold.co/1600x400/1a1a2e/d4af37?text=Necklaces",
      'earrings': "https://placehold.co/1600x400/1a1a2e/d4af37?text=Earrings",
      'bracelets': "https://placehold.co/1600x400/1a1a2e/d4af37?text=Bracelets",
      'anklets': "https://placehold.co/1600x400/1a1a2e/d4af37?text=Anklets",
      'bridal-sets': "https://placehold.co/1600x400/1a1a2e/d4af37?text=Bridal+Sets",
      'gems': "https://placehold.co/1600x400/1a1a2e/d4af37?text=Gemstones"
    };
    return bgImages[mainCategory] || "https://placehold.co/1600x400/1a1a2e/d4af37?text=Jewelry";
  };

  const filteredProducts = getFilteredProducts();
  const hasActiveFilters = selectedStyles.length > 0 || selectedMetals.length > 0 || 
    selectedShapes.length > 0 || selectedStoneTypes.length > 0 || selectedGender.length > 0 ||
    priceRange[0] > 0 || priceRange[1] < 10000;

  // Get unique sub-categories for quick links
  const getUniqueSubCategories = () => {
    const subs = [...new Set(currentProducts.map(p => p.subCategory))];
    return subs.filter(s => s);
  };

  const subCategoriesList = getUniqueSubCategories();

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-[#d4af37]/30">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={getHeroBackgroundImage()} 
            alt="Jewelry background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16 z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm mb-6 flex-wrap">
            <a href="/" className="text-gray-300 hover:text-[#d4af37] transition">Home</a>
            <span className="text-gray-400">›</span>
            <a href={`/${mainCategory}`} className="text-gray-300 hover:text-[#d4af37] transition">{categoryNames[mainCategory]}</a>
            {subCategory !== 'all' && (
              <>
                <span className="text-gray-400">›</span>
                <span className="text-[#d4af37] font-medium">{getPageTitle()}</span>
              </>
            )}
            {subCategory === 'all' && (
              <span className="text-[#d4af37] font-medium">{getPageTitle()}</span>
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

          {/* Sub-category quick links - Only show when viewing main category */}
          {subCategory === 'all' && subCategoriesList.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {subCategoriesList.map(sub => (
                <a
                  key={sub}
                  href={`/${mainCategory}/${sub}`}
                  className="px-4 py-2 rounded-full border border-[#d4af37]/40 text-gray-200 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10 text-sm transition-all duration-300"
                >
                  {subCategoryNames[sub] || sub.replace(/-/g, ' ')}
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
                    <input type="range" min="0" max="10000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#d4af37]" />
                  </div>
                )}
              </div>

              {/* Style Filter */}
              <div className="mb-5 pb-3 border-b border-gray-200">
                <button onClick={() => toggleFilter('style')} className="flex justify-between items-center w-full text-left">
                  <span className="text-gray-700 font-medium">Style</span>
                  {expandedFilters.style ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.style && (
                  <div className="mt-3 space-y-2">
                    {filterOptions.style.map(style => (
                      <label key={style} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={selectedStyles.includes(style)} onChange={() => handleStyleToggle(style)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                        <span className="text-gray-600 text-sm">{style}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Metal Filter */}
              <div className="mb-5 pb-3 border-b border-gray-200">
                <button onClick={() => toggleFilter('metal')} className="flex justify-between items-center w-full text-left">
                  <span className="text-gray-700 font-medium">Metal</span>
                  {expandedFilters.metal ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.metal && (
                  <div className="mt-3 space-y-2">
                    {filterOptions.metal.map(metal => (
                      <label key={metal} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={selectedMetals.includes(metal)} onChange={() => handleMetalToggle(metal)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: metal === 'White Gold' ? '#E8E8E8' : metal === 'Yellow Gold' ? '#F5D76E' : metal === 'Rose Gold' ? '#E8A2A2' : metal === 'Platinum' ? '#C0C0C0' : metal === 'Silver' ? '#D4D4D4' : '#808080', border: '1px solid #ccc' }} />
                          <span className="text-gray-600 text-sm">{metal}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Shape Filter */}
              <div className="mb-5 pb-3 border-b border-gray-200">
                <button onClick={() => toggleFilter('shape')} className="flex justify-between items-center w-full text-left">
                  <span className="text-gray-700 font-medium">Shape</span>
                  {expandedFilters.shape ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.shape && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {filterOptions.shape.map(shape => (
                      <label key={shape} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={selectedShapes.includes(shape)} onChange={() => handleShapeToggle(shape)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                        <span className="text-gray-600 text-sm">{shape}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Stone Type Filter */}
              <div className="mb-5 pb-3 border-b border-gray-200">
                <button onClick={() => toggleFilter('stoneType')} className="flex justify-between items-center w-full text-left">
                  <span className="text-gray-700 font-medium">Type of Stone</span>
                  {expandedFilters.stoneType ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.stoneType && (
                  <div className="mt-3 space-y-2">
                    {filterOptions.stoneType.map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={selectedStoneTypes.includes(type)} onChange={() => handleStoneTypeToggle(type)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                        <span className="text-gray-600 text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Gender Filter */}
              <div className="mb-5">
                <button onClick={() => toggleFilter('gender')} className="flex justify-between items-center w-full text-left">
                  <span className="text-gray-700 font-medium">Gender</span>
                  {expandedFilters.gender ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.gender && (
                  <div className="mt-3 space-y-2">
                    {filterOptions.gender.map(gender => (
                      <label key={gender} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={selectedGender.includes(gender)} onChange={() => handleGenderToggle(gender)} className="w-4 h-4 rounded border-gray-300 text-[#d4af37]" />
                        <span className="text-gray-600 text-sm">{gender}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
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
                  Showing <span className="text-[#d4af37] font-semibold">{filteredProducts.length}</span> products
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
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedStyles.map(style => <span key={style} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{style}<button onClick={() => handleStyleToggle(style)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedMetals.map(metal => <span key={metal} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{metal}<button onClick={() => handleMetalToggle(metal)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedShapes.map(shape => <span key={shape} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{shape}<button onClick={() => handleShapeToggle(shape)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedStoneTypes.map(type => <span key={type} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{type}<button onClick={() => handleStoneTypeToggle(type)}><FiX className="w-3 h-3" /></button></span>)}
                {selectedGender.map(gender => <span key={gender} className="flex items-center gap-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37]">{gender}<button onClick={() => handleGenderToggle(gender)}><FiX className="w-3 h-3" /></button></span>)}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <RiGeminiFill className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
                <button onClick={clearAllFilters} className="mt-4 px-6 py-2 rounded-full bg-[#d4af37] text-white font-semibold hover:shadow-lg hover:shadow-[#d4af37]/30 transition">Clear All Filters</button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                {filteredProducts.map(product => (
                  <div key={product.id} className={`group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-xl ${viewMode === 'list' ? 'flex' : ''}`}>
                    <div className={`relative overflow-hidden bg-gray-100 ${viewMode === 'list' ? 'w-48 shrink-0' : 'aspect-square'}`}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      {product.isNew && <span className="absolute top-3 left-3 bg-[#d4af37] text-white text-xs font-bold px-2 py-1 rounded">NEW</span>}
                      {product.discount && <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{product.discount}% OFF</span>}
                      <button className="absolute bottom-3 right-3 p-2 bg-white/80 rounded-full text-gray-500 hover:text-[#d4af37] transition backdrop-blur-sm"><FiHeart /></button>
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1"><FiStar className="text-[#d4af37] fill-[#d4af37] w-3 h-3" /><span className="text-gray-700 text-sm">{product.rating}</span></div>
                        <span className="text-gray-400 text-xs">({product.reviews} reviews)</span>
                      </div>
                      <h3 className="text-gray-800 font-medium text-lg mb-1 group-hover:text-[#d4af37] transition">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{product.metal !== 'None' ? `${product.metal} • ` : ''}{product.style !== 'None' ? product.style : ''}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#d4af37] text-xl font-bold">${product.price}</span>
                        {product.originalPrice && <span className="text-gray-400 text-sm line-through">${product.originalPrice}</span>}
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

export default Jewelry;