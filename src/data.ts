import { Product, Review, FAQ } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pink-crystal',
    name: 'Pink Crystal Bracelet',
    price: 950,
    originalPrice: 1350,
    rating: 4.9,
    reviewsCount: 38,
    image: '/images/pink_crystal_bracelet_1784044366394.jpg',
    description: 'Add a shimmering touch of romance with sparkling rose quartz beads and brilliant clear glass crystals.',
    longDescription: 'Handcrafted with absolute love, this piece represents pure elegance. It features high-grade natural rose quartz beads alternating with high-index reflective Austrian glass crystals. Perfectly threaded on an ultra-durable elastic cord, this bracelet catches the light at every angle, providing a radiant pink glow to your wrist.',
    category: 'best-seller',
    badge: 'Best Seller',
    materials: ['Natural Rose Quartz', 'Austrian Crystals', 'Premium Elastic Cord', 'Silver Accents'],
    inStock: true,
  },
  {
    id: 'pearl-blossom',
    name: 'Pearl Blossom Bracelet',
    price: 1200,
    originalPrice: 1600,
    rating: 5.0,
    reviewsCount: 42,
    image: '/images/pearl_blossom_bracelet_1784044387361.jpg',
    description: 'Embody floral elegance with premium natural white pearls paired with exquisite pink enamel blossom charms.',
    longDescription: 'A delicate and sophisticated piece that brings the freshness of spring to your everyday wardrobe. Features selected natural freshwater-style white pearls known for their soft luster, hand-knotted and finished with detailed gold-plated pink blossom flower charms. Perfect for festive wear or premium everyday styling.',
    category: 'featured',
    badge: 'Luxury Tier',
    materials: ['Natural Luster Pearls', 'Gold-plated Alloy', 'Enamel Blossom Charms', 'Surgical Steel Spacer'],
    inStock: true,
  },
  {
    id: 'butterfly-charm',
    name: 'Butterfly Charm Bracelet',
    price: 850,
    originalPrice: 1100,
    rating: 4.8,
    reviewsCount: 29,
    image: '/images/butterfly_charm_bracelet_1784044408731.jpg',
    description: 'Let your style flutter with delicate silver butterfly charms set among glowing lavender and violet crystals.',
    longDescription: 'Let your dreams soar with this enchanting piece. The Butterfly Charm Bracelet is an aesthetic compilation of translucent, light-diffusing lavender glass beads combined with deep violet stones and highly polished silver-tone butterflies. Designed for dreamers and lovers of soft lilac and lavender pastel palettes.',
    category: 'new-arrival',
    badge: 'Trending',
    materials: ['Translucent Violet Glass', 'Deep Lilac Beads', 'Polished Silver Alloys', 'Butterfly Accents'],
    inStock: true,
  },
  {
    id: 'rose-pink',
    name: 'Rose Pink Bracelet',
    price: 1100,
    originalPrice: 1500,
    rating: 4.9,
    reviewsCount: 21,
    image: '/images/rose_pink_bracelet_1784044430141.jpg',
    description: 'A majestic alignment of deep pink gemstones, polished golden spacers, and dangling star sparkles.',
    longDescription: 'Immerse yourself in luxury with this warm, rich pink gemstone statement. Made with selected deep rose pink jade and pink agate stones, this piece is punctuated by bright, polished golden metal beads and a mini rhinestone star charm that dances with your movements. Gives an instantly opulent and feminine style upgrade.',
    category: 'featured',
    badge: 'Limited Edition',
    materials: ['Rose Pink Jade', 'Faceted Agate Beads', '18K Gold Plated Spacers', 'Rhinestone Star'],
    inStock: true,
  },
  {
    id: 'purple-dream',
    name: 'Purple Dream Bracelet',
    price: 950,
    originalPrice: 1300,
    rating: 5.0,
    reviewsCount: 31,
    image: '/images/purple_dream_bracelet_1784044449375.jpg',
    description: 'Unveil mystery and grace with deep amethyst purple crystals, light lavender glass beads, and a crescent moon charm.',
    longDescription: 'Inspired by mystical starry nights, the Purple Dream bracelet is threaded with deep amethyst quartz, glowing translucent purple opalites, and sparkling lavender crystals. It is crowned by a high-grade silver crescent moon charm embedded with micro-zirconia, radiating mystery and grace.',
    category: 'best-seller',
    badge: 'Most Gifted',
    materials: ['Amethyst Quartz', 'Purple Opalite', 'Lavender Crystals', 'Zirconia Crescent Moon'],
    inStock: true,
  },
  {
    id: 'golden-star',
    name: 'Golden Star Bracelet',
    price: 1050,
    originalPrice: 1400,
    rating: 4.7,
    reviewsCount: 18,
    image: '/images/golden_star_bracelet_1784044469179.jpg',
    description: 'Illuminate your wrist with shining golden star charms interlocked with soft, luxurious cream beads and crystalline spacers.',
    longDescription: 'A heavenly classic. Beautifully warm cream-colored ceramic beads are hand-strung next to high-grade crystalline spacer rings and a cluster of delicate, shining golden stars. This bracelet brings a golden solar warmth to your wrist and pairs incredibly well with both traditional Pakistani wear and chic Western outfits.',
    category: 'new-arrival',
    badge: 'New',
    materials: ['Cream Ceramic Beads', 'Crystalline Spacers', 'Gold Foil Star Charms', 'Elastic Threading'],
    inStock: true,
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ayesha Khan',
    rating: 5,
    text: "Ordered the Pearl Blossom bracelet and it's even prettier in person! The packaging was so aesthetic and smelled like fresh roses. The seller is super polite. Highly recommend Luki Charms! 💜✨",
    date: '2 weeks ago',
    verified: true,
    avatarInitial: 'A'
  },
  {
    id: 'rev-2',
    name: 'Zainab Malik',
    rating: 5,
    text: "Excellent quality and very responsive customer support. Delivery to Karachi took only 2 days! The lavender glass beads sparkled beautifully under the sunlight. Ordered 2 more for my besties.",
    date: '3 weeks ago',
    verified: true,
    avatarInitial: 'Z'
  },
  {
    id: 'rev-3',
    name: 'Sana Rehman',
    rating: 5,
    text: "Got matching sets of Pink Crystal and Golden Star for my sister's birthday, she absolutely loved them. Honestly, the best handmade gifts in Pakistan. The premium glassmorphism finish is superb.",
    date: '1 month ago',
    verified: true,
    avatarInitial: 'S'
  },
  {
    id: 'rev-4',
    name: 'Hania Sajid',
    rating: 5,
    text: "The butterfly charm is extremely cute and hasn't tarnished at all even after multiple wears. Very comfortable to wear, and shipping was very secure. 10/10 craftsmanship! 🥰🌸",
    date: '1 month ago',
    verified: true,
    avatarInitial: 'H'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do I measure my wrist size?',
    answer: 'We offer standard flexible sizes: S (15cm), M (16cm), and L (17cm). To measure your wrist, snugly wrap a strip of paper or measuring tape around your wrist. If you need a fully custom wrist size, simply select any size during your order and message us on WhatsApp at 03095590059 with your Order ID, and we will custom-craft it for you!'
  },
  {
    id: 'faq-2',
    question: 'What are your delivery charges and shipping times?',
    answer: 'We charge a flat Rs. 150 shipping fee across Pakistan. Delivery typically takes 2-3 working days for major metropolitan areas (Lahore, Karachi, Islamabad) and 3-5 working days for the rest of Pakistan.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer Cash on Delivery (COD)?',
    answer: 'Yes, absolutely! We offer 100% secure Cash on Delivery (COD) service all over Pakistan. You only pay the rider when your handmade Luki Charms parcel is safely delivered to your doorstep.'
  },
  {
    id: 'faq-4',
    question: 'Will the charms or beads tarnish over time?',
    answer: 'We use premium high-quality glass crystals, natural pearls, and thick alloy metal plating to ensure long-lasting wear. To keep your bracelets shining like new, we recommend keeping them away from direct contact with perfumes, hand sanitizers, and water, and storing them in the elegant pouch we provide.'
  },
  {
    id: 'faq-5',
    question: 'Can I add a custom gift message for birthdays or anniversaries?',
    answer: 'Yes! Luki Charms makes the perfect gift. When you check out in the cart drawer, you can toggle the "This is a gift" option, and write down a custom message. We will package it in a luxury pink box and include a cute, handwritten greeting card free of charge! ✨🎁'
  }
];

export const FEATURES = [
  {
    title: 'Handmade with Love',
    description: 'Each piece is individually crafted with care and premium materials by our master designers.',
    icon: 'Sparkles'
  },
  {
    title: 'All Pakistan Delivery',
    description: 'Fast, secure Cash on Delivery to your doorstep in any city of Pakistan for just Rs. 150.',
    icon: 'Truck'
  },
  {
    title: 'Custom Wrist Sizing',
    description: 'Adjustable or tailor-made fits. Just WhatsApp us your exact wrist size for a perfect fit.',
    icon: 'Ruler'
  },
  {
    title: 'Premium Gift Boxing',
    description: 'Beautiful, luxury pink-and-lavender gift-ready packaging with custom greeting notes.',
    icon: 'Gift'
  }
];
