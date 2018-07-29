const initialState = {
    blockData: []
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
          return { ...state, blockData: [...state.blockData, action.payload] };
        default:
          return state;
      }
  }

  export default rootReducer;