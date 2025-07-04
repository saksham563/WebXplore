import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../SearchRecommendations/SearchRecommendations.css";

const SearchRecommendation = ({ query, closeSearchBar }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/search?query=${query}`);
        const data = response.data;
        setResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (result) => {
    const path =
      result.type === "blog"
        ? `/blog/${encodeURIComponent(result.title)}`
        : `/portfolio/${encodeURIComponent(result.title)}`;
    navigate(path); // Navigate to the blog or project page with the title in URL
    closeSearchBar(); // Close the search bar and recommendations
  };

  const blogResults = results.filter(result => result.type === "blog");
  const projectResults = results.filter(result => result.type === "project");

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50 mt-4 bg-white shadow-lg rounded-lg border border-gray-200">
      {loading && <div className="loader text-center py-4 text-gray-500">Loading...</div>}
      
      {results.length === 0 && !loading && query && (
        <div className="text-center py-4 text-gray-500">No results found</div>
      )}

      <div className="flex gap-8 p-6">
        {/* Left Section - Blogs */}
        <div className="w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Blogs</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {blogResults.map(result => (
              <div
                key={result._id}
                onClick={() => handleSelect(result)}
                className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <p className="text-gray-700">{result.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Projects */}
        <div className="w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Projects</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {projectResults.map(result => (
              <div
                key={result._id}
                onClick={() => handleSelect(result)}
                className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <p className="text-gray-700">{result.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRecommendation;