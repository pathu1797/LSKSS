import Link from "next/link";
import Image from "next/image";
import { Heart, Shield, Users, Images } from "lucide-react";

export const metadata = {
  title: "About Us | लोकसंस्कृती कला सेवा संघ",
  description:
    "Discover the 17-generation legacy of the Shinde family — from Gondhali Agyandas in Shivaji Maharaj's court to today's global cultural ambassadors.",
};

const timelineEvents = [
  {
    era: "17th Century",
    title: "गोंधळी अज्ञानदास — छत्रपती शिवाजी महाराजांच्या दरबारात",
    description:
      "The legendary Shahir Gondhali Agyandas served in the court of Chhatrapati Shivaji Maharaj, establishing the Gondhali performing tradition that would endure for seventeen generations.",
    side: "left",
  },
  {
    era: "Generations 1–16",
    title: "Seventeen Unbroken Generations",
    description:
      "Through centuries of cultural upheaval, the Shinde family of Hatwalane village, Nagar Taluka, preserved the authentic Gondhali art form — passing down the sacred rituals, songs, and percussion techniques from father to son.",
    side: "right",
  },
  {
    era: "20th Century",
    title: "वै. ह.भ.प. पुरुषोत्तम महाराज शिंदे — The Transformative Father",
    description:
      "H.B.P. Purushottam Maharaj Shinde (Hatwalankar) left home at age 16 for the Pandhari pilgrimage. He performed the Chardham Yatra at 22, received anugrah from H.B.P. Gulwani Maharaj in 1970, and transformed the Gondhali tradition by uniting it with the Warkari spiritual path. He mastered Ramayan, Mahabharat, Dnyaneshwari, Bhagavad Gita, and countless dharma texts — converting the family's profession into a sacred calling. He propagated bhakti across Chalisgaon, Jalgaon, Khandesh and Bhusawal until his passing at age 73.",
    side: "left",
  },
  {
    era: "2017",
    title: "रणधुमाळी संबळ पथक — First of Its Kind",
    description:
      "Creation of India's first organized 'Randhumali Sambal Pathak' to provide employment and structured performance opportunities to folk artists across Maharashtra.",
    side: "right",
  },
  {
    era: "2020–2021",
    title: "COVID-19 Social Welfare",
    description:
      "During the pandemic, the organization organized free mask distribution programs for senior citizens and the needy, demonstrating their commitment to social service beyond art.",
    side: "left",
  },
  {
    era: "15 August 2022",
    title: "लोकसंस्कृती कला सेवा संघ — Founded on Independence Day",
    description:
      "Prof. Pandurang Uttam Shinde and Prof. Haridas Shinde formally established the Lok Sanskruti Kala Seva Sangh in Ahilyanagar (Ahmednagar), dedicating it to the conservation, development, and global promotion of national folk art and culture.",
    side: "right",
  },
  {
    era: "2024",
    title: "Harirang Concert — USA Tour",
    description:
      "The Sangh took Maharashtrian folk music to the United States, performing 'Devicha Gondhal' across New Jersey, Philadelphia, Edison, Austin, New York, and Boston. A milestone was performing at the Philadelphia Ganesh Festival and before PM Narendra Modi.",
    side: "left",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--dark-brown)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 text-center">
          <p className="text-[var(--accent-gold)] text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
            Our Story
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
            The Legacy
          </h1>
          <span className="gold-divider-wide mx-auto mt-4" />
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-18">
          <p className="text-base sm:text-lg text-[var(--text-espresso)] font-[family-name:var(--font-body)] leading-loose text-center max-w-3xl mx-auto">
            Lok Sanskruti Kala Seva Sangh was established on{" "}
            <strong>August 15, 2022</strong>, in Ahilyanagar (Ahmednagar) by{" "}
            <strong>Prof. Pandurang Uttam Shinde</strong> and{" "}
            <strong>Prof. Haridas Shinde</strong>. The founders are{" "}
            <strong>In the Gondhali Traditions</strong> the{" "}
            <strong>17th descendants</strong> of Gondhali Agyandas, the legendary
            Shahir who served in the court of{" "}
            <strong>Chhatrapati Shivaji Maharaj</strong>. Their mission: the
            conservation, development, and global promotion of national folk art
            and culture.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)] pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-[var(--accent-gold)]/30 shadow-xl group bg-[var(--parchment-dark)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60"></div>
              <Image 
                src="/images/about-us/1.jpeg" 
                alt="Lok Sanskruti Kala Seva Sangh - Founders" 
                fill 
                className="object-cover object-top filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-[var(--accent-gold)]/30 shadow-xl group bg-[var(--parchment-dark)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60"></div>
              <Image 
                src="/images/about-us/2.jpeg" 
                alt="Lok Sanskruti Kala Seva Sangh - Performance" 
                fill 
                className="object-cover object-[center_15%] filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-[var(--accent-gold)]/30 shadow-xl group bg-[var(--parchment-dark)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60"></div>
              <Image 
                src="/images/about-us/3.jpeg" 
                alt="Lok Sanskruti Kala Seva Sangh - Heritage" 
                fill 
                className="object-cover object-top filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-16 lg:pb-24">
          <div className="space-y-8 lg:space-y-0">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative lg:grid lg:grid-cols-[1fr_60px_1fr] lg:gap-0 items-start">
                
                {/* Left side */}
                <div className={`${event.side === "left" ? "block z-10 relative" : "hidden lg:block pt-6"}`}>
                  {event.side === "left" && (
                    <div className="card-institutional p-6 sm:p-8 lg:mr-4 mb-8 lg:mb-12">
                      <span className="inline-block text-[10px] font-bold text-[var(--primary-saffron)] uppercase tracking-widest font-[family-name:var(--font-body)] mb-2">
                        {event.era}
                      </span>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-3 leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-loose">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center Timeline Axis */}
                <div className="hidden lg:flex flex-col items-center z-10 relative">
                  <div className="w-4 h-4 rounded-full bg-[var(--accent-gold)] border-3 border-[var(--bg-parchment)] flex-shrink-0 mt-8" />
                  <div className="w-0.5 bg-[var(--accent-gold)]/30 flex-1 min-h-[80px]" />
                </div>

                {/* Right side */}
                <div className={`${event.side === "right" ? "block z-10 relative" : "hidden lg:block pt-6"}`}>
                  {event.side === "right" && (
                    <div className="card-institutional p-6 sm:p-8 lg:ml-4 mb-8 lg:mb-12">
                      <span className="inline-block text-[10px] font-bold text-[var(--primary-saffron)] uppercase tracking-widest font-[family-name:var(--font-body)] mb-2">
                        {event.era}
                      </span>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-3 leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-loose">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--parchment-dark)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="text-center mb-10">
            <p className="text-[var(--primary-saffron)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
              Beyond Art
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              Social Impact
            </h2>
            <span className="gold-divider mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "COVID-19 Relief",
                desc: "Organized free mask distribution programs for senior citizens and the needy during the pandemic.",
              },
              {
                icon: Users,
                title: "Randhumali Sambal Pathak",
                desc: "Created India's first organized folk percussion troupe in 2017, providing employment to folk artists.",
              },
              {
                icon: Shield,
                title: "Cultural Preservation",
                desc: "80+ family members immersed in the Warkari tradition, keeping alive a 17-generation art form.",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="card-institutional p-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-[var(--accent-gold)]/30 flex items-center justify-center">
                    <Icon size={24} className="text-[var(--primary-saffron)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-loose">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}