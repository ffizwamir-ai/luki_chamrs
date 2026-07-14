import { useState } from 'react';
import { X, Sparkles, Star, ShoppingCart, Heart, Shield, Check, Info } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onWishlistToggle: () => void;
  onAddToCart: (product: Product, size: string, isBuyNow?: boolean, giftMessage?: string) => void;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onWishlistToggle,
  onAddToCart,
}: QuickViewModalProps) {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState('M'); // Default is Medium
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');

  const formatPKR = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  const sizes = [
    { code: 'S', label: 'S (15cm) - Petite' },
    { code: 'M', label: 'M (16cm) - Standard' },
    { code: 'L', label: 'L (17cm) - Loose' },
    { code: 'Custom', label: 'Custom Wrist Size' },
  ];

  const handleAdd = (isBuyNow: boolean) => {
    onAddToCart(
      product, 
      selectedSize, 
      isBuyNow, 
      isGift ? giftMessage : undefined
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl border border-brand-pink-rose/30 shadow-2xl w-full max-w-3xl overflow-hidden animate-scale-in z-10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button top-right */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-stone-100 text-stone-500 hover:text-stone-700 transition shadow-xs"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Side: Product Image (50% width on md+) */}
        <div className="w-full md:w-1/2 relative bg-stone-50 border-b md:border-b-0 md:border-r border-brand-pink-rose/20 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover aspect-square md:aspect-auto md:h-[500px]"
            referrerPolicy="no-referrer"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-brand-pink-deep text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="h-2.5 w-2.5" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Side: Product Customizations & Story */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[500px] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Category / Material Tag */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-pink-deep bg-brand-pink-soft px-2.5 py-0.5 rounded-sm">
                100% Hand-Knotted
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                <Star className="h-3.5 w-3.5 fill-amber-400" />
                <span>{product.rating} ({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Title & Price */}
            <div>
              <h2 className="text-2xl font-serif font-black text-stone-800 tracking-wide">{product.name}</h2>
              <div className="flex items-baseline gap-2.5 mt-2">
                <span className="text-2xl font-black text-brand-purple-deep">{formatPKR(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through font-medium">{formatPKR(product.originalPrice)}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">Craftsman's Story</p>
              <p className="text-xs text-stone-600 font-sans leading-relaxed font-medium">
                {product.longDescription}
              </p>
            </div>

            {/* Materials Badge Array */}
            <div className="space-y-1.5">
              <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">Materials Used</p>
              <div className="flex flex-wrap gap-1.5">
                {product.materials.map((m, i) => (
                  <span key={i} className="text-[10px] bg-stone-50 border border-stone-200 text-stone-600 font-semibold px-2 py-0.5 rounded-sm">
                    ✨ {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizing Picker */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-400 uppercase tracking-widest font-bold">Select Wrist Fit</span>
                <span className="text-brand-pink-deep font-semibold">Sizing Guide</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSelectedSize(s.code)}
                    className={`p-2.5 text-xs rounded-xl border text-left flex items-center justify-between font-semibold transition ${selectedSize === s.code ? 'border-brand-pink-deep bg-brand-pink-soft/10 text-brand-pink-deep font-bold' : 'border-stone-200 bg-white hover:bg-stone-50/50 text-stone-700'}`}
                  >
                    <span>{s.label}</span>
                    {selectedSize === s.code && <Check className="h-3.5 w-3.5 text-brand-pink-deep" />}
                  </button>
                ))}
              </div>

              {selectedSize === 'Custom' && (
                <div className="text-[10px] bg-yellow-50/60 border border-yellow-200 text-stone-600 p-2.5 rounded-lg flex items-start gap-1.5">
                  <Info className="h-3.5 w-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p>
                    Please specify your exact wrist size (e.g. 15.5cm) in the <strong>Order Note</strong> during checkout, or text us on WhatsApp with your Order ID!
                  </p>
                </div>
              )}
            </div>

            {/* Free Gift wrap toggle */}
            <div className="p-3 bg-brand-pink-light/40 border border-brand-pink-rose/15 rounded-xl space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isGift}
                  onChange={(e) => setIsGift(e.target.checked)}
                  className="rounded-sm border-brand-pink-rose text-brand-pink-deep focus:ring-brand-pink-deep/30 h-3.5 w-3.5"
                />
                <span>🎁 Include Free Premium Gift Wrapping & Handwritten Card</span>
              </label>
              
              {isGift && (
                <textarea
                  placeholder="Enter custom gift card text here..."
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  className="w-full text-xs bg-white border border-brand-pink-rose/30 rounded-lg p-2 focus:outline-hidden focus:border-brand-pink-deep text-stone-700"
                  rows={2}
                />
              )}
            </div>

          </div>

          {/* Buttons: Add/Buy & Wishlist */}
          <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
            <button
              onClick={onWishlistToggle}
              className={`p-3 rounded-xl border transition ${isWishlisted ? 'border-brand-pink-deep/40 bg-brand-pink-soft/10 text-brand-pink-deep' : 'border-stone-200 hover:border-stone-400 text-stone-500 hover:text-stone-700'}`}
              title="Add to wishlist"
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-brand-pink-deep' : ''}`} />
            </button>

            <button
              onClick={() => handleAdd(false)}
              className="flex-1 py-3.5 bg-white border border-brand-pink-rose/80 text-stone-800 hover:text-brand-pink-deep hover:border-brand-pink-deep font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Bag</span>
            </button>

            <button
              onClick={() => handleAdd(true)}
              className="flex-1 py-3.5 bg-brand-pink-deep text-white hover:bg-brand-pink-deep/90 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition shadow-md shadow-brand-pink-rose/30 cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>Instant Buy</span>
            </button>
          </div>

          {/* Secure Trust indicators */}
          <div className="flex items-center justify-center gap-6 text-[10px] text-stone-400 font-semibold pt-1">
            <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-brand-pink-deep" /> All Pakistan COD</span>
            <span>•</span>
            <span>✨ 100% Secure Checkout</span>
          </div>

        </div>

      </div>
    </div>
  );
}
