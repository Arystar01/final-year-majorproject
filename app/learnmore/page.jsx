"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import React from "react";

const Faq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`bg-white rounded-lg transition-all duration-300 overflow-hidden border border-gray-100 mb-6 shadow-md
                ${isOpen ? "p-6" : "p-4"
                }`}
        >
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
                <div className="text-indigo-500 transition-transform duration-300">
                    {isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}
                </div>
            </div>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? "mt-4 opacity-100 max-h-[500px]" : "mt-0 opacity-0 max-h-0"
                    } overflow-hidden text-gray-600 text-sm leading-relaxed`}
            >
                {answer}
            </div>
        </div>
    );
};

const page = () => {
    const faqs = [
        {
            question: "What is the purpose of this AI model?",
            answer:
                "The AI model is designed to identify diseases based on symptoms and medical history. It leverages advanced algorithms to provide insights and support decision-making.",
        },
        {
            question: "How accurate is the model?",
            answer:
                "The model has been trained on a large dataset and has shown promising accuracy in disease identification. However, it's important to note that AI models are tools to assist, not replace, professional medical judgment.",
        },
        {
            question: "Can I use this model for commercial purposes?",
            answer:
                "Yes, you can use this model for commercial purposes. However, please ensure you comply with the terms of use and any applicable licenses. Contact us for licensing details.",
        },
        {
            question: "Is the model open-source?",
            answer:
                "The model is not fully open-source, but we provide a demo version for demonstration purposes. We are exploring options for making parts of the model available to the research community.",
        },
        {
            question: "How can I contribute to the project?",
            answer:
                "We welcome contributions from the community. You can contribute by reporting issues, suggesting improvements, or submitting pull requests. See our GitHub repository for details.",
        },
        {
            question: "Who created this model?",
            answer:
                "This model was built by a passionate team of engineers and researchers dedicated to applying AI for good. We are affiliated with [Organization Name/University].",
        },
        {
            question: "Where can I find the source/data used?",
            answer:
                "Due to licensing agreements and data privacy concerns, we cannot share the full dataset. However, we provide references to relevant research and sample data upon request.",
        },
        {
            question: "How efficient is the model?",
            answer:
                "Our model is optimized for both speed and accuracy, running efficiently even on modest hardware. We employ techniques like model quantization and hardware acceleration to ensure optimal performance.",
        },
        {
            question: "Can I trust the diagnosis?",
            answer:
                "While the model performs well, it's not a replacement for professional medical advice. Always consult a qualified healthcare provider for diagnosis and treatment of any medical condition.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-700 to-indigo-500 blur-5xl text-gray-900 p-8 ">
            <div className="max-w-4xl mx-auto py-12 px-6 rounded-xl  bg-gray-600 shadow-2xl">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-700 tracking-tight">
                    About Our AI Model
                </h1>

                <section className="mb-8 bg-indigo-100 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-600">🔍 The Problem</h2>
                    <p className="text-gray-700 leading-relaxed text-md">
                        In today's data-driven world, making sense of large amounts of
                        information is a major challenge. Whether it's predicting diseases,
                        recognizing images, or automating tasks, there's a growing need for
                        intelligent solutions that can learn from data and make accurate
                        decisions.
                    </p>
                </section>

                <section className="mb-8 bg-indigo-50 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-600">🧠 Our Model</h2>
                    <p className="text-gray-700 leading-relaxed text-md">
                        We've built a machine learning model using state-of-the-art
                        techniques such as Convolutional Neural Networks (CNNs) and Transformers,
                        trained on a large dataset with high accuracy. Our model is capable of
                        recognizing patterns, making predictions, and continuously improving
                        over time.
                    </p>
                </section>

                <section className="mb-10 bg-indigo-200 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-600">🚀 Why It Matters</h2>
                    <p className="text-gray-700 leading-relaxed text-md">
                        Our solution is designed to help users solve real problems
                        efficiently, with the power of AI. Whether you're a student,
                        professional, or researcher, our tool gives you access to
                        cutting-edge machine learning at your fingertips.
                    </p>
                </section>

                <section className="my-12 py-6 border-t border-gray-200 bg-indigo-200 rounded-xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                            🤔 Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-md">
                            Got questions? We’ve got answers. Learn more about how our AI
                            model works and what problems it solves.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        {faqs.map((item, index) => (
                            <Faq key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </section>

                <div className="flex justify-center items-center mt-10">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105"
                        onClick={() => (window.location.href = "/")}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;
