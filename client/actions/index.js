export const buyCoin = coin => {
  return { type: 'BUY_COIN', cash: -coin.price, rate: coin.rate }
}



