import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "लोकसंस्कृती कला सेवा संघ | Welcome",
  description:
    "Tribute to Late H.B.P. Purushottam Maharaj Shinde (Hatwalankar) — the spiritual father who unified Gondhali art with the Warkari path.",
};

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-[var(--dark-brown)] flex flex-col">
      <div className="h-1 bg-[var(--accent-gold)] w-full flex-shrink-0" />

      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-5 rounded-full border-3 border-[var(--accent-gold)] bg-[var(--dark-brown-deep)] flex items-center justify-center overflow-hidden shadow-lg shadow-[var(--accent-gold)]/20">
            <Image
              src="/images/logo.jpeg"
              alt="लोकसंस्कृती कला सेवा संघ"
              width={96}
              height={96}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h2 className="text-[var(--accent-gold)] text-base sm:text-lg tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
            लोकसंस्कृती कला सेवा संघ
          </h2>
          <p className="text-[var(--gold-light)]/40 text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
            Lok Sanskruti Kala Seva Sangh, Ahilyanagar
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto text-center mb-10">
          <div className="inline-block relative mb-10">
            <div className="w-[240px] h-[300px] sm:w-[280px] sm:h-[350px] border-4 border-[var(--accent-gold)] bg-[var(--dark-brown-deep)] p-3 rounded-sm mx-auto">
              <div className="w-full h-full border border-[var(--accent-gold)]/40 overflow-hidden rounded-sm">
                <Image
                  src="/images/puroshottam-shinde.jpg"
                  alt="वै. ह.भ.प. पुरुषोत्तम महाराज शिंदे (हातवळणकर)"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="absolute -top-1.5 -left-1.5 w-7 h-7 border-t-2 border-l-2 border-[var(--primary-saffron)]" />
            <div className="absolute -top-1.5 -right-1.5 w-7 h-7 border-t-2 border-r-2 border-[var(--primary-saffron)]" />
            <div className="absolute -bottom-1.5 -left-1.5 w-7 h-7 border-b-2 border-l-2 border-[var(--primary-saffron)]" />
            <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 border-b-2 border-r-2 border-[var(--primary-saffron)]" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)] leading-tight mb-3">
            वै. ह.भ.प. पुरुषोत्तम महाराज शिंदे
          </h1>
          <p className="text-[var(--primary-saffron)] text-lg sm:text-xl font-[family-name:var(--font-heading)] mb-3">
            ( हातवळणकर )
          </p>
          <p className="text-[var(--accent-gold)] text-xs sm:text-sm tracking-wider uppercase font-[family-name:var(--font-body)]">
            समाजभूषण · विद्वान · विद्यावाचस्पती · परमपुज्य गुरुवर्य
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto bg-[var(--dark-brown-deep)] border border-[var(--accent-gold)]/20 rounded-sm p-8 sm:p-10 lg:p-12 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
                पुरुषोत्तम महाराज यांचे शिक्षण इ.३ री पर्यंत झाले. वयाच्या १६ व्या वर्षी
                त्यांनी घर सोडले व पंढरीची पायी वारी केली. आळंदी, पंढरपूर, पैठण या
                वाऱ्या करता करता अनेक संतांच्या सानिध्यात राहिल्याने त्यांचे अंगी
                वैराग्यच निर्माण झाले. चारधाम यात्रा वयाच्या २२ व्या वर्षी केली.
              </p>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)]">
                हातात तुणतुणे घेऊन दारोदार फिरणारा उत्तम आता हातात विना घेऊन विठ्ठल
                मंदिर समोर सप्ताह करू लागला. गोंधळी हा पेश्या नाहीसा करून ते संत झाले.
              </p>
            </div>
            <div>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
                त्यांनी रामायण, महाभारत, ज्ञानेश्वरी, श्रीमद्भगवत्गीता, इत्यादी
                मोठमोठे धर्मग्रंथांचे संग्रहालय तयार केले होते.
              </p>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)]">
                वर्ष १६ ते निर्वाण वर्ष वयाच्या ७३ वर्षा पर्यंत संत आचरणातून भक्ती
                मार्गातून समाज प्रभोधनात्मक प्रचार केला. त्यांना दोन मुले — पांडुरंग व
                हरिदास — असून ते शास्त्रोक्त भजनाचे कार्यक्रम करतात.
              </p>
            </div>
          </div>
          <p className="text-right text-[var(--accent-gold)] text-sm italic font-[family-name:var(--font-heading)] mt-6">
            — चरित्र पुष्प 🌸
          </p>
        </div>

        <div className="text-center mt-10 lg:mt-14">
          <Link
            href="/home"
            className="btn-saffron text-base sm:text-lg px-14 py-4 inline-flex items-center gap-3"
          >
            <span>प्रवेश करा — Enter Website</span>
            <ArrowRight size={20} />
          </Link>
          <p className="text-[var(--gold-light)]/30 text-xs mt-5 font-[family-name:var(--font-body)]">
            Est. 15th August 2022 · Ahilyanagar (Ahmednagar), Maharashtra
          </p>
        </div>
      </div>

      <div className="h-1 bg-[var(--accent-gold)] w-full flex-shrink-0" />
    </div>
  );
}