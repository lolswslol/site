const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const Schema = mongoose.Schema;
const bcrypt =  require('bcrypt-nodejs');

let emailLengthChecker = (email)=>{
    if(!email){
        return false;
    }else {
        if(email.length<5||email.length>30){
            return false
        } else {
            return true;
        }
    }
};

let validEmailChecker = (email)=>{
  if(!email){
      return false;
  }else {
      const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return regExp.test(email);
  }
};

let usernameLengthChecker = (username)=>{
    if(!username){return false}
    else {
        if(username.length<5 || username.length>30){return false}
        else return true;
    }
};

let validUsernameChecker = (username)=>{
    if(!username) return false;
    else {
        const regExp = new RegExp(/^[a-z0-9_-]{5,30}$/);
        return regExp.test(username);
    }
};

let passwordLengthCheck = (password)=>{
    if(!password){
        return false
    }else {
        if(password.length<5 || password.length>30){
            return false
        }else return true
    }
};


let validPassword = (password)=>{
    if(!password){
        return false;
    }else {
        const regExp = new RegExp(/^[a-z0-9_-]{5,30}$/);
        return regExp.test(password)
    }
};

const usernameValidators=[
    {validator: usernameLengthChecker,message:"Username must be at least 5 characters but no more than 30"},
    {validator: validUsernameChecker,message:"Username must contain a correct characters"}
];

const emailValidators = [
    {validator: emailLengthChecker,message:'E-mail must be at least 5 characters but no more than 30'},
    {validator:validEmailChecker,message:'E-mail must contain a correct characters'}
];

const passwordValidators = [
    {validator: passwordLengthCheck,message:'Password must be at least 5 characters but no more than 30 '},
    {validator: validPassword,message:'Password must contain a correct characters'}
];

const userSchema = new Schema({
    email:{type:String,required:true,unique:true,lowercase:true,validate:emailValidators},
    username:{type:String,required:true,unique:true,lowercase:true,validate:usernameValidators},
    password:{type:String,required:true,validate:passwordValidators}

});



userSchema.pre('save',function(next){
    if(!this.isModified('password')){
        return next();
    }
    bcrypt.hash(this.password,null,null,(err,hash)=>{
        if(err) return next(err);
        this.password = hash;
        next();
    })
});

userSchema.methods.comparePassword = (password)=>{
    return bcrypt.compareSync(password,this.password);
};

module.exports=mongoose.model('User',userSchema);