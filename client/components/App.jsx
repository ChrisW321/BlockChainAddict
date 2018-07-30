import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CoinButton from './CoinButton.jsx';
import { updateCash } from '../actions/index.js';

const mapStateToProps = state => {
    return { blockData: state.blockData, cash: state.cash, rate: state.rate };
};
const mapDispatchToProps = dispatch => {
    return {
      updateCash: () => dispatch(updateCash())
    };
};

class ConnectedApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(this.props.updateCash, 100);
    }

    render() {
        return (
            <div>
                {this.props.blockData.map(coin => <CoinButton name={coin.name} price={coin.price} rate={coin.rate} cash={this.props.cash}/>)}
                <div>${this.props.cash}</div>
                <div>+${this.props.rate}</div>
            </div>
        )
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
