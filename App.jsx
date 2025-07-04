// Componente principal de Voz del Alma
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [generating, setGenerating] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const handleGenerate = async () => {
    setGenerating(true);
    setTimeout(() => {
      setVideoURL("https://www.example.com/ejemplo_video.mp4");
      setGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-center text-pink-800">Voz del Alma</h1>
      <p className="text-center text-gray-600 mb-6 max-w-xl">
        Escribe un mensaje desde el corazón. Nuestra app lo convertirá en un video con voz cálida y música emocional, listo para compartir.
      </p>
      <textarea
        className="w-full max-w-xl mb-4 p-2 rounded border"
        rows={6}
        placeholder="Ejemplo: Yo con ansiedad fingiendo que todo está bien..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={generating}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
      >
        {generating ? "Generando video..." : "Generar video"}
      </button>

      {videoURL && (
        <div className="mt-6">
          <video controls className="w-full max-w-md rounded-xl shadow-lg">
            <source src={videoURL} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <a
            href={videoURL}
            download
            className="block mt-2 text-center text-pink-700 underline"
          >
            Descargar video
          </a>
        </div>
      )}
    </div>
  );
}