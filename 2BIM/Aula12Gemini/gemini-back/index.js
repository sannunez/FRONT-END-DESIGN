import { GoogleGenerativeAI } from "@google/generative-ai";
import bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';

const app = express()
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {
    const { messages } = req.body;
    console.log(messages[0].parts.text);

    // instanciando o gemini com a sua API KEY
    const genAI = new GoogleGenerativeAI("AIzaSyCvL6__xo8q1p4GvSPRAP_aBsm1CsFSY4g");

    // selencionando o modelo a ser utilizado
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const prompt = messages[0].parts[0].text;
    // resultado da requisição ao gemini
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    res.json({
        chat_completion: result.response.text()
    })

});

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${port}`);
})

