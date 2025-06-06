"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, ShoppingCart, Smartphone, BarChart3, Palette, Globe, ArrowRight } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Portfolio = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  const boxesRef = useRef(null)

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
            x: gsap.utils.random(-20, 20),
            y: gsap.utils.random(-20, 20),
            rotation: gsap.utils.random(-10, 10),
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 2),
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

  const portfolioItems = [
    {
      id: 1,
      title: "Toko Online Fashion",
      description:
        "Platform e-commerce modern untuk brand fashion dengan sistem pembayaran yang aman, katalog produk yang menarik, dan dashboard admin yang user-friendly.",
      image: "/images/portofolio-1.png",
      icon: ShoppingCart,
      live: "https://example.com",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Aplikasi Banking Digital",
      description:
        "Solusi perbankan digital dengan interface yang intuitif untuk transfer, cek saldo, pembayaran tagihan, dan investasi dengan sistem keamanan berlapis.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Smartphone,
      live: "https://example.com",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "Platform analytics untuk monitoring performa bisnis dengan visualisasi data yang mudah dipahami, forecasting, dan automated reporting.",
      image: "/placeholder.svg?height=400&width=600",
      icon: BarChart3,
      live: "https://example.com",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Website Company Profile",
      description:
        "Website corporate yang elegan dan profesional untuk meningkatkan brand image dengan SEO optimization dan loading speed yang optimal.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Globe,
      live: "https://example.com",
      category: "Web Development",
    },
  ]

  const ProjectCard = ({ project, index, isReversed }) => (
    <div className="group">
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:grid-flow-col-dense" : ""}`}>
        {/* Image Section */}
        <div className={`${isReversed ? "lg:col-start-2" : ""}`}>
          <div className="relative">
            <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 text-white font-medium hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 flex items-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Lihat Website</span>
                </a>
              </div>

              {/* Project Number */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Category */}
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-xs font-medium">
                {project.category}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`space-y-6 ${isReversed ? "lg:col-start-1" : ""}`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <project.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">{project.title}</h3>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{project.description}</p>

          <div>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
            >
              <span>Kunjungi Website</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background with Box Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.15) 1px, transparent 1px)
                `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Secondary Grid Pattern - Offset */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.1) 2px, transparent 2px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.1) 2px, transparent 2px)
                `,
            backgroundSize: "120px 120px",
            backgroundPosition: "20px 20px",
          }}
        ></div>

        {/* Animated Box Background */}
        <div ref={boxesRef} className="absolute inset-0">
          {/* Animated Boxes */}
          <div className="animated-box absolute top-[10%] left-[5%] w-16 h-16 border-2 border-amber-500/20 rounded-lg opacity-30"></div>
          <div className="animated-box absolute top-[20%] left-[80%] w-24 h-24 border-2 border-orange-500/20 rounded-lg opacity-20"></div>
          <div className="animated-box absolute top-[40%] left-[15%] w-20 h-20 border-2 border-amber-500/20 rounded-lg opacity-25"></div>
          <div className="animated-box absolute top-[60%] left-[75%] w-32 h-32 border-2 border-orange-500/20 rounded-lg opacity-20"></div>
          <div className="animated-box absolute top-[80%] left-[10%] w-28 h-28 border-2 border-amber-500/20 rounded-lg opacity-30"></div>

          {/* Solid Boxes */}
          <div className="absolute top-[15%] left-[20%] w-8 h-8 bg-amber-500/5 rounded-md"></div>
          <div className="absolute top-[25%] left-[70%] w-12 h-12 bg-orange-500/5 rounded-md"></div>
          <div className="absolute top-[45%] left-[25%] w-10 h-10 bg-amber-500/5 rounded-md"></div>
          <div className="absolute top-[65%] left-[65%] w-16 h-16 bg-orange-500/5 rounded-md"></div>
          <div className="absolute top-[85%] left-[30%] w-14 h-14 bg-amber-500/5 rounded-md"></div>

          {/* Dotted Boxes */}
          <div
            className="absolute top-[5%] left-[40%] w-20 h-20 rounded-lg opacity-20"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.2) 2px, transparent 2px, transparent 10px)",
              backgroundSize: "10px 10px",
            }}
          ></div>
          <div
            className="absolute top-[30%] left-[60%] w-16 h-16 rounded-lg opacity-15"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.15) 2px, transparent 2px, transparent 10px)",
              backgroundSize: "10px 10px",
            }}
          ></div>
          <div
            className="absolute top-[70%] left-[45%] w-24 h-24 rounded-lg opacity-20"
            style={{
              background:
                "repeating-linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.1) 2px, transparent 2px, transparent 10px)",
              backgroundSize: "10px 10px",
            }}
          ></div>
        </div>

        {/* Box Clusters */}
        <div className="absolute top-10 right-10 opacity-30">
          <div className="relative">
            <div className="absolute top-0 left-0 w-8 h-8 border border-amber-500/30 rounded-md"></div>
            <div className="absolute top-4 left-4 w-8 h-8 border border-amber-500/30 rounded-md"></div>
            <div className="absolute top-8 left-8 w-8 h-8 border border-amber-500/30 rounded-md"></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-10 opacity-30">
          <div className="relative">
            <div className="absolute top-0 left-0 w-6 h-6 border border-orange-500/30 rounded-md"></div>
            <div className="absolute top-3 left-3 w-6 h-6 border border-orange-500/30 rounded-md"></div>
            <div className="absolute top-6 left-6 w-6 h-6 border border-orange-500/30 rounded-md"></div>
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
            <Palette className="w-4 h-4 mr-2" />
            Portfolio Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Proyek{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">Terbaik</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Lihat koleksi website dan aplikasi terbaik yang telah kami buat untuk berbagai klien dan industri
          </p>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {portfolioItems.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isReversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
