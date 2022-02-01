import { CoinRankingApi } from "./coin-ranking-api-base";

export class CoinRankingApiExchanges extends CoinRankingApi {

    constructor(baseUrl: string, authToken: string) {

        super(baseUrl, authToken);     
    }

    getExchanges(): Promise<unknown> {
        return new Promise((resolve, reject) => {
                this.getIndex('exchanges')
                .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        })    
    }   
}

