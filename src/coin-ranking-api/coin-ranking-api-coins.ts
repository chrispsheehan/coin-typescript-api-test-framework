import { CoinRankingApi } from "./coin-ranking-api-base";

export class CoinRankingApiCoins extends CoinRankingApi {

    resource: string = 'coins';

    constructor(baseUrl: string, authToken: string) {

        super(baseUrl, authToken);     
    }


    getCoins(): Promise<Index> {
        
        return new Promise((resolve, reject) => {
            this.getIndex(this.resource)
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
            this.get(this.resource)
            .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        })         
    } 
    
    getCoinHistory(coinUuid: string): Promise<CoinHistory>{

        return new Promise((resolve, reject) => {
            this.get(`coin/${coinUuid}/history`)
            .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        }) 
    }
}