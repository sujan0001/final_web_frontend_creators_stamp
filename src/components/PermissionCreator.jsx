import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function PermissionCreator() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchRequests = async () => {
    try {
      const res = await axiosInstance.get("/product/incoming-transfers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRequests(res.data.data || []);
    } catch (err) {
      console.error("Error fetching transfer requests:", err);
      alert("Failed to load requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const respondToRequest = async (productId, action) => {
    try {
      const res = await axiosInstance.post(
        `/product/respond-transfer/${productId}`,
        { action },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(res.data.message);
      fetchRequests(); // Refresh after action
    } catch (err) {
      console.error("Failed to respond:", err);
      alert("Failed to process request.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading requests...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Incoming Transfer Requests</h1>
      {requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <div className="grid gap-4">
          {requests.map((product) => (
            <div key={product._id} className="border rounded p-4 shadow bg-white">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>
                Collection: <strong>{product.collection?.title || "N/A"}</strong>
              </p>
              <p>
                Requested by: <strong>{product.pendingTransfer?.buyer?.firstName || "Unknown"}</strong>
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => respondToRequest(product._id, "accept")}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => respondToRequest(product._id, "decline")}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
