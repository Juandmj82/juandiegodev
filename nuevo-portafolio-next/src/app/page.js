import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import BackendPortfolio from '@/components/BackendPortfolio'
import DigitalProducts from '@/components/DigitalProducts'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <BackendPortfolio />
        <DigitalProducts />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
