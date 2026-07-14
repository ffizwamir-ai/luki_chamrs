import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-soft border border-brand-pink-rose text-brand-pink-deep text-xs font-bold uppercase tracking-wider">
            <Phone className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-luxury-charcoal">
            Connect With Luki Charms 💜✨
          </h2>
          <p className="text-sm text-stone-500 font-medium leading-relaxed">
            Have a custom design in mind? Want to place a bulk order or customize a sizing? Send us a message, or talk to us directly!
          </p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-brand-pink-light/35 p-8 rounded-3xl border border-brand-pink-rose/15">
            <div className="space-y-6">
              <h3 className="font-serif font-black text-2xl text-stone-800">Our Studio Details</h3>
              <p className="text-xs text-stone-500 font-sans leading-relaxed">
                We are a customer-first brand. If you need any assistance with your order, shipping, or returns, feel free to use any of our channels below.
              </p>
              
              <div className="space-y-4 pt-4">
                {/* Email link */}
                <a 
                  href="mailto:lukicharm@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-pink-rose/10 hover:border-brand-pink-deep/30 hover:shadow-xs transition duration-300 cursor-pointer"
                >
                  <span className="p-3 bg-brand-pink-soft text-brand-pink-deep rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Email Us</p>
                    <p className="text-xs md:text-sm font-semibold text-stone-800 mt-0.5">lukicharm@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/923095590059?text=Hi%20Luki%20Charms%20I%20want%20to%20get%20in%20touch!" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-pink-rose/10 hover:border-brand-pink-deep/30 hover:shadow-xs transition duration-300 cursor-pointer"
                >
                  <span className="p-3 bg-brand-lavender text-brand-purple-deep rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">WhatsApp / Call</p>
                    <p className="text-xs md:text-sm font-semibold text-stone-800 mt-0.5">0309-5590059</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-pink-rose/10">
                  <span className="p-3 bg-brand-pink-soft text-brand-pink-deep rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Delivery Coverage</p>
                    <p className="text-xs md:text-sm font-semibold text-stone-800 mt-0.5">All Over Pakistan (COD Available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-6 border-t border-brand-pink-rose/15 text-xs text-stone-500 space-y-1">
              <p className="font-bold text-stone-700">Studio Response Hours:</p>
              <p>Monday - Sunday • 10:00 AM - 10:00 PM (PKT)</p>
              <p className="text-[10px] text-brand-pink-deep font-semibold">⚡ We reply on WhatsApp in less than 15 minutes!</p>
            </div>
          </div>

          {/* Right: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-brand-pink-rose/25 shadow-sm flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-scale-in">
                <div className="mx-auto h-16 w-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center border border-green-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-black text-2xl text-stone-800">Message Received! 💖</h3>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                    Thank you so much for connecting with Luki Charms. Our support team has received your message and will reach back to you on your email or phone number within 2 hours!
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-brand-pink-soft text-brand-pink-deep text-xs font-bold rounded-full border border-brand-pink-rose hover:bg-brand-pink-rose hover:text-white transition cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif font-black text-xl text-stone-800 border-b border-brand-pink-rose/10 pb-3">Send a Quick Note</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                    />
                  </div>

                  {/* WhatsApp/Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 03095590059"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. ayesha@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Your Message *</label>
                  <textarea
                    required
                    placeholder="Tell us what you have in mind! Custom designs, sizes, cards, etc..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full text-xs p-3.5 bg-stone-50 border border-brand-pink-rose/20 focus:border-brand-pink-deep/50 focus:bg-white rounded-xl focus:outline-hidden text-stone-800 placeholder-stone-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-brand-pink-vibrant text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-brand-pink-deep transition cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
