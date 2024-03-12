const mongoose=require('mongoose');
const {model} = mongoose;

const UserSchema= new mongoose.Schema({
    Username:{type:String,required:true,min:4,unique:true},
    Password:{type:String,required:true,min:8}
});

const UserModel=model('User',UserSchema);

module.exports= UserModel;