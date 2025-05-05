import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './Layout/MainLayout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Detail from './Pages/Detail'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
