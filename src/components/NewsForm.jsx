"use client";
import { useState, useRef } from "react";

export default function NewsForm({ initialData = {}, onSubmit }) {
  // Initialize form data with proper date formatting
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    date: initialData.date 
      ? new Date(initialData.date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0], // Default to today in YYYY-MM-DD format
    content: initialData.content || "",
    newsPaper: initialData.newsPaper || "",
    edition: initialData.edition || "",
    category: initialData.category || "",
    fullContent: initialData.fullContent || "",
    image: initialData.image || null,
    pdfUrl: initialData.pdfUrl || null,
  });

  const [imagePreview, setImagePreview] = useState(
    initialData.image?.startsWith?.('http') ? initialData.image : ""
  );
  const [pdfFileName, setPdfFileName] = useState(
    initialData.pdfUrl ? initialData.pdfUrl.split('/').pop() : ""
  );
  const imageInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, etc.)');
        imageInputRef.current.value = ''; // Clear the input
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
      setFormData((prev) => ({ ...prev, image: null }));
    }
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate PDF file type
      if (file.type !== 'application/pdf') {
        alert('Please select a PDF file');
        pdfInputRef.current.value = ''; // Clear the input
        return;
      }
      setPdfFileName(file.name);
      setFormData((prev) => ({ ...prev, pdfUrl: file }));
    } else {
      setPdfFileName("");
      setFormData((prev) => ({ ...prev, pdfUrl: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['title', 'date', 'content', 'newsPaper', 'edition', 'fullContent'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill all required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Validate date
    const dateObj = new Date(formData.date);
    if (isNaN(dateObj.getTime())) {
      alert('Please enter a valid date');
      return;
    }

    // Create FormData for file uploads
    const formDataToSend = new FormData();
    
    // Append all fields with proper formatting
    formDataToSend.append('title', formData.title);
    formDataToSend.append('date', formData.date); // Send as YYYY-MM-DD string
    formDataToSend.append('content', formData.content);
    formDataToSend.append('newsPaper', formData.newsPaper);
    formDataToSend.append('edition', formData.edition);
    formDataToSend.append('fullContent', formData.fullContent);
    
    // Append optional fields if they exist
    if (formData.category) formDataToSend.append('category', formData.category);
    if (formData.image instanceof File) formDataToSend.append('image', formData.image);
    if (formData.pdfUrl instanceof File) formDataToSend.append('pdfUrl', formData.pdfUrl);
console.log("for dta" , formData);

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image
        </label>
        {imagePreview && (
          <div className="mb-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-40 object-cover rounded"
            />
          </div>
        )}
        <input
          type="file"
          ref={imageInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* PDF Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          PDF File
        </label>
        {pdfFileName && (
          <p className="text-sm text-gray-600 mb-1">Selected: {pdfFileName}</p>
        )}
        <input
          type="file"
          ref={pdfInputRef}
          onChange={handlePdfChange}
          accept=".pdf"
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* News Paper */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          News Paper <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="newsPaper"
          value={formData.newsPaper}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Edition */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Edition <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="edition"
          value={formData.edition}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Category</option>
          <option value="Events">Events</option>
          <option value="Achievements">Achievements</option>
          <option value="Announcements">Announcements</option>
          <option value="Research">Research</option>
        </select>
      </div>

      {/* Short Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Short Content <span className="text-red-500">*</span>
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Full Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Content <span className="text-red-500">*</span>
        </label>
        <textarea
          name="fullContent"
          value={formData.fullContent}
          onChange={handleChange}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}