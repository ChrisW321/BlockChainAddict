const initialState = {
    blockData: [{name:'Bitcoin', price: 7000, rate: 100}, {name:'Ethereum', price: 500, rate: 20}],
    cash: 0
};

const reducer = (state = initialState, action) => {
switch (action.type) {
    case 'ADD_ARTICLE':
        return { ...state, blockData: [...state.blockData, action.payload] };
    default:
        return state;
    }
}

export default reducer;