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


router.get('/allBlogs',(req,res)=>{
   Blog.find({},(err,blogs)=>{
       if(err){
           res.json({success:false,message:err})
       }else{
           if(!blogs){
               res.json({success:false,message:'No blogs was founded'})
           }else {
               res.json({success:true, blogs:blogs})
           }
       }
   }).sort({'_id': -1})
});

router.get('/singleBlog/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success:false,message:'No Id was provided'})
    }else {
        Blog.findOne({ _id : req.params.id },(err,blog)=>{
            if(err){
                res.json({success:false,message:'Not correct id of blog'})
            }else {
                if(!blog){
                    res.json({success:false,message:'There no blog with current id'})
                }else {
                    User.findOne({_id:req.decoded.userId},(err,user)=>{
                        if(err){
                            res.json({success:false,message:err})
                        }else {
                            if(!user){
                                res.json({success:false,message:'USer has not found'})
                            }else {
                                if(user.username!==blog.createdBy){
                                    res.json({success:false,message:'You are not auth to edit this blog'})
                                }else {
                                    res.json({success:true,blog:blog})
                                }
                            }
                        }
                    })
                }
            }
        })
    }
});


router.put('/updateBlog',(req,res)=>{
    if(!req.body._id){
        res.send({success:false,message:'Blog id wasnt provided'})
    }else {
        Blog.findOne({_id:req.body._id},(err,blog)=>{
            if(err){
                res.json({success:false,message:'Not a valid blog Id'})
            }else {
                if(!blog){
                    res.json({success:false,message:'Blog was not found'})
                }else {
                    User.findOne({_id:req.decoded.userId},(err,user)=>{
                        if(err){
                            res.json({success:false,message:err})
                        }else {
                            if(!user){
                                res.json({success:false,message:'User was not found'})
                            }else {
                                if(user.username!==blog.createdBy){
                                    res.json({success:false,message:'You are not authorizated for edit blog'})
                                }else {
                                    blog.title=req.body.title;
                                    blog.body=req.body.body;
                                    blog.save(err=>{
                                        if(err){
                                            res.json({success:false,message:'Thera some trouble for saving edited blog'})
                                        }else {}
                                        res.json({success:true,message:'Blog has been edited'})
                                    })
                                }
                            }
                        }
                    })
                }
            }

        })
    }
});

router.delete('/deleteBlog/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success:false,message:'Blog id was not provided'})
    }else {
        Blog.findOne({_id:req.params.id},(err,blog)=>{
            if(err){
                res.json({success:false,message:'Invalid blog id'})
            }else {
                if(!blog){
                    res.json({success:false,message:'Blog was not found'})
                }else {
                    User.findOne({_id:req.decoded.userId},(err,user)=>{
                        if(err){
                            res.json({success:false,message:'Unable to auth user'})
                        }else {
                            if(user.username!==blog.createdBy){
                                res.json({ success: false, message: 'You cant delete this blog'})
                            }else {
                                blog.remove((err)=>{
                                    if(err){
                                        res.json({ success: false, message: 'Can not delete this blog from database'+err})
                                    }else {
                                        res.json({success: true, message: 'Blog has been deleted'})
                                    }
                                })
                            }
                        }
                    })

                }

            }
        })
    }
});

router.put('/likeBlog',(req,res)=>{
   if(!req.body.id){
       res.json({success:false, message:'No id was provided'})
   }else {
       Blog.findOne({_id:req.body.id},(err,blog)=>{
           if(err){
               res.json({success:false,message:'Invalid blog Id'})
           }else {
               if(!blog){
                   res.json({success:false,message:'Blog was not found!'})
               }else {
                   User.findOne({_id:req.decoded.userId},(err,user)=>{
                       if(err){
                           res.json({success:false, message:'Something goes wrong'})
                       }else {
                           if(!user){
                               res.json({success:false,message:'Can not auth user'})
                           }else{
                               if(user.username===blog.createdBy){
                                   res.json({success:false,message:'You cannt like your own posts'})
                               }else {
                                   if(blog.likedBy.includes(user.username)){
                                       res.json({success:false,message: 'You have already liked this post'})
                                   }else {
                                       if(blog.dislikedBy.includes(user.username)){
                                           blog.dislikes--;
                                           const arrayIndex=blog.dislikes.toString().indexOf(user.username);
                                           blog.dislikedBy.splice(arrayIndex,1);
                                           blog.likes++;
                                           blog.likedBy.push(user.username);
                                           blog.save((err)=>{
                                               if(err){
                                                   res.json({success:false,message:err})
                                               }else {
                                                   res.json({success:true,mesage:'You have liked this post'})
                                               }
                                           })
                                       }else {
                                           blog.likes++;
                                           blog.likedBy.push(user.username);
                                           blog.save((err)=>{
                                               if(err){
                                                   res.json({success:false,message:err})
                                               }else {
                                                   res.json({success:true,mesage:'You have liked this post'})
                                               }
                                           })
                                       }
                                   }
                               }
                           }
                       }
                   })
               }
           }
       })
   }
});

    router.put('/dislikeBlog',(req,res)=>{
        if(!req.body.id){
            res.json({success:false, message:'No id was provided'})
        }else {
            Blog.findOne({_id:req.body.id},(err,blog)=>{
                if(err){
                    res.json({success:false,message:'Invalid blog Id'})
                }else {
                    if(!blog){
                        res.json({success:false,message:'Blog was not found!'})
                    }else {
                        User.findOne({_id:req.decoded.userId},(err,user)=>{
                            if(err){
                                res.json({success:false, message:'Something goes wrong'})
                            }else {
                                if(!user){
                                    res.json({success:false,message:'Can not auth user'})
                                }else{
                                    if(user.username===blog.createdBy){
                                        res.json({success:false,message:'You cannt dislike your own posts'})
                                    }else {
                                        if(blog.dislikedBy.includes(user.username)){
                                            res.json({success:false,message: 'You have already disliked this post'})
                                        }else {
                                            if(blog.likedBy.includes(user.username)){
                                                blog.likes--;
                                                const arrayIndex=blog.likes.toString().indexOf(user.username);
                                                blog.likedBy.splice(arrayIndex,1);
                                                blog.dislikes++;
                                                blog.dislikedBy.push(user.username);
                                                blog.save((err)=>{
                                                    if(err){
                                                        res.json({success:false,message:err})
                                                    }else {
                                                        res.json({success:true,message:'You have disliked this post'})
                                                    }
                                                })
                                            }else {
                                                blog.dislikes++;
                                                blog.dislikedBy.push(user.username);
                                                blog.save((err)=>{
                                                    if(err){
                                                        res.json({success:false,message:err})
                                                    }else {
                                                        res.json({success:true,message:'You have disliked this post'})
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }
                }
            })
        }
    });


return router
};