import { useEffect, useState } from "react";
import { getResoldProducts } from "../services/productService";
import { buyProductById } from "../services/productService";
import Nevigate from "./nevigate";
import Footer from "./footer";

type Product = {
  _id: string;
  name: string;
  description?: string;
  image: string;
  originalPrice: number;
  resalePrice?: number;
  creator: {
    firstName: string;
    lastName: string;
  };
  owner: {
    firstName: string;
    lastName: string;
  };
};

export default function ResoldProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await getResoldProducts();
      setProducts(res.data.data);
    } catch (err) {
      console.error("Error loading resold products", err);
    } finally {
      setLoading(false);
    }
  };

  const handleBuy = async (productId: string) => {
    try {
      const confirmBuy = window.confirm("Are you sure you want to buy this product?");
      if (!confirmBuy) return;

      await buyProductById(productId);
      alert("Purchase successful!");
      fetchProducts(); // Refresh
    } catch (err) {
      alert("Purchase failed");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <Nevigate/>
      <h1 className="text-2xl font-bold mb-4">Secondary Marketplace</h1>
      {products.length === 0 ? (
        <p>No products are currently listed for resale.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="p-4 border rounded-xl shadow bg-white">
              <img
                src={`http://localhost:5050/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-green-600 font-bold mt-2">
                Rs. {product.resalePrice || product.originalPrice}
              </p>
              <p className="text-sm text-gray-500">
                Created by: {product.creator.firstName} {product.creator.lastName}
              </p>
              <p className="text-sm text-gray-500">
                Resold by: {product.owner.firstName} {product.owner.lastName}
              </p>
              <button
                onClick={() => handleBuy(product._id)}
                className="mt-3 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
}
