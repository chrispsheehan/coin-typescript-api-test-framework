import { Given } from '@cucumber/cucumber';
import { expect } from 'chai';


Given("The coins API is available", async function() {
    
    this.coinsIndex = await this.coinsApi.getCoins()
    expect(this.coinsIndex.status).to.equal('success');
});