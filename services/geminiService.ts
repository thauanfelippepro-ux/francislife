import { GoogleGenAI } from "@google/genai";
import { STRATEGY_CONTEXT } from '../constants';

// Initialize the API client safely
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const askBrandStrategist = async (question: string): Promise<string> => {
  const client = getClient();
  if (!client) return "Configuração de API pendente. Adicione sua chave de API para interagir com a estratégia.";

  try {
    const response = await client.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Contexto da Marca:\n${STRATEGY_CONTEXT}\n\nPergunta do cliente sobre a estratégia: ${question}\n\nResponda como um diretor criativo apresentando o projeto, de forma curta, elegante e persuasiva.`
            }
          ]
        }
      ],
      config: {
        thinkingConfig: { thinkingBudget: 1024 }, // Enable thinking for deeper strategic alignment
      }
    });

    return response.text || "Não foi possível gerar uma resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Houve um erro ao consultar o estrategista virtual.";
  }
};