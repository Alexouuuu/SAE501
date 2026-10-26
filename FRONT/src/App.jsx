
// import pages
import Navbar from './composants/navbar'
import Footer from './composants/footer'
import Accueil from './pages/accueil/accueil';
import VisiteVirtuelle from './pages/visiteVirtuelle/visiteVirtuelle';
import MonCompte from './pages/MonEspace/MonCompte';
import Evenements from './pages/events/events';
import { Authentification } from './pages/auth/auth';
import DashBoardAdmin from './Admin/pagesAdmin/Dashboard';

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
            <Route path="/visite-virtuelle" element={<VisiteVirtuelle />} />
            <Route path="/mon-compte" element={<MonCompte />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/auth" element={<Authentification />} />
            <Route path="/admin/dashboard" element={<DashBoardAdmin />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
