import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  fas,
  faVideo,
  faServer,
  faGraduationCap,
  faChalkboardTeacher,
  faBook,
  faClipboardCheck,
  faLightbulb,
  faCodeBranch,
  faCalendar,
  faSpinner,
  faExclamationCircle,
  faRedo,
  faExternalLinkAlt,
  faHeart,
  faPlusCircle,
  faNewspaper,
  faSearch,
  faLaptopCode,
  faDesktop,
  faProjectDiagram,
  faCertificate,
  faRocket,
  faChevronDown,
  faArrowRight,
  faClock,
  faUsers,
  faPaintBrush,
  faCheckCircle,
  faMobileAlt,
  faCloud,
  faDatabase,
  faCubes,
  faQuestion,
  faCheck,
  faSitemap,
  faComments,
  faUserTie,
  faNetworkWired,
  faBookReader,
  faCode,
  faArrowUp,
  faStar,
  faLink,
  faEnvelope,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FirebaseProvider } from './contexts/FirebaseContext';
import { SearchProvider } from './contexts/SearchContext';
import ErrorBoundary from './components/layout/ErrorBoundary';
import Loading from './components/layout/Loading';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

// Lazy load page components
const Home = lazy(() => import('./components/pages/Home'));
const Certifications = lazy(() => import('./components/pages/Certifications'));
const InterviewPrep = lazy(() => import('./components/pages/InterviewPrep'));
const PathTemplate = lazy(() => import('./components/pages/PathTemplate'));
const LanguageTemplate = lazy(() => import('./components/pages/LanguageTemplate'));
const Ratings = lazy(() => import('./components/pages/Ratings'));
const ResourceRecommendations = lazy(() => import('./components/pages/ResourceRecommendations'));

// Add FontAwesome icons to library
library.add(fas, fab);

function App() {
  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <SearchProvider>
          <Router>
            <div className="App">
              <Navbar />
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/interview-prep" element={<InterviewPrep />} />
                    <Route path="/path-template" element={<PathTemplate />} />
                    <Route path="/language-template" element={<LanguageTemplate />} />
                    <Route path="/ratings" element={<Ratings />} />
                    <Route path="/recommend" element={<ResourceRecommendations />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
              <Footer />
            </div>
          </Router>
        </SearchProvider>
      </FirebaseProvider>
    </ErrorBoundary>
  );
}

export default App;
