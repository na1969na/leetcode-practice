function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity;
  let maxProfit: number = 0;

  for (let i: number = 0; i < prices.length; i++) {
      if (minPrice > prices[i]) {
          minPrice = prices[i];
      }

      const currProfit = prices[i] - minPrice;

      if (currProfit > maxProfit) {
          maxProfit = currProfit;
      }
  }

  return maxProfit;

};