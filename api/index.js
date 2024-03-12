const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const mongoose=require('mongoose');
const User=require('./models/user');
mongoose.connect('mongodb+srv://preetham10107:Fd9nQ85UGCqHnKP1@cluster0.jdhtetb.mongodb.net/?retryWrites=true&w=majority')
const express=require('express');
const app=express();
app.use(express.json())

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser);
const secret = 'whateveruuuuuu';
const salt = bcrypt.genSaltSync(10);
app.post('/test',(req,res)=>{
    const post = req.body;
    console.log(post);
})

app.post('/register',async (req,res) =>{
    //const{username, password} = req.body;
    const Username = req.body.Username;
    const Password = req.body.Password;
    console.log(Username);
    console.log(req.body);
    try{
        const UserDoc = await User.create({
            Username,
            Password:bcrypt.hashSync(Password,salt)
        });
        res.json(UserDoc);
        res.status(200);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
    console.log("out of the block");
})

//login
app.post('/login' ,async (req,res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;
    
    const UserDoc = await User.findOne({Username});
    
    const passOk=bcrypt.compareSync(Password, UserDoc.Password);
    console.log(passOk);
    if(passOk){
        jwt.sign({Username, id:UserDoc._id}, secret,{},(err,token) =>{
            if(err) throw err;
            res.cookie('token', token).json('ok');
            res.json(token);
            console.log("here");

        });
        res.status(200);
        console.log("running");
    }
    else{
        res.status(400).json('wrong credentials');
    }
});
//login--end
app.get('/profile', (req,res) => {
    res.json(req.cookies);
    console.log(req.cookies);
})
app.listen(4000);

//Fd9nQ85UGCqHnKP1

//mongodb+srv://preetham10107:<Fd9nQ85UGCqHnKP1>@cluster0.jdhtetb.mongodb.net/?retryWrites=true&w=majority