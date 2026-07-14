import { Heart, ShoppingCart, Sparkles, Star, Zap } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  isWishlisted: boolean;
  onWishlistToggle: () => void;
  onAddToCart: (product: Product, size: string, isBuyNow?: boolean) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onWishlistToggle,
  onAddToCart,
  onQuickView,
}: ProductCardProps) {
  
  // Format PKR currency
  const formatPKR = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  return (
    <div 
      className="group relative rounded-2xl overflow-hidden glass-panel border border-brand-pink-rose/35 shadow-xs hover:shadow-xl hover:border-brand-pink-deep/50 transition-all duration-300 flex flex-col h-full bg-white/70"
      id={`product-card-${product.id}`}
    >
      {/* Badges and Wishlist on top of image */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        {product.badge && (
          <span className="bg-brand-pink-deep text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5 animate-pulse" />
            {product.badge}
          </span>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onWishlistToggle();
        }}
        className="absolute top-3 right-3 z-10 p-2 rounded-full glass-panel border border-brand-pink-rose/30 hover:border-brand-pink-deep/50 text-stone-600 hover:text-brand-pink-deep transition-all duration-300"
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        id={`wishlist-btn-${product.id}`}
      >
        <Heart className={`h-4.5 w-4.5 transition-transform duration-300 ${isWishlisted ? 'fill-brand-pink-deep text-brand-pink-deep scale-110' : 'text-stone-600 hover:scale-105'}`} />
      </button>

      {/* Product Image Box */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative aspect-square overflow-hidden cursor-pointer bg-stone-50 border-b border-brand-pink-rose/20 group"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
          id={`product-image-${product.id}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <span className="bg-white/95 text-stone-800 text-[11px] font-bold tracking-wider px-4 py-2 rounded-full shadow-md backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Quick Details
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Rating and Reviews */}
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-stone-200'}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-stone-500 font-bold font-sans">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif font-black text-lg text-stone-800 tracking-wide hover:text-brand-pink-deep cursor-pointer line-clamp-1 transition-colors"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-stone-500 font-sans line-clamp-2 leading-relaxed min-h-[32px]">
            {product.description}
          </p>
        </div>

        {/* Pricing & Buttons Grid */}
        <div className="mt-4 pt-3 border-t border-stone-100 space-y-4">
          {/* Pricing */}
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-brand-purple-deep">
              {formatPKR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through font-medium">
                {formatPKR(product.originalPrice)}
              </span>
            )}
            <span className="ml-auto text-[9px] bg-green-50 text-green-600 font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
              COD Available
            </span>
          </div>

          {/* Two Buttons: Add to Cart and Buy Now */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onAddToCart(product, 'M', false)}
              className="px-3 py-2.5 rounded-lg border border-brand-pink-rose/80 text-stone-700 hover:text-brand-pink-deep hover:border-brand-pink-deep hover:bg-brand-pink-soft/15 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
              id={`add-to-cart-${product.id}`}
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => onAddToCart(product, 'M', true)}
              className="px-3 py-2.5 rounded-lg bg-brand-pink-vibrant text-white text-xs font-bold hover:bg-brand-pink-deep shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
              id={`buy-now-${product.id}`}
            >
              <Zap className="h-3.5 w-3.5 animate-pulse" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
