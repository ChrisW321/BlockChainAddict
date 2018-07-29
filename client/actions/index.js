export const addBlockData = blockData => {
    switch (action.type) {
        case 'ADD_BLOCK_DATA':
          return { ...state, blockData: [...state.blockData, action.payload] };
        default:
          return state;
      }
}
