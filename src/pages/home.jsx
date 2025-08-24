import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import ProductTile from "../components/product-tile";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [Error, setError] = useState(null);

	const fetchProducts = async () => {
		setLoading(true);
		try {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();

			if (data) {
				setLoading(false);
				setProducts(data);
			}
		} catch (e) {
			setLoading(false);

			setError(`${e} got the error`);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div>
			{loading ? (
				<div className="min-h-screen w-full flex justify-center items-center">
					<CircleLoader
						height="5000"
						width="5000"
						color="rgb(127,29,29)"
						visible="true"
					/>
				</div>
			) : (
				<div className="min-h-[80vh] grid sm:grid-cols-2 md-grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
					{products && products.length
						? products.map((productItem, index) => (
								<ProductTile key={index} product={productItem} />
						  ))
						: null}
				</div>
			)}
		</div>
	);
}
