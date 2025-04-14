"use client";
import { useRouter } from "next/navigation";
import NewsForm from "../../../../components/NewsForm";

export default function CreateNewsPage() {
  const router = useRouter();

  async function handleSubmit(formData) {
    try {
      const formDataToSend = new FormData();

      // Convert date string to proper Date object and validate
      console.log(formData);
      const dateValue = new Date(formData.date);
      if (isNaN(dateValue.getTime())) {
        throw new Error("Invalid date format");
      }

      // Append all fields including files
      formDataToSend.append("title", formData.title);
      formDataToSend.append("date", formData.date); // Send as YYYY-MM-DD string
      formDataToSend.append("content", formData.content);
      formDataToSend.append("newsPaper", formData.newsPaper);
      formDataToSend.append("edition", formData.edition);
      formDataToSend.append("fullContent", formData.fullContent);

      // Append optional fields if they exist
      if (formData.category) formDataToSend.append("category", formData.category);
      if (formData.image instanceof File) formDataToSend.append("image", formData.image);
      if (formData.pdfUrl instanceof File) formDataToSend.append("pdfUrl", formData.pdfUrl);

      

      const response = await fetch("/api/admin/news", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        router.push("/admin/news");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error creating news:", error);
      alert(error.message || "Failed to create news");
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create News</h1>
      <NewsForm onSubmit={handleSubmit} />
    </div>
  );
}