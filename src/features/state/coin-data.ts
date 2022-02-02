import { CoinDataProcessor } from "../../data-processor/coin-data-processor";

declare module '@cucumber/cucumber' {
    
    interface CoinRankingData {

        coinDataProcessor: CoinDataProcessor
        coinHistory: CoinHistory
        latestHistory: CoinHistoryEntry
        xDaysBackHistory: {
            entry: CoinHistoryEntry
            daysBack: number
        }
    }
}