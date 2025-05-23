"use client";
import React from "react";
import FormCreator from "@/components/FormCreator";
import QuestionInfoCard from "@/components/questionInfoCard";
import { useState } from "react";
import { useForm } from "@/context/Form";
import Image from "next/image";
import { SiGoogleforms } from "react-icons/si";

const GenerateForm = () => {
  const { questions } = useForm();
  const [formData, setFormData] = useState(null);

  const handleFormCreated = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
         style={{
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
         }}>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>

      {/* Header mejorado */}
      <div className="relative z-10 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-xl">
        <div className="px-4 md:px-8 py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image 
                  src="/assets/isologo.png"
                  width={120}
                  height={120}
                  alt="Logo"
                  className="relative w-auto h-[70px] md:h-[90px] drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl md:text-4xl text-white font-bold tracking-tight">
                  Preguntas Generadas
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm font-medium">
                    {questions.length > 0 ? `${questions[1]?.length || 0} preguntas disponibles` : 'Esperando preguntas...'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Contador decorativo */}
            {questions.length > 0 && (
              <div className="hidden md:flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{questions[1]?.length || 0}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">Preguntas</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      {questions.length === 0 ? (
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center space-y-6 p-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl max-w-md mx-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SiGoogleforms className="text-3xl text-white/80" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ¡Esperando preguntas!
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Aún no se han generado preguntas. Una vez que estén listas, aparecerán aquí con un diseño increíble.
            </p>
            <div className="flex justify-center gap-2 pt-4">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 px-4 md:px-8 py-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Título de sección */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tus Preguntas Están Listas ✨
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Revisa cada pregunta cuidadosamente y cuando estés satisfecho, genera tu formulario de Google Forms.
              </p>
            </div>

            {/* Grid de preguntas - más responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
              {questions[1].map((question, index) => (
                <QuestionInfoCard
                  key={index}
                  generatedQuestion={question}
                  index={index + 1}
                />
              ))}
             
            </div>
            <div className="flex items-center justify-center ">
            
            <FormCreator onFormCreated={handleFormCreated} />
            </div>
          </div>
        </div>
      )}

      {/* Botón flotante mejorado */}
      {formData && (
        <div className="fixed bottom-8 left-0 right-0 z-50 px-4">
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="relative">
              {/* Efecto de resplandor */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
              
              <a
                href={formData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block transform hover:scale-110 transition-all duration-300"
              >
                <button className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 px-10 py-5 rounded-full text-white flex items-center gap-4 text-xl font-bold shadow-2xl border border-white/20 backdrop-blur-sm group overflow-hidden">
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10">Abrir Formulario</span>
                  <SiGoogleforms className="relative z-10 text-2xl group-hover:rotate-12 transition-transform duration-300" />
                  
                  {/* Partículas decorativas */}
                  <div className="absolute top-1 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-8 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateForm;