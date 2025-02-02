const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//require File
const {serverConfig,Logger} = require('./src/config');
const apiRouter = require('./src/routers');

const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.post('/get-text',async(req,res)=>{
    
    const {prompt} = req.body;

    if(!prompt){

        res.status(301).json({
            message: "nothing in Body request data"
        })
    }

    const result = await model.generateContent(prompt);
    res.status(201).json({
        message: result.response.text()
    })
})

app.use('/api',apiRouter)


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is listening on ${serverConfig.PORT}`);
    // Logger.info('Successfully started the server', 'root',{})
})