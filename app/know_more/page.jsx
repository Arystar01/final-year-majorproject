"use client";
import React, { useEffect, useState } from "react";

const Page = ({ disease_name, seriousness, theme }) => {
  const [information, setInformation] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [treatment, setTreatment] = useState([]);
  const [precaution, setPrecaution] = useState([]);

  useEffect(() => {
    const fetchDiseaseInfo = async () => {
      try {
        // Simulate fetching data and structuring it better
        const simulatedResponse = {
          data: `A pituitary gland tumor is an abnormal growth... (rest of the information)`,
          symptoms: [
            "Severe headaches that are persistent and may worsen",
            "Significant visual problems (blurred, double, peripheral loss)",
            "Nausea and vomiting, especially in the morning",
            "Changes in menstrual cycles (women)",
            "Erectile dysfunction (men)",
            "Unexplained weight gain or loss",
            "Fatigue",
            "Symptoms of hyper- or hypopituitarism",
            "Sudden severe headache, vision problems, altered mental status (in case of apoplexy)"
          ],
          treatment: [
            "Surgical removal (transsphenoidal approach)",
            "Radiation therapy (stereotactic radiosurgery or fractionated)",
            "Medication to manage hormone imbalances (e.g., dopamine agonists)",
            "Hormone replacement therapy for deficiencies",
            "Regular monitoring with MRI and hormonal assessments"
          ],
          precaution: [
            "Early detection and management of symptoms",
            "Prompt medical evaluation for persistent headaches, vision changes, or hormonal issues",
            "Regular check-ups, especially with family history",
            "Adherence to prescribed treatments",
            "Regular follow-up appointments"
          ]
        };

        const info = simulatedResponse;
        setInformation(info.data || "");
        setSymptoms(info.symptoms || []);
        setTreatment(info.treatment || []);
        setPrecaution(info.precaution || []);

      } catch (error) {
        console.error("Error in disease info page:", error);
      }
    };

    fetchDiseaseInfo();
  }, [disease_name, seriousness]);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-300 text-gray-900 p-8 dark:bg-gradient-to-br dark:from-gray-800 dark:via-purple-900 dark:to-indigo-800 dark:text-white transition-colors duration-300 bg-pattern">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 md:p-10 lg:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-6 md:mb-8">
          Disease Information
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Disease Name: <span className="font-normal">{disease_name}</span>
        </h2>
        <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 mb-4">
          Seriousness: <span className="font-semibold">{seriousness}</span>
        </p>

        <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 className="text-lg md:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            About the Disease
          </h3>
          <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">{information}</p>
        </div>

        {symptoms.length > 0 && (
          <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg md:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Symptoms
            </h3>
            <ul className="list-disc list-inside text-md md:text-lg text-gray-700 dark:text-gray-300 space-y-1">
              {symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>
        )}

        {treatment.length > 0 && (
          <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg md:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Treatment
            </h3>
            <ul className="list-disc list-inside text-md md:text-lg text-gray-700 dark:text-gray-300 space-y-1">
              {treatment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {precaution.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Precaution
            </h3>
            <ul className="list-disc list-inside text-md md:text-lg text-gray-700 dark:text-gray-300 space-y-1">
              {precaution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;