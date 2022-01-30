import { CoinRanking } from "../world/coin-ranking"
import { Before, BeforeAll, AfterAll } from "cucumber";

Before(function (this: CoinRanking) {

});

BeforeAll(function () {

    console.log('Before All');
});

AfterAll(function () {

    console.log('After All');
});
