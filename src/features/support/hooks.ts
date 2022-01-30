import { CoinRanking } from "../world/coin-ranking"
import { Before, BeforeAll, AfterAll } from "cucumber";
import env from "../../config/env.json";

Before(function (this: CoinRanking) {
    console.log("base url is:" + env.BASE_URL);
});

BeforeAll(function () {

    console.log('Before All');
});

AfterAll(function () {

    console.log('After All');
});
