import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


Given('I obtain the {string} coin history', async function (coinName: string) {

    var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(this.coinDetail, coinName);

    expect(coinBreakdown).to.not.be.null;

    this.coinUuid = coinBreakdown.uuid;
    this.coinHistory = await this.coinsApi.getCoinHistory(this.coinUuid);
    expect(this.coinHistory.status).to.equal('success');    
});


Given('I obtain the latest result', function () {

    var coinHistoryList: CoinHistoryEntry[] = this.coinHistory.data.history; 

    expect(coinHistoryList).to.be.an('array');
    // amount of records in a single day
    expect(coinHistoryList).to.have.lengthOf(288); 

    // save first day history to memory
    this.latestHistory = coinHistoryList   
});


Given('I obtain the first result from {int} days ago', async function (daysBack) {

    var coinHistory : CoinHistory = await this.coinsApi.getCoinHistoryDaysBack(this.coinUuid, daysBack);
    expect(coinHistory.status).to.equal('success');

    var coinHistoryList: CoinHistoryEntry[] = coinHistory.data.history;

    expect(coinHistoryList).to.be.an('array');
    // amount of records in a single day
    expect(coinHistoryList).to.have.lengthOf(288);     

    this.xDaysBackHistory = {
        entry: coinHistoryList,
        daysBack: daysBack
    }
});


Then('I print the two results in order oldest to newest', function () {

    var firstResultList: CoinHistoryEntry[] = this.coinDataProcessor.getSortedCoinHistory(this.latestHistory);
    console.log('First result is;')
    this.coinDataPrinter.printCoinHistory(firstResultList)

    console.log(`First result from ${this.xDaysBackHistory.daysBack} days back is;`)
    var xDaysBackResultList: CoinHistoryEntry[] = this.coinDataProcessor.getSortedCoinHistory(this.xDaysBackHistory.entry);
    this.coinDataPrinter.printCoinHistory(xDaysBackResultList)
});