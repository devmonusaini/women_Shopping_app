import Contact from "./Components/Contact/Contact";
import ProductDetails from "./Components/Products/ProductDetails";
import ShopWomen from "./Components/ShopWomen/ShopWomen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ShopWomen />} />
					<Route path="contact" element={<Contact />} />
					<Route path="product-details/:id" element={<ProductDetails />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
