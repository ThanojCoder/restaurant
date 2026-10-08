"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Flame
} from "lucide-react";

export default function RestaurantHome() {
  const [activeCourse, setActiveCourse] = useState("indian");

  const menuItems = {
    indian: [
      {
        name: "Royal Awadhi Dum Biryani",
        desc: "Slow-cooked saffron basmati rice layered with spiced spring lamb, caramelised shallots, and sealed with purdah dough.",
        price: "$32",
        image: "/images/indian-biryani.jpg"
      },
      {
        name: "Old Delhi Smoked Butter Chicken",
        desc: "Tandoor-charred chicken supreme steeped in velvet San Marzano tomato makhani, churned white butter, and dried kasuri methi.",
        price: "$29",
        image: "/images/indian-butterchicken.jpg"
      },
      {
        name: "Charcoal Clay-Oven Paneer Tikka",
        desc: "Artisanal cottage cheese steaks marinated in hung yogurt, yellow chili, and crushed ajwain, served with mint-coriander chutney.",
        price: "$25",
        image: "/images/indian-paneertikka.jpg"
      },
      {
        name: "36-Hour Dal Makhani & Truffle Naan",
        desc: "Slow-simmered black urad lentils over smoldering charcoal embers, finished with organic cream and flaky garlic-truffle butter naan.",
        price: "$26",
        image: "/images/indian-dalmakhani.jpg"
      },
      {
        name: "Artisanal South Indian Ghee Podi Idli",
        desc: "Steamed fermented rice and lentil cakes drenched in golden organic A2 ghee, dusted with aromatic gun powder podi, served with slow-simmered drumstick sambar and coconut chutney.",
        price: "$16",
        image: "/images/indian-idli.jpg"
      }
    ],
    mains: [
      {
        name: "Prime Dry-Aged Ribeye",
        desc: "14oz certified Angus, bone marrow reduction, charred shallots, rosemary truffle fries.",
        price: "$56",
        image: "/images/main-ribeye.jpg"
      },
      {
        name: "Handmade Truffle Tagliatelle",
        desc: "Fresh egg pasta, wild chanterelle mushrooms, 30-month Parmigiano Reggiano, shaved Umbrian truffle.",
        price: "$34",
        image: "/images/main-tagliatelle.jpg"
      },
      {
        name: "Woodfired Neapolitan Diavola",
        desc: "San Marzano tomatoes, fior di latte, spicy Calabrian soppressata, hot honey drizzle.",
        price: "$26",
        image: "/images/main-diavola.jpg"
      }
    ],
    starters: [
      {
        name: "Pan-Seared Scallops",
        desc: "Cauliflower silk purée, crispy pancetta lardons, browned hazelnut butter.",
        price: "$24",
        image: "/images/starter-scallops.jpg"
      },
      {
        name: "Heirloom Burrata Caprese",
        desc: "Slow-roasted Campari tomatoes, 25-year aged balsamic, fresh basil emulsion.",
        price: "$19",
        image: "/images/starter-burrata.jpg"
      }
    ],
    drinks: [
      {
        name: "Smoked Bourbon Old Fashioned",
        desc: "Small-batch rye, orange bitters, smoked applewood torch, Luxardo cherry.",
        price: "$18",
        image: "/images/drink-bourbon.jpg"
      },
      {
        name: "Cardamom & Saffron Royal Spritz",
        desc: "Artisanal botanical gin, green cardamom elixir, wild saffron, organic Prosecco.",
        price: "$17",
        image: "/images/drink-spritz.jpg"
      }
    ],
    desserts: [
      {
        name: "Valrhona Molten Chocolate Fondant",
        desc: "72% dark chocolate center, Madagascar vanilla bean gelato, cocoa nib crunch.",
        price: "$16",
        image: "/images/dessert-fondant.jpg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#11100E] text-[#E8E3DF] font-sans">
      {/* Top Notice */}
      <div className="bg-[#8A4A28] text-white py-2 px-4 text-center text-xs font-medium tracking-widest uppercase">
        🍷 Michelin Selected 2024 • Royal Indian Heritage &amp; Woodfire Hearth Degustation
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#11100E]/90 backdrop-blur-md border-b border-[#282521]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-white uppercase">
              L&apos;ARTISAN
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-[#B5ABA3]">
            <a href="#menu" className="hover:text-[#D97745] transition-colors">Menu</a>
            <a href="#story" className="hover:text-[#D97745] transition-colors">Our Story</a>
            <a href="#ambiance" className="hover:text-[#D97745] transition-colors">Ambiance</a>
            <a href="#reservations" className="hover:text-[#D97745] transition-colors">Reservations</a>
          </nav>

          <a 
            href="#reservations"
            className="bg-[#D97745] hover:bg-[#C26333] text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all"
          >
            Book A Table
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#26201B] border border-[#3E342B] text-[#D97745] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5" />
              Artisanal Woodfire &amp; Royal Heritage Spices
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.15]">
              Where royal culinary heritage meets the <span className="italic font-light text-[#D97745]">warmth of the flame</span>.
            </h1>

            <p className="text-[#A49C94] text-lg max-w-xl font-normal leading-relaxed">
              Every dish is an homage to time-honored slow cooking, fragrant royal clay ovens, and hand-ground spices. Unwind in our candlelit dining room or beside our glowing tandoor hearth.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a 
                href="#reservations"
                className="bg-[#D97745] hover:bg-[#C26333] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#D97745]/20 flex items-center gap-2"
              >
                Reserve Your Table
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#menu"
                className="border border-[#38322B] hover:border-[#D97745] hover:text-[#D97745] text-[#D4CDC7] px-7 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all bg-[#1A1815]"
              >
                View Seasonal Menu
              </a>
            </div>

            {/* Accolades */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#29241E] max-w-lg">
              <div>
                <p className="font-serif text-2xl font-bold text-white">4.9 ★</p>
                <p className="text-[11px] text-[#8C8379] uppercase tracking-wider mt-1">1,200+ Reviews</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#D97745]">100%</p>
                <p className="text-[11px] text-[#8C8379] uppercase tracking-wider mt-1">Organic Stone-Ground Spices</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">36 hrs</p>
                <p className="text-[11px] text-[#8C8379] uppercase tracking-wider mt-1">Slow Dum Cooking</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Dining Image */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#2F2922] h-[480px] sm:h-[540px]">
              <Image 
                src="/images/hero.jpg" 
                alt="L'Artisan Intimate Dining Room" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="bg-[#D97745] text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">
                  Candlelit Ambiance
                </span>
                <p className="font-serif text-xl font-medium mt-2 text-white">
                  Intimate booths, royal tandoor &amp; open chef&apos;s tasting counter
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Showcase with Real Photography */}
      <section id="menu" className="py-20 bg-[#161412] border-y border-[#26211C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[#D97745] text-xs font-semibold tracking-widest uppercase">From Our Hearth</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-2">The Autumn Degustation</h2>
            <p className="text-xs sm:text-sm text-[#8F847A] mt-2">Crafted with seasonal produce and royal stone-ground spices delivered daily.</p>

            {/* Menu Course Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: "indian", label: "Royal Indian Fare" },
                { id: "mains", label: "Mains & Woodfire" },
                { id: "starters", label: "Small Plates" },
                { id: "drinks", label: "Cocktails & Wine" },
                { id: "desserts", label: "Desserts" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCourse(tab.id)}
                  className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                    activeCourse === tab.id
                      ? "bg-[#D97745] text-white shadow-md shadow-[#D97745]/20"
                      : "bg-[#211E1A] text-[#9E9287] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCourse as keyof typeof menuItems].map((item, idx) => (
              <motion.div 
                key={item.name}
                className="bg-[#1C1916] rounded-2xl overflow-hidden border border-[#2D2721] hover:border-[#D97745]/50 transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-[#D97745] font-serif text-base font-bold px-3 py-1 rounded-full z-10">
                    {item.price}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D97745] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#968A80] leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 bg-[#11100E] border-b border-[#26211C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#D97745] text-xs font-semibold tracking-widest uppercase">The Heritage</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                Rooted in Royal Hearth Traditions, Perfected by the Flame.
              </h2>
              <p className="text-[#A49C94] text-sm sm:text-base leading-relaxed">
                Founded with a devotion to culinary storytelling, L&apos;Artisan bridges centuries-old royal Indian dum cooking with Parisian hearth craft. Our kitchen celebrates the alchemy of slow charcoal fire, clay tandoors, and hand-roasted spices sourced directly from single-estate farms in Kerala and Kashmir.
              </p>
              <p className="text-[#A49C94] text-sm sm:text-base leading-relaxed">
                Every biryani is sealed with dough and slow-simmered in copper degs; our signature black dal cooks undisturbed for 36 hours over fragrant embers. We believe genuine hospitality begins with reverence for ingredients and unhurried preparation.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#26211C]">
                <div>
                  <h4 className="font-serif text-xl font-bold text-white">Chef Devendra Kapoor</h4>
                  <p className="text-xs text-[#D97745] mt-1 font-semibold uppercase tracking-wider">Master of Tandoor &amp; Awadhi Dum</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-white">Thanoj Sriman</h4>
                  <p className="text-xs text-[#D97745] mt-1 font-semibold uppercase tracking-wider">Executive Sommelier &amp; Co-Founder</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl border border-[#2D2721]">
                  <Image 
                    src="/images/story-chef.jpg" 
                    alt="Chef cooking over fire" 
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl border border-[#2D2721] mt-8">
                  <Image 
                    src="/images/story-spices.jpg" 
                    alt="Stone ground Indian spices" 
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D97745] text-white p-5 rounded-full shadow-2xl text-center hidden sm:block z-20">
                <Flame className="w-8 h-8 mx-auto fill-white" />
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Est. 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section id="ambiance" className="py-24 bg-[#161412] border-b border-[#26211C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D97745] text-xs font-semibold tracking-widest uppercase">Atmosphere &amp; Spaces</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-2">
              An Immersive Candlelit Dining Sanctuary
            </h2>
            <p className="text-xs sm:text-sm text-[#8F847A] mt-2">
              Step into intimate booths, private wine and spice tasting rooms, or dine beside our live charcoal tandoor theater.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "The Candlelit Hearth Room",
                tag: "Intimate Dining",
                desc: "Plush velvet booths set beneath warm timber beams with gentle acoustic jazz.",
                image: "/images/ambiance-hearth.jpg"
              },
              {
                title: "The Live Tandoor Counter",
                tag: "Chef's Theatre",
                desc: "Front-row seats overlooking the blazing clay tandoor and open copper degs.",
                image: "/images/ambiance-tandoor.jpg"
              },
              {
                title: "The Courtyard Terrace",
                tag: "Open Air",
                desc: "Sheltered garden dining enveloped by aromatic night jasmine and brass braziers.",
                image: "/images/ambiance-terrace.jpg"
              },
              {
                title: "Private Sommelier Cellar",
                tag: "VIP Events (14 Max)",
                desc: "Curated wine pairings and private family feasts in our subterranean stone cellar.",
                image: "/images/ambiance-cellar.jpg"
              }
            ].map((room, idx) => (
              <motion.div
                key={room.title}
                className="group bg-[#1C1916] rounded-2xl overflow-hidden border border-[#2D2721] hover:border-[#D97745] transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image 
                    src={room.image} 
                    alt={room.title} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#D97745] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider z-10">
                    {room.tag}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D97745] transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-xs text-[#968A80] leading-relaxed mt-2">
                      {room.desc}
                    </p>
                  </div>
                  <a 
                    href="#reservations" 
                    className="mt-4 pt-3 border-t border-[#2D2721] text-xs font-semibold uppercase tracking-wider text-[#D97745] flex items-center justify-between"
                  >
                    <span>Reserve Space</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Booking Form */}
      <section id="reservations" className="py-20 bg-[#11100E]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#1A1714] border border-[#2B251E] rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#D97745] text-xs font-semibold tracking-widest uppercase">Table Service</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mt-2">Reserve Your Experience</h2>
              <p className="text-xs sm:text-sm text-[#8F847A] mt-2">
                We accept reservations up to 30 days in advance. For parties of 6 or more, please contact our events host directly.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] font-semibold text-[#8C8176] uppercase tracking-wider mb-2">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-[#11100E] border border-[#332C24] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D97745]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#8C8176] uppercase tracking-wider mb-2">Seating Time</label>
                  <select className="w-full bg-[#11100E] border border-[#332C24] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D97745]">
                    <option>5:30 PM (Dinner)</option>
                    <option>6:30 PM (Dinner)</option>
                    <option>7:30 PM (Prime Time)</option>
                    <option>8:30 PM (Dinner)</option>
                    <option>9:30 PM (Late Supper)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#8C8176] uppercase tracking-wider mb-2">Guests</label>
                  <select className="w-full bg-[#11100E] border border-[#332C24] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D97745]">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6+ (Contact Concierge)</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-semibold text-[#8C8176] uppercase tracking-wider mb-2">Guest Name</label>
                  <input 
                    type="text" 
                    placeholder="Marcus Vance" 
                    className="w-full bg-[#11100E] border border-[#332C24] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D97745]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#8C8176] uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="marcus.vance@example.com" 
                    className="w-full bg-[#11100E] border border-[#332C24] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D97745]"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#D97745] hover:bg-[#C26333] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#D97745]/20"
              >
                Confirm Table Reservation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#26211C] py-12 px-6 text-xs text-[#7A7067] bg-[#0E0D0B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-white tracking-widest uppercase font-bold text-sm">
              L&apos;ARTISAN
            </span>
            <span className="text-[#8F847A]">• Hyderabad, India</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-right">
            <p>© 2026 L&apos;Artisan Bistro. All rights reserved.</p>
            <span className="hidden sm:inline text-[#3E342B]">|</span>
            <p className="text-[#A49C94]">
              Designed and Developed by{" "}
              <span className="text-[#D97745] font-semibold tracking-wide hover:underline cursor-pointer">
                thanojsriman
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
