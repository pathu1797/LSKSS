import React from "react";

export default function DonationBanner() {
  return (
    <section className="bg-[var(--dark-brown-deep)] relative overflow-hidden py-16 lg:py-20 border-t border-[var(--accent-gold)]/20 border-b">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--primary-saffron)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)] mb-6">
          🙏 लोककलेच्या संवर्धनासाठी आपला हातभार लावा! 🎭
        </h2>
        
        <p className="text-base sm:text-lg text-[var(--gold-light)]/90 font-[family-name:var(--font-body)] leading-loose max-w-3xl mx-auto mb-4">
          लोककला महोत्सव आणि लोकसंस्कृती कला सेवा संघाच्या सांस्कृतिक कार्याला आपल्या देणगीची साथ द्या.
        </p>
        
        <p className="text-sm sm:text-base text-[var(--gold-light)]/70 font-[family-name:var(--font-body)] leading-relaxed max-w-2xl mx-auto mb-8">
          🌺 आपले प्रत्येक योगदान महाराष्ट्राच्या लोककला व सांस्कृतिक वारशाच्या जतनासाठी मोलाचे आहे.<br />
          👇 देणगी देण्यासाठी खालील लिंकवर क्लिक करा.<br />
          <span className="font-semibold text-[var(--primary-saffron)] mt-4 inline-block tracking-wide">
            आपले सहकार्यच आमची प्रेरणा! 🙏
          </span>
        </p>

        <a 
          href="/downloads/LKSS-Payment-Details.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-saffron inline-flex items-center justify-center px-10 py-4 text-base sm:text-lg shadow-lg hover:shadow-[var(--primary-saffron)]/30"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}
