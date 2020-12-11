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


class MessageForm extends Component {
    constructor(props) {
        super(props);
        if (props.message)
            this.message = props.message
        else
            this.message = {name: '', message: ''};
        this.classes = props.styles;
        this.state = this.message;
    }

    handleClick = (e) => {
        console.log(this.state)
        axios.post('http://localhost:5000/api/v1/create_or_update', this.state)
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

    handleNameChange = (event) => {
        this.state.name = event.target.value;
    }
    handleMessageChange = (event) => {
        this.state.message = event.target.value;
    }


    render() {
        return (
            <div className={this.classes.paper}>
                <form className={this.classes.root} onSubmit={(e) => this.handleClick(e)} autoComplete="off">
                    <TextField
                        id="name"
                        label="Name"
                        onChange={(e) => this.handleNameChange(e)}
                        defaultValue={this.message ? this.message.name : null} /><br/>
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        onChange={(e) => this.handleMessageChange(e)}
                        defaultValue={this.message ? this.message.message  : null} /><br/>
                    <Button type="submit" className={"saveMessage"}>Save</Button>
                </form>
            </div>
        );
    }
}
export default MessageForm;