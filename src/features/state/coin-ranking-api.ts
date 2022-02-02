import { CoinRankingApiCoins } from "../../coin-ranking-api/coin-ranking-api-coins";
import { CoinRankingApiExchanges } from "../../coin-ranking-api/coin-ranking-api-exhanges";

declare module '@cucumber/cucumber' {
    
    interface CoinRankingApi {
        coinsApi: CoinRankingApiCoins
        exchangesApi: CoinRankingApiExchanges  
    }
}