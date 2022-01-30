import { setWorldConstructor, World } from "cucumber";

export class CoinRanking implements World {

    constructor() {

    }
}

setWorldConstructor(CoinRanking);