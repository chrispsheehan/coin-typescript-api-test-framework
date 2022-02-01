import { CoinRankingApi } from "./coin-ranking-api-base";

export class CoinRankingApiCoins extends CoinRankingApi {

    constructor(baseUrl: string, authToken: string) {

        super(baseUrl, authToken);     
    }

    getCoins(): Promise<Index> {
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

    getCoinsDetails(): Promise<CoinDetail> {
        return new Promise((resolve, reject) => {
            this.get('coins')
            .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        })         
    }  
}