
"use client"

import { useEffect, useState } from "react";
import { getAllCollections } from "../services/collectionService";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

export default function CollectionCarasoul() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await getAllCollections();
        const incoming = Array.isArray(res.data) ? res.data : res.data?.data;
        setCollections(incoming || []);
      } catch (err) {
        setError("Failed to fetch collections");
        console.error("Fetch collections error:", err);
      }
    };

    fetchCollections();
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? collections.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === collections.length - 1 ? 0 : prev + 1));
  };

  const current = collections[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-8">
      {error && <p className="text-red-500">{error}</p>}

      {current && (
        <div className="w-fullt">
          <Card className="relative w-full overflow-hidde bg-gradient-to-br from-blue-500 via-yellow-400 to-red-500 min-h-[300px] shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-between h-full px-12 py-6 flex-wrap md:flex-nowrap">
              {/* Left: Title + Description */}
              <div className="flex-1 space-y-5 max-w-lg">
                <h1 className="text-5xl md:text-6xl font-bold">{current.title}</h1>
                <div className="text-lg">
                  <span>
                    by: {current.creator?.firstName} {current.creator?.lastName}
                  </span>
                </div>
                <p className="text-lg leading-relaxed opacity-90">{current.description}</p>
              </div>

              {/* Right: Cover Image */}
              <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={`http://localhost:5050/${current.coverImage}`}
                      alt={current.title}
                      className="w-72 h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
