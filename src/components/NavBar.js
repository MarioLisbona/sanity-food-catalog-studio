import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="container lg:px-0 px-5 py-2 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between h-20 items-center font-bold">
			<Link to="/">
				<p className="text-xl lg:text-2xl">😋Yummy Food's</p>
			</Link>
			<div className=" lg:block">
				<ul className="flex gap-x-20">
					<li>
						<Link
							to="/"
							exact
							className="nav-link"
							activeClassName="active-link"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/foods"
							className="nav-link"
							activeClassName="active-link"
						>
							Foods
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="nav-link"
							activeClassName="active-link"
						>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;