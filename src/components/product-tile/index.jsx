import { useDispatch, useSelector } from "react-redux";
import { addCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
	//dispatch analyse the what to use
	const dispactch = useDispatch();
	const { cart } = useSelector((state) => state);
	const handleAddToCart = () => {
		dispactch(addCart(product));
	};

	const handleRemoveFromCart = () => {
		console.log("removed");
		dispactch(removeFromCart(product.id));
	};

	return (
		<div>
			<div className="group flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
				<div className="h-[180px] flex items-center justify-center">
					<img
						src={product?.image}
						alt={product?.title}
						className="object-contain h-full w-auto"
					/>
				</div>
				<div>
					<h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
						{product?.title}
					</h1>
				</div>
				<div className="flex items-center justify-center w-full mt-5">
					<button
						onClick={
							cart.some((item) => item.id === product.id)
								? handleRemoveFromCart
								: handleAddToCart
						}
						className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
					>
						{cart.some((item) => item.id === product.id)
							? "Remove from Cart"
							: "Add To Cart"}
					</button>
				</div>
			</div>
		</div>
	);
}
