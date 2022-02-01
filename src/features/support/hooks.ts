import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { CoinRankingApiCoins } from '../../coin-ranking-api/coin-ranking-api-coins';
import { CoinRankingApiExchanges } from '../../coin-ranking-api/coin-ranking-api-exhanges';
import env from "../../config/env.json"

Before(function () {

    this.coinsApi = new CoinRankingApiCoins(env.BASE_URL, env.AUTH_TOKEN);

    this.exchangesApi = new CoinRankingApiExchanges(env.BASE_URL, env.AUTH_TOKEN);    
});

BeforeAll(function () {

    console.log('Before All things');
});

AfterAll(function () {

    console.log('After All things');
});
