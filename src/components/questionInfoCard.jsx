"use client";
import React, { useEffect, useState } from "react";

const QuestionInfoCard = ({ generatedQuestion, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150); 
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-4 md:p-6 w-full transform transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-4 scale-95"
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 242, 255, 0.8) 100%)',
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12)',
      }}
    >
      {/* Decoración superior minimalista */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-500"></div>
      
      {/* Número de pregunta compacto */}
      <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
        {index}
      </div>

      <div className="relative z-10 pr-8">
        {/* Título de la pregunta - más compacto */}
        <div className="mb-4">
          <h3 className="text-base md:text-lg font-bold text-gray-800 leading-snug pr-2">
            {generatedQuestion.title}
          </h3>
        </div>

        {/* Opciones de respuesta - diseño más limpio */}
        <div className="space-y-2">
          {generatedQuestion.options.map((option, j) => (
            <div
              key={j}
              className="flex items-start gap-3 p-2 md:p-3 rounded-lg bg-gray-50/80 hover:bg-white/90 border border-gray-100 hover:border-purple-200 transition-all duration-200"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                {j + 1}
              </div>
              <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                {option}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionInfoCard;