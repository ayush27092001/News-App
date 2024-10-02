// import { Route, Routes } from 'react-router-dom';
// import Category from './pages/Category';
// import Home from './pages/Home';
import Header from './components/Header';
import Router from './routes/Router';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">

        <Router />

        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />} />
        </Routes> */}
      </div>
    </>

  );
}

export default App;
