import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
