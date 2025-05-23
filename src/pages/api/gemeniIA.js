export default async function handler(req, res) {
    const { prompt, numeropreguntas } = req.body;
    if (!prompt) {
      return res.status(400).json({ message: "Falta el prompt en la solicitud" });
    }
  
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "API key no configurada" });
    }
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `crea un cuestionario con este tema ${prompt} y solo ${numeropreguntas}
                    preguntas tu respuesta debera seguir este formato, no deberas devolver mas nada
                    que no sea el formato, la respuesta ira tal cual el siguiente formato
                    [
                      {
                        "formTitle": "aqui va el nombre del cuestionario",
                        "formDescription": "aquí va una breve descripcion"
                      },
                      [
                        {
                          "title": "aqui va la pregunta",
                          "type": "RADIO",
                          "correctAnswer": "la respuesta correcta deberá ir aca",
                          "options": ["option 1", "option 2", "option 3", "option n"],
                          "options2": [{"value": "option 1"}, {"value": "option 2"}, {"value": "option 3"}, {"value": "option n"}]
                        },
                      ]
                    ]`
                  }
                ]
              }
            ]
          })
        }
      );
  
      if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error(`Error en la API de Gemini (${response.status}): ${errorDetail}`);
      }
  
      const data = await response.json();
      
      let generatedQuestions = data.candidates[0].content.parts[0].text;
      
      generatedQuestions = generatedQuestions.replace(/```json\n?|\n?```/g, '').trim();
      
      const parsedResponse = JSON.parse(generatedQuestions);
      return res.status(200).json(parsedResponse);
    } catch (error) {
      console.error("Error al generar preguntas:", error);
      return res
        .status(500)
        .json({ message: "Error al procesar la solicitud", error });
    }
  }
  
  