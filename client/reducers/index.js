const initialState = {
    blockData: [{name:'Bitcoin', price: 7000, rate: 100}, {name:'Ethereum', price: 500, rate: 20}],
    cash: 15000,
    rate: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_COIN':
            return Object.assign({}, state, {
                cash: state.cash + action.cash,
                rate: state.rate + action.rate
            })
        case 'UPDATE_CASH':
            return Object.assign({}, state, {
                cash: state.cash + state.rate
            })
        default:
            return state;
        }
}

export default reducer;