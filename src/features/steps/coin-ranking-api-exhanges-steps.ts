import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';

Given("The exchanges API is available", async function() {
    
    // var status: string = await this.exchangesApi.getExchanges()
    // expect(status).to.equal('success');
});

Given('I obtain the {string} exchange', async function (exchange: string) {

});

When('I sort in a presentable format to the console', function() {
    console.log(`sort in presentable format`);
});

Then('I output the number of markets provided in ascending order', function() {
    console.log(`output the number of markets`);
});
