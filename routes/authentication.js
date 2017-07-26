const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports=(router)=>{



    router.post('/register',(req,res)=>{
        if(!req.body.email){
            res.json({success:false,message:'You must provide E-mail'});
        }else {
            if(!req.body.username){
                res.json({success:false,message:'You must provide Username'});
            }else {
                if(!req.body.password){
                    res.json({success:false,message:'You must provide Password'});
                }else {
                    let user= new User({
                        email:req.body.email.toLowerCase(),
                        username:req.body.username.toLowerCase(),
                        password:req.body.password
                    });
                    user.save((err)=>{
                       if(err){
                           if(err.code===11000)
                           res.json({success:false,message:'Username or e-mail already exist'});
                           else {
                               res.json({success:false,message:'Ups, there are error :',err});
                           }
                       }else {
                           res.json({success:true,message: 'User saved!'});
                       }
                    });
                }

            }
        }

    });

    router.get('/checkEmail/:email',(req,res)=>{
        if(!req.params.email){
            res.json({success:false,message:'E-mail не отправлен'})
        }else {
            User.findOne({email: req.params.email},(err,email)=>{
                if(err){
                    res.json({success:false,message:'Ups, error'})
                }else {
                    if(email){
                        res.json({success:false,message:'E-mail уже занят'})
                    }else {
                        res.json({success:true,message:'E-mail доступен'})
                    }
                }
            })

        }
    });

    router.get('/checkUsername/:username',(req,res)=>{
        if(!req.params.username){
            res.json({success:false,message:'Имя пользователя не отправлены'})
        }else {
            User.findOne({username:req.params.username},(err,user)=>{
                if(err){
                    res.json({success:false,message:err})
                }else {
                    if(user){
                        res.json({success:false,message:'Имя пользователя уже занято'})
                    }else {
                        res.json({success:true,message:'Имя пользователя доступено'})
                    }
                }
            })

        }
    });

    router.post('/login',(req,res)=>{
       if(!req.body.username){
           res.json({succes:false, message:'No username was provided'})
       }else {
           if(!req.body.password){
               res.json({success: false, message:'No password was provided'})
           }else {
               User.findOne({username:req.body.username.toLowerCase()},(err,user)=>{
                   if(err){
                       res.json({succes:false,message:err})
                   }else {
                       if(!user){
                           res.json({success:false,message:'Username not found'})
                       }else {
                           const validPassword = user.comparePassword(req.body.password);
                           if(!validPassword){
                               res.json({success:false,message:'Passwrod does not match'})
                           }else {
                               const token = jwt.sign({userId: user._id},config.secret,{expiresIn:'24h'});


                               res.json({success: true,message:'Success!',token:token,user:{username:user.username}})
                           }
                       }
                   }
               })
           }
       }
    });

    /*router.use((req,res,next)=>{
       const token= req.headers['authorization'];
       if(!token){
           res.json({succes:false,message:'No token provided'})
       }else {
           jwt.verify(token,config.secret,(err,decoded)=>{
               if(err){
                   res.json({succes:false,message:'Token invalid:' +err})
               }else {
                   req.decoded = decoded;
                   next();
               }
           })
       }
    });*/

    router.get('/profile',(req,res)=>{
        User.findOne({_id:req.decoded.userId}).select('username email').exec((err,user)=>{
            if(err){
                res.json({success:false,message:err})
            }else {
                if(!user){
                    res.json({success:false,message:'Can not fine user'})
                }else {
                    res.json({success:true,user:user})
                }
            }
        })
    });


    return router
};