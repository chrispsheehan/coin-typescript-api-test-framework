import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


Given('I obtain the details for {string} coins', async function (coins: string) {
        
    var coinDetail: CoinDetail = await this.coinsApi.getCoinsDetails();
    expect(coinDetail.status).to.equal('success');

    coins.split(',').forEach((coinName: string) => {

        var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(coinDetail, coinName.trim());

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

    this.coinBreakdownList.forEach((element: CoinBreakdown) => {
        console.log(element.name);
    });    
});


Then('I can print the rank details in a readable format', function () {

});