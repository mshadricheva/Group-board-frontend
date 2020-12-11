import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import './Telega.css';
import axios from 'axios';


function Message(props) {

    const handleDelete = () => {
        axios.delete('http://localhost:5000/api/v1/delete', {'data': props.message})
            .then(function(response) {
                console.log(response);
                window.location.reload(true);
            })
    }

    if (props.message['id'] != null) {
        return (
            <React.Fragment>
                <Grid item xs={6}>
                    <Card className={'message'} key={props.message['id']}>
                        <CardHeader
                            action={
                                <Button type="button" className={"openModal"} onClick={handleDelete}>
                                    <DeleteIcon/>
                                </Button>
                            }
                            title={props.message.message}
                            subheader={props.message.name}
                        />
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }
    return (<></>);
}

export default Message;