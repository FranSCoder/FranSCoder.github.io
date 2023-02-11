import './App.css';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Projects from './routes/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
