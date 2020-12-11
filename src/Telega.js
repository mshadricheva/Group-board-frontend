import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import './Telega.css';
import MessageList from "./MessageList";
import TransitionsModal from "./Modal";

function AddButton(props) {
    return (
        <React.Fragment>
            <Grid item xs={6}>
                <Card className={"addMessage"}>
                    <CardActions>
                        <TransitionsModal text={"Add message"}/>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    )
}

class Telega extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return <> <MessageList messages={this.data} /><br/>
               <AddButton/>
            </>
    }
}

export default Telega