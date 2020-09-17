const mongoose=require('mongoose');
var bcrypt=require('bcrypt');

mongoose.Promise=global.Promise;

var userSchema=mongoose.Schema({
  username:
    {
        type:String,
        required:true
    },
    mobileno:
    {
        type:String,
        required:true
    },
    email:
    
    {
        type:String,
        required:true
    },
    password:
    {
    type:String,
    required:true
},
createdAt:
{
    type:Date,
    "default":Date.now()
},
saltsecret:String
})

userSchema.pre('save',function(next)
{
    bcrypt.genSalt(10,(err,salt)=>
    {
        bcrypt.hash(this.password,salt,(err,hash)=>
        {
            this.password=hash;
            this.saltsecret=salt;
            next();
        })
    })
})

mongoose.model('user',userSchema,'userdata');