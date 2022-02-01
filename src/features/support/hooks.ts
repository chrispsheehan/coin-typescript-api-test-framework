import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { CoinRankingApiCoins } from '../../coin-ranking-api/coin-ranking-api-coins';
import env from "../../config/env.json"

Before(function () {

    this.coinsApi = new CoinRankingApiCoins(env.BASE_URL, env.AUTH_TOKEN);
});

BeforeAll(function () {

    console.log('Before All');
});

AfterAll(function () {

    console.log('After All');
});
