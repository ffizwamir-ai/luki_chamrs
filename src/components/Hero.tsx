import { Sparkles, ArrowRight, Gift, Truck, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onShopNowClick: () => void;
  onViewCollectionClick: () => void;
}

export default function Hero({ onShopNowClick, onViewCollectionClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-4 pb-12 md:py-20 romantic-gradient-bg">
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-pink-rose/25 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-lavender/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink-soft/80 border border-brand-pink-rose text-brand-pink-deep text-xs font-semibold tracking-wider uppercase shadow-xs animate-bounce">
              <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Aesthetic Jewelry Collection</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-luxury-charcoal leading-[1.1]">
                Luki Charms - <br className="hidden md:inline" />
                <span className="luxury-text-gradient font-black">Handmade With Love 💜✨</span>
              </h2>
              <p className="text-base md:text-lg text-stone-600 font-sans font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Beautiful handmade bracelets that add sparkle to your everyday style. Exquisitely designed using premium glass crystals, lustrous pearls, and meaningful charms.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onShopNowClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-pink-vibrant text-white font-semibold text-sm rounded-full shadow-lg shadow-brand-pink-rose/60 hover:bg-brand-pink-deep hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                id="hero-shop-now"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onViewCollectionClick}
                className="w-full sm:w-auto px-8 py-4 bg-white/40 hover:bg-brand-pink-soft/35 text-brand-purple-vibrant font-semibold text-sm rounded-full border border-brand-lavender-deep hover:border-brand-pink-vibrant transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                id="hero-view-collection"
              >
                <span>View Collection</span>
              </button>
            </div>

            {/* Quick Benefits Row */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-6 border-t border-brand-pink-rose/20 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-xs font-bold text-stone-800 flex items-center justify-center lg:justify-start gap-1">
                  <span className="text-brand-pink-deep">✓</span> COD
                </p>
                <p className="text-[10px] text-stone-500">All Pakistan</p>
              </div>
              <div className="text-center lg:text-left border-x border-brand-pink-rose/20 px-2">
                <p className="text-xs font-bold text-stone-800 flex items-center justify-center lg:justify-start gap-1">
                  <span className="text-brand-pink-deep">✓</span> 100%
                </p>
                <p className="text-[10px] text-stone-500">Hand-Knotted</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xs font-bold text-stone-800 flex items-center justify-center lg:justify-start gap-1">
                  <span className="text-brand-pink-deep">✓</span> Rs. 150
                </p>
                <p className="text-[10px] text-stone-500">Flat Ship Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image Display with overlapping elements */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl animate-float">
              {/* Frame Background Layer */}
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-brand-pink-rose to-brand-lavender-deep opacity-40 blur-md"></div>
              
              {/* Main Product Photography */}
              <div className="relative rounded-2xl overflow-hidden border border-white/60 shadow-2xl aspect-[16/9] bg-stone-100">
                <img
                  src="/images/hero_bracelet_display_1784044348314.jpg"
                  alt="Luki Charms Premium Handmade Beaded Bracelets Display"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700"
                  referrerPolicy="no-referrer"
                  id="hero-banner-image"
                />
                
                {/* Elegant Glass Overlay */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl border border-white/40 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-serif font-extrabold text-stone-800">The Dream Sparkle Set</h3>
                    <p className="text-[10px] font-sans font-semibold text-stone-500">Pink & Lavender Crystals</p>
                  </div>
                  <div className="bg-brand-pink-deep text-white px-3 py-1 rounded-full text-xs font-bold shadow-inner">
                    Rs. 2,499 <span className="text-[9px] line-through text-brand-pink-rose font-normal">Rs. 3,200</span>
                  </div>
                </div>
              </div>

              {/* Floating luxury bubble 1 */}
              <div className="absolute -top-5 -left-5 glass-panel py-2 px-3 rounded-lg border border-white flex items-center gap-2 shadow-md animate-pulse">
                <span className="text-lg">💖</span>
                <span className="text-[10px] font-semibold text-stone-700 uppercase tracking-wider">Luki Charms Original</span>
              </div>

              {/* Floating luxury bubble 2 */}
              <div className="absolute -bottom-6 -right-3 bg-white py-2 px-4 rounded-full border border-brand-pink-rose flex items-center gap-2 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[11px] font-bold text-stone-800">Fresh Stock Available</span>
              </div>
            </div>
          </div>

        </div>

        {/* Triple Badges Row: Fast Delivery, Secure Payment, Handmade with Love */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 pt-10 border-t border-brand-pink-rose/30">
          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-brand-pink-rose/20 hover:shadow-md transition duration-300">
            <span className="bg-brand-pink-soft p-3 rounded-xl text-brand-pink-deep flex items-center justify-center">
              <Gift className="h-6 w-6 animate-pulse" />
            </span>
            <div>
              <h4 className="font-serif font-extrabold text-base text-stone-800">Handmade With Love</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Each bead is individually selected and hand-knotted with pure affection and care.</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-brand-pink-rose/20 hover:shadow-md transition duration-300">
            <span className="bg-brand-lavender p-3 rounded-xl text-brand-purple-deep flex items-center justify-center">
              <Truck className="h-6 w-6" />
            </span>
            <div>
              <h4 className="font-serif font-extrabold text-base text-stone-800">Fast Delivery (All Pakistan)</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Delivered directly to your doorstep in 2-3 working days for flat Rs. 150.</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-brand-pink-rose/20 hover:shadow-md transition duration-300">
            <span className="bg-brand-pink-soft p-3 rounded-xl text-brand-pink-deep flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h4 className="font-serif font-extrabold text-base text-stone-800">Secure Cash on Delivery</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Pay conveniently in Cash only when your handmade charms are delivered safe.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
