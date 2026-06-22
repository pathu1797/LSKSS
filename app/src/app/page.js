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
        <div className="text-center mb-6">
          <div className="mx-auto max-w-[500px] sm:max-w-[600px] lg:max-w-[720px]">
            <Image
              src="/images/NEW.png"
              alt="लोकसंस्कृती कला सेवा संघ — Lok Sanskruti Kala Seva Sangh, Ahilyanagar"
              width={1564}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
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
          <p className="text-[var(--primary-saffron)] text-lg sm:text-xl font-[family-name:var(--font-heading)] mb-2">
            ( हातवळणकर )
          </p>
          <p className="text-[var(--gold-light)] text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold mb-3 tracking-wide">
            प्रेरणास्थान
          </p>
          <p className="text-[var(--accent-gold)] text-xs sm:text-sm tracking-wider uppercase font-[family-name:var(--font-body)]">
            समाजभूषण · विद्वान · विद्यावाचस्पती · परमपुज्य गुरुवर्य
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto bg-[var(--dark-brown-deep)] border border-[var(--accent-gold)]/20 rounded-sm p-8 sm:p-10 lg:p-12 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
                ह.भ.प. वै. पुरुषोत्तम महाराज शिंदे (हातवळणकर) हे गोंधळी परंपरेतून
                वारकरी संप्रदायाकडे वाटचाल करणारे संतस्वभावी, अभ्यासू आणि
                समाजप्रबोधनाची तळमळ असलेले व्यक्तिमत्त्व होते. अत्यंत प्रतिकूल आणि
                गरीब परिस्थितीत त्यांनी लहानपणीच तुणतुणे व संबळ हाती घेतले. पुढे
                संतसाहित्य, भागवत धर्म, वारकरी संप्रदाय आणि अध्यात्म यांचा सखोल
                अभ्यास करून त्यांनी आपले संपूर्ण जीवन भक्ती, ज्ञान आणि
                समाजसेवेसाठी समर्पित केले.
              </p>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
                आळंदी, पंढरपूर, पैठण तसेच चारधाम यात्रांमुळे त्यांच्या जीवनात
                वैराग्याची ज्योत प्रज्वलित झाली. वै. गुळवणी महाराज यांच्या कृपेने
                त्यांना गुरुमंत्र प्राप्त झाला आणि त्यांनी कीर्तन, भजन, सप्ताह,
                प्रवचन आणि नामस्मरणाच्या माध्यमातून भक्तिमार्गाचा व्यापक प्रसार
                केला.
              </p>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)]">
                रामायण, महाभारत, श्रीमद्भागवत, ज्ञानेश्वरी, तुकाराम गाथा,
                शिवलीलामृत, रेणुकापुराण यांसह अनेक धर्मग्रंथांचा त्यांनी सखोल
                अभ्यास केला. गोंधळ परंपरेचे पौराणिक, आध्यात्मिक आणि सांस्कृतिक
                महत्त्व समाजासमोर मांडून गोंधळी समाजाला वैचारिक दिशा देण्याचे कार्य
                त्यांनी केले.
              </p>
            </div>
            <div>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
                वयाच्या अवघ्या सोळाव्या वर्षी हाती घेतलेली भगवी पताका त्यांनी
                अखेरच्या श्वासापर्यंत अभिमानाने खांद्यावर वाहिली. वयाच्या ७३ व्या
                वर्षापर्यंत त्यांनी भक्ती, ज्ञान, संस्कार आणि समाजप्रबोधनाचा अखंड
                दीप तेवत ठेवला.
              </p>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
                त्यांच्या संस्कारांचा आणि विचारांचा वारसा पुढे नेत त्यांचे सुपुत्र
                ॲड. पांडुरंग शिंदे (संगीत अलंकार) आणि प्रा. हरिदास शिंदे (एम.ए.
                संगीत) यांनी लोककला, लोकसंस्कृती आणि भक्ती परंपरेच्या
                संवर्धनासाठी उल्लेखनीय कार्य केले आहे.
              </p>
              <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)]">
                लोककला, लोकसंस्कृती, वारकरी परंपरा आणि समाजप्रबोधनाचा अमूल्य वारसा
                जपणाऱ्या ह.भ.प. वै. पुरुषोत्तम महाराज शिंदे (हातवळणकर), तसेच
                त्यांच्या कार्याचा दीप पुढे नेणारे ॲड. पांडुरंग शिंदे आणि प्रा.
                हरिदास शिंदे यांना विनम्र अभिवादन व मानाचा मुजरा. 🙏🚩🌹
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--accent-gold)]/20">
            <h3 className="text-[var(--accent-gold)] text-lg sm:text-xl font-[family-name:var(--font-heading)] font-bold mb-4">
              लोकसंस्कृती कला सेवा संघ
            </h3>
            <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
              लोककला आणि लोकसंस्कृतीच्या जतन व संवर्धनासाठी ॲड. पांडुरंग शिंदे
              (संगीत अलंकार) आणि प्रा. हरिदास शिंदे (एम.ए. संगीत) यांनी
              &quot;लोकसंस्कृती कला सेवा संघ&quot; या संस्थेची स्थापना केली. या
              संस्थेच्या माध्यमातून असंख्य विद्यार्थ्यांना लोककला, लोकसंगीत,
              पारंपरिक वाद्ये, गोंधळ, भजन, कीर्तन आणि सांस्कृतिक परंपरांचे
              प्रशिक्षण दिले जात आहे.
            </p>
            <p className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] mb-5">
              संस्थेच्या कार्यामुळे महाराष्ट्रातील लोकसंस्कृतीला नवे व्यासपीठ
              मिळाले असून या उल्लेखनीय कार्याचा गौरव अमेरिकेतील न्यूयॉर्क येथेही
              करण्यात आला आहे.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[var(--accent-gold)]/20">
            <h3 className="text-[var(--accent-gold)] text-lg sm:text-xl font-[family-name:var(--font-heading)] font-bold mb-4">
              लोकसंगीत क्षेत्रातील योगदान
            </h3>
            <ul className="space-y-3">
              <li className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] flex items-start gap-2">
                <span className="text-[var(--primary-saffron)] mt-1 flex-shrink-0">◆</span>
                <span>सन २०१७ मध्ये &quot;रणधुमाळी संबळ पथक&quot; ची स्थापना.</span>
              </li>
              <li className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] flex items-start gap-2">
                <span className="text-[var(--primary-saffron)] mt-1 flex-shrink-0">◆</span>
                <span>महाराष्ट्रभर २५०० हून अधिक लोकसंगीत व लोकसंस्कृतीविषयक कार्यक्रमांचे यशस्वी सादरीकरण.</span>
              </li>
              <li className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] flex items-start gap-2">
                <span className="text-[var(--primary-saffron)] mt-1 flex-shrink-0">◆</span>
                <span>पारंपरिक लोककला आणि लोकवाद्यांच्या संवर्धनासाठी सातत्यपूर्ण कार्य.</span>
              </li>
              <li className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] flex items-start gap-2">
                <span className="text-[var(--primary-saffron)] mt-1 flex-shrink-0">◆</span>
                <span>नव्या पिढीला लोकसंगीत आणि सांस्कृतिक वारशाचे प्रशिक्षण व मार्गदर्शन.</span>
              </li>
              <li className="text-[var(--gold-light)] text-sm sm:text-base leading-loose opacity-90 font-[family-name:var(--font-body)] flex items-start gap-2">
                <span className="text-[var(--primary-saffron)] mt-1 flex-shrink-0">◆</span>
                <span>महाराष्ट्राची लोकपरंपरा राष्ट्रीय आणि आंतरराष्ट्रीय स्तरावर पोहोचविण्याचे महत्त्वपूर्ण योगदान.</span>
              </li>
            </ul>
          </div>
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