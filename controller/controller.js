
require('../config/passport');
require('../model/usermodel');
require('../model/EmpProfileModel');
require('../model/CompanyProfileModel');
require('../model/PostJob');
require('../model/AppliedJobs');

// require('../model/userModel');
var bcrypt=require('bcrypt');
const _=require('lodash');
const passport=require('passport-local');

const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');

var user=mongoose.model("user");
var newprofile=mongoose.model("user2");
var addform=mongoose.model("usered");
var jobpost=mongoose.model("user3");
var jobApply=mongoose.model("user4");

// var topic=mongoose.model("topic");

// var products=mongoose.model("products");

module.exports.signup=function(req,res,next)
{
var newuser=new user();
newuser.username=req.body.username;
newuser.email=req.body.email;
newuser.mobileno=req.body.mobileno;
newuser.password=req.body.password;
newuser.save((err,doc)=>
{
    if(err)
    {
console.log("Error in added data"+err);
    }
    else
{
res.send(doc);
}
})
}
module.exports.login=function(req,res,next)
{
    user.findOne({email:req.body.email},
        (err,user)=>
        {
            if(err)
            console.log(err);
            if(user==null)
            {
                return res.json("user not exists");
            }
            if(user)
            {
                console.log(req.body.password);
                console.log(user.password); 
            }



var match=bcrypt.compareSync(req.body.password,user.password);
console.log(match);

if(match)
{
    console.log("password is matched");
    return res.json({"token":jwt.sign({_id:user._id},"ABC111",{expiresIn:"30m"}),"id":_.pick(user,['_id'])});
    
}
else
{
console.log("password not matched");
return res.json({status:false,data:null,message:'password not correct'});
}
}

);
 }

// module.exports.usersignup=function(req,res,next)
// {
// res.sendFile(__dirname+'/signup.html');
// }
// module.exports.loginweb=function(req,res,next)
// {
// res.sendFile(__dirname+'/login.html');
// }
// module.exports.homeweb=function(req,res,next)
// {
//     res.send(__dirname +'/home.html');
// }



module.exports.profile=(req,res)=>{
    const newTopic=new newprofile({
        UserId:req.body.UserId,
        ResumeHeadline:req.body.ResumeHeadline,
        Degree:req.body.Degree,
        Specialization:req.body.Specialization,
        University:req.body.University,
        PassoutYear:req.body.PassoutYear,
        Grades:req.body. Grades,
        Skill1:req.body.Skill1,
        Skill2:req.body.Skill2,
        Skill3:req.body.Skill3,
        ProjectTitle:req.body.ProjectTitle,
        ProjectStatus:req.body.ProjectStatus,
        ProjectStatus:req.body.ProjectStatus,
        WorkingFrom:req.body.WorkingFrom,
        WorkingTo:req.body.WorkingTo,
        ProjectDescription:req.body.ProjectDescription,
        Title:req.body.Title,
        Institution:req.body.Institution,
        PeriodFrom:req.body.PeriodFrom,
        PeriodTo:req.body.PeriodTo,
        Description:req.body.Description,
        DateOfBirth:req.body.DateOfBirth,
        Gender:req.body.Gender,
        Gender:req.body.Gender,
        MarritalStatus:req.body.MarritalStatus,
        Address:req.body.Address,
        Pincode:req.body. Pincode,
        Hometown:req.body.Hometown

        
    });
    return newTopic.save().then((docs)=>{
       
        res.status(200).json({
            success:true,
            message:"new topic addeded",
            topic:docs
            
        })   
                                                           
    })
    
    .catch((error)=>
    {
        res.status(500).json({
            success:false,
            message:"Error in adding",
            error:error.message
        })
    });
}

module.exports.companyprofile=(req,res)=>{
    const start=new addform({
        UserId:req.body.UserId,
        AssistantManager:req.body.AssistantManager,
        CompanyName:req.body.CompanyName,
        Email:req.body.Email,
        CompanyDescription:req.body.CompanyDescription,
        City:req.body.City,
        State:req.body.State,
        Country:req.body.Country,
        Pincode:req.body.Pincode
    })
    
    return start.save().then((docs)=>{
       
        res.status(200).json({
            success:true,
            message:"new topic addeded",
            topic:docs
            
        })   
                                                           
    })
    
    .catch((error)=>
    {
        res.status(500).json({
            success:false,
            message:"Error in adding",
            error:error.message
        })
    });
}



module.exports.viewcompanyprofile=(req,res)=>
{

    
        addform.find({UserId:req.params.id},(err,doc)=>{
            if(err)
            res.send(err);
            else
            res.send(doc);
        })
 
    }      




module.exports.postjob=(req,res)=>{
    const newuser3=new jobpost({
        PostDescription:req.body.PostDescription,
        Company:req.body.Company,
        Experience:req.body.Experience,
        Location:req.body.Location,
        JobDescription:req.body.JobDescription,
        Status:req.body.Status,
        Openings:req.body.Openings,
        PostTime:req.body.PostTime
    })
    
    return newuser3.save().then((docs)=>{
       
        res.status(200).json({
            success:true,
            message:"new topic addeded",
            topic:docs
            
        })   
                                                           
    })
    
    .catch((error)=>
    {
        res.status(500).json({
            success:false,
            message:"Error in adding",
            error:error.message
        })
    });
}

module.exports.viewpostjob=(req,res)=>
{

    
        jobpost.find({UserId:req.params.id},(err,doc)=>{
            if(err)
            res.send(err);
            else
            res.send(doc);
        })

    }



// module.exports.AppliedJobs=(req,res)=>{
//     const newuser4=new jobApply({
//         PostDescription:req.body.PostDescription,
        
//     })
    
//     return newuser4.save().then((docs)=>{
       
//         res.status(200).json({
//             success:true,
//             message:"new topic addeded",
//             topic:docs
            
//         })   
                                                           
//     })
    
//     .catch((error)=>
//     {
//         res.status(500).json({
//             success:false,
//             message:"Error in adding",
//             error:error.message
//         })
//     });
// }



module.exports.viewall=(req,res)=>
{
    newprofile.find({UserId:req.params.id},(err,doc)=>{
        if(err)
        res.send(err);
        else
        res.send(doc);
    })
    
        // newprofile.find((err,doc)=>{
        //     if(err)
        //     res.send(err);
        //     else
        //     res.send(doc);
        // })
       




    // newprofile.find().select('_id ResumeHeadline Degree Specialization University PassoutYear Grades Skill1 Skill2 Skill3 WorkingFrom Title Institution Period Description DateOfBirth MarritalStatus Address Pincode HomeTown').then((docs)=>
    // {
    //     return res.status(200).json({
    //         success:true,
    //         message:'List of users',
    //         User:docs
    //     })
    // })
    // .catch((err)=>
    // {
    //     res.status(500).json({
    //         success:false,
    //         message:'Server error. Please try again',
    //         error:err.message

    //     })
    // });

    // userId:req.param.id;
    // newprofile.find(userId:userId).exec(function(err,doc){
    //     if(err)
    //     {
    //         res.send(err);
    //         console.log(err);
    //     }
    //     else
    //     res.send(doc);
    // });

}




module.exports.selectone=(req,res)=>{
    const id=req.params.userId;
    topic.findById(id).then((docs)=>
    {
        return res.status(200).json({
            success:true,
            message:'more on ${docs.title}',
            User:docs
        });
    })

    .catch((err)=>
    {
        res.status(500).json({
            success:true,
            message:'No record found',
            error:err.message
        })
    });
}
    
    module.exports.updateRecord=(req,res)=>
    {
        const id=req.params.id;
        const updateData=req.body;
        user.update({_id:id},{$set:updateData})
        .exec()
        .then(()=>
        {
            res.status(200).json({
                success:true,
                message:'User is updated',
                updateRecord:updateData
            });
        })
        .catch((err)=>
        {
            res.status(500).json({
                success:false,
                message:'server error.Please try again',
                error:err.message
            })    
        })

    }

    module.exports.delete=(req,res)=>{
        const id=req.params.userId;
        topic.findByIdAndDelete(id).then((docs)=>
        {
            return res.status(200).json({
                success:true,
                message:'Record deleted',
                User:docs
            });
        })
    
        .catch((err)=>
        {
            res.status(500).json({
                success:true,
                message:'No record found',
                error:err.message
            })
        });
    }


    module.exports.addproduct=(req,res)=>{
        const productdetail=new products({
            customername:req.body.customername,
            productname:req.body.productname,
            price:req.body.price,
            variety:req.body.variety,
            contact:req.body.contact,
            quantity:req.body.quantity
        });
        return productdetail.save().then((docs)=>{
            res.status(200).json({
                success:true,
                message:"new topic added",
                topic:docs
            })                                                       
        })
        .catch((error)=>
        {
            res.status(500).json({
                success:false,
                message:"Error in adding",
                error:error.message
            })
        });
    }