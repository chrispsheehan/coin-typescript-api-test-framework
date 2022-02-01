export class CoinDataProcessor {

    getCoinBreakdown(coinDetail: CoinDetail, coinName: string): CoinBreakdown | undefined {
        
        return coinDetail.data.coins.find((coin: CoinBreakdown) => coin.name.toLowerCase() === coinName.toLowerCase())
    }
}