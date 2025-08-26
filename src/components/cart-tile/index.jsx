import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
	const dispactch = useDispatch();
	const handleRemoveFromCart = () => {
		dispactch(removeFromCart(cartItem.id));
	};
	return (
		<>
			<div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
				<div className="flex p-3">
					<img
						src={cartItem?.image}
						className="h-20 w-20 object-contain"
						alt={cartItem?.title}
					/>
					<div className="flex-1">
						<h1 className="text-lg text-white font-bold">{cartItem?.title}</h1>
						<p className="text-white font-extrabold">{cartItem?.price}</p>
					</div>
				</div>
				<div>
					<button
						className="bg-red-950 text-white border-2 rounded-lg font-bold p-3"
						onClick={handleRemoveFromCart}
					>
						Remove From Cart
					</button>
				</div>
			</div>
		</>
	);
}
