import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import NotFound from "./Components/NotFound/NotFound";

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
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
