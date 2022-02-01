import { CoinRankingApi } from "./coin-ranking-api-base";

export class CoinRankingApiCoins extends CoinRankingApi {

    constructor(baseUrl: string, authToken: string) {

        super(baseUrl, authToken);     
    }

    getCoins(): Promise<CoinIndex> {
        return new Promise((resolve, reject) => {
                this.getIndex('coins')
                .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        })    
    }

    getExchanges(): Promise<unknown> {
        return new Promise((resolve, reject) => {
                this.getIndex('exchanges')
                .then(response => {
                return resolve(response.text);
            })
            .catch(err => {
                return reject(err);
            });  
        })    
    }   
}

