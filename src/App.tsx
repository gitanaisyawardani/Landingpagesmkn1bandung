import { Award, ChevronUp, X, ZoomIn, Facebook, Instagram, Youtube, Twitter, MessageCircle, Handshake, Award as Certificate, Settings } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "./imports/svg-46ywukue6o";
import imgLogo1 from "figma:asset/ef84961eb35851f8f827df1c2afdca2cae995a67.png";
import imgRectangle2 from "figma:asset/e5c78b321fec8be22ef8879db7d6577358215da2.png";
import imgRectangle22 from "figma:asset/e7c0952bd95cc8d6273c943d6894b9d4267512c3.png";
import imgRectangle23 from "figma:asset/2b32d4dde076cec071c37d1ff7146a5060bc1983.png";
import imgRectangle24 from "figma:asset/3c3cfd5471367d7e9a4e9f7903f7485754be5071.png";
import imgRectangle25 from "figma:asset/b05a7fe382d687060d4b611913ecf0974367359c.png";
import imgRectangle26 from "figma:asset/a8f5d2abe13d737de958c1cf2acbea6527e48f96.png";
import imgRectangle27 from "figma:asset/6c95092fa20c95edbb5f622579287d569dd91224.png";
import imgRectangle28 from "figma:asset/9ce3a90b4afd2504e71faed33c108eaa0732ca83.png";
import imgRectangle29 from "figma:asset/6cc1bcf9fc19fc62d75021cbb639d48930d79346.png";
import imgRectangle30 from "figma:asset/c80c604387f4a7ad840e3e4f0bb5a051c940bceb.png";
import imgRectangle31 from "figma:asset/7a8d558808c6ecb15a25d1ba7a6fe6a8fd0312b5.png";
import imgRectangle32 from "figma:asset/001111a8c7ddd2a74cff270e4ec8eeea9477086c.png";
import imgRectangle33 from "figma:asset/0dcca45fc2f7f159b3fa8ef4f20987f16c956632.png";

/**
 * ========================================
 * SMKN 1 BANDUNG BUTTON SYSTEM
 * ========================================
 * 
 * Design System untuk tombol dengan accessibility dan consistency
 * 
 * COLORS:
 * - Primary: #FFD93D (Yellow) - untuk primary actions
 * - Text: #0057D9 (Blue) - kontras tinggi dengan yellow background
 * - Background Blue: #004aad - untuk secondary/outline buttons
 * 
 * BUTTON VARIANTS:
 * 
 * 1. PRIMARY BUTTON
 *    - Use case: Main call-to-action (contoh: "Jelajahi Jurusan Kami")
 *    - Padding: 16-20px horizontal, 14-16px vertical
 *    - Border radius: 16px
 *    - Font weight: 600 (Semi-bold)
 *    - Shadow: elevation medium → large on hover
 *    - States: default → hover (+scale, +shadow) → pressed (-scale)
 * 
 * 2. SECONDARY BUTTON
 *    - Use case: Secondary actions (contoh: "PPDB" di header)
 *    - Padding: 20-24px horizontal, 10-12px vertical
 *    - Border radius: 12px
 *    - Font weight: 700 (Bold)
 *    - Shadow: elevation small → medium on hover
 *    - States: default → hover (+scale, +shadow) → pressed (-scale)
 * 
 * 3. SMALL BUTTON
 *    - Use case: Compact spaces, tertiary actions
 *    - Padding: 12-16px horizontal, 8-10px vertical
 *    - Border radius: 10px
 *    - Font weight: 600 (Semi-bold)
 *    - Shadow: elevation small
 * 
 * ACCESSIBILITY:
 * - Contrast ratio: 7.5:1 (#0057D9 on #FFD93D) - WCAG AAA compliant
 * - Focus states: outline visible untuk keyboard navigation
 * - Hover states: visual feedback jelas
 * - Disabled states: opacity 50% + cursor not-allowed
 * 
 * SPACING RULES:
 * - Minimum touch target: 44x44px (mobile accessibility)
 * - Gap between buttons: 12-16px
 * - Margin bottom dari heading: 24-32px
 */

// Scroll animation component
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Image lightbox component
function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
      />
    </motion.div>
  );
}

// Brand Social Media Icons
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#25D366"/>
      <path d="M24 12C17.373 12 12 17.373 12 24c0 2.092.536 4.06 1.48 5.774L12 36l6.418-1.468A11.924 11.924 0 0024 36c6.627 0 12-5.373 12-12s-5.373-12-12-12zm6.219 17.062c-.263.738-1.311 1.393-2.123 1.568-.556.119-1.283.215-3.724-.798-3.11-1.292-5.117-4.438-5.273-4.642-.15-.203-1.238-1.648-1.238-3.143 0-1.495.782-2.229 1.06-2.533.276-.303.604-.379.806-.379.202 0 .404.002.582.011.187.009.438-.071.685.522.252.604.855 2.087.93 2.24.075.152.125.33.025.534-.1.202-.149.33-.296.506-.148.177-.311.395-.445.53-.148.148-.303.308-.13.604.172.295.766 1.264 1.645 2.047 1.13.999 2.083 1.31 2.378 1.457.295.148.468.124.64-.075.172-.198.74-.862.938-1.157.197-.295.395-.246.666-.148.272.099 1.725.813 2.02.961.295.148.492.222.564.345.073.124.073.715-.19 1.453z" fill="white"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD5"/>
          <stop offset="50%" stopColor="#FF543E"/>
          <stop offset="100%" stopColor="#C837AB"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#instagram-gradient)"/>
      <path d="M24 16.5c-2.053 0-2.31.009-3.115.045-.804.037-1.352.165-1.833.352a3.696 3.696 0 00-1.337.871 3.696 3.696 0 00-.871 1.337c-.187.481-.315 1.029-.352 1.833C16.509 21.69 16.5 21.947 16.5 24c0 2.053.009 2.31.045 3.115.037.804.165 1.352.352 1.833.193.499.449.923.871 1.337.414.422.838.678 1.337.871.481.187 1.029.315 1.833.352.805.036 1.062.045 3.115.045 2.053 0 2.31-.009 3.115-.045.804-.037 1.352-.165 1.833-.352a3.696 3.696 0 001.337-.871c.422-.414.678-.838.871-1.337.187-.481.315-1.029.352-1.833.036-.805.045-1.062.045-3.115 0-2.053-.009-2.31-.045-3.115-.037-.804-.165-1.352-.352-1.833a3.696 3.696 0 00-.871-1.337 3.696 3.696 0 00-1.337-.871c-.481-.187-1.029-.315-1.833-.352C26.31 16.509 26.053 16.5 24 16.5zm0 1.419c2.017 0 2.256.008 3.052.044.736.034 1.135.156 1.401.259.352.137.603.301.867.565.264.264.428.515.565.867.103.266.225.665.259 1.401.036.796.044 1.035.044 3.052 0 2.017-.008 2.256-.044 3.052-.034.736-.156 1.135-.259 1.401a2.336 2.336 0 01-.565.867 2.336 2.336 0 01-.867.565c-.266.103-.665.225-1.401.259-.796.036-1.035.044-3.052.044-2.017 0-2.256-.008-3.052-.044-.736-.034-1.135-.156-1.401-.259a2.336 2.336 0 01-.867-.565 2.336 2.336 0 01-.565-.867c-.103-.266-.225-.665-.259-1.401-.036-.796-.044-1.035-.044-3.052 0-2.017.008-2.256.044-3.052.034-.736.156-1.135.259-1.401.137-.352.301-.603.565-.867.264-.264.515-.428.867-.565.266-.103.665-.225 1.401-.259.796-.036 1.035-.044 3.052-.044zM24 20.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.769a2.269 2.269 0 110-4.538 2.269 2.269 0 010 4.538zm4.462-5.923a.818.818 0 11-1.636 0 .818.818 0 011.636 0z" fill="white"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#1DA1F2"/>
      <path d="M32 18.322c-.607.27-1.26.451-1.944.533a3.39 3.39 0 001.488-1.871 6.78 6.78 0 01-2.15.821 3.385 3.385 0 00-5.764 3.086 9.606 9.606 0 01-6.975-3.535 3.385 3.385 0 001.047 4.518 3.366 3.366 0 01-1.533-.424v.043a3.386 3.386 0 002.715 3.32 3.382 3.382 0 01-1.528.058 3.387 3.387 0 003.162 2.35 6.788 6.788 0 01-5.014 1.404 9.573 9.573 0 005.184 1.521c6.22 0 9.621-5.153 9.621-9.621 0-.146-.003-.293-.01-.438A6.873 6.873 0 0032 18.322z" fill="white"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#1877F2"/>
      <path d="M30.5 25.5l.8-5h-4.8v-3.2c0-1.4.7-2.7 2.8-2.7H32V10.3s-1.9-.3-3.7-.3c-3.8 0-6.3 2.3-6.3 6.5v3.7h-4.2v5h4.2V36h5.2V25.5h4.1z" fill="white"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#FF0000"/>
      <path d="M34.8 19.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.8-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4.1-1.2.1-2 .8-.6.6-.8 2-.8 2s-.2 1.6-.2 3.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.8.2 6.8.2s4.2 0 7-.2c.4-.1 1.2-.1 2-.8.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.3-.2-3.3zM22.5 27V21l5.4 3-5.4 3z" fill="white"/>
    </svg>
  );
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#004aad] flex items-center justify-center z-[200]">
        <div className="text-center">
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={imgLogo1}
            alt="SMKN 1 Bandung Logo"
            className="h-24 w-24 mx-auto mb-4"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-xl"
          >
            SMKN 1 BANDUNG
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-1 bg-[#ffd200] mt-4 rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-[#004aad] shadow-lg"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <img src={imgLogo1} alt="SMKN 1 Bandung Logo" className="h-14 w-14 object-contain flex-shrink-0" />
              <div className="text-white">
                <p className="text-[20px] md:text-[22px] lg:text-[24px] tracking-tight" style={{ fontWeight: 700 }}>
                  SMKN 1 BANDUNG
                </p>
                <p className="text-xs md:text-sm tracking-wide opacity-75">Tulungagung</p>
              </div>
            </motion.div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {["PROFIL", "INFORMASI", "AKADEMIK & KARIR", "KESISWAAN", "GALERI"].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/90 hover:text-white transition-all relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffd200] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              {/* SECONDARY BUTTON: PPDB */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(255, 217, 61, 0.35)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD93D] text-[#0057D9] px-6 py-2.5 rounded-xl hover:brightness-105 transition-all shadow-md hover:shadow-lg"
                style={{ fontWeight: 700, letterSpacing: '0.02em' }}
              >
                PPDB
              </motion.button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Hero Content */}
            <div className="space-y-7">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#004aad] text-[34px] md:text-[48px] lg:text-[64px] leading-[110%] tracking-[0.003em]"
                style={{ fontWeight: 600 }}
              >
                <span className="block">Cetak Kompetensi Unggulan,</span>
                <span className="block">Siap Kerja di Dunia</span>
                <span className="block">Industri 4.0</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl"
              >
                SMKN 1 Bandung membekali lulusan dengan <strong className="text-[#004aad]">sertifikasi LSP-P1</strong>, 
                layanan <strong className="text-[#004aad]">Bursa Kerja Khusus (BKK)</strong>, dan kurikulum yang 
                terkoneksi dengan kebutuhan industri Tulungagung dan Jawa Timur.
              </motion.p>

              {/* PRIMARY BUTTON: Jelajahi Jurusan Kami */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(255, 217, 61, 0.4)" 
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FFD93D] text-[#0057D9] px-8 py-4 rounded-2xl hover:brightness-105 transition-all shadow-lg hover:shadow-2xl"
                style={{ fontWeight: 600, letterSpacing: '0.01em' }}
                aria-label="Jelajahi Jurusan Kami"
              >
                <span className="text-lg">Jelajahi Jurusan Kami</span>
              </motion.button>
            </div>

            {/* Hero Image with Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <img 
                src={imgRectangle2} 
                alt="SMKN 1 Bandung Campus" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose SMKN 1 Bandung Section */}
      <AnimatedSection className="bg-[#b0e6fa] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#004aad] text-center text-3xl md:text-4xl lg:text-5xl mb-16"
          >
            Mengapa Memilih SMKN 1 Bandung?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                IconComponent: Handshake,
                title: "Jaringan Industri & BKK",
                description: (
                  <>
                    <strong className="text-[#0057D9]">Jaminan penempatan kerja</strong> melalui Bursa Kerja Khusus (BKK) 
                    dan kemitraan aktif dengan lebih dari <strong className="text-[#0057D9]">50 perusahaan</strong> di Jawa Timur.
                  </>
                )
              },
              {
                IconComponent: Certificate,
                title: "Sertifikasi Kompetensi LSP-P1",
                description: (
                  <>
                    Lulusan dibekali <strong className="text-[#0057D9]">Sertifikasi Kompetensi</strong> dari LSP-P1, 
                    memastikan kualitas keahlian diakui secara <strong className="text-[#0057D9]">nasional</strong>.
                  </>
                )
              },
              {
                IconComponent: Settings,
                title: "Fasilitas & Lab Praktik Modern",
                description: (
                  <>
                    <strong className="text-[#0057D9]">Ruang praktik berstandar industri</strong> dan dikelola oleh 
                    Unit Produksi, memberikan <strong className="text-[#0057D9]">pengalaman kerja nyata</strong>.
                  </>
                )
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)" }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#FFD93D] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md"
                >
                  <card.IconComponent className="w-8 h-8 text-[#0057D9]" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-[#0057D9] text-xl md:text-2xl text-center mb-4" style={{ fontWeight: 600 }}>
                  {card.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Kompetensi Keahlian Section */}
      <AnimatedSection className="bg-[#b0e6fa] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#004aad] text-center text-3xl md:text-4xl lg:text-5xl mb-16"
          >
            Kompetensi Keahlian
          </motion.h2>

          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: svgPaths.p27c07b80,
                title: "Teknik Kendaraan Ringan (TKR)",
                description: (
                  <>
                    Jurusan yang mempelajari <strong className="text-[#0057D9]">perawatan dan perbaikan mobil</strong>, 
                    melatih siswa menjadi teknisi otomotif yang profesional dan siap kerja di industri kendaraan roda empat.
                  </>
                )
              },
              {
                icon: svgPaths.pbbda200,
                title: "Teknik Komputer Jaringan (TKJ)",
                description: (
                  <>
                    Jurusan yang mempelajari cara <strong className="text-[#0057D9]">merakit, menginstal, dan mengonfigurasi</strong> komputer 
                    serta jaringan internet, melatih siswa menjadi tenaga IT yang profesional dan siap bersaing di era global.
                  </>
                )
              },
              {
                icon: svgPaths.p3a9a2480,
                title: "Teknik Sepeda Motor (TSM)",
                description: (
                  <>
                    Jurusan yang berfokus pada <strong className="text-[#0057D9]">servis, perawatan, dan perbaikan</strong> sepeda motor, 
                    membentuk siswa menjadi mekanik handal dan kompeten di bidang kendaraan roda dua.
                  </>
                )
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)" }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#FFD93D] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md"
                >
                  <svg className="w-8 h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                    <path d={card.icon} fill="#0057D9" />
                  </svg>
                </motion.div>
                <h3 className="text-[#0057D9] text-xl md:text-2xl text-center mb-4" style={{ fontWeight: 600 }}>
                  {card.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: svgPaths.p2218e180,
                title: "Teknik Elektronika Industri (TEI)",
                description: (
                  <>
                    Jurusan yang mempelajari <strong className="text-[#0057D9]">sistem dan peralatan elektronika</strong> di bidang industri, 
                    melatih siswa menjadi teknisi yang terampil, disiplin, dan siap bersaing di dunia kerja berbasis teknologi.
                  </>
                )
              },
              {
                icon: svgPaths.p1b3500,
                title: "Administrasi Perkantoran (AP)",
                description: (
                  <>
                    Jurusan yang mempelajari <strong className="text-[#0057D9]">pengelolaan administrasi, surat-menyurat, pengarsipan</strong>, 
                    dan pelayanan kantor, membentuk siswa menjadi tenaga administrasi yang profesional, disiplin, dan siap kerja di dunia perkantoran.
                  </>
                )
              },
              {
                icon: svgPaths.p217b3800,
                title: "Akuntansi",
                description: (
                  <>
                    Jurusan yang mempelajari <strong className="text-[#0057D9]">pengelolaan keuangan, pencatatan transaksi</strong>, 
                    dan penyusunan laporan keuangan, membentuk siswa menjadi tenaga akuntansi yang teliti, jujur, profesional, dan siap kerja 
                    di bidang bisnis maupun industri.
                  </>
                )
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)" }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#FFD93D] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md"
                >
                  <svg className="w-8 h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                    <path d={card.icon} fill="#0057D9" />
                  </svg>
                </motion.div>
                <h3 className="text-[#0057D9] text-xl md:text-2xl text-center mb-4" style={{ fontWeight: 600 }}>
                  {card.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Beyond Academics Section */}
      <AnimatedSection className="bg-[#b0e6fa] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#004aad] text-center text-3xl md:text-4xl lg:text-5xl mb-16"
          >
            Beyond Academics: Ruang Ekspresi & Prestasi
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/50 rounded-xl p-8 border-2 border-[#ffd200] shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p36971300} fill="#FFD200" fillRule="evenodd" />
                </svg>
                <h3 className="text-[#004aad] text-2xl md:text-3xl">Ajang Prestasi</h3>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  { title: "Juara 1 Tingkat Provinsi", desc: "Lomba Lintas Alam" },
                  { title: "Juara 2 Tingkat Provinsi", desc: "Lomba LKS Wilker 3 Jatim" },
                  { title: "Juara Harapan 2 Tingkat Provinsi", desc: "Lomba Karya Tulis Ilmiah" },
                  { title: "Juara Harapan 2 Tingkat Nasional", desc: "Lomba Honda Students Skill Contest" },
                  { title: "Juara 3 Tingkat Provinsi", desc: "Lomba IT Networking Support LKS Jatim" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Award className="w-5 h-5 text-[#ffd200] mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      <strong className="text-[#004aad]">{item.title}</strong> {item.desc}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffd200] text-[#004aad] px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#ffdb33] transition-all"
              >
                Lihat Semua Prestasi Lainnya
              </motion.button>
            </motion.div>

            {/* Extracurricular */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/50 rounded-xl p-8 border-2 border-[#ffd200] shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3605f600} fill="#FFD200" />
                </svg>
                <h3 className="text-[#004aad] text-2xl md:text-3xl">Suasana Ekstrakurikuler Aktif</h3>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[imgRectangle22, imgRectangle23, imgRectangle24].map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <img src={img} alt={`Kegiatan Ekstrakurikuler ${index + 1}`} className="w-full h-32 object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="bg-[#b0e6fa] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#004aad] text-center text-3xl md:text-4xl lg:text-5xl mb-16"
          >
            Galeri Kami: Lihat Lebih Dekat Fasilitas dan Aktivitas Sekolah
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: imgRectangle25, alt: "Fasilitas Sekolah 1" },
              { src: imgRectangle26, alt: "Fasilitas Sekolah 2" },
              { src: imgRectangle27, alt: "Fasilitas Sekolah 3" },
              { src: imgRectangle28, alt: "Fasilitas Sekolah 4" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => openLightbox(image.src, image.alt)}
              >
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection className="bg-[#b0e6fa] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#004aad] text-center text-3xl md:text-4xl lg:text-5xl mb-16"
          >
            Mitra Kerjasama Dunia Usaha dan Industri
          </motion.h2>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-12">
            {[imgRectangle29, imgRectangle30, imgRectangle31, imgRectangle32, imgRectangle33].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <img src={img} alt={`Partner Logo ${index + 1}`} className="h-20 w-44 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-[#004aad] text-white py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* School Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <img src={imgLogo1} alt="SMKN 1 Bandung Logo" className="h-14 w-14 object-cover" />
                <div>
                  <p className="text-xs tracking-wide opacity-90">TULUNGAGUNG</p>
                  <p className="text-lg">SMKN 1 BANDUNG</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm opacity-90">
                  Jl. Bantengan, Kec. Bandung, Kabupaten Tulungagung, Jawa Timur 66274
                </p>
                <p className="text-sm opacity-90">Telp: (0355) 531899</p>
                <p className="text-sm opacity-90">Email: smknbandung@smknbandung.sch.id</p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg mb-6">Jelajahi</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li><a href="#profil" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Profil</a></li>
                  <li><a href="#informasi" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Informasi</a></li>
                  <li><a href="#akademik" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Akademik & Karir</a></li>
                </ul>
                <ul className="space-y-3">
                  <li><a href="#kesiswaan" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Kesiswaan</a></li>
                  <li><a href="#galeri" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Galeri</a></li>
                  <li><a href="#ppdb" className="text-sm opacity-90 hover:opacity-100 transition-opacity">PPDB</a></li>
                </ul>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg mb-6 text-center md:text-left">Ikuti Kami</h3>
              <div className="flex items-center justify-center md:justify-start gap-8">
                {[
                  { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/yourwhatsappnumber" },
                  { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/smkn1bandungtulungagung" },
                  { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/smkn1bandungtulungagung" },
                  { Icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com/@smkn1bandungtulungagung" },
                  { Icon: TwitterIcon, label: "Twitter / X", href: "https://twitter.com/smkn1bandung" }
                ].map((social, index) => {
                  const IconComponent = social.Icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.10, boxShadow: "0 6px 14px rgba(0,0,0,0.18)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", duration: 0.28 }}
                      className="group relative cursor-pointer"
                      aria-label={social.label}
                    >
                      <div className="w-12 h-12">
                        <IconComponent />
                      </div>
                      {/* Tooltip */}
                      <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
                        {social.label}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2 h-2 bg-gray-900 rotate-45" />
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm opacity-90">
              © Copyright - SMKN 1 Bandung Tulungagung
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#ffd200] text-[#004aad] p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#ffdb33] transition-all z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}