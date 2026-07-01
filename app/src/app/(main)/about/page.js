import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import GSAPTextReveal from "@/components/GSAPTextReveal";
import GSAPBlockReveal from "@/components/GSAPBlockReveal";
import { Heart, Shield, Users, Images, Star, Award, Download } from "lucide-react";

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
      "Adv. Pandurang Uttam Shinde and Prof. Haridas Shinde formally established the Lok Sanskruti Kala Seva Sangh in Ahilyanagar (Ahmednagar), dedicating it to the conservation, development, and global promotion of national folk art and culture.",
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
          <GSAPTextReveal as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
            The Legacy
          </GSAPTextReveal>
          <span className="gold-divider-wide mx-auto mt-4" />
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-18">
          <p className="text-base sm:text-lg text-[var(--text-espresso)] font-[family-name:var(--font-body)] leading-loose text-center max-w-3xl mx-auto">
            Lok Sanskruti Kala Seva Sangh was established on{" "}
            <strong>August 15, 2022</strong>, in Ahilyanagar (Ahmednagar) by{" "}
            <strong>Adv. Pandurang Uttam Shinde</strong> and{" "}
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
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover object-top filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-[var(--accent-gold)]/30 shadow-xl group bg-[var(--parchment-dark)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60"></div>
              <Image 
                src="/images/about-us/2.jpeg" 
                alt="Lok Sanskruti Kala Seva Sangh - Performance" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover object-[center_15%] filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-[var(--accent-gold)]/30 shadow-xl group bg-[var(--parchment-dark)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60"></div>
              <Image 
                src="/images/about-us/3.jpeg" 
                alt="Lok Sanskruti Kala Seva Sangh - Heritage" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover object-top filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline Section ── */}
      <section className="bg-[var(--bg-parchment)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[var(--accent-gold)]" size={32} />
              <span className="text-[var(--primary-saffron)] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium">
                Our Journey
              </span>
            </div>
            <GSAPTextReveal as="h2" className="text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] uppercase tracking-wide">
              Key Turning Points &amp; Achievements
            </GSAPTextReveal>
            <span className="gold-divider mt-8 mb-8" />
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {timelineEvents.map((event, i) => (
                <GSAPBlockReveal key={i}>
                  <div className="pb-16 border-b border-[var(--accent-gold)]/20 mb-16 last:border-0 last:mb-0 last:pb-0">
                    <h3 className="text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--dark-brown)] mb-4">
                      {event.era}
                    </h3>
                    <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4">
                      {event.title}
                    </h4>
                    <p className="text-lg text-[var(--text-espresso)] leading-relaxed font-[family-name:var(--font-body)]">
                      {event.description}
                    </p>
                  </div>
                </GSAPBlockReveal>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ── Leadership & Inspiration ── */}
      {/* Profile 1: Inspiration */}
      <section className="bg-[var(--parchment-dark)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start text-left">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--accent-gold)] shadow-xl mb-6">
              <Image
                src="/images/about/inspiration.jpg"
                alt="वै. ह.भ.प. पुरुषोत्तम महाराज शिंदे (हातवळणकर)"
                fill
                sizes="192px"
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              वै. ह.भ.प. पुरुषोत्तम महाराज शिंदे
            </h3>
            <p className="text-xl font-[family-name:var(--font-body)] font-medium text-[var(--primary-saffron)] mt-2">
              प्रेरणास्थान (हातवळणकर)
            </p>
            <span className="gold-divider mt-4" />
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-[var(--text-espresso)] leading-loose">
              <ScrollReveal>
                <p className="mb-6 text-lg">
                  समाजभूषण विद्वान विद्यावाचस्पती परमपुज्य गुरुवर्य ह.भ.प. पुरुषोत्तम महाराज शिंदे (हातवळणकर) — हातवळण गावचे, नगर तालुका, अहमदनगर जिल्हा. त्यांचे शिक्षण इ.३ री पर्यंत झाले. सर्वजण त्यांना &quot;उत्तम&quot; म्हणून हाक मारत.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  बालपण व गोंधळी परंपरा
                </h4>
                <p className="mb-6 text-lg">
                  राम-लक्ष्मण गोंधळाचे कार्यक्रम करण्यासाठी झीलकरी गड्याची गरज भासल्यामुळे त्यांनी शाळा सोडून तुणतुणे हातात घेतले. गोंधळाच्या कार्यक्रमात संबळ वाद्य लवकरच शिकले — हे ज्ञान लक्ष्मणराव यांच्याकडून मिळाले. आवाज चांगला असल्यामुळे तिघांचा गोंधळाचा ताफा रंगात यायचा, परंतु रात्रभर कार्यक्रम करून फक्त २.५ ते ३.५ रुपये मिळत — अत्यंत गरीब परिस्थिती होती.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  आध्यात्मिक जागृती
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li>वयाच्या <strong>१६ व्या वर्षी</strong> घर सोडून पंढरीची पायी वारी केली; तिकडेच माळ घातली.</li>
                  <li>आळंदी, पंढरपूर, पैठण या वाऱ्या करत अनेक संतांच्या सानिध्यात राहिल्याने अंगी <strong>कडकडीत वैराग्य</strong> निर्माण झाले.</li>
                  <li>वयाच्या <strong>२२ व्या वर्षी चारधाम यात्रा</strong> पूर्ण केली.</li>
                  <li>हिमालयात जाऊन विद्या, अभ्यास, ध्यान, धारणा व भक्तीमार्गाचे ज्ञान घेतले.</li>
                  <li>साधारण <strong>१९७० साली</strong> वै. ह.भ.प. गुळवणी महाराज यांनी अनुग्रह देऊन गुरुमंत्र दिला; बाळेकुंद्रीकर शिष्य परंपरेत शिष्यत्व स्वीकारले.</li>
                  <li><strong>१९७२ साली</strong> हातवळण येथे तीन दिवसांचा अनुग्रह सोहळा — आई-वडिलांना अनुग्रह दिला.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  गोंधळी ते संत — जीवनपरिवर्तन
                </h4>
                <p className="mb-6 text-lg">
                  हातात तुणतुणे घेऊन दारोदार फिरणारा उत्तम आता हातात वीणा घेऊन विठ्ठल मंदिरासमोर सप्ताह करू लागला. लोक त्यांना &quot;ह.भ.प. पुरुषोत्तम महाराज हातवळणकर&quot; म्हणू लागले. शिष्यगण चरणांवर झुकू लागले. वारकरी संप्रदायाचे ज्ञान वाणीतून ओसंडू लागले.
                </p>
                <p className="mb-6 text-lg">
                  गव्हाळवर्णी, साडे पाच फूट उंची, धष्टपुष्ट मूर्ती, पांढरा फेटा, नेहरू शर्ट, धोतर, कपाळी अबीरबुक्का, गळ्यात तुळशीची माळ — हातवळण गावी आले की सर्वांना उत्तम महाराजांचे वेगळेपण जाणवायचे.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  धर्मग्रंथांचे संग्रहालय
                </h4>
                <p className="mb-6 text-lg">
                  रामायण, महाभारत, गरुडपुराण, विष्णुपुराण, एकनाथी भागवत, तुकारामांची गाथा, रामविजय, हरिविजय, शिवलीलामृत, गुरुमाहात्म्य, रेणुकापुराण, मूलस्तंभ, काऱीखंड, स्कंदपुराण, महाभारताचे अठरा पर्व, दत्तभार्गव संवाद, पंचकारांसहित, ज्ञानेश्वरी, श्रीमद्भगवद्गीता — अशा मोठमोठ्या धर्मग्रंथांचे संग्रहालय त्यांनी तयार केले. गोंधळी हा पेशा नाहीसा करून ते <strong>संत</strong> झाले.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  वारसा व कार्य
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li>गोंधळ म्हणजे काय, त्याचे मूळ स्वरूप, प्रथम गोंधळ कुणी-कधी घातला, गोंधळाला अंबाभवानी कशी येते — हे सर्व पौराणिक अध्यात्मिक ज्ञान उत्तम महाराजांकडून मिळाले.</li>
                  <li>चौक स्थापना, त्यावरील साहित्य, फुलवरा, कलश, पाच ऊस — यांचा विधिमार्ग त्यांनी समाजाला दिला.</li>
                  <li>भक्तिमार्गाचा प्रसार — चाळीसगाव, जळगाव, इंदूरी, खान्देश, भुसावळ इत्यादी ठिकाणी भरपूर शिष्य.</li>
                  <li><strong>८० माणसांचे कुटुंब</strong> वारकरी संप्रदायात न्हाऊन निघाले — फक्त उत्तम महाराजांमुळे.</li>
                  <li>वयाच्या ६८ व्या वर्षी केडगाव (ता. जि. अहमदनगर) येथे पुन्हा एकदा महाशिवरात्री निमित्त हरिनाम सप्ताहाचे कार्य सुरू ठेवले.</li>
                  <li>कधीही स्वतःच्या नावे कोणत्या मठाची स्थापना केली नाही.</li>
                  <li>वयाच्या <strong>१६ ते ७३</strong> वर्षांपर्यंत संत आचरणातून भक्तिमार्गातून समाजप्रबोधनात्मक प्रचार केला. नारदीय कीर्तनही केले. शेतीची त्यांना विशेष आवड होती.</li>
                </ul>
                <p className="mb-6 text-lg italic text-[var(--primary-saffron)]">
                  त्यांना दोन मुले (पांडुरंग व हरिदास) व एक मुलगी. पांडुरंग व हरिदास आज शास्त्रोक्त भजनाचे कार्यक्रम करतात आणि लोकसंस्कृती कला सेवा संघाचे संस्थापक आहेत.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Profile 2: Pandurang Shinde */}
      <section className="bg-[var(--bg-parchment)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start text-left">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--accent-gold)] shadow-xl mb-6">
              <Image
                src="/images/about/president.webp"
                alt="Adv. Pandurang Uttam Shinde — President, Lok Sanskruti Kala Seva Sangh"
                fill
                sizes="192px"
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              Adv. Pandurang Uttam Shinde
            </h3>
            <p className="text-xl font-[family-name:var(--font-body)] font-medium text-[var(--primary-saffron)] mt-2">
              अध्यक्ष (President)
            </p>
            <span className="gold-divider mt-4" />
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-[var(--text-espresso)] leading-loose">
              <ScrollReveal>
                <p className="mb-6 text-lg">
                  Classical singer, folk artist, and harmonium player — <strong>Sangit Visharad</strong> from Akhil Bhartiya Gandharva Mahavidyalaya. Founder of Lok Sanskruti Kala Seva Sangh, Ahmednagar, Maharashtra.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Education &amp; Credentials
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li><strong>M.COM, DTL, PASAA</strong></li>
                  <li>Sangit Visharad — Akhil Bhartiya Gandharva Mahavidyalaya</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Gondhali Heritage
                </h4>
                <p className="mb-6 text-lg">
                  <strong>Seventeenth generation descendant</strong> of Gondhali Agyandas who served in the court of Chhatrapati Shivaji Maharaj, carrying forward an unbroken family tradition of Gondhali performing arts.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Folk Music &amp; Cultural Work
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li>Establishment of <strong>Lok Sanskruti Kala Seva Sangh (2017)</strong> for the development of folk music and folk culture of Maharashtra.</li>
                  <li>Heritage of folk music programs within Maharashtra&apos;s musical experiments.</li>
                  <li>Over <strong>7 years</strong> of organizing seminars on folk music, classical music, and light classical music across various cities in Maharashtra.</li>
                  <li>Various courses started in association with <strong>Swarsandhya Kala Kendra</strong> for folk instrumental and authentic Maharashtra culture and traditional music.</li>
                  <li>Over <strong>10 years</strong> of learning, teaching, and performing Maharashtrian folk music with specialization in traditional <strong>Jagran Gondhal</strong> and folk music.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Swarsandhya Sangeet Niketan (Est. 2014)
                </h4>
                <p className="mb-6 text-lg">
                  Establishment of a <strong>gurukul</strong> based on classical music, folk instruments, and folk music — providing structured education in traditional performing arts.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  National Festivals &amp; Performances
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li><strong>Goa</strong> — Serendipity Art Festival</li>
                  <li><strong>West Bengal</strong> — The Root Music Festival</li>
                  <li>Performances across Maharashtra and beyond</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Awards &amp; Recognition
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li><strong>Lions Club Award</strong> — Ahmednagar, Maharashtra</li>
                  <li><strong>Idea Foundation Award</strong> — Pune, Maharashtra</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Digital Presence
                </h4>
                <p className="mb-6 text-lg">
                  Spreading authentic Maharashtrian folk music through YouTube:{" "}
                  <a href="https://www.youtube.com/@pandurangshinde-swarsandhya" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-saffron)] hover:underline font-semibold">
                    @pandurangshinde-swarsandhya
                  </a>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Profile 3: Haridas Shinde */}
      <section className="bg-[var(--parchment-dark)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start text-left">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--accent-gold)] shadow-xl mb-6">
              <Image
                src="/images/about/vice-president.webp"
                alt="Haridas Uttam Shinde — Vice President, Lok Sanskruti Kala Seva Sangh"
                fill
                sizes="192px"
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              Haridas Uttam Shinde
            </h3>
            <p className="text-xl font-[family-name:var(--font-body)] font-medium text-[var(--primary-saffron)] mt-2">
              उपाध्यक्ष (Vice President)
            </p>
            <span className="gold-divider mt-4" />
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-[var(--text-espresso)] leading-loose">
              <ScrollReveal>
                <p className="mb-6 text-lg">
                  <strong>M.A. Music</strong>, Folk Music Lecturer, and co-founder of Lok Sanskruti Kala Seva Sangh. A struggling young artist from the soil of Hatwalane village who has become one of Maharashtra&apos;s most recognized sambal players and folk music ambassadors.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Gondhali Heritage
                </h4>
                <p className="mb-6 text-lg">
                  <strong>Seventeenth generation descendant</strong> of Gondhali Agyandas who served in the court of Chhatrapati Shivaji Maharaj.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Film &amp; Media Career
                </h4>
                <p className="mb-4 text-lg">
                  Playback singing and traditional instrument performance in major Marathi films:
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li><em>Fateh Shikast</em></li>
                  <li><em>Pavankhind</em></li>
                  <li><em>Hambirrao</em></li>
                  <li><em>Anandi Gopal</em></li>
                  <li><em>Ek Hota Malin</em></li>
                  <li>And several more films featuring traditional instruments</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Folk Music &amp; Cultural Work
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li>Co-founded Lok Sanskruti Kala Seva Sangh for the development of folk music and folk culture of Maharashtra.</li>
                  <li>Formation of <strong>Randhumali Sambal Troupe (2017)</strong> — India&apos;s first organized folk percussion troupe.</li>
                  <li>Legacy of more than <strong>2,500 folk music programs</strong>.</li>
                  <li>Conducted more than a <strong>thousand experiments on Maharashtra Folk Music</strong>.</li>
                  <li>Specialization in folk music in <strong>Sant Vangmay</strong> (literature of saints).</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Sambal Mastery &amp; Collaborations
                </h4>
                <p className="mb-4 text-lg">
                  Sambal, Dimdi — the traditional musical instruments are the lifeblood of folk music. Haridas has spread this art across the world:
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li>Specially invited by <strong>Ustad Zakir Hussain</strong> to play sambal in his program &quot;Abbaji Ki Barsi.&quot;</li>
                  <li>Performed sambal concerts with <strong>Taufiq Qureshi</strong>, <strong>Anish Pradhan</strong>, and <strong>Shubha Mudgal</strong>.</li>
                  <li>Invited by <strong>Symbiosis, Flame Institute, Kala Coast Institute</strong> to teach sambal art.</li>
                  <li>Many <strong>foreign youths</strong> learn the art of sambal playing from Haridas with great interest.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Education &amp; Scholarships
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li><strong>Government of India Scholarship</strong> for the study of folk art.</li>
                  <li><strong>M.A. in Classical Singing</strong> from Aurangabad University.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Awards &amp; Honours
                </h4>
                <ul className="list-disc pl-6 space-y-4 mb-6 text-lg">
                  <li><strong>Lokmanya Tilak Award</strong> — Pune</li>
                  <li><strong>Annabhau Sathe Award</strong> — Pune</li>
                  <li><strong>Swami Vivekananda Award</strong> — Pune (2012)</li>
                  <li><strong>Ananya Sanman Award</strong> — Z 24 Taas News Foundation, Mumbai (2017)</li>
                  <li><strong>Sargam Samman</strong> — Ahmednagar (2019)</li>
                  <li><strong>MATA Honor Nominations</strong> (2023)</li>
                  <li>Honored by the great musician <strong>Mr. Ashok Pataki Sir</strong> from the Zee 24 Hour Arts &amp; Entertainment Department.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h4 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4 mt-8">
                  Digital Presence
                </h4>
                <p className="mb-6 text-lg">
                  YouTube:{" "}
                  <a href="https://www.youtube.com/@haridasshindesambal8021" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-saffron)] hover:underline font-semibold">
                    @haridasshindesambal8021
                  </a>{" "}
                  &amp;{" "}
                  <a href="https://www.youtube.com/@pandurangshinde-swarsandhya" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-saffron)] hover:underline font-semibold">
                    @pandurangshinde-swarsandhya
                  </a>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--parchment-dark)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="text-center mb-10">
            <p className="text-[var(--primary-saffron)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
              Beyond Art
            </p>
            <GSAPTextReveal as="h2" className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              Social Impact
            </GSAPTextReveal>
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

          <div className="mt-12 flex justify-center w-full">
            <a 
              href="/documents/lskss-more-information.pdf" 
              download 
              className="btn-saffron px-8 py-4 inline-flex items-center gap-3 font-inter font-semibold transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <Download size={20} />
              Download More Information & Work (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}