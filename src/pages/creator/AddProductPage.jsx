import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { createProduct } from "../../services/productService";

export default function AddProductPage() {
  const { collectionId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !originalPrice || !image) {
      return setError("Name, price, and image are required");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("originalPrice", originalPrice);
    formData.append("collection", collectionId);
    formData.append("image", image);

    // try {
    //   setLoading(true);
    //   await createProduct(formData);
    //   navigate(`/collections/${collectionId}`);
    // } catch (err) {
    //   console.error("Error creating product:", err);
    //   setError("Failed to create product");
    // } finally {
    //   setLoading(false);
    // }
    try {
        setLoading(true);
        await createProduct(formData);
        alert("✅ Product added successfully!");
        navigate(`/collections/${collectionId}`);
        } catch (err) {
        console.error("Error creating product:", err);
        setError("Failed to create product");
        } finally {
        setLoading(false);
}
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add Product to Collection</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name *</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="w-full border rounded p-2"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Original Price *</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Image *</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
} 
