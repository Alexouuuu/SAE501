
// import pages
import Navbar from './pages/navbar/navbar'
import Footer from './pages/footer/footer'
import Accueil from './pages/accueil/accueil';

// imports react
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'


// pour scroll top au changement de page
function OnPageChangeScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <section>
        <OnPageChangeScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Accueil />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
