import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));


class LessonForm extends Component {
    constructor(props) {
        super(props);
        if (props.lesson)
            this.lesson = props.lesson
        else
            this.lesson = {name: '', lesson_number: '', teacher: '', room: '', week_day: props.week_day};
        this.classes = props.styles;
        this.state = this.lesson;
    }

    handleClick = (e) => {
        console.log(this.state)
        axios.post('http://afternoon-caverns-61867.herokuapp.com/api/v1/create_or_update', this.state)
            .then(function(response) {
                console.log(response);
                window.location.reload(true);
            })
            .catch(function(error){
                alert('Некорректная запись!');
                //Perform action based on error
            });
        e.preventDefault();
    }

    handleTeacherChange = (event) => {
        this.state.teacher = event.target.value;
    }
    handleLessonChange = (event) => {
        this.state.name = event.target.value;
    }
    handleLessonNumberChange = (event) => {
        this.state.lesson_number = event.target.value;
    }
    handleRoomChange = (event) => {
        this.state.room = event.target.value;
    }


    render() {
        return (
            <div className={this.classes.paper}>
                <form className={this.classes.root} onSubmit={(e) => this.handleClick(e)} autoComplete="off">
                    <TextField
                        id="name"
                        label="Lesson"
                        onChange={(e) => this.handleLessonChange(e)}
                        defaultValue={this.lesson ? this.lesson.name : null} /><br/>
                    <TextField
                        id="teacher"
                        label="Teacher"
                        onChange={(e) => this.handleTeacherChange(e)}
                        defaultValue={this.lesson ? this.lesson.teacher  : null} /><br/>
                    <TextField
                        id="room"
                        label="Room"
                        onChange={(e) => this.handleRoomChange(e)}
                        defaultValue={this.lesson ? this.lesson.room : null} /><br/>
                    <TextField
                        id="number"
                        label="Number"
                        type="number"
                        onChange={(e) => this.handleLessonNumberChange(e)}
                        defaultValue={this.lesson ? this.lesson.lesson_number: null} /><br/>
                    <Button type="submit" className={"saveLesson"}>Save</Button>
                </form>
            </div>
        );
    }
}

export default LessonForm;