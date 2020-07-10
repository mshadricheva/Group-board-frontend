import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Timetable.css';
import TransitionsModal from "./Modal";
import axios from 'axios';


function LessonCard(props) {

    const handleDelete = () => {
        axios.delete('http://afternoon-caverns-61867.herokuapp.com/api/v1/delete', {'data': props.lesson})
    }

    if (props.lesson['_id'] != null) {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Card className={'lesson.week_day'} key={props.lesson._id}>
                        <CardContent>
                            <Typography className={props.lesson.name} color="textSecondary">
                                Lesson: {props.lesson.name}
                            </Typography>
                            <Typography className={props.lesson.teacher} color="textSecondary">
                                Teacher: {props.lesson.teacher}
                            </Typography>
                            <Typography className={props.lesson.room} color="textSecondary">
                                Room: {props.lesson.room}
                            </Typography>
                            <Typography className={props.lesson.lesson_number} color="textSecondary">
                                Number: {props.lesson.lesson_number}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <TransitionsModal text={"Change lesson"} lesson={props.lesson}/>
                        </CardActions>
                        <CardActions>
                            <Button type="button" className={"openModal"} onClick={handleDelete}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }
    return (<></>);
}

function WeekDay(props) {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Card key={props.day[0]}>
                    <CardContent>
                        <Typography color="textPrimary">
                            {props.day[1]}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>);
}

function AddButton(props) {
    return (
        <React.Fragment>
            <Grid item xs={9}>
                <Card className={"addLesson"}>
                    <CardActions>
                        <TransitionsModal text={"Add lesson"} week_day={props.week_day} lesson={null}/>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    )
}


class Timetable extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return <> <Grid container spacing={4}>
            {[[0, 'Monday'], [1, 'Tuesday'], [2, 'Wednesday'], [3, 'Thursday'], [4, 'Friday'], [5, 'Saturday']].map((day) => (
                <>
                    <Grid item xs={2}>
                        <Grid container spacing={4} direction={"column"}>
                            <WeekDay day={day}/>
                            {this.data[day[0]].map((lesson) => (
                                <LessonCard lesson={lesson}/>
                                ))}
                                <AddButton week_day={day[1].toLowerCase()}/>
                        </Grid>
                    </Grid>
                </>))}
        </Grid></>
    }
}

export default Timetable