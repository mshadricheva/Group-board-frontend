import React from 'react';
import Grid from '@material-ui/core/Grid';
import Message from './Message';


class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.messages = JSON.parse(props.messages);
    }
    render() {
        return (
            <Grid container spacing={4} direction={"column"}>
                {
                    this.messages.map((message) => (
                            <Message message={message}/>
                        )
                    )
                }
            </Grid>
        )
    }
}

export default MessageList