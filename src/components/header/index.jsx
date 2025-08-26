import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
				<Link to={"/"}>
					<div className="ml-5">
						<h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
							REACT REDUX SHOPPING CART
						</h1>
					</div>
				</Link>
				<ul className="flex gap-6 items-center text-gray-800 font-semibold">
					<Link to={"/"}>
						<li className="cursor-pointer text-2xl font-bold text-red-950 hover:text-red-700 transition-all">
							Home
						</li>
					</Link>
					<Link to={"/cart"}>
						<li className="cursor-pointer text-2xl font-bold text-red-950 hover:text-red-700 transition-all">
							Cart
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}
