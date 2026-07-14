import { X, Heart, ShoppingCart, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  products: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size: string, isBuyNow?: boolean) => void;
}

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onRemoveFromWishlist,
  onAddToCart,
}: WishlistModalProps) {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  const formatPKR = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs animate-fade-in" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl border border-brand-pink-rose/30 shadow-2xl w-full max-w-xl overflow-hidden animate-scale-in z-10 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-pink-rose/15 bg-brand-pink-light/45">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-brand-pink-soft rounded-full text-brand-pink-deep">
              <Heart className="h-4 w-4 fill-brand-pink-deep text-brand-pink-deep" />
            </span>
            <h2 className="text-lg font-serif font-black text-stone-800 flex items-center gap-1.5">
              Your Wishlist Charms
              {wishlistedProducts.length > 0 && (
                <span className="text-xs font-sans font-bold bg-brand-pink-deep text-white h-5 w-5 rounded-full flex items-center justify-center">
                  {wishlistedProducts.length}
                </span>
              )}
            </h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {wishlistedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
              <div className="h-14 w-14 bg-brand-pink-soft/50 rounded-full flex items-center justify-center text-brand-pink-deep animate-pulse">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-stone-800">Your wishlist is empty</h3>
                <p className="text-xs text-stone-400 mt-1 max-w-xs">
                  See something you love? Tap the heart icon on any product card to save it here for later!
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-brand-pink-deep text-white text-xs font-bold rounded-full hover:bg-brand-pink-deep/90 transition cursor-pointer"
              >
                Explore Bracelets
              </button>
            </div>
          ) : (
            <div className="divide-y divide-brand-pink-rose/10">
              {wishlistedProducts.map((product) => (
                <div key={product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center">
                  {/* Image */}
                  <div className="h-16 w-16 rounded-xl overflow-hidden border border-brand-pink-rose/20 flex-shrink-0 bg-stone-50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-stone-800 truncate">{product.name}</h4>
                    <p className="text-xs text-stone-400 truncate mt-0.5">{product.description}</p>
                    <p className="text-xs font-black text-brand-purple-deep mt-1">{formatPKR(product.price)}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="p-2 rounded-lg border border-stone-200 text-stone-400 hover:text-red-500 hover:border-red-200 transition"
                      title="Remove"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        onAddToCart(product, 'M', false);
                        onRemoveFromWishlist(product.id);
                      }}
                      className="p-2 px-3 bg-brand-pink-deep text-white text-xs font-bold rounded-lg hover:bg-brand-pink-deep/90 transition flex items-center gap-1.5"
                    >
                      <ShoppingCart className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Add to Bag</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="p-4 border-t border-brand-pink-rose/15 bg-brand-pink-light/20 flex justify-between items-center text-xs">
            <span className="text-stone-500 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-brand-pink-deep" /> Saving items saves your wrist size!
            </span>
            <button
              onClick={() => {
                // Add all to cart
                wishlistedProducts.forEach((p) => onAddToCart(p, 'M', false));
                // Clear wishlist
                wishlistIds.forEach((id) => onRemoveFromWishlist(id));
              }}
              className="text-brand-pink-deep font-bold hover:underline"
            >
              Add All to Bag
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
