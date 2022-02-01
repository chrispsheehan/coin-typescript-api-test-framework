import { CoinRankingApiCoins } from "../../coin-ranking-api/coin-ranking-api-coins";
import { CoinRankingApiExchanges } from "../../coin-ranking-api/coin-ranking-api-exhanges";

declare module '@cucumber/cucumber' {
    interface World {
        coinsApi: CoinRankingApiCoins
        exchangesApi: CoinRankingApiExchanges  
        coinsIndex: Index
        exchangesIndex: Index
    }
}