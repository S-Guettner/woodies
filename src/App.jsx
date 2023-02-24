import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import NavBar from "./assets/components/navbar/NavBar.jsx";


function App() {

  return (
    <div>
        <BrowserRouter>
        <NavBar />
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
