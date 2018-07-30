import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CoinButton from './CoinButton.jsx';

const mapStateToProps = state => {
    return { blockData: state.blockData, cash: state.cash };
};

class ConnectedApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.blockData.map(coin => <CoinButton name={coin.name} price={coin.price} rate={coin.rate}/>)}
                <div>{this.props.cash}</div>
                <div>{this.props.rate}</div>
            </div>
        )
    }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
