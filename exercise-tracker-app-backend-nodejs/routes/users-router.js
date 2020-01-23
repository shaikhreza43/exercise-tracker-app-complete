const router = require('express').Router();
const User = require('../models/users.model');


router.route('/').get((req,resp)=>{
User.find()
    .then(function(users){
        resp.json(users);
    })
    .catch(function(err){
        resp.status(400).json('Error :'+err);
    });
});

router.route('/add').post((req,resp)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(()=>{resp.json('User Added!')})
    .catch((err)=>{resp.status(400).json('Error '+err)});
});

module.exports = router;