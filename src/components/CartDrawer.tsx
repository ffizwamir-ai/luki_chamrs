import { X, Trash2, Plus, Minus, Gift, Sparkles, Check, Info } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQuantity: number) => void;
  onUpdateSize: (index: number, size: string) => void;
  onUpdateGiftMessage: (index: number, message: string) => void;
  onRemoveItem: (index: number) => void;
  onCheckoutClick: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onUpdateSize,
  onUpdateGiftMessage,
  onRemoveItem,
  onCheckoutClick,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const formatPKR = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= 1500;
  const deliveryCharges = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : 150);
  const total = subtotal + deliveryCharges;

  const sizes = [
    { code: 'S', label: 'S (15cm)' },
    { code: 'M', label: 'M (16cm)' },
    { code: 'L', label: 'L (17cm)' },
    { code: 'Custom', label: 'Custom' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div className="relative ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl border-l border-brand-pink-rose/30 animate-slide-left">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-pink-rose/20 bg-brand-pink-light/30">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-brand-pink-soft rounded-full">
              <Gift className="h-4 w-4 text-brand-pink-deep" />
            </span>
            <h2 className="text-lg font-serif font-black text-stone-800 tracking-wide flex items-center gap-1.5">
              Your Gift Bag
              {cartItems.length > 0 && (
                <span className="text-xs font-sans font-bold bg-brand-pink-deep text-white h-5 w-5 rounded-full flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-700 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Delivery Target Progress Bar */}
        {cartItems.length > 0 && (
          <div className="px-5 py-3 bg-brand-pink-soft/30 border-b border-brand-pink-rose/10 text-xs">
            {isFreeDelivery ? (
              <p className="text-green-600 font-bold flex items-center gap-1">
                <Check className="h-3.5 w-3.5" /> Yay! You unlocked <strong>FREE DELIVERY</strong> across Pakistan! 🚚
              </p>
            ) : (
              <div className="space-y-1.5">
                <p className="text-stone-600 font-medium">
                  Add <strong>{formatPKR(1500 - subtotal)}</strong> more to get <strong>FREE SHIPPING</strong>!
                </p>
                <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-brand-pink-deep h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((subtotal / 1500) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-brand-pink-rose/10">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="h-16 w-16 bg-brand-pink-soft/50 rounded-full flex items-center justify-center text-brand-pink-deep animate-pulse">
                <Gift className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-serif font-black text-lg text-stone-800">Your bag is empty</h3>
                <p className="text-xs text-stone-400 mt-1 max-w-xs">
                  Discover our handmade pink, purple, and aesthetic collections and fill your world with sparkling charms!
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-brand-pink-deep text-white text-xs font-bold rounded-full shadow-md hover:bg-brand-pink-deep/90 transition cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.product.id}-${index}`} className="py-4 first:pt-0 last:pb-0 space-y-3">
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="h-20 w-20 rounded-xl overflow-hidden border border-brand-pink-rose/20 flex-shrink-0 bg-stone-50">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="h-full w-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif font-bold text-sm text-stone-800 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button 
                        onClick={() => onRemoveItem(index)}
                        className="text-stone-400 hover:text-red-500 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-stone-400 line-clamp-1">{item.product.description}</p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-brand-purple-deep text-sm">
                        {formatPKR(item.product.price * item.quantity)}
                      </span>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-stone-200 rounded-full bg-stone-50/50">
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1 px-2 text-stone-500 hover:text-stone-800 disabled:opacity-40"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-bold font-sans text-stone-700 px-1 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1 px-2 text-stone-500 hover:text-stone-800"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sizing & Gifting Options Panel */}
                <div className="p-3 bg-brand-pink-light/50 rounded-xl border border-brand-pink-rose/15 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-sans font-semibold text-stone-500 flex items-center gap-1">
                      Wrist Fit:
                    </span>
                    <div className="flex gap-1">
                      {sizes.map((s) => (
                        <button
                          key={s.code}
                          onClick={() => onUpdateSize(index, s.code)}
                          className={`px-2 py-0.5 rounded-sm font-semibold text-[10px] uppercase transition-colors ${item.selectedSize === s.code ? 'bg-brand-pink-deep text-white shadow-inner' : 'bg-white border border-brand-pink-rose/30 text-stone-600 hover:bg-brand-pink-soft/10'}`}
                        >
                          {s.code}
                        </button>
                      ))}
                    </div>
                  </div>

                  {item.selectedSize === 'Custom' && (
                    <div className="text-[10px] bg-white border border-yellow-200 text-stone-600 p-2 rounded-md flex items-start gap-1.5">
                      <Info className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <p>
                        Selected custom size! Please WhatsApp us at <strong>0309-5590059</strong> with your order ID to specify your exact wrist size in cm.
                      </p>
                    </div>
                  )}

                  {/* Gift Wrap Toggle */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-stone-500 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={item.giftMessage !== undefined}
                        onChange={(e) => onUpdateGiftMessage(index, e.target.checked ? '' : undefined as any)}
                        className="rounded-sm border-brand-pink-rose/50 text-brand-pink-deep focus:ring-brand-pink-deep/30 h-3 w-3"
                      />
                      <Gift className="h-3 w-3 text-brand-pink-deep" />
                      <span>This is a gift (+ Free packaging & card)</span>
                    </label>
                    
                    {item.giftMessage !== undefined && (
                      <textarea
                        placeholder="Write your custom birthday / anniversary message here..."
                        value={item.giftMessage}
                        onChange={(e) => onUpdateGiftMessage(index, e.target.value)}
                        className="w-full text-[11px] bg-white border border-brand-pink-rose/35 focus:border-brand-pink-deep/50 rounded-lg p-2 focus:outline-hidden text-stone-700 placeholder-stone-400"
                        rows={2}
                      />
                    )}
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer with checkout details */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-brand-pink-rose/20 bg-brand-pink-light/20 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-stone-500">
                <span>Cart Subtotal</span>
                <span className="font-semibold text-stone-800">{formatPKR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-stone-500 items-center">
                <span className="flex items-center gap-1">
                  Delivery Fee
                  {!isFreeDelivery && (
                    <span className="text-[10px] text-brand-pink-deep font-bold">(Flat Rate)</span>
                  )}
                </span>
                <span className="font-semibold text-stone-800">
                  {deliveryCharges === 0 ? 'FREE' : formatPKR(deliveryCharges)}
                </span>
              </div>
              <div className="h-[1px] bg-brand-pink-rose/20 my-2"></div>
              <div className="flex justify-between text-base font-bold text-stone-800">
                <span>Total Amount (COD)</span>
                <span className="text-lg text-brand-purple-deep font-black">{formatPKR(total)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={onCheckoutClick}
                className="w-full py-4 bg-brand-pink-deep text-white font-semibold text-sm rounded-full shadow-md shadow-brand-pink-rose/40 hover:bg-brand-pink-deep/95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="checkout-trigger-btn"
              >
                <Sparkles className="h-4 w-4 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Checkout (Cash on Delivery)</span>
              </button>
              
              <p className="text-[10px] text-center text-stone-400 font-sans">
                🔐 100% Secure Shopping • Cash on Delivery Pakistan Wide
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
