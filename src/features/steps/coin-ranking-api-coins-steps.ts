import { Given } from '@cucumber/cucumber';
import { expect } from 'chai';


Given("The coins API is available", async function() {
    
    this.coinDetail = await this.coinsApi.getCoinsDetails();
    expect(this.coinDetail.status).to.equal('success');
});