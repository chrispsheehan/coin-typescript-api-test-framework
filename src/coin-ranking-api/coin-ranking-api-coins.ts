import { CoinRankingApi } from "./coin-ranking-api-base";

export class CoinRankingApiCoins extends CoinRankingApi {

    public coins!: string[];

    constructor(baseUrl: string, authToken: string) {

        super(baseUrl, authToken);     
    }

    getCoins(): Promise<string> {
        return new Promise((resolve, reject) => {
                this.getIndex('coins')
                .then(response => {
                    var index: Index = JSON.parse(response.text)
                    this.coins = index.items;
                    return resolve(index.status);
                })
            .catch(err => {
                return reject(err);
            });  
        })    
    }
}