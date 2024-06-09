import React from "react";

function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
      <div className='text-center p-6'>
        <h1 className="text-4xl font-bold mb-4">Momentum</h1>
        <p className="text-lg mb-6">Trainiere hart, lebe smart.</p>
        <a
          href=""
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Jetzt herunterladen
        </a>
        <div className='flex flex-row justify-center space-x-8 mt-8'>
          <div className='flex flex-col items-center'>
            <img
              src="./push_graph.png"
              className="w-48 h-48 rounded-lg shadow-lg"
            />
            <p className="text-center mt-4 text-gray-300">Set-Dokumentation</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src="./food_tracking.webp"
              className="w-48 h-48 rounded-lg shadow-lg"
            />
            <p className="text-center mt-4 text-gray-300">Ernährungsunterstützung</p>
          </div>
        </div>
        <div className="p-6 max-w-xl rounded-xl shadow-md space-y-4 mt-8 text-center">
          <p className="text-gray-500">
            Momentum bietet Ihnen alles, was Sie für ein gesünderes Leben brauchen. Unsere App unterstützt Sie nicht nur bei Ihrem Training, sondern hilft Ihnen auch, sich gesund zu ernähren.
          </p>
          <ul className="text-gray-500 space-y-2">
            <li><strong>Ernährungsunterstützung:</strong> Verfolgen Sie Ihre Mahlzeiten und erhalten Sie personalisierte Ernährungstipps.</li>
            <li><strong>Set-Dokumentation:</strong> Behalten Sie den Überblick über Ihre Trainingseinheiten und Fortschritte.</li>
            <li><strong>Trendanalysen:</strong> Sehen Sie auf einen Blick, ob Sie sich verbessert haben und in welchen Bereichen noch Potenzial besteht.</li>
            <li><strong>Einfache Handhabung:</strong> Alle Daten werden klar und verständlich dargestellt, damit Sie sich auf das Wesentliche konzentrieren können – Ihre Gesundheit.</li>
          </ul>
          <p className="text-gray-500">
            Starten Sie jetzt und erleben Sie, wie einfach es sein kann, fit und gesund zu bleiben!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
