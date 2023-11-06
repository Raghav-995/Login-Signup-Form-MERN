const cors = require('cors');
const express = require('express');


const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors(
    {
    origin: ["https://login-signup-frontend-six.vercel.app/"],
    methods: ["POST","GET"],
    credentials: true
    }
));


app.get('/',(req,res) => {

res.send("Server Successfully Connected to https://localhost:3001");
})


app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");

});
