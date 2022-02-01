import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';

Given("The coins API is available", async function() {
    
    var status: string = await this.coinsApi.getCoins()
    expect(status).to.equal('success');
});
