import { Given, Then, When } from '@cucumber/cucumber';
import { CoinRankingApi } from "../../coin-ranking-api/coin-ranking-api";
import env from "../../config/env.json"

Given("The coin ranking API is available", function() {
    
    this.api = new CoinRankingApi(env.BASE_URL, env.AUTH_TOKEN);
});

Given('I obtain the {string} exchange', async function (exchange: string) {
    console.log(`${exchange} exchange is obtained`);
    var aa: CoinIndex  = await this.api.getCoins();
    console.log('asasasas' + aa.status)
});

When('I sort in a presentable format to the console', function() {
    console.log(`sort in presentable format`);
});

Then('I output the number of markets provided in ascending order', function() {
    console.log(`output the number of markets`);
});
