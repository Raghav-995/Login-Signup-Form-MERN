const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

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

mongoose.connect('mongodb+srv://raghavendrapathak0:Z6QKVTRm1B6GXszA@cluster0.a5duuyj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("MongoDB connected successfully..."))
  .catch((err) => console.log(err));

app.get('/',(req,res) => {

res.send("Server Successfully Connected to https://localhost:3001");
})

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password,name,date,city,country,gender,phone} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");

});
