import { Given } from '@cucumber/cucumber';
import { expect } from 'chai';


Given("The coins API is available", async function() {
    
    var coinsIndex: Index = await this.coinsApi.getCoins()
    expect(coinsIndex.status).to.equal('success');
});