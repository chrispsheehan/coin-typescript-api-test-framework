import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';

Given("The exchanges API is available", async function() {
    
    return 'pending';
    // impliment the below when working
    // this.exchangesIndex = await this.coinsApi.getExchanges()
    // expect(this.exchanges.status).to.equal('success');
});

Given('I obtain the {string} exchange', async function (exchange: string) {
    
    return 'pending';
});

When('I sort in a presentable format to the console', function() {
    
    return 'pending';
});

Then('I output the number of markets provided in ascending order', function() {
    
    return 'pending';
});