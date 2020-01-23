import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Exercise = function(props){
    return(
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td><Link to={'/edit-exercise/'+props.exercise._id}>edit</Link> | <Link to='' onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</Link></td>
        </tr>
    )
}

class ExerciseList extends React.Component{

    constructor(props){
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/exercises')
        .then(response=>{
            this.setState({exercises:response.data})
        }).catch(err=>console.log('Error '+err));
    }

    exerciseList(){
        return this.state.exercises.map(currentExercise=>{
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id}></Exercise>
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:8000/exercises/'+id)
        .then(response=>{
        console.log(response.data);
        this.setState({exercises:this.state.exercises.filter(el=>el._id!==id)});
    })
        .catch(err=>console.log(err));

        
    }



    render(){
        return(
            <div>
                <h3>Logged Exercise</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.exerciseList()}
                </tbody>
                </table>
            </div>
        );
    }
}

export default ExerciseList;