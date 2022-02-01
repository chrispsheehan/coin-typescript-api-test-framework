interface CoinDetail
{
    status: string
    data: {
        stats: {
            total: number,
            totalCoins: number,
            totalMarkets: number,
            totalExchanges: number,
            totalMarketCap: string,
            total24hVolume: string
        }
        coins: [
            {
                uuid: string,
                symbol: string,
                name: string,
                color: string,
                iconUrl: string,
                marketCap: string,
                price: string,
                listedAt: number,
                tier: number,
                change: string,
                rank: number,
                sparkline: string[],
                lowVolume: boolean,
                coinrankingUrl: string,
                "24hVolume": number,
                btcPrice: number
            }
        ]        
    }
}