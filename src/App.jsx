import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route   } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemDetail from "./components/ItemDetail.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

const App = () => {

  return (
    <>
    <NavBar />
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/itemDetailContainer"element={<ItemDetailContainer/>}></Route>
      <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
      <Route exact path="/productos/:categoria" element={<ItemListContainer/>}/>
      <Route exact path="/cart" element={<Cart/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  );
};

export default App;
