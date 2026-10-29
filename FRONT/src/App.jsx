
// import pages
import Navbar from './composants/navbar'
import Footer from './composants/footer/footer'

import Accueil from './pages/accueil/accueil';
import VisiteVirtuelle from './pages/visiteVirtuelle/visiteVirtuelle';
import Evenements from './pages/events/events';
import Formation from './pages/formation/formation';

import MonCompte from './pages/MonEspace/MonCompte';
import Authentification from './pages/auth/auth';

import DashBoardAdmin from './Admin/pagesAdmin/Dashboard';

import CGU from './pages/droits/CGU';
import Cookies from './pages/droits/Cookies';
import MentionsLegales from './pages/droits/mentionslegales';
import PolitiqueConfidentialite from './pages/droits/PolitiqueConfidentialite';

import Contact from './pages/contact/contact';
import PlanDuSite from './pages/PlanDuSite/PlanDuSite';

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
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/formation" element={<Formation />} />

            <Route path="/mon-compte" element={<MonCompte />} />
            <Route path="/auth" element={<Authentification />} />

            <Route path="/admin/dashboard" element={<DashBoardAdmin />} />

            <Route path="/cgu" element={<CGU />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

            <Route path="/contact" element={<Contact/>}/>
            <Route path="/planDuSite" element={<PlanDuSite/>}/>
          </Routes>
        </main>
        <Footer />
      </section>
    </BrowserRouter>
  )
}

export default App
