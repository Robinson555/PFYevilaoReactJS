import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>            
        </BrowserRouter>
    );
};

export default App;