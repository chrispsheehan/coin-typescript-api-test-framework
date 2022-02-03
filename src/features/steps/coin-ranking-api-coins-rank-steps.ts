import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


Given('I obtain the details for {string} coins', async function (coins: string) {

    coins.split(',').forEach((coinName: string) => {

        var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(this.coinDetail, coinName.trim());

        if (coinBreakdown) {
            this.coinBreakdownList.push(coinBreakdown);
        }
        else {
            // 'Doge' doesn't exist... probs meant to be DogeCoin but need to handle
            console.log(`******************************************`);
            console.log(`COULD NOT FIND coin details for ${coinName}`);
            console.log(`******************************************`);
        }
    });

    expect(this.coinBreakdownList).to.have.lengthOf.above(0);
});


Given('I sort the results into descending order', function () {

    this.coinBreakdownList = this.coinDataProcessor.sortByFirstSeenDateTime(this.coinBreakdownList)
});


Then('I can print the rank details in a readable format', function () {

    console.log('Rank results are;')
    this.coinDataPrinter.printCoinRankInformation(this.coinBreakdownList)
});