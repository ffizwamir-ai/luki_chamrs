import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Heart, 
  CheckCircle2, 
  ShoppingBag, 
  X, 
  Phone, 
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import ReviewsSection from './components/ReviewsSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import QuickViewModal from './components/QuickViewModal';
import WishlistModal from './components/WishlistModal';

import { PRODUCTS, REVIEWS, FAQS } from './data';
import { Product, CartItem, OrderDetails } from './types';

export default function App() {
  // --- Cart and Wishlist Persistence ---
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('luki_cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('luki_wishlist');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('luki_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('luki_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // --- UI Visibility States ---
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // --- Dynamic Toast State ---
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'wishlist' | 'info' } | null>(null);

  const triggerToast = (message: string, type: 'success' | 'wishlist' | 'info' = 'success') => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // --- Navigation Scroll Helper ---
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- Cart Management Functions ---
  const handleAddToCart = (
    product: Product, 
    size: string = 'M', 
    isBuyNow: boolean = false,
    giftMessage?: string
  ) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.product.id === product.id && item.selectedSize === size
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      if (giftMessage !== undefined) {
        updated[existingIndex].giftMessage = giftMessage;
      }
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { product, quantity: 1, selectedSize: size, giftMessage }]);
    }

    if (isBuyNow) {
      setIsCartOpen(true);
      // Trigger checkout directly on next tick to allow DOM animations
      setTimeout(() => {
        setIsCheckoutOpen(true);
      }, 300);
      triggerToast(`Proceeding to checkout with ${product.name}! 💜`, 'success');
    } else {
      triggerToast(`${product.name} added to your Gift Bag! 🛍️`, 'success');
    }
  };

  const handleUpdateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updated = [...cartItems];
    updated[index].quantity = newQuantity;
    setCartItems(updated);
  };

  const handleUpdateSize = (index: number, newSize: string) => {
    const updated = [...cartItems];
    updated[index].selectedSize = newSize;
    setCartItems(updated);
    triggerToast(`Wrist fit updated to ${newSize}! ✨`, 'info');
  };

  const handleUpdateGiftMessage = (index: number, message: string) => {
    const updated = [...cartItems];
    updated[index].giftMessage = message;
    setCartItems(updated);
  };

  const handleRemoveItem = (index: number) => {
    const itemToRemove = cartItems[index];
    const updated = cartItems.filter((_, idx) => idx !== index);
    setCartItems(updated);
    triggerToast(`Removed ${itemToRemove.product.name} from bag`, 'info');
  };

  // --- Wishlist Management ---
  const handleWishlistToggle = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
      triggerToast(`Removed ${product.name} from wishlist`, 'info');
    } else {
      setWishlist([...wishlist, productId]);
      triggerToast(`Saved ${product.name} to wishlist! 💖`, 'wishlist');
    }
  };

  // --- Order Success Hook ---
  const handleOrderSuccess = (orderDetails: OrderDetails) => {
    // Clear cart after a successful order is placed
    setCartItems([]);
    triggerToast(`Order placed successfully! Order ID: ${orderDetails.orderId} 🎉`, 'success');
  };

  // --- Filtering & Categories ---
  const filteredProducts = PRODUCTS.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.materials.some((m) => m.toLowerCase().includes(query))
    );
  });

  const featuredProducts = filteredProducts.filter((p) => p.category === 'featured');
  const bestSellers = filteredProducts.filter((p) => p.category === 'best-seller');
  const newArrivals = filteredProducts.filter((p) => p.category === 'new-arrival');

  // Format currency for PKR
  const formatPKR = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeDelivery = cartSubtotal >= 1500;
  const deliveryCharges = cartSubtotal === 0 ? 0 : (isFreeDelivery ? 0 : 150);
  const cartTotal = cartSubtotal + deliveryCharges;

  return (
    <div className="min-h-screen text-stone-800 font-sans romantic-gradient-bg selection:bg-brand-pink-rose/50 selection:text-brand-purple-deep flex flex-col justify-between">
      
      {/* 1. Header & Navigation */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartOpen={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onWishlistOpen={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateToSection={handleScrollToSection}
      />

      {/* 2. Hero Section */}
      <Hero
        onShopNowClick={() => handleScrollToSection('featured-collection')}
        onViewCollectionClick={() => handleScrollToSection('all-products-section')}
      />

      {/* 3. Main Catalog View */}
      <main className="flex-1">

        {/* Live Search Results Header (Only displayed if user is actively searching) */}
        {searchQuery.trim() !== '' && (
          <section className="py-12 bg-brand-pink-soft/20 border-b border-brand-pink-rose/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h2 className="text-2xl font-serif font-black text-stone-800">
                    Search Results for <span className="text-brand-pink-deep">"{searchQuery}"</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-1 font-sans">
                    We found {filteredProducts.length} handmade bracelets matching your search.
                  </p>
                </div>
                {filteredProducts.length > 0 && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-xs font-bold text-stone-400 hover:text-brand-pink-deep transition uppercase tracking-wider"
                  >
                    Clear Search
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="text-4xl text-stone-300">🔍</div>
                  <h3 className="font-serif font-bold text-lg text-stone-700">No bracelets found</h3>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    We couldn't find any charms matching your search. Try searching for "crystal", "pearl", "butterfly", or view our full collection below!
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-2.5 bg-brand-pink-deep text-white text-xs font-bold rounded-full transition cursor-pointer"
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isWishlisted={wishlist.includes(product.id)}
                      onWishlistToggle={() => handleWishlistToggle(product.id)}
                      onAddToCart={(p, size, buyNow) => handleAddToCart(p, size, buyNow)}
                      onQuickView={setSelectedProduct}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Default Elegant Grid Presentation (If search is not active) */}
        {searchQuery.trim() === '' && (
          <>
            {/* FEATURED COLLECTION */}
            <section id="featured-collection" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-pink-soft border border-brand-pink-rose text-brand-pink-deep text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" />
                  <span>Curated For You</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-stone-800 leading-tight">
                  Featured Treasures 💜✨
                </h2>
                <p className="text-sm text-stone-500 font-medium">
                  Discover our highly delicate custom-plated bracelets. Perfect for birthdays, gifts, and matching sisterhood aesthetics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.includes(product.id)}
                    onWishlistToggle={() => handleWishlistToggle(product.id)}
                    onAddToCart={(p, size, buyNow) => handleAddToCart(p, size, buyNow)}
                    onQuickView={setSelectedProduct}
                  />
                ))}
              </div>
            </section>

            {/* BEST SELLERS (With a gorgeous subtle background grid) */}
            <section id="best-sellers" className="py-16 md:py-24 bg-brand-pink-light/35 border-y border-brand-pink-rose/10">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lavender border border-brand-lavender-deep text-brand-purple-deep text-xs font-bold uppercase tracking-wider">
                    👑
                    <span>Popular Picks</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-stone-800">
                    Most Sparkly Best Sellers
                  </h2>
                  <p className="text-sm text-stone-500 font-medium">
                    Loved by thousands of girls. These best-selling handmade designs fly off our shelves in record time.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {bestSellers.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isWishlisted={wishlist.includes(product.id)}
                      onWishlistToggle={() => handleWishlistToggle(product.id)}
                      onAddToCart={(p, size, buyNow) => handleAddToCart(p, size, buyNow)}
                      onQuickView={setSelectedProduct}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* NEW ARRIVALS */}
            <section id="new-arrivals" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-pink-soft border border-brand-pink-rose text-brand-pink-deep text-xs font-bold uppercase tracking-wider animate-pulse">
                  <span>✨ JUST ARRIVED ✨</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-stone-800">
                  New Dream Releases
                </h2>
                <p className="text-sm text-stone-500 font-medium">
                  Fresh out of our design workshop. Be the first to wear our latest hand-threaded butterfly and celestial charms!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {newArrivals.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.includes(product.id)}
                    onWishlistToggle={() => handleWishlistToggle(product.id)}
                    onAddToCart={(p, size, buyNow) => handleAddToCart(p, size, buyNow)}
                    onQuickView={setSelectedProduct}
                  />
                ))}
              </div>
            </section>

            {/* FULL COLLECTION ANCHOR BLOCK */}
            <section id="all-products-section" className="py-12 bg-white/40 border-t border-brand-pink-rose/10">
              <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-8">
                <div>
                  <h3 className="font-serif font-black text-xl text-stone-800">Our Complete Handmade Catalog</h3>
                  <p className="text-xs text-stone-500 mt-1 max-w-lg mx-auto">
                    Browse all six individual premium bracelets together. Mix and match to complete your dreamy wrist stack!
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PRODUCTS.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isWishlisted={wishlist.includes(product.id)}
                      onWishlistToggle={() => handleWishlistToggle(product.id)}
                      onAddToCart={(p, size, buyNow) => handleAddToCart(p, size, buyNow)}
                      onQuickView={setSelectedProduct}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* 4. Customer Reviews Section */}
        <ReviewsSection reviews={REVIEWS} />

        {/* 5. Brand Story Section */}
        <AboutSection />

        {/* 6. Accordion FAQ Section */}
        <FAQSection faqs={FAQS} />

        {/* 7. Interactive Contact Section */}
        <ContactForm />

      </main>

      {/* 8. Luxury Footer with SEO block */}
      <Footer onNavigateToSection={handleScrollToSection} />

      {/* --- FLOATING ELEMENTS --- */}

      {/* A. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-45 group flex flex-col items-end gap-2">
        {/* Floating Tooltip calling user */}
        <div className="bg-white border border-brand-pink-rose/40 px-3 py-1.5 rounded-xl shadow-md text-[10px] md:text-xs font-bold text-stone-700 max-w-xs text-right whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span>WhatsApp support online! 💜</span>
        </div>
        
        <a
          href="https://wa.me/923095590059?text=Hi%20Luki%20Charms%20I%20would%20like%20to%20order%20a%20bracelet!"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-white relative animate-pulse-slow cursor-pointer"
          id="whatsapp-floating-trigger"
          title="Connect with Luki Charms WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full border border-[#25D366] opacity-35 animate-ping" style={{ animationDuration: '2.5s' }}></span>
          <MessageSquare className="h-6 w-6" />
        </a>
      </div>

      {/* B. MICRO STATE TOASTS POPUP */}
      {toast && (
        <div 
          className="fixed bottom-6 left-6 z-50 p-4 rounded-2xl shadow-2xl bg-stone-900 text-white text-xs font-bold border flex items-center gap-3 animate-slide-up"
          style={{
            borderColor: toast.type === 'wishlist' ? 'rgba(255,117,143,0.3)' : 'rgba(255,255,255,0.1)'
          }}
        >
          {toast.type === 'wishlist' ? (
            <Heart className="h-4.5 w-4.5 fill-brand-pink-deep text-brand-pink-deep" />
          ) : toast.type === 'success' ? (
            <CheckCircle2 className="h-4.5 w-4.5 text-green-400" />
          ) : (
            <Sparkles className="h-4.5 w-4.5 text-brand-pink-rose animate-pulse" />
          )}
          <span>{toast.message}</span>
          <button 
            onClick={() => setToast(null)}
            className="p-1 hover:bg-stone-800 rounded-full text-stone-400 hover:text-white transition"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* --- DRAWERS & MODALS MOUNTING --- */}

      {/* Cart Slider Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onUpdateSize={handleUpdateSize}
        onUpdateGiftMessage={handleUpdateGiftMessage}
        onRemoveItem={handleRemoveItem}
        onCheckoutClick={() => setIsCheckoutOpen(true)}
      />

      {/* Interactive Sizing and Checkout Form Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalAmount={cartTotal}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Quick View Details Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct !== null ? wishlist.includes(selectedProduct.id) : false}
        onWishlistToggle={() => selectedProduct !== null && handleWishlistToggle(selectedProduct.id)}
        onAddToCart={handleAddToCart}
      />

      {/* Wishlist Overlay Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        products={PRODUCTS}
        onRemoveFromWishlist={handleWishlistToggle}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
