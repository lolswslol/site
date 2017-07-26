const User = require('../models/user');
const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports=(router)=> {

router.post('/newBlog',(req,res)=>{
    if(!req.body.title){
        res.json({suceess:false,message:'Title is required'})
    }else{
        if(!req.body.body){
            res.json({success:false,message:'Body is required!'})
        }else {
            if(!req.body.createdBy){
                res.json({success:false,message:'Body is required'})
            }else{
                const blog = new Blog({
                    title:req.body.title,
                    body:req.body.body,
                    createdBy: req.body.createdBy
                });
                blog.save((err)=>{
                    if(err){
                        if(err.errors){
                            if(err.errors.title){
                                res.json({success:false,message:err.errors.title.message})
                            }else {
                                if(err.errors.body){
                                    res.json({success:false,message:err.errors.body.message})
                                }else {
                                    if(err.errors.createdBy){
                                        res.json({success:false,message:err.errors.createdBy.message})
                                    }else {
                                        res.json({success:false,message:err.errmsg})
                                    }
                                }
                            }
                        }else {
                            res.json({success:false,message:err})
                        }

                    }else {
                        res.json({success:true,message:'Blog is saved'})
                    }
                })
            }

        }
    }
});



return router
};