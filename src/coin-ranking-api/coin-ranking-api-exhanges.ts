import { CoinRankingApi } from "./coin-ranking-api-base";

export class CoinRankingApiExchanges extends CoinRankingApi {
    
    public exchanges!: string[];

    constructor(baseUrl: string, authToken: string) {

        super(baseUrl, authToken);     
    }

    getExchanges(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.getIndex('exchanges')
            .then(response => {
                var index: Index = JSON.parse(response.text)
                this.exchanges = index.items;
                return resolve(index.status);
            })
            .catch(err => {
                return reject(err);
            });  
        })    
    }   
}