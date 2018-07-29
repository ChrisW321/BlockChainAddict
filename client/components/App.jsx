import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getBlockData()
    }

    getBlockData() {
        axios.get('https://chain.so/api/v2/get_info/DOGE')
        .then(res => console.log(res.data));
    }
    render() {
        return (
            <div>TestRender</div>
        )
    }
}
export default App;
