import React from 'react';
import { connect } from 'react-redux';
import { buyCoin } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
      buyCoin: price => dispatch(buyCoin(price))
    };
};

const ConnectedCoinButton = (props) => {
    return (
        <button onClick={() => props.buyCoin(props)}>{props.name} {props.price}</button>
    )
}

const CoinButton = connect(null, mapDispatchToProps)(ConnectedCoinButton);
export default CoinButton;
