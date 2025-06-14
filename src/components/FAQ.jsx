import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HelpCircle, ArrowRight, Sparkles, Star } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const FAQ = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  const boxesRef = useRef(null)
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, {
        y: 50,
        opacity: 0,
      })

      gsap.set(gridRef.current?.children || [], {
        y: 60,
        opacity: 0,
      })

      // Animate background boxes
      if (boxesRef.current) {
        const boxes = boxesRef.current.querySelectorAll(".animated-box")
        boxes.forEach((box) => {
          gsap.to(box, {
            x: gsap.utils.random(-15, 15),
            y: gsap.utils.random(-15, 15),
            rotation: gsap.utils.random(-8, 8),
            duration: gsap.utils.random(4, 7),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 3),
          })
        })
      }

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }).to(
        gridRef.current?.children || [],
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.4",
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const faqData = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
      answer:
        "Waktu penyelesaian proyek bervariasi tergantung kompleksitas dan scope pekerjaan. Proyek website sederhana biasanya memakan waktu 2-4 minggu, sedangkan aplikasi web yang lebih kompleks bisa memakan waktu 6-12 minggu. Saya akan memberikan estimasi waktu yang akurat setelah mendiskusikan kebutuhan proyek Anda.",
    },
    {
      question: "Apakah saya bisa request revisi setelah proyek selesai?",
      answer:
        "Ya, tentu saja! Setiap proyek sudah termasuk 2-3 kali revisi gratis. Revisi tambahan dapat dikenakan biaya sesuai dengan tingkat kompleksitas perubahan yang diminta. Saya juga menyediakan layanan maintenance dan update berkala untuk memastikan website atau aplikasi Anda tetap optimal.",
    },
    {
      question: "Teknologi apa saja yang Anda gunakan?",
      answer:
        "Saya menggunakan teknologi modern seperti Laravel, React, Vue, Tailwind CSS, dan database seperti MySQL atau PostgreSQL. Pemilihan teknologi akan disesuaikan dengan kebutuhan spesifik proyek Anda untuk memastikan performa dan skalabilitas yang optimal.",
    },
    {
      question: "Apakah website yang dibuat sudah responsive dan mobile-friendly?",
      answer:
        "Absolut! Semua website dan aplikasi yang saya buat sudah pasti responsive dan mobile-friendly. Saya menggunakan pendekatan mobile-first design untuk memastikan tampilan dan fungsi optimal di semua perangkat, mulai dari smartphone hingga desktop.",
    },
    {
      question: "Bagaimana sistem pembayaran untuk proyek?",
      answer:
        "Sistem pembayaran biasanya dibagi menjadi beberapa tahap: 30% di awal sebagai down payment, 40% saat mencapai milestone tertentu, dan 30% sisanya setelah proyek selesai dan diserahkan. Saya juga menerima pembayaran melalui transfer bank, e-wallet, atau metode lain yang disepakati.",
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background with Box Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
                `,
            backgroundSize: "35px 35px",
          }}
        ></div>

        {/* Secondary Grid Pattern - Larger */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.15) 2px, transparent 2px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.15) 2px, transparent 2px)
                `,
            backgroundSize: "100px 100px",
            backgroundPosition: "15px 15px",
          }}
        ></div>

        {/* Diagonal Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{
            backgroundImage: `
                linear-gradient(45deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
                `,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Animated Box Background */}
        <div ref={boxesRef} className="absolute inset-0">
          {/* Large Animated Border Boxes */}
          <div className="animated-box absolute top-[8%] left-[8%] w-20 h-20 border-2 border-amber-500/25 rounded-xl opacity-40"></div>
          <div className="animated-box absolute top-[15%] left-[85%] w-28 h-28 border-2 border-orange-500/20 rounded-xl opacity-30"></div>
          <div className="animated-box absolute top-[35%] left-[12%] w-24 h-24 border-2 border-amber-500/25 rounded-xl opacity-35"></div>
          <div className="animated-box absolute top-[55%] left-[80%] w-32 h-32 border-2 border-orange-500/20 rounded-xl opacity-25"></div>
          <div className="animated-box absolute top-[75%] left-[15%] w-26 h-26 border-2 border-amber-500/25 rounded-xl opacity-40"></div>
          <div className="animated-box absolute top-[85%] left-[75%] w-22 h-22 border-2 border-orange-500/20 rounded-xl opacity-30"></div>

          {/* Medium Solid Boxes */}
          <div className="absolute top-[12%] left-[25%] w-12 h-12 bg-amber-500/8 rounded-lg"></div>
          <div className="absolute top-[28%] left-[65%] w-16 h-16 bg-orange-500/6 rounded-lg"></div>
          <div className="absolute top-[48%] left-[30%] w-14 h-14 bg-amber-500/8 rounded-lg"></div>
          <div className="absolute top-[68%] left-[60%] w-18 h-18 bg-orange-500/6 rounded-lg"></div>
          <div className="absolute top-[88%] left-[35%] w-16 h-16 bg-amber-500/8 rounded-lg"></div>

          {/* Small Accent Boxes */}
          <div className="absolute top-[20%] left-[40%] w-8 h-8 bg-amber-500/10 rounded-md"></div>
          <div className="absolute top-[40%] left-[70%] w-10 h-10 bg-orange-500/8 rounded-md"></div>
          <div className="absolute top-[60%] left-[45%] w-6 h-6 bg-amber-500/12 rounded-md"></div>
          <div className="absolute top-[80%] left-[55%] w-8 h-8 bg-orange-500/8 rounded-md"></div>

          {/* Patterned Boxes */}
          <div
            className="absolute top-[10%] left-[50%] w-24 h-24 rounded-lg opacity-25"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.15) 2px, transparent 2px, transparent 8px)",
            }}
          ></div>
          <div
            className="absolute top-[45%] left-[20%] w-20 h-20 rounded-lg opacity-20"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(245, 158, 11, 0.12), rgba(245, 158, 11, 0.12) 2px, transparent 2px, transparent 8px)",
            }}
          ></div>
          <div
            className="absolute top-[70%] left-[70%] w-28 h-28 rounded-lg opacity-25"
            style={{
              background:
                "repeating-linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.1) 2px, transparent 2px, transparent 8px)",
            }}
          ></div>

          {/* Dotted Pattern Boxes */}
          <div
            className="absolute top-[25%] left-[15%] w-16 h-16 rounded-lg opacity-30"
            style={{
              backgroundImage: "radial-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          ></div>
          <div
            className="absolute top-[65%] left-[85%] w-20 h-20 rounded-lg opacity-25"
            style={{
              backgroundImage: "radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          ></div>
        </div>

        {/* Box Clusters for Corners */}
        <div className="absolute top-12 right-12 opacity-35">
          <div className="relative">
            <div className="absolute top-0 left-0 w-6 h-6 border border-amber-500/40 rounded-md"></div>
            <div className="absolute top-3 left-3 w-6 h-6 border border-amber-500/40 rounded-md"></div>
            <div className="absolute top-6 left-6 w-6 h-6 border border-amber-500/40 rounded-md"></div>
            <div className="absolute top-9 left-9 w-6 h-6 border border-amber-500/40 rounded-md"></div>
          </div>
        </div>

        <div className="absolute bottom-16 left-12 opacity-35">
          <div className="relative">
            <div className="absolute top-0 left-0 w-8 h-8 border border-orange-500/40 rounded-md"></div>
            <div className="absolute top-4 left-4 w-8 h-8 border border-orange-500/40 rounded-md"></div>
            <div className="absolute top-8 left-8 w-8 h-8 border border-orange-500/40 rounded-md"></div>
          </div>
        </div>

        {/* Floating Box Groups */}
        <div className="absolute top-1/3 left-1/4 opacity-20">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-amber-500/20 rounded-sm"></div>
            <div className="w-4 h-4 bg-amber-500/15 rounded-sm"></div>
            <div className="w-4 h-4 bg-amber-500/25 rounded-sm"></div>
          </div>
        </div>

        <div className="absolute top-2/3 right-1/4 opacity-20">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-5 h-5 bg-orange-500/20 rounded-sm"></div>
            <div className="w-5 h-5 bg-orange-500/15 rounded-sm"></div>
            <div className="w-5 h-5 bg-orange-500/25 rounded-sm"></div>
            <div className="w-5 h-5 bg-orange-500/18 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-1/3 h-1/3 bg-orange-400/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Pertanyaan{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
              Yang Sering Ditanyakan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Temukan jawaban dari pertanyaan yang paling sering ditanyakan seputar layanan dan proses kerja sama
          </p>
        </div>

        {/* FAQ Grid */}
        <div ref={gridRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-[600px]">
            {/* Questions List - Left Side */}
            <div className="lg:col-span-2 space-y-3">
              {faqData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQuestion(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${selectedQuestion === index
                      ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 shadow-lg"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${selectedQuestion === index
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg"
                          : "bg-white/10 group-hover:bg-white/20"
                        }`}
                    >
                      <HelpCircle
                        className={`w-4 h-4 ${selectedQuestion === index ? "text-white" : "text-neutral-400 group-hover:text-neutral-300"
                          }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium leading-tight ${selectedQuestion === index ? "text-amber-400" : "text-neutral-300 group-hover:text-white"
                        }`}
                    >
                      {item.question}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Answer Display - Right Side */}
            <div className="lg:col-span-3">
              <div className="sticky top-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl min-h-[400px]">
                {selectedQuestion !== null && (
                  <div className="space-y-6">
                    {/* Question Header */}
                    <div className="flex items-start space-x-4 pb-6 border-b border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <HelpCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                          {faqData[selectedQuestion].question}
                        </h3>
                      </div>
                    </div>

                    {/* Answer Content */}
                    <div className="prose prose-invert max-w-none">
                      <p className="text-neutral-300 leading-relaxed text-lg">{faqData[selectedQuestion].answer}</p>
                    </div>
                  </div>
                )}

                {selectedQuestion === null && (
                  <div className="flex items-center justify-center h-full text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                        <HelpCircle className="w-8 h-8 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Pilih Pertanyaan</h3>
                        <p className="text-neutral-400">
                          Klik salah satu pertanyaan di sebelah kiri untuk melihat jawabannya
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-amber-500/10 overflow-hidden group">
            {/* Enhanced animated background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-red-500/5 animate-pulse -z-10"></div>

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse"></div>

            {/* Moving background orbs */}
            <div
              className="absolute top-0 left-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl animate-bounce opacity-60"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-bounce opacity-60"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/20 rounded-full blur-xl animate-pulse opacity-40"></div>

            {/* Enhanced floating elements with more variety */}
            <div
              className="absolute top-6 right-6 animate-bounce pointer-events-none"
              style={{ animationDuration: "2s" }}
            >
              <Sparkles className="w-5 h-5 text-amber-400/80" />
            </div>
            <div
              className="absolute top-12 right-16 animate-pulse pointer-events-none"
              style={{ animationDelay: "0.5s" }}
            >
              <Star className="w-3 h-3 text-orange-400/60" />
            </div>
            <div
              className="absolute bottom-6 left-6 animate-bounce pointer-events-none"
              style={{ animationDuration: "2.5s", animationDelay: "1s" }}
            >
              <Star className="w-4 h-4 text-orange-400/80" />
            </div>
            <div
              className="absolute bottom-12 left-16 animate-pulse pointer-events-none"
              style={{ animationDelay: "1.5s" }}
            >
              <Sparkles className="w-3 h-3 text-amber-400/60" />
            </div>
            <div
              className="absolute top-1/3 left-8 animate-bounce pointer-events-none"
              style={{ animationDuration: "3s", animationDelay: "2s" }}
            >
              <HelpCircle className="w-4 h-4 text-red-400/60" />
            </div>
            <div
              className="absolute top-2/3 right-8 animate-pulse pointer-events-none"
              style={{ animationDelay: "2.5s" }}
            >
              <ArrowRight className="w-4 h-4 text-amber-400/60" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-ping"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute top-3/4 left-3/4 w-1 h-1 bg-orange-400/40 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-red-400/40 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/6 right-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-ping"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>

            <div className="relative z-10">
              {/* Enhanced title with text animation */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-6 group-hover:scale-105 transition-transform duration-300">
                Siap Memulai Proyek{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 animate-pulse">
                  Digital{" "}
                </span>
                Anda?
              </h3>

              {/* Enhanced description */}
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg max-w-2xl mx-auto group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors duration-300">
                Jangan tunda lagi. Mari kita wujudkan ide Anda menjadi kenyataan. Klik tombol di bawah untuk berdiskusi
                lebih lanjut!
              </p>

              {/* Enhanced button with multiple effects */}
              <a
                href="https://wa.me/6285759288760?text=Halo%20saya%20ingin%20bertanya%20tentang%20TooPay"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 text-lg overflow-hidden transform-gpu"
              >
                {/* Enhanced button background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                {/* Multiple shine effects */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                <div
                  className="absolute inset-0 bg-white/10 transform skew-x-12 translate-x-full group-hover/btn:-translate-x-full transition-transform duration-1200"
                  style={{ transitionDelay: "0.2s" }}
                ></div>

                {/* Pulsing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-ping"></div>

                {/* Button content */}
                <span className="relative z-10 group-hover/btn:drop-shadow-lg transition-all duration-300">
                  Hubungi Kami
                </span>
                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-300" />

                {/* Floating sparkles around button */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: "2s" }} />
                </div>
                <div
                  className="absolute -bottom-2 -left-2 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <Star className="w-3 h-3 text-white animate-pulse" />
                </div>
              </a>


              {/* Additional micro-interactions */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  ✨ Konsultasi gratis • 🚀 Respon cepat • 💎 Kualitas terjamin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
