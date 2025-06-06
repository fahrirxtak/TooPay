import About from "./components/About"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portofolio"

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300 isolate">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <Navbar />
      <Hero />
      <About/>
      <Portfolio />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
