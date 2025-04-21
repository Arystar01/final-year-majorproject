"use client";
import { useState, useEffect } from "react";

export default function UploadPage({ theme }) {
  const [files, setFiles] = useState([]);
  const [model, setModel] = useState("model1");
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState("");
  const [pictureType, setPictureType] = useState("xray");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("brain tumor");

  useEffect(() => {
    // Adjust theme when the prop changes
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convert FileList to an array
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    // Append each file in the files array
    files.forEach(file => formData.append("file", file));
    formData.append("model", model);
    formData.append("symptoms", symptoms);
    formData.append("age", age);
    formData.append("picture_type", pictureType);

    try {
      const res = await fetch("http://localhost:3001/process", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: err.message || "An error occurred during upload." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-300 text-gray-900 p-8 dark:bg-gradient-to-br dark:from-gray-800 dark:via-purple-500 dark:to-indigo-700 dark:text-white transition-colors duration-300 bg-pattern">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-2xl p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">
          Upload Data for AI Analysis
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Upload Files"
            type="file"
            onChange={handleFileChange}
            multiple
          />
          <SelectField
            label="Select Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            options={["model1", "model2", "model3"]}
          />
          <InputField
            label="Symptoms"
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Enter symptoms"
          />
          <InputField
            label="Age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
          <SelectField
            label="Picture Type"
            value={pictureType}
            onChange={(e) => setPictureType(e.target.value)}
            options={["xray", "ct", "ultrasound"]}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-md font-semibold text-white transition-colors duration-300 ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"}`}
          >
            {isLoading ? "Uploading..." : "Upload and Analyze"}
          </button>
        </form>

        {result && (
  <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Result</h2>
    {!result.error ? (
      <p className="text-red-500">{result.error}</p>
    ) : (
      <div className="text-gray-700 dark:text-gray-300 space-y-2">
        <p>
          <span className="font-semibold">Disease Name:</span> Brain tumour
        </p>
        <p>
          <span className="font-semibold">Seriousness:</span> Serious
        </p>
        <button
          onClick={() => (window.location.href = "/know_more")}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Know More
        </button>
      </div>
    )}
  </div>
)}
      </div>
    </div>
  );
}

function InputField({ label, type, value, onChange, placeholder, multiple }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        multiple={multiple} // Allow multiple files if true
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
