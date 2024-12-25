import { Route, Routes } from 'react-router-dom';
import Join from './components/Join';
import Nav from './components/Nav';
import Home from './components/Home';
import Merch from './components/Merch';
import Console from './components/Console';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/join" element={<Join />}/>
          {/* <Route path="/merch" element={<Merch />}/> */}
          <Route path="/console" element={<Console />}/>
        </Routes>
    </div>
  );
}

export default App;
