import { getProductById } from "@/data/products";
import Link from "next/link";

const ProductDetailsPage = ({ params: { id } }: { params: { id: string } }) => {
	const product = getProductById(id);

	if (!product)
		return (
			<div className="flex flex-col justify-center items-center p-8">
				<p>Product information not found</p>
			</div>
		);

	return (
		<div className="flex flex-col justify-center items-center p-8">
			<p className="text-5xl">{product.image}</p>
			<p>{product.name}</p>
			<p className="my-3">{product.details}</p>
			<Link className="bg-black text-white px-1 rounded" href={`/products/${id}/checkout`}>
				Buy It
			</Link>
		</div>
	);
};

export default ProductDetailsPage;
