import React from 'react';
import './App.css';
import Timetable from './Timetable'
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loading: true,
            data: []
        };
    }

    getLoader() {
        return <CircularProgress/>;
    }

    componentWillMount() {
        setTimeout(() => fetch('http://afternoon-caverns-61867.herokuapp.com/api/v1/get_all')
            .then((response) => response.text())
            .then((json) => {
                this.setState({loading: false, data: JSON.parse(json)})
            }, null), 2000);
    }

    render() {
        return <><h1>School timetable</h1>
            {this.state.loading ? this.getLoader() : <Timetable data={this.state.data}/>}</>;
    }
}

export default App;
