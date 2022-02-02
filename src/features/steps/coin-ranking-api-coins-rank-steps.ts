import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


Given('I obtain the details for {string} coins', async function (coins: string) {
        
    var coinDetail: CoinDetail = await this.coinsApi.getCoinsDetails();
    expect(coinDetail.status).to.equal('success');

    coins.split(',').forEach((coinName: string) => {
    
        var coinBreakdown: CoinBreakdown = this.coinDataProcessor.getCoinBreakdown(coinDetail, coinName.trim());

        if(coinBreakdown){
            this.coinUuidList.push(coinBreakdown.uuid);
        }
        else {
            // 'Doge' doesn't exist... probs meant to be DogeCoin but need to handle
            console.log(`******************************************`)            
            console.log(`COULD NOT FIND coin details for ${coinName}`)
            console.log(`******************************************`)              
        }
    });

    expect(this.coinUuidList).to.have.lengthOf.above(0);

    this.coinUuidList.forEach((element: string) => {
        console.log(element);
    });
});


Given('I sort the results into descending order', function () {

});


Then('I can print the rank details in a readable format', function () {

});