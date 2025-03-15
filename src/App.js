import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects/Projects';
import Collaborations from './components/Collaborations';
import Memes from './components/Memes';
import Contact from './components/Contact';
import Management from './components/Management';
import DownloadMoreRam from './components/DownloadMoreRam';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/management" element={<Management />} />
        <Route path="/downloadmoream" element={<DownloadMoreRam />} />
        <Route path="/projects" element={<Projects />}>
        <Route path="completed" element={<Completed />} />
        <Route path="in-progress" element={<InProgress />} />
        <Route path="planned" element={<Planned />} />
</Route>
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;