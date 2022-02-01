import { Given, Then, When } from '@cucumber/cucumber';

Given("The exchanges API is available", function() {
    
    
});

Given('I obtain the {string} exchange', async function (exchange: string) {
    console.log(`${exchange} exchange is obtained`);
    var aa: CoinIndex  = await this.coinsApi.getCoins();
    console.log('asasasas' + aa.status)
});

When('I sort in a presentable format to the console', function() {
    console.log(`sort in presentable format`);
});

Then('I output the number of markets provided in ascending order', function() {
    console.log(`output the number of markets`);
});
