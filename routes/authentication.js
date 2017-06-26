const User = require('../models/user');

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


    return router
};