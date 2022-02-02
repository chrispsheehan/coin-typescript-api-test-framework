import { CoinRankingApiCoins } from "../../coin-ranking-api/coin-ranking-api-coins";
import { CoinRankingApiExchanges } from "../../coin-ranking-api/coin-ranking-api-exhanges";
import { CoinDataProcessor } from "../../data-processor/coin-data-processor";

declare module '@cucumber/cucumber' {
    interface World {
        coinsApi: CoinRankingApiCoins
        exchangesApi: CoinRankingApiExchanges  
        coinDataProcessor: CoinDataProcessor
        coinHistory: CoinHistory
    }
}