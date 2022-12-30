const e = require("express");
const axios = require("axios");

exports.gettingResponseFromOpenAPI = async (req) => {
    
    inputPrompt = req.body.prompt;
    
    const response = await axios.post("https://api.openai.com/v1/completions",
    {
        "model": "text-davinci-003",
        "prompt": inputPrompt,
        "temperature": 0,
        "max_tokens": 10,
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