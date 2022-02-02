import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';


Given('I obtain the {string} coin history', async function (coinName: string) {

    var coinDetail: CoinDetail = await this.coinsApi.getCoinsDetails();
    expect(coinDetail.status).to.equal('success');

    var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(coinDetail, coinName);
    expect(coinBreakdown.name.toLowerCase()).to.equal(coinName.toLowerCase());

    this.CoinHistory = await this.coinsApi.getCoinHistory(coinBreakdown.uuid);
    expect(this.CoinHistory.status).to.equal('success');    
    
    console.log(coinName + this.CoinHistory.data.change);
});


Given('I obtain the first result from {int} days ago', function (int) {


});


Given('I obtain the latest result', function () {


});


Then('I print the two results in order oldest to newest', function () {


});