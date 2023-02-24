import { BrowserRouter,Routes,Route } from "react-router-dom"



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

export default App
