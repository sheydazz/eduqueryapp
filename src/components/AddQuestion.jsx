"use client";
import { BsQuestionCircleFill } from "react-icons/bs";
import ButttonGenerateQuestion from "./ButtonGenareteQuestion"
import { useState } from "react";

const AddQuestionComponent = () => {
  const [count, setCount] = useState(0); // Contador para la cantidad
  const [inputValue, setInputValue] = useState(""); // Estado del input
  const [showTooltip, setShowTooltip] = useState(false);
 
  return ( 
    <div className="flex flex-col gap-4 items-center justify-center w-full max-w-2xl mx-auto px-4">
      <div className="flex flex-row justify-center items-center gap-3 w-full">
        <input type="text"
          placeholder="escribe un tema "
          className="border rounded-md text-black p-4 w-full max-w-md"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button 
          onMouseEnter={() => setShowTooltip(true)} 
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}
          className="flex-shrink-0"
        >
          <BsQuestionCircleFill className="text-gray-700 text-xl" />
        </button>
        
        {/* {showTooltip && (
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-64 p-2 bg-gray-200 border rounded shadow-lg text-sm text-black z-50">
            Escribe un tema que describa las preguntas que deseas generar.
          </div>
        )} */}
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center items-center w-full">
        <p className="text-black">Numero de preguntas:</p>
        <div className="flex justify-center items-center border-2 border-black text-black rounded-lg p-2 pt-1 pb-1">
          <button 
            onClick={() => setCount(prev => Math.max(1, prev - 1))}
            className="px-2 hover:bg-gray-200 rounded"
          >
            -
          </button>
          <input 
            type="number" 
            min="1"
            max="20"
            value={count} 
            onChange={(e) => setCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 0)))}
            className="w-12 text-center border-none focus:outline-none" 
          />
          <button 
            onClick={() => setCount(prev => Math.min(20, prev + 1))}
            className="px-2 hover:bg-gray-200 rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Botón para generar preguntas */}
      {inputValue && count > 0 ? (
        <ButttonGenerateQuestion prompt={inputValue} cantidad={count} />
      ) : (
        <p className="text-purple-700 text-xl md:text-2xl font-bold bg-white p-2 rounded-lg text-center">
          escribe un tema y selecciona la cantidad de preguntas
        </p>
      )}
    </div>
  );
};

export default AddQuestionComponent;
