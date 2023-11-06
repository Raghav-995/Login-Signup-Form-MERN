const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const FormDataModel = require ('./models/FormData');
const URL = process.env.Mongo_Url;

const app = express();
app.use(express.json());
app.use(cors(
    {
    origin: ["https://login-signup-frontend-six.vercel.app/"],
    methods: ["POST","GET"],
    credentials: true
    }
));

mongoose.connect(URL)
    .then(() => console.log("MongoDB connected successfully..."))
  .catch((err) => console.log(err));

app.get('/',(req,res) => {

res.send("Server Successfully Connected to https://localhost:3001");
})


app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});
