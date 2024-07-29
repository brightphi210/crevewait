import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
