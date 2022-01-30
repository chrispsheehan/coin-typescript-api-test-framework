import { Given, When, Then } from "cucumber";

Given("The coin ranking API is available", function() {
    console.log("Coin ranking API is available");
});

Given('I obtain the {string} exchange', function (exchange) {
    console.log(`${exchange} exchange is obtained`);
});

When('I sort in a presentable format to the console', function() {
    console.log(`sort in presentable format`);
});

Then('I output the number of markets provided in ascending order', function() {
    console.log(`output the number of markets`);
});