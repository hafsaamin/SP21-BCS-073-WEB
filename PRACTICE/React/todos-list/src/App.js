import logo from './logo.svg';

import './App.css';
import {Home} from '/MyComponenets/Home';
import {About} from '/MyComponenets/About';
import {Advertise} from '/MyComponenets/Advertise';
import {Blog} from '/MyComponenets/Blog';
import {Contact} from '/MyComponenets/Contact';
import {Product} from '/MyComponenets/Product';
import {GetPaintings} from '/MyComponenets/GetPaintings';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="advertise" element={<Advertise />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="getPaintings" element={<GetPaintings />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )      
}

export default App;
