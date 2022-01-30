import env from "../../config/env.json";

export class CoinRanking {
    
    baseUrl: string;
    authToken: string;

    constructor() {

        this.baseUrl = env.BASE_URL;
        this.authToken = env.AUTH_TOKEN;        
    }

    get() {
        
    }
}