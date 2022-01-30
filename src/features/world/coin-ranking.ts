import { CoinRankingApi } from "../../api/coin-ranking-api";

declare module "cucumber" {
    interface World {
        api: CoinRankingApi;
    }
}