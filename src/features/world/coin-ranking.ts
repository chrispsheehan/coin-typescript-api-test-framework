import { CoinRankingApi } from "../../coin-ranking-api/coin-ranking-api";

declare module '@cucumber/cucumber' {
    interface World {
        api: CoinRankingApi;
    }
}