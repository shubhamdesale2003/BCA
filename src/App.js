
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Footer from './Components/Footer.jsx'
import Assignments from './Components/Assignments.jsx'
import Notes from './Components/Notes.jsx';
import Shell from './Components/Shell.jsx'
import Java from './Components/Java.jsx';
import Cpp from './Components/Cpp.jsx';
import Developer from './Components/Developer.jsx';
import DSA from './Components/Dsa.jsx';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignments" element={<Assignments />} />
       <Route path="/assignments/shell" element={<Shell />} />
       <Route path="/assignments/java" element={<Java />} />
       <Route path="/assignments/cpp" element={<Cpp />} />
       <Route path="/assignments/dsa" element={<DSA />} />
       <Route path="/notes" element={<Notes />} />
       <Route path="/developer" element={<Developer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
