const express = require("express");
const app = express();
require('dotenv').config()

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', //To add the localhost of react
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
 
app.listen(3001, () => {
  console.log("Running Nodejs server in 3001");
});

// async function getResponseFromOpenAPI() {
//     const response = await axios.post("https://api.openai.com/v1/completions",
//     {
//         "model": "text-davinci-003",
//         "prompt": "Tagline for icecream shop",
//         "temperature": 0.9,
//         "max_tokens": 10,
//         "n": 1
//     },
//     {
//        headers :{
//         'Authorization' : `Bearer ${process.env.OPENAI_SECRET_KEY}`
//        } 
//     }
//     )

//     const responseData = response.data;
//     console.log(responseData)
// }

// getResponseFromOpenAPI();

const postRouter = require("./router/Endpoints");
 
app.use("/", postRouter);