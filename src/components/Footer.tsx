import { useState, FormEvent } from 'react';
import { Mail, Sparkles, Heart, Send, CheckCircle2, Phone, MapPin, Truck } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-luxury-charcoal text-stone-300 border-t border-stone-800">
      
      {/* Newsletter Block */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-b border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-2">
            <h3 className="font-serif font-black text-xl md:text-2xl text-white flex items-center gap-2">
              Join Our Luki Charms Family <Sparkles className="h-4.5 w-4.5 text-brand-pink-rose animate-bounce" />
            </h3>
            <p className="text-xs text-stone-400 font-medium">
              Subscribe to get notified about our new releases, secret sales, and free giveaway contests across Pakistan!
            </p>
          </div>
          <div className="lg:col-span-7">
            {isSubscribed ? (
              <div className="flex items-center gap-2 bg-stone-900 border border-brand-pink-rose/20 p-4 rounded-xl text-brand-pink-rose text-xs font-bold animate-scale-in">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Thank you for subscribing! Welcome to the charm family. check your inbox soon for your 10% discount code! 🌸</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-stone-900 border border-stone-700 focus:border-brand-pink-deep/50 rounded-xl px-4 py-3.5 text-xs focus:outline-hidden text-white placeholder-stone-500"
                />
                <button
                  type="submit"
                  className="bg-brand-pink-vibrant hover:bg-brand-pink-deep text-white font-bold text-xs rounded-xl px-6 py-3.5 flex items-center justify-center gap-2 transition duration-300 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="bg-brand-pink-deep p-1.5 rounded-full text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-serif font-bold text-xl text-white">Luki Charms</span>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed font-medium">
            Discover beautifully hand-knotted, crystal-beaded bracelets. Specially designed with cute charms and love to make every single day sparkle. High quality, adjustable fits.
          </p>
          <div className="flex items-center gap-3 text-xs pt-2">
            <span className="text-[10px] font-bold text-stone-500">Find us on:</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition">Instagram</a>
            <span className="text-stone-700">•</span>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition">TikTok</a>
            <span className="text-stone-700">•</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition">Facebook</a>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">Explore Boutique</h4>
          <div className="flex flex-col gap-2.5 text-xs">
            <button onClick={() => onNavigateToSection('featured-collection')} className="text-left text-stone-400 hover:text-white transition">Featured Collection</button>
            <button onClick={() => onNavigateToSection('best-sellers')} className="text-left text-stone-400 hover:text-white transition">Our Best Sellers</button>
            <button onClick={() => onNavigateToSection('about-section')} className="text-left text-stone-400 hover:text-white transition">Behind Luki Charms</button>
            <button onClick={() => onNavigateToSection('reviews-section')} className="text-left text-stone-400 hover:text-white transition">Bestie Reviews</button>
            <button onClick={() => onNavigateToSection('faq-section')} className="text-left text-stone-400 hover:text-white transition">Frequently Asked Questions</button>
            <button onClick={() => onNavigateToSection('contact-section')} className="text-left text-stone-400 hover:text-white transition">Get Support</button>
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">Store Support</h4>
          <div className="flex flex-col gap-3.5 text-xs text-stone-400">
            <a href="mailto:lukicharm@gmail.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="h-4 w-4 text-brand-pink-deep" />
              <span>lukicharm@gmail.com</span>
            </a>
            <a href="https://wa.me/923095590059" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="h-4 w-4 text-brand-pink-deep" />
              <span>0309-5590059 (WhatsApp)</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-brand-pink-deep flex-shrink-0 mt-0.5" />
              <span>Flat Shipping • Dispatch Studio, Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <Truck className="h-4 w-4 text-brand-pink-deep" />
              <span>COD All Over Pakistan</span>
            </div>
          </div>
        </div>

        {/* SEO Keywords block (Crucial for user's SEO requirement) */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">Aesthetic Jewelry Hub</h4>
          <p className="text-[10px] text-stone-500 leading-relaxed uppercase font-semibold">
            Primary Keywords & Tags:
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded-sm">Handmade Bracelets Pakistan</span>
            <span className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded-sm">Cute Bracelets for Girls</span>
            <span className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded-sm">Aesthetic Jewelry Pakistan</span>
            <span className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded-sm">Pink Bracelets Pakistan</span>
            <span className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded-sm">Purple Bracelets Pakistan</span>
            <span className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded-sm">Handmade Gifts Pakistan</span>
            <span className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded-sm">Luki Charms</span>
          </div>
        </div>

      </div>

      {/* Small print */}
      <div className="bg-stone-950 py-6 px-4 text-center text-xs text-stone-500 border-t border-stone-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center justify-center gap-1">
            <span>© 2026 Luki Charms Pakistan. Handmade with</span>
            <Heart className="h-3 w-3 text-brand-pink-deep fill-brand-pink-deep animate-pulse" />
            <span>in Lahore. All Rights Reserved.</span>
          </p>
          <p className="text-[10px] text-stone-600">
            Secure Payment Gateway • Cash on Delivery Guaranteed • Fast Shipping Across PK
          </p>
        </div>
      </div>

    </footer>
  );
}
