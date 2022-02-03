export class CoinDataProcessor {

    public getCoinBreakdown(coinDetail: CoinDetail, coinName: string): CoinBreakdown | undefined {
        
        console.log(`Obtaining coin details for ${coinName}`)
        return coinDetail.data.coins.find((coin: CoinBreakdown) => coin.name.toLowerCase() === coinName.toLowerCase())
    }


    public getSortedCoinHistory(coinHistoryEntryList: CoinHistoryEntry[]): CoinHistoryEntry[] {
        
        coinHistoryEntryList.sort((entry: CoinHistoryEntry) => entry.timestamp);
        return coinHistoryEntryList.reverse();
    }
    

    public sortByFirstSeenDateTime(coinBreakdownList: CoinBreakdown[]): CoinBreakdown[] {

        coinBreakdownList.sort((entry: CoinBreakdown) => entry.listedAt);
        return coinBreakdownList.reverse();
    }
}