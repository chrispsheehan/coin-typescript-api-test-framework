import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';

Given("The coins API is available", async function() {
    
    this.coinsIndex = await this.coinsApi.getCoins()
    expect(this.coinsIndex.status).to.equal('success');
});


Given('I obtain the {string} coin history', async function (coinName: string) {

    var coinDetail: CoinDetail = await this.coinsApi.getCoinsDetails();
    var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(coinDetail, coinName);

    console.log(coinName + coinBreakdown.uuid);
});


Given('I obtain the first result from {int} days ago', function (int) {

    return 'pending';
});


Given('I obtain the latest result', function () {

    return 'pending';
});


Then('I print the two results in order oldest to newest', function () {

    return 'pending';
});

Given('I obtain the {string} coin rank', function (string) {

    return 'pending';
});