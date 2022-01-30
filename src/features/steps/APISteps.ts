import { expect } from "chai";
import { Given, When, Then } from "cucumber";

Given("The coin ranking API is available", function() {
    console.log("Coin ranking API is available");
});

Given('I obtain the {string} exchange', function (exchange) {
    console.log(`${exchange} exchange is obtained`)
});