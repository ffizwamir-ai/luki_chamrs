import { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
  wishlistCount: number;
  onWishlistOpen: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Navbar({
  cartCount,
  onCartOpen,
  wishlistCount,
  onWishlistOpen,
  searchQuery,
  onSearchChange,
  onNavigateToSection,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navItems = [
    { label: 'Shop', id: 'featured-collection' },
    { label: 'Best Sellers', id: 'best-sellers' },
    { label: 'Our Story', id: 'about-section' },
    { label: 'Reviews', id: 'reviews-section' },
    { label: 'FAQs', id: 'faq-section' },
    { label: 'Contact', id: 'contact-section' },
  ];

  const handleNavItemClick = (id: string) => {
    onNavigateToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Premium Announcement Bar */}
      <div className="bg-linear-to-r from-brand-pink-soft to-brand-lavender text-brand-purple-deep border-b border-brand-pink-rose/40 text-center py-2 px-4 text-[10.5px] tracking-widest uppercase font-semibold flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-1.5 mx-auto">
          <Sparkles className="h-3.5 w-3.5 text-brand-pink-vibrant animate-pulse-slow" />
          <span>✨ Free Delivery All Over Pakistan — Handmade With Love ✨</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[10px] opacity-90 absolute right-4">
          <span className="flex items-center gap-1 text-brand-purple-vibrant"><MapPin className="h-3 w-3" /> Pakistan</span>
          <span className="flex items-center gap-1 text-brand-purple-vibrant"><Phone className="h-3 w-3" /> 0309-5590059</span>
        </div>
      </div>

      {/* Main Glassmorphism Header */}
      <nav className="glass-navbar py-3 md:py-4 px-4 md:px-8 flex items-center justify-between transition-all">
        {/* Brand Name / Logo */}
        <div 
          onClick={() => handleNavItemClick('hero-section')} 
          className="flex items-center gap-2 cursor-pointer group"
          id="brand-logo"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-brand-pink-deep to-brand-lavender-dark opacity-30 blur-xs group-hover:opacity-70 transition duration-300"></div>
            <span className="relative bg-brand-pink-soft p-1.5 md:p-2 rounded-full flex items-center justify-center border border-brand-pink-rose/50 shadow-inner">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-brand-pink-deep animate-pulse" />
            </span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-luxury-charcoal flex items-center gap-1">
              Luki <span className="text-brand-pink-deep">Charms</span>
            </h1>
            <p className="text-[9px] uppercase tracking-widest font-sans font-semibold text-brand-purple-deep/70">Handmade with Love</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className="text-sm font-medium text-stone-700 hover:text-brand-pink-deep tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-pink-deep after:transition-all after:duration-300 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Action Icons & Search */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Integrated Search Bar */}
          <div className={`relative hidden md:flex items-center rounded-full border bg-white transition-all duration-300 ${isSearchFocused ? 'w-64 border-brand-pink-deep shadow-xs' : 'w-48 border-brand-pink-rose/60'}`}>
            <Search className="absolute left-3 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search charms..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full focus:outline-hidden bg-transparent text-stone-800 placeholder-stone-400"
            />
            {searchQuery && (
              <button onClick={() => onSearchChange('')} className="absolute right-3 p-0.5 text-stone-400 hover:text-stone-600 rounded-full">
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onWishlistOpen}
            className="p-2 text-stone-700 hover:text-brand-pink-deep hover:bg-brand-pink-soft/40 rounded-full transition-all relative"
            title="Wishlist"
            id="wishlist-trigger"
          >
            <Heart className={`h-5 w-5 ${wishlistCount > 0 ? 'fill-brand-pink-deep text-brand-pink-deep' : ''}`} />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-pink-deep text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onCartOpen}
            className="p-2 text-stone-700 hover:text-brand-purple-deep hover:bg-brand-lavender/40 rounded-full transition-all relative"
            title="Shopping Cart"
            id="cart-trigger"
          >
            <ShoppingBag className="h-5 w-5 text-stone-800" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-purple-deep text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-800 hover:bg-brand-pink-soft/30 rounded-full transition-colors"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Live Search Bar (Visible only on mobile screen) */}
      <div className="md:hidden bg-brand-pink-light/95 border-b border-brand-pink-rose/30 px-4 py-2">
        <div className="relative flex items-center rounded-full border border-brand-pink-rose/60 bg-white/85">
          <Search className="absolute left-3 h-3.5 w-3.5 text-stone-400" />
          <input
            type="text"
            placeholder="Search our handmade collection..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-8 py-1.5 text-xs rounded-full focus:outline-hidden bg-transparent text-stone-800 placeholder-stone-400"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange('')} className="absolute right-3 p-0.5 text-stone-400 hover:text-stone-600 rounded-full">
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sliding Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs" onClick={() => setIsMobileMenuOpen(false)}></div>

          {/* Drawer Content */}
          <div className="relative ml-0 mr-auto flex h-full w-4/5 max-w-sm flex-col bg-brand-pink-light p-6 shadow-xl border-r border-brand-pink-rose/30 transition-transform duration-300 animate-slide-in">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-pink-rose/20">
              <div className="flex items-center gap-2">
                <span className="bg-brand-pink-rose p-1.5 rounded-full">
                  <Sparkles className="h-4 w-4 text-brand-pink-deep" />
                </span>
                <span className="font-serif font-bold text-lg text-luxury-charcoal">Luki Charms</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-full text-stone-500 hover:bg-stone-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavItemClick(item.id)}
                  className="text-left py-2 px-3 text-base font-semibold text-stone-800 hover:text-brand-pink-deep hover:bg-white rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-brand-pink-rose/20 text-xs text-stone-500 space-y-2">
              <p className="font-semibold text-stone-700">Luki Charms Pakistan</p>
              <p>Email: lukicharm@gmail.com</p>
              <p>WhatsApp: 0309-5590059</p>
              <p className="mt-4 text-[10px] text-brand-pink-deep font-semibold">💜 ✨ Hand-knotted, packed, and shipped with love.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
