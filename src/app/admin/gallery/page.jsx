// components/admin/GalleryAdmin.js
"use client";
import { useState, useEffect } from "react";
import ImageUpload from "../../../components/admin/ImageUpload";

export default function GalleryAdmin() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "cultural",
    date: new Date().toISOString().split("T")[0],
    description: "",
    images: [],
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setGalleryItems(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.title ||
        !formData.description ||
        formData.images.length === 0
      ) {
        alert("Please fill all required fields and upload at least one image");
        return;
      }

      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `/api/gallery/${editingId}` : "/api/gallery";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          category: formData.category,
          date: formData.date,
          description: formData.description,
          images: formData.images,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save");
      }

      const result = await response.json();

      fetchGalleryItems();
      resetForm();
    } catch (error) {
      console.error("Error saving gallery item:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
      const response = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");
      fetchGalleryItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      category: item.category,
      date: new Date(item.date).toISOString().split("T")[0],
      description: item.description,
      images: [...item.images],
    });
    setEditingId(item._id);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      category: "cultural",
      date: new Date().toISOString().split("T")[0],
      description: "",
      images: [],
    });
    setEditingId(null);
  };

  const handleImageUpload = async (files) => {
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('/api/gallery/', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error(`Upload failed with status ${response.status}`);
        }
  
        return await response.json();
      });
  
      const results = await Promise.all(uploadPromises);
      const newImages = results.map(result => result.path);
      
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
  
    } catch (error) {
      console.error('Upload failed:', error);
      alert(`Upload failed: ${error.message}`);
    }
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Gallery Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Gallery Item" : "Add New Gallery Item"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="cultural">Cultural</option>
                <option value="academic">Academic</option>
                <option value="sports">Sports</option>
                <option value="activities">Activities</option>
                <option value="events">Special Events</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                rows="3"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Images</label>
              <ImageUpload onUpload={handleImageUpload} />

              <div className="mt-2 grid grid-cols-3 gap-2">
                {formData.images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Preview ${index}`}
                      className="w-full h-20 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {editingId ? "Update" : "Save"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Gallery Items</h2>

          {galleryItems.length === 0 ? (
            <p>No gallery items found.</p>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Images
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {galleryItems.map((item) => (
                    <tr key={item._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap capitalize">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(item.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {item.images.length} photos
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
