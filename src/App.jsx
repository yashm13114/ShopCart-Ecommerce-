import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { SingleProduct } from './components/SingleProduct';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { ProductPage } from './components/ProductPage';
import Cart from './components/Cart';

function App() {
  return (
    <HashRouter>
      <Header /> {/* Place Header inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
