import { useState, FormEvent } from 'react';
import { X, Sparkles, CheckCircle2, ShoppingBag, Truck, MessageSquare, MapPin } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalAmount: number;
  onOrderSuccess: (orderDetails: OrderDetails) => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
  onOrderSuccess,
}: CheckoutModalProps) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<1 | 2>(1); // 1: Shipping Form, 2: Success

  const formatPKR = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  const generateOrderId = () => {
    const chars = '0123456789';
    let rand = '';
    for (let i = 0; i < 5; i++) {
      rand += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `LC-2026-${rand}`;
  };

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address || !city) return;

    setIsProcessing(true);

    // Simulate database placement
    setTimeout(() => {
      const orderId = generateOrderId();
      const orderDetails: OrderDetails = {
        name,
        phone,
        address: `${address}, ${city}`,
        email: email || undefined,
        note: note || undefined,
        items: cartItems,
        totalAmount,
        orderId,
        date: new Date().toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };

      setIsProcessing(false);
      setStep(2);
      onOrderSuccess(orderDetails);
    }, 2000);
  };

  // Generate pre-filled message for WhatsApp click-to-confirm
  const getWhatsAppLink = (order: OrderDetails | null) => {
    if (!order) return '';
    
    let text = `🌸 *Luki Charms Order Confirmation* 🌸\n\n`;
    text += `*Order ID:* ${order.orderId}\n`;
    text += `*Customer:* ${order.name}\n`;
    text += `*Phone:* ${order.phone}\n`;
    text += `*Address:* ${order.address}\n\n`;
    text += `*Items Ordered:*\n`;
    
    order.items.forEach((item) => {
      text += `- ${item.product.name} (Qty: ${item.quantity}, Size: ${item.selectedSize})${item.giftMessage ? ` [Gift Message: "${item.giftMessage}"]` : ''}\n`;
    });
    
    text += `\n*Total Amount:* ${formatPKR(order.totalAmount)} (COD)\n\n`;
    text += `Please verify and ship my handmade charms! Thank you! 💜✨`;

    return `https://wa.me/923095590059?text=${encodeURIComponent(text)}`;
  };

  // Keep a local copy of order details for receipt display
  const [createdOrder, setCreatedOrder] = useState<OrderDetails | null>(null);

  const innerOnOrderSuccess = (order: OrderDetails) => {
    setCreatedOrder(order);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs" onClick={step === 1 ? onClose : undefined}></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl border border-brand-pink-rose/30 shadow-2xl w-full max-w-xl overflow-hidden animate-scale-in z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-pink-rose/10 bg-brand-pink-light/40 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-brand-pink-soft rounded-full text-brand-pink-deep">
              <ShoppingBag className="h-4 w-4" />
            </span>
            <h2 className="text-lg font-serif font-black text-stone-800">
              {step === 1 ? 'Complete Shipping Details' : 'Order Placed Successfully!'}
            </h2>
          </div>
          {step === 1 && (
            <button onClick={onClose} className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 ? (
            <form onSubmit={(e) => {
              // Intercept order details locally to display on receipt, then bubble up
              handlePlaceOrder(e);
            }} className="space-y-6">
              
              {/* Order Summary banner */}
              <div className="p-4 bg-brand-lavender/35 border border-brand-pink-rose/15 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-stone-500">Checkout Subtotal</p>
                  <p className="text-lg font-serif font-extrabold text-brand-purple-deep">
                    {formatPKR(totalAmount)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-stone-400 font-sans">Payment Method</p>
                  <p className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md uppercase tracking-wider mt-0.5">
                    Cash On Delivery
                  </p>
                </div>
              </div>

              {/* Input Grid */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-1.5 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-brand-pink-deep" />
                  <span>Delivery Address Details</span>
                </h3>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ayesha Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 03095590059"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                    title="Please enter a valid Pakistani phone number"
                  />
                  <p className="text-[9px] text-stone-400 font-medium">Used strictly for delivery confirmation and shipping riders.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Address */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-500 uppercase">Home Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. House 45, Street 2, DHA Phase 5"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-500 uppercase">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lahore, Karachi, Islamabad"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. ayesha@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                  />
                </div>

                {/* Custom Sizing Note */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase">Special Note (Custom size, custom text, etc.)</label>
                  <textarea
                    placeholder="Enter any custom requests here, like wrist sizes in cm or custom gift messages..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={2}
                    className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800 placeholder-stone-400"
                  />
                </div>
              </div>

              {/* Placement Action Button */}
              <button
                type="submit"
                onClick={() => {
                  // Captured order detail hooks will trigger on callback
                  const tempOrder: OrderDetails = {
                    name,
                    phone,
                    address: `${address}, ${city}`,
                    email: email || undefined,
                    note: note || undefined,
                    items: cartItems,
                    totalAmount,
                    orderId: generateOrderId(),
                    date: new Date().toLocaleDateString('en-PK', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }),
                  };
                  innerOnOrderSuccess(tempOrder);
                }}
                disabled={isProcessing}
                className="w-full py-4 bg-brand-pink-deep text-white font-bold text-sm rounded-full shadow-md shadow-brand-pink-rose/40 hover:bg-brand-pink-deep/95 transition flex items-center justify-center gap-2 cursor-pointer"
                id="place-order-submit-btn"
              >
                {isProcessing ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Truck className="h-4 w-4 animate-bounce" />
                    <span>Confirm Order (Rs. {totalAmount.toLocaleString()} COD)</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success Receipt Step */
            <div className="text-center py-6 space-y-6 animate-scale-in">
              <div className="mx-auto h-20 w-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center border border-green-200 shadow-md">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif font-black text-2xl text-stone-800">Order Confirmed! 💜✨</h3>
                <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                  Congratulations! Your handmade Luki Charms order has been received. Your Order ID is <strong className="text-stone-800 bg-brand-pink-soft px-2 py-0.5 rounded-sm">{createdOrder?.orderId}</strong>.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-brand-pink-light/40 border border-brand-pink-rose/15 rounded-3xl p-5 text-left text-xs space-y-3 max-w-md mx-auto">
                <p className="font-bold text-stone-700 uppercase tracking-wider text-[10px] border-b border-brand-pink-rose/10 pb-1.5">
                  Order Summary
                </p>
                <div className="divide-y divide-brand-pink-rose/5">
                  {createdOrder?.items.map((item, idx) => (
                    <div key={idx} className="py-2 first:pt-0 last:pb-0 flex justify-between items-center text-stone-600">
                      <span>{item.product.name} (Qty: {item.quantity}, Size: {item.selectedSize})</span>
                      <span className="font-bold text-stone-800">{formatPKR(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brand-pink-rose/10 pt-2 flex justify-between text-sm font-bold text-stone-800">
                  <span>Grand Total (COD)</span>
                  <span className="text-brand-purple-deep">{formatPKR(createdOrder?.totalAmount || 0)}</span>
                </div>
              </div>

              {/* Crucial: Quick Confirmation via WhatsApp */}
              <div className="p-5 bg-brand-pink-soft/30 border border-brand-pink-rose/25 rounded-2xl max-w-md mx-auto space-y-4">
                <div className="space-y-1">
                  <h4 className="font-serif font-black text-sm text-stone-800">Confirm instantly on WhatsApp!</h4>
                  <p className="text-[10px] text-stone-500 leading-relaxed font-medium">
                    Click the button below to instantly send your Order Receipt to our WhatsApp team for <strong>priority shipping validation</strong>.
                  </p>
                </div>
                
                <a
                  href={getWhatsAppLink(createdOrder)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                  id="whatsapp-confirm-receipt-btn"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Receipt to WhatsApp</span>
                </a>
              </div>

              {/* Close / Return home Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    // Reset modal steps
                    setStep(1);
                    onClose();
                  }}
                  className="px-8 py-3 bg-luxury-charcoal text-white text-xs font-bold rounded-full hover:bg-stone-800 transition cursor-pointer"
                >
                  Return to Boutique
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
