import { Heart, Sparkles, Star, Package, ThumbsUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about-section" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-pink-soft/20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Story text */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-soft border border-brand-pink-rose text-brand-pink-deep text-xs font-bold uppercase tracking-wider">
              <Heart className="h-3.5 w-3.5 fill-brand-pink-deep" />
              <span>Behind the Brand</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-luxury-charcoal leading-tight">
                About Luki Charms <br />
                <span className="text-brand-pink-deep italic">Crafting Sparkles & Memories</span>
              </h2>
              
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Luki Charms was born out of a simple passion for creating dainty, sparkling, and cute jewelry that adds joy to everyday outfits. Founded in Pakistan, our brand stands for exquisite feminine design, high-quality materials, and custom handmade artistry.
              </p>
              
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                We believe a bracelet is more than just jewelry; it's a keepsake, a reminder of self-love, or a special bond shared between best friends and family. Every bead is individually hand-threaded on durable stringing materials and finished with beautiful tarnish-resistant alloys and premium natural elements.
              </p>
            </div>

            {/* Core Values / Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <span className="bg-brand-pink-light p-2 rounded-lg text-brand-pink-deep flex items-center justify-center h-10 w-10 flex-shrink-0 border border-brand-pink-rose/20">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-800">Crystalline Sparkle</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">We use high-index refracting Austrian glass crystals that glitter gorgeous pastel spectrums.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="bg-brand-lavender p-2 rounded-lg text-brand-purple-deep flex items-center justify-center h-10 w-10 flex-shrink-0 border border-brand-pink-rose/10">
                  <Star className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-800">Freshwater Pearls</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Our pearls boast a natural deep-water lustre that doesn't fade with wear.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="bg-brand-pink-light p-2 rounded-lg text-brand-pink-deep flex items-center justify-center h-10 w-10 flex-shrink-0 border border-brand-pink-rose/20">
                  <Package className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-800">Rose-Scented Packaging</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Every parcel is boxed inside aesthetic pouches and sprayed with our signature mild rose aroma.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="bg-brand-lavender p-2 rounded-lg text-brand-purple-deep flex items-center justify-center h-10 w-10 flex-shrink-0 border border-brand-pink-rose/10">
                  <ThumbsUp className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-800">Perfect Custom Fit</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Because wrists come in all shapes, we craft tailored sizing on request. No compromises.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Elegant Graphic Overlays */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Colored Backdrop block */}
              <div className="absolute top-1/4 left-1/4 right-0 bottom-0 bg-brand-pink-soft/50 rounded-2xl -rotate-6 transform transition-transform group-hover:rotate-0"></div>
              
              {/* main image mockup or high end card */}
              <div className="absolute inset-0 bg-linear-to-tr from-brand-pink-light to-brand-lavender-light border border-brand-pink-rose/30 rounded-2xl shadow-xl p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-stone-800 font-serif font-black text-xl">
                    <span>Luki Charms Craftsmanship</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed font-sans font-medium">
                    "We do not mass produce. Every single bracelet is hand-threaded bead-by-bead on industrial-grade double elastic threading in our Lahore studio, double-tied and sealed safely to ensure it stays with you for years."
                  </p>
                </div>

                {/* Stat numbers */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-pink-rose/25">
                  <div className="text-center">
                    <p className="text-2xl font-serif font-black text-brand-pink-deep">100%</p>
                    <p className="text-[9px] uppercase tracking-wider font-semibold text-stone-400 mt-1">Hand-Knotted</p>
                  </div>
                  <div className="text-center border-x border-brand-pink-rose/20 px-2">
                    <p className="text-2xl font-serif font-black text-brand-purple-deep">1,500+</p>
                    <p className="text-[9px] uppercase tracking-wider font-semibold text-stone-400 mt-1">Shipped Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-serif font-black text-brand-pink-deep">4.9★</p>
                    <p className="text-[9px] uppercase tracking-wider font-semibold text-stone-400 mt-1">Satisfaction</p>
                  </div>
                </div>

                {/* Footer Signature */}
                <div className="flex items-center justify-between text-xs font-semibold text-brand-purple-deep mt-4">
                  <span>✨ Est. 2024 • Lahore</span>
                  <span className="font-serif italic font-bold">Luki Charms Studio</span>
                </div>
              </div>

              {/* Little absolute elements */}
              <div className="absolute top-[-15px] right-[-15px] h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200 text-amber-500 shadow-sm font-bold text-sm animate-bounce">
                👑
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
