// components/admin/ImageUpload.js
'use client';
import { useCallback } from 'react';

export default function ImageUpload({ onUpload }) {
  const handleFileChange = useCallback(async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    try {
      onUpload(files);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  }, [onUpload]);

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
      <label className="cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <svg className="w-8 h-8 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB each)</p>
        </div>
        <input 
          type="file" 
          className="hidden" 
          multiple 
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}