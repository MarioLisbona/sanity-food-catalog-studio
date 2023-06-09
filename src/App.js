import { Routes, Route } from "react-router-dom"

// views
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// styles
import "./App.css";

function App() {
	return (
		<>
			{/* Header Area */}
			<div className="max-w-full">
					<Header />
			</div>
			<Routes>
				<Route element={<Home />} exact path="/" />
				<Route element={<About />} path="/about" />
				<Route element={<Foods />} path="/foods" />
				<Route element={<FilteredFoods />} path="/filteredfoods/:slug" />
			</Routes>
			{/* Footer Area */}
			<div className="max-w-full">
				<Footer />
			</div>
		</>
	);
}

export default App;
