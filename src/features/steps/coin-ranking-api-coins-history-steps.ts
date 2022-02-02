import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';


Given('I obtain the {string} coin history', async function (coinName: string) {

    var coinDetail: CoinDetail = await this.coinsApi.getCoinsDetails();
    var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(coinDetail, coinName);
    var coinHistory: CoinHistory = await this.coinsApi.getCoinHistory(coinBreakdown.uuid);
    
    console.log(coinName + coinHistory.data.change);
});


Given('I obtain the first result from {int} days ago', function (int) {


});


Given('I obtain the latest result', function () {


});


Then('I print the two results in order oldest to newest', function () {


});