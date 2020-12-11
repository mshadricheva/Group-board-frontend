import React from 'react';
import './App.css';
import Telega from './Telega';
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
        setTimeout(() => fetch('http://localhost:5000/api/v1/get_all')
            .then((response) => response.text())
            .then((json) => {
                this.setState({loading: false, data: JSON.parse(json)})
            }, null), 2000);
    }

    render() {
        return <><h1>MKN Dashboard</h1>
            {this.state.loading ? this.getLoader() : <Telega data={this.state.data[0]}/>}</>;
    }
}

export default App;
