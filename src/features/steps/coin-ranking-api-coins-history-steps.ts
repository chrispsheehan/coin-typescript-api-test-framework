import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


Given('I obtain the {string} coin history', async function (coinName: string) {

    var coinDetail: CoinDetail = await this.coinsApi.getCoinsDetails();
    expect(coinDetail.status).to.equal('success');

    var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(coinDetail, coinName);

    this.coinHistory = await this.coinsApi.getCoinHistory(coinBreakdown.uuid);
    expect(this.coinHistory.status).to.equal('success');    
});


Given('I obtain the latest result', function () {

    var coinHistoryList: CoinHistoryEntry[] = this.coinHistory.data.history; 

    expect(coinHistoryList).to.be.an('array');
    // amount of records in a single day
    expect(coinHistoryList).to.have.lengthOf(288); 

    // save first days history to memory
    this.latestHistory = coinHistoryList[0]    
});


Given('I obtain the first result from {int} days ago', function (int) {

    var CoinHistoryList : CoinHistoryEntry[] = this.coinHistory.data.history; 

    console.log('steps' + CoinHistoryList[0].price)
});


Then('I print the two results in order oldest to newest', function () {


});