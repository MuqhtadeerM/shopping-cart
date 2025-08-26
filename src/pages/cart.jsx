import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
	const [totalCart, setTotalCart] = useState(0);

	const { cart } = useSelector((state) => state);

	useEffect(() => {
		setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
	}, [cart]);

	console.log(cart, totalCart);

	return (
		<div className="flex justify-center">
			{cart && cart.length ? (
				<>
					<div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full mx-auto p-4">
						<div className="md:col-span-2 flex flex-col gap-4">
							{cart.map((cartItem) => (
								<CartTile key={cartItem.id} cartItem={cartItem} />
							))}
						</div>
					</div>

					<div className="md:col-span-1 w-full">
						<div className="flex flex-col justify-center items-center p-5 space-y-6 bg-gray-100 rounded-md shadow-md">
							<h1 className="font-bold text-lg text-red-800 ">
								Your Cart Summary
							</h1>
							<p>
								<span className="text-gray-800 font-bold">Total Item</span>
								<span>: {cart.length}</span>
							</p>
							<p>
								<span className="text-gray-800 font-bold">Total Amount</span>
								<span>: {totalCart}</span>
							</p>
						</div>
					</div>
				</>
			) : (
				<div className="min-h-[80vh] flex flex-col items-center justify-center ">
					<h1 className="text-gray-800 font-bold text-xl mb-2">
						your cart is empty
					</h1>
					<Link to="/">
						<button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
							SHOP NOW
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}
