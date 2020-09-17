var express=require('express');
var router=express.Router();

var ctrluser=require('../controller/controller');

router.post('/signup',ctrluser.signup);
router.post('/login',ctrluser.login);
// router.get('/signup',ctrluser.usersignup);
// router.get('/login',ctrluser.loginweb);
// router.get('/home',ctrluser.homeweb);

router.post('/compro',ctrluser.companyprofile);
router.post('/profile',ctrluser.profile);
router.post('/post',ctrluser.postjob);
router.get('/viewjob',ctrluser.viewpostjob);
// router.post('/apply',ctrluser.AppliedJobs);


router.get('/all/:id',ctrluser.viewall);
router.get('/companyprofile/:id',ctrluser.viewcompanyprofile);

router.get('/select/:userId',ctrluser.selectone);

router.put('/updateuser/:id',ctrluser.updateRecord);

router.delete('/delete/:userId',ctrluser.delete);


router.post('/productdetail',ctrluser.addproduct);

module.exports=router;