import { CoinRankingApi } from "../../coin-ranking-api/coin-ranking-api-base";

declare module '@cucumber/cucumber' {
    interface World {
        api: CoinRankingApi;
    }
}