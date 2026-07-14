import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section id="reviews-section" className="py-16 md:py-24 bg-brand-pink-light/30 border-y border-brand-pink-rose/10 relative overflow-hidden">
      {/* Sparkly Accents */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-brand-lavender blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-brand-pink-rose/20 blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lavender border border-brand-lavender-deep text-brand-purple-deep text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3 w-3" />
            <span>Customer Love</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-luxury-charcoal">
            What Our Besties Say 💜✨
          </h2>
          <p className="text-sm text-stone-500 font-medium leading-relaxed">
            Discover real experiences from jewelry lovers who ordered their custom bracelets from Luki Charms across Pakistan.
          </p>

          {/* Average Rating Block */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-800">
              4.9/5 Average Stars
            </span>
            <span className="text-xs text-stone-400 border-l border-stone-200 pl-4">
              Based on 150+ Happy Clients
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-brand-pink-rose/20 hover:border-brand-pink-deep/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark */}
              <span className="absolute top-4 right-4 text-brand-pink-soft text-5xl font-serif select-none pointer-events-none group-hover:text-brand-pink-rose/30 transition-colors duration-300">
                <Quote className="h-8 w-8 text-brand-pink-rose/25" />
              </span>

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3.5 w-3.5 ${i < review.rating ? 'fill-amber-400' : 'text-stone-200'}`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-stone-600 font-medium font-sans leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                {/* Avatar */}
                <div className="h-9 w-9 rounded-full bg-linear-to-tr from-brand-pink-deep to-brand-lavender-dark text-white font-extrabold text-sm flex items-center justify-center shadow-inner">
                  {review.avatarInitial}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-stone-800 tracking-wide truncate flex items-center gap-1">
                    {review.name}
                    {review.verified && (
                      <CheckCircle className="h-3 w-3 text-brand-pink-deep fill-brand-pink-soft" title="Verified Purchase" />
                    )}
                  </h4>
                  <div className="flex items-center justify-between mt-0.5 text-[10px] text-stone-400">
                    <span>{review.date}</span>
                    <span className="font-semibold text-brand-purple-deep">Pakistan</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Brand Pledge Trust Banner */}
        <div className="mt-16 bg-white/70 border border-brand-pink-rose/20 rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto glass-panel">
          <h3 className="font-serif font-bold text-lg text-stone-800">100% Satisfaction or Free Exchange!</h3>
          <p className="text-xs text-stone-500 mt-2 max-w-xl mx-auto leading-relaxed">
            At Luki Charms, we take immense pride in our quality. If your bracelet doesn't fit perfectly or has any damage during shipping, we'll replace it completely free of charge! Just WhatsApp us.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-[11px] font-sans font-bold text-brand-purple-deep">
            <span>✨ No Tarnish Crystals</span>
            <span>✨ Lifetime Knott-Tight Guarantee</span>
            <span>✨ 24/7 Friendly Bestie Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
