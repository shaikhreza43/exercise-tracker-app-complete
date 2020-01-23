const router = require('express').Router();
const Exercise = require('../models/exercises.model');

router.route('/').get((req,resp)=>{
    Exercise.find()
    .then(function(exercises){
        resp.json(exercises);
    })
    .catch(function(err){
        resp.status(400).json('Error '+err);
    });
});

router.route('/add').post((req,resp)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,description,duration,date
    });

    newExercise.save()
    .then(function(){
        resp.json('Exercise Added!');
    })
    .catch(function(err){
        resp.status(400).json('Error '+err);
    });
});

router.route('/:id').get((req,resp)=>{
    Exercise.findById(req.params.id)
    .then(function(exercise){
        resp.json(exercise);
    })
    .catch(function(err){
        resp.status(400).json('Error '+err);
    });
});

router.route('/:id').delete((req,resp)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(function(){
        resp.json('Exercise Deleted!');
    })
    .catch(function(err){
        resp.status(400).json('Error '+err);
    });
});

router.route('/update/:id').post((req,resp)=>{
    Exercise.findById(req.params.id)
    .then(function(exercise){
        exercise.username= req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(function(){
            resp.json('Exercise Updated!');
        })
        .catch(function(err){
            resp.status(400).json('Error '+err);
        });
    })
    .catch(function(err){
        resp.status(400).json('Error '+err);
    });
});


module.exports = router;