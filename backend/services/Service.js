const e = require("express");
const axios = require("axios");

exports.gettingResponseFromOpenAPI = async (req) => {
    
    inputPrompt = "Write a LinkedIn Post for " + req.body.prompt;
    
    const response = await axios.post("https://api.openai.com/v1/completions",
    {
        "model": "text-davinci-003",
        "prompt": inputPrompt,
        "temperature": 0,
        "max_tokens": 100,
        "n": 1
    },
    {
       headers :{
        'Authorization' : `Bearer ${process.env.OPENAI_SECRET_KEY}`
       } 
    }
    )
    console.log(response.data)
    return response.data;
};