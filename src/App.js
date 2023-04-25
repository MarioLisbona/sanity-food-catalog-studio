import { Routes, Route } from "react-router-dom"

// views
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";

// styles
import "./App.css";

function App() {
	return (
			<Routes>
				<Route element={<Home />} exact path="/" />
				<Route element={<About />} path="/About" />
				<Route element={<Foods />} path="/Foods" />
				<Route element={<FilteredFoods />} path="/FilteredFoods/:slug" />
			</Routes>
	);
}

export default App;
