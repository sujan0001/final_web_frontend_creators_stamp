import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCollection } from "../../services/collectionService";
import CreatorNavigation from "../../components/CreatorNavigation";

export default function CreateCollectionPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (coverImage) formData.append("coverImage", coverImage);

    try {
      await createCollection(formData);
      navigate("/creator-dashboard");
    } catch (err) {
      alert("Failed to create collection.");
    }
  };

  return (
    <><CreatorNavigation /><div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create New Collection</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required />
        <textarea
          placeholder="Description"
          className="w-full p-2 border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImage(e.target.files[0])} />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Create Collection
        </button>
      </form>
    </div></>
  );
}