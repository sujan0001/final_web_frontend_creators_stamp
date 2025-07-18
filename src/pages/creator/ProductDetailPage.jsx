import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import CreatorNavigation from "../../components/CreatorNavigation";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getProductById(productId);
        setProduct(res.data.data);
      } catch (err) {
        setError("Failed to load product");
      }
    }
    fetchData();
  }, [productId]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <><CreatorNavigation /><div className="p-6">
      <img
        src={`http://localhost:5050/${product.image}`}
        alt={product.name}
        className="w-full max-w-md rounded shadow mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-blue-700 font-semibold">Rs. {product.originalPrice}</p>
      {product.creator && (
        <p className="text-sm text-gray-500 mt-2">
          By: {product.creator.firstName} {product.creator.lastName}
        </p>
      )}
    </div></>
  );
}
