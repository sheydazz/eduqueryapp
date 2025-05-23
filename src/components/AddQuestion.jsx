"use client";
import ButttonGenerateQuestion from "./ButtonGenareteQuestion"
import { useState } from "react";

const AddQuestionComponent = () => {
  const [count, setCount] = useState(1); // Empezar con 1 en lugar de 0
  const [inputValue, setInputValue] = useState(""); // Estado del input
  
 
  return ( 
    <div className="flex flex-col gap-6 items-center justify-center w-full max-w-2xl mx-auto px-4">
      {/* Input para el tema */}
      <div className="flex flex-row justify-center items-center gap-3 w-full">
        <input 
          type="text"
          placeholder="Escribe un tema"
          className="border-2 border-gray-300 rounded-lg text-black p-4 w-full max-w-md text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            fontSize: '16px', // Evita zoom en iPhone
            WebkitAppearance: 'none', // Remueve estilos por defecto de iOS
          }}
        />
      </div>
      
      {/* Contador de preguntas */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
        <p className="text-black font-medium">Número de preguntas:</p>
        <div className="flex justify-center items-center border-2 border-gray-300 text-black rounded-lg p-2 bg-white">
          <button 
            onClick={() => setCount(prev => Math.max(1, prev - 1))}
            className="px-3 py-1 hover:bg-gray-100 rounded transition-colors text-lg font-bold"
            type="button"
          >
            −
          </button>
          <input 
            type="number" 
            min="1"
            max="20"
            value={count} 
            onChange={(e) => setCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-12 text-center border-none focus:outline-none text-lg font-medium bg-transparent" 
            style={{
              fontSize: '16px', // Evita zoom en iPhone
              WebkitAppearance: 'none',
            }}
          />
          <button 
            onClick={() => setCount(prev => Math.min(20, prev + 1))}
            className="px-3 py-1 hover:bg-gray-100 rounded transition-colors text-lg font-bold"
            type="button"
          >
            +
          </button>
        </div>
      </div>

      {/* Botón para generar preguntas */}
      <div className="w-full flex justify-center mt-4">
        {inputValue.trim() && count > 0 ? (
          <ButttonGenerateQuestion prompt={inputValue.trim()} cantidad={count} />
        ) : (
          <div className="text-purple-700 text-lg sm:text-xl md:text-2xl font-bold bg-white p-4 rounded-lg text-center border-2 border-purple-200 max-w-md">
            Escribe un tema y selecciona la cantidad de preguntas
          </div>
        )}
      </div>
    </div>
  );
};

export default AddQuestionComponent;