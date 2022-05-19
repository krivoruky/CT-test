import { Routes, Route } from 'react-router-dom';
import './App.sass';
import { HomePage } from './components/HomePage/HomePage';
import { Event } from './components/Event/Event';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/event' element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
