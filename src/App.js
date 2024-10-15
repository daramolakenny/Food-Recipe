import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Details from './pages/details';
// import Cart from './pages/cart';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-grey-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/recipe-item/:id' element={<Details />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;