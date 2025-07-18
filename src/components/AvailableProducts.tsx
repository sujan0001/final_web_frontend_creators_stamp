
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAvailableProducts, buyProductById } from "../services/productService";

type Product = {
  _id: string;
  name: string;
  description?: string;
  image: string;
  originalPrice: number;
  creator: {
    _id: string;
    firstName: string;
    lastName: string;
  };
};

export default function AvailableProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const res = await getAvailableProducts();
      setProducts(res.data.data);
    } catch (err) {
      console.error("Failed to load products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleBuy = async (productId: string) => {
    try {
      setBuyingId(productId);
      await buyProductById(productId);
      alert("Purchase successful!");
      await loadProducts();
    } catch (err) {
      console.error("Purchase failed", err);
      alert("Failed to purchase. Make sure you are logged in as a consumer.");
    } finally {
      setBuyingId(null);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="p-4 rounded-xl shadow-md border bg-white">
          <img
            src={`http://localhost:5050/${product.image}`}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-green-600 font-bold mt-2">Rs. {product.originalPrice}</p>
          <p className="text-sm text-gray-500">
            By: {product.creator.firstName} {product.creator.lastName}
          </p>

          <button
            onClick={() => handleBuy(product._id)}
            disabled={buyingId === product._id}
            className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {buyingId === product._id ? "Buying..." : "Buy Now"}
          </button>

          <button
            onClick={() => navigate(`/consumer/product/${product._id}`)}
            className="mt-2 w-full bg-gray-800 text-white py-1 rounded hover:bg-gray-900"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
