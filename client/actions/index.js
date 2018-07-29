export const addBlockData = blockData => {
    switch (action.type) {
        case 'ADD_BLOCK_DATA':
          return { ...state, articles: [...state.blockData, action.payload] };
        default:
          return state;
      }
}
