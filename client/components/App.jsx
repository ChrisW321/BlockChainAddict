import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CoinButton from './CoinButton.jsx';

const mapStateToProps = state => {
    return { blockData: state.blockData };
};

class ConnectedApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.props.blockData.map(coin => <CoinButton coinName={coin} />)}
            </div>
        )
    }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
