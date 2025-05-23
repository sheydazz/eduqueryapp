// src/libs/CreateIaQuestionIa.js

export const CreateIaQuestion = async (prompt, numeropreguntas) => {
  try {
    const response = await fetch('/api/gemeniIA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, numeropreguntas }),
    });

    if (!response.ok) {
      throw new Error('Error al crear el cuestionario');
    }

    const questionResponse = await response.json();
    return questionResponse;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};
