import './App.css';
import Home from './Pages/Home';
import Posts from './Pages/Posts';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
