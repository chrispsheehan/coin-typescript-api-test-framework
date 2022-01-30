import { CoinRankingApi } from "../../api/coin-ranking-api";

declare module '@cucumber/cucumber' {
    interface World {
        api: CoinRankingApi;
    }
}