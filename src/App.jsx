import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/products" element={<Products />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
