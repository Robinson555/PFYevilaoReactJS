import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
