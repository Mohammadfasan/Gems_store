import React, { useState } from 'react';
import { 
  FiUser, 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiPackage, 
  FiHeart, 
  FiStar, 
  FiSettings,
  FiClock,
  FiCheckCircle,
  FiTruck,
  FiCalendar,
  FiDollarSign,
  FiEdit2,
  FiLogOut,
  FiShoppingBag,
  FiChevronRight
} from 'react-icons/fi';
import { RiGeminiFill } from 'react-icons/ri';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [user, setUser] = useState({
    name: 'Fasan',
    email: 'fasan@email.com',
    phone: '+94 77 123 4567',
    address: '123 Jewelry Lane, Colombo, Sri Lanka',
    joinDate: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
  });

  const orders = [
    { 
      id: 'ORD-001', 
      name: 'Ruby Ring', 
      status: 'Delivered', 
      price: 1899, 
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150',
      statusColor: 'green',
      statusIcon: <FiCheckCircle />
    },
    { 
      id: 'ORD-002', 
      name: 'Gold Necklace', 
      status: 'Pending', 
      price: 2499, 
      date: '2024-03-20',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=150',
      statusColor: 'yellow',
      statusIcon: <FiClock />
    },
    { 
      id: 'ORD-003', 
      name: 'Diamond Earrings', 
      status: 'Shipped', 
      price: 1899, 
      date: '2024-03-18',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=150',
      statusColor: 'blue',
      statusIcon: <FiTruck />
    },
    { 
      id: 'ORD-004', 
      name: 'Tennis Bracelet', 
      status: 'Delivered', 
      price: 3999, 
      date: '2024-02-28',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=150',
      statusColor: 'green',
      statusIcon: <FiCheckCircle />
    }
  ];

  const wishlist = [
    { id: 1, name: "Blue Sapphire", type: "Gemstone", price: 2499, image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=150", rating: 4.9 },
    { id: 2, name: "Solitaire Diamond Ring", type: "Ring", price: 2999, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150", rating: 4.9 },
    { id: 3, name: "Pearl Pendant Necklace", type: "Necklace", price: 1899, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=150", rating: 4.8 },
    { id: 4, name: "Emerald Gemstone", type: "Gemstone", price: 3299, image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=150", rating: 4.9 }
  ];

  const reviews = [
    { id: 1, product: "Ruby Ring", rating: 5, comment: "Absolutely beautiful ring! The quality is exceptional and it arrived earlier than expected.", date: "2024-03-16", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100" },
    { id: 2, product: "Gold Necklace", rating: 4, comment: "Very elegant piece. The gold shines beautifully. Would recommend!", date: "2024-03-21", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100" }
  ];

  const getStatusColor = (statusColor) => {
    switch(statusColor) {
      case 'green': return 'bg-green-100 text-green-700 border-green-200';
      case 'yellow': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'blue': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const stats = [
    { label: 'Total Orders', value: orders.length, icon: <FiPackage />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Wishlist Items', value: wishlist.length, icon: <FiHeart />, color: 'bg-red-100 text-red-600' },
    { label: 'Reviews Written', value: reviews.length, icon: <FiStar />, color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Total Spent', value: `$${orders.reduce((sum, order) => sum + order.price, 0)}`, icon: <FiDollarSign />, color: 'bg-green-100 text-green-600' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-[#d4af37]/30">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600" 
            alt="Profile background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 z-10">
          <div className="flex items-center gap-2 text-sm mb-6">
            <a href="/" className="text-gray-300 hover:text-[#d4af37] transition">Home</a>
            <span className="text-gray-400">›</span>
            <span className="text-[#d4af37] font-medium">My Profile</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-24 h-24 rounded-full border-2 border-[#d4af37] object-cover"
              />
              <button className="absolute bottom-0 right-0 p-1.5 bg-[#d4af37] rounded-full text-white hover:bg-[#b8962e] transition">
                <FiEdit2 size={12} />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-serif text-white mb-2">{user.name}</h1>
              <div className="flex flex-wrap gap-3 text-gray-300 text-sm">
                <span className="flex items-center gap-1"><FiMail className="text-[#d4af37]" /> {user.email}</span>
                <span className="flex items-center gap-1"><FiPhone className="text-[#d4af37]" /> {user.phone}</span>
                <span className="flex items-center gap-1"><FiCalendar className="text-[#d4af37]" /> Member since {user.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-24 shadow-sm">
              <div className="text-center mb-6 pb-4 border-b border-gray-200">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center">
                  <FiUser className="text-[#d4af37] text-3xl" />
                </div>
                <h3 className="text-gray-800 font-semibold">{user.name}</h3>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>

              <nav className="space-y-1">
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'orders' ? 'bg-[#d4af37] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-[#d4af37]'}`}
                >
                  <FiPackage /> <span>My Orders</span>
                  {activeTab === 'orders' && <FiChevronRight className="ml-auto" />}
                </button>
                
                <button 
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'wishlist' ? 'bg-[#d4af37] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-[#d4af37]'}`}
                >
                  <FiHeart /> <span>Wishlist</span>
                  {activeTab === 'wishlist' && <FiChevronRight className="ml-auto" />}
                </button>
                
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'reviews' ? 'bg-[#d4af37] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-[#d4af37]'}`}
                >
                  <FiStar /> <span>My Reviews</span>
                  {activeTab === 'reviews' && <FiChevronRight className="ml-auto" />}
                </button>
                
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'settings' ? 'bg-[#d4af37] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-[#d4af37]'}`}
                >
                  <FiSettings /> <span>Settings</span>
                  {activeTab === 'settings' && <FiChevronRight className="ml-auto" />}
                </button>
              </nav>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-300">
                  <FiLogOut /> <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                  <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mb-3`}>
                    {stat.icon}
                  </div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-gray-800 text-xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                  <h2 className="text-gray-800 font-semibold text-lg flex items-center gap-2">
                    <FiPackage className="text-[#d4af37]" /> My Orders
                  </h2>
                  <span className="text-gray-500 text-sm">{orders.length} orders</span>
                </div>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex flex-wrap gap-4">
                        <img src={order.image} alt={order.name} className="w-20 h-20 rounded-lg object-cover bg-gray-100" />
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between items-start gap-2">
                            <div>
                              <h3 className="text-gray-800 font-medium">{order.name}</h3>
                              <p className="text-gray-500 text-sm">Order ID: {order.id}</p>
                              <p className="text-gray-500 text-sm">Date: {order.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[#d4af37] font-bold">${order.price}</p>
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.statusColor)}`}>
                                {order.statusIcon} {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3 mt-3">
                            <button className="text-sm text-[#d4af37] hover:underline">Track Order</button>
                            <button className="text-sm text-[#d4af37] hover:underline">View Details</button>
                            {order.status === 'Delivered' && (
                              <button className="text-sm text-[#d4af37] hover:underline">Write Review</button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                  <h2 className="text-gray-800 font-semibold text-lg flex items-center gap-2">
                    <FiHeart className="text-[#d4af37]" /> My Wishlist
                  </h2>
                  <span className="text-gray-500 text-sm">{wishlist.length} items</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition group">
                      <div className="flex gap-3">
                        <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-gray-100" />
                        <div className="flex-1">
                          <h3 className="text-gray-800 font-medium group-hover:text-[#d4af37] transition">{item.name}</h3>
                          <p className="text-gray-500 text-sm">{item.type}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <FiStar className="text-[#d4af37] fill-[#d4af37] w-3 h-3" />
                            <span className="text-gray-600 text-sm">{item.rating}</span>
                          </div>
                          <p className="text-[#d4af37] font-bold mt-1">${item.price}</p>
                          <div className="flex gap-2 mt-2">
                            <button className="text-xs px-3 py-1 rounded-full bg-[#d4af37] text-white hover:bg-[#b8962e] transition">Add to Cart</button>
                            <button className="text-xs px-3 py-1 rounded-full border border-red-300 text-red-500 hover:bg-red-50 transition">Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                  <h2 className="text-gray-800 font-semibold text-lg flex items-center gap-2">
                    <FiStar className="text-[#d4af37]" /> My Reviews
                  </h2>
                  <span className="text-gray-500 text-sm">{reviews.length} reviews</span>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex gap-4">
                        <img src={review.image} alt={review.product} className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                              <h3 className="text-gray-800 font-medium">{review.product}</h3>
                              <div className="flex items-center gap-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <FiStar key={i} className={`w-3 h-3 ${i < review.rating ? 'text-[#d4af37] fill-[#d4af37]' : 'text-gray-300'}`} />
                                ))}
                                <span className="text-gray-500 text-xs ml-2">{review.date}</span>
                              </div>
                              <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
                            </div>
                            <div className="flex gap-2">
                              <button className="text-xs text-[#d4af37] hover:underline">Edit</button>
                              <button className="text-xs text-red-500 hover:underline">Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 text-center">
                  <button className="text-[#d4af37] hover:underline text-sm">Write a new review →</button>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h2 className="text-gray-800 font-semibold text-lg flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <FiSettings className="text-[#d4af37]" /> Account Settings
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                    <input type="text" value={user.name} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                    <input type="email" value={user.email} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                    <input type="tel" value={user.phone} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Delivery Address</label>
                    <textarea rows="2" value={user.address} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] bg-gray-50"></textarea>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button className="px-6 py-2 rounded-lg bg-[#d4af37] text-white font-semibold hover:bg-[#b8962e] transition">Save Changes</button>
                    <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-[#d4af37] hover:text-[#d4af37] transition">Cancel</button>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-gray-800 font-medium mb-3">Change Password</h3>
                  <div className="space-y-3">
                    <input type="password" placeholder="Current Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]" />
                    <input type="password" placeholder="New Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]" />
                    <input type="password" placeholder="Confirm New Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]" />
                    <button className="px-6 py-2 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition">Update Password</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f5f5f5; }
        ::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 3px; }
      `}</style>
    </div>
  );
};

export default Profile;