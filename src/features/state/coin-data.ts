import { CoinDataPrinter } from "../../data-processor/coin-data-printer";
import { CoinDataProcessor } from "../../data-processor/coin-data-processor";

declare module '@cucumber/cucumber' {
    
    interface CoinRankingData {

        coinDataProcessor: CoinDataProcessor
        coinDataPrinter: CoinDataPrinter
        coinHistory: CoinHistory
        coinUud: string
        coinUuidList: string[]
        latestHistory: CoinHistoryEntry
        xDaysBackHistory: {
            entry: CoinHistoryEntry
            daysBack: number
        }
    }
}