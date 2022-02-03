import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { CoinRankingApiCoins } from '../../coin-ranking-api/coin-ranking-api-coins';
import { CoinRankingApiExchanges } from '../../coin-ranking-api/coin-ranking-api-exhanges';
import env from "../../config/env.json"
import { CoinDataPrinter } from '../../data-processor/coin-data-printer';
import { CoinDataProcessor } from '../../data-processor/coin-data-processor';

Before({tags: "@coins"}, function () {
    
    this.coinDataProcessor = new CoinDataProcessor();
    
    this.coinDataPrinter = new CoinDataPrinter();

    this.coinsApi = new CoinRankingApiCoins(env.BASE_URL, env.AUTH_TOKEN);

    this.coinBreakdownList = []
});

Before({tags: "@exchanges"}, function () {

    this.exchangesApi = new CoinRankingApiExchanges(env.BASE_URL, env.AUTH_TOKEN);
});

BeforeAll(function () {

    console.log('Before All things');
});

AfterAll(function () {

    console.log('After All things');
});
