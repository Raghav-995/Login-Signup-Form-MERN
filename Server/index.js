const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const app = express();

app.use(cors(
  {
  origin: ["https://login-signup-form-mer.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set('strictQuery', false);
mongoose.connect(
  "mongodb://127.0.0.1:27017/myLoginrtegisterDb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected Successfully");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({email: email}, (err, user) => {
    if(user){
      if(password === user.password){
        res.send({message: "Login Successfull", user: user})
      }else {
        res.send({message: "Password Didn't matched." })
      }
    }else {
      res.send({message: "User Not Found!"})
    }
  })
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Registered" });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered!" });
        }
      });
    }
  });
});
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "../my-app/src/index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})

app.listen(9002, () => {
  console.log("app started on port 9002");
});
