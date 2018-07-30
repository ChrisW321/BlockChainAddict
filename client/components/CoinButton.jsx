import React from 'react';
import { connect } from 'react-redux';
import { buyCoin } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        buyCoin: (price, cash, coin) => {
            if (price < cash) {
                return dispatch(buyCoin(coin))
            } else {
                return
            }
          } 
    };
};

const ConnectedCoinButton = (props) => {
    return (
        <button onClick={() => props.buyCoin(props.price, props.cash, props)}>{props.name} {props.price}</button>
    )
}

const CoinButton = connect(null, mapDispatchToProps)(ConnectedCoinButton);
export default CoinButton;
