import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { CoinRankingApiCoins } from '../../coin-ranking-api/coin-ranking-api-coins';
import { CoinRankingApiExchanges } from '../../coin-ranking-api/coin-ranking-api-exhanges';
import env from "../../config/env.json"
import { CoinDataProcessor } from '../../data-processor/coin-data-processor';

Before(function () {
    
    this.coinDataProcessor = new CoinDataProcessor();

    this.coinsApi = new CoinRankingApiCoins(env.BASE_URL, env.AUTH_TOKEN);

    this.exchangesApi = new CoinRankingApiExchanges(env.BASE_URL, env.AUTH_TOKEN);    
});

BeforeAll(function () {

    console.log('Before All things');
});

AfterAll(function () {

    console.log('After All things');
});
