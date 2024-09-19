import { GoogleGenerativeAI } from "@google/generative-ai";

// instanciando o gemini com a sua API KEY
const genAI = new GoogleGenerativeAI("AIzaSyCvL6__xo8q1p4GvSPRAP_aBsm1CsFSY4g");

// selencionando o modelo a ser utilizado
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const prompt = "faça uma fanfic sobre a amizade improvavel entre bolsonaro e menezes e sua irmãdade para proteger o pais da corrupção.";

// resultado da requisição ao gemini
const result = await model.generateContent(prompt);
console.log(result.response.text());
