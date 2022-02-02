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

    private getCoinHistoryResource(coinUuid: string): string {

        return `coin/${coinUuid}/history`;
    }
    
    getCoinHistory(coinUuid: string): Promise<CoinHistory>{

        return new Promise((resolve, reject) => {
            this.get(this.getCoinHistoryResource(coinUuid))
            .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        }) 
    }

    getCoinHistoryDaysBack(coinUuid: string, daysBack: number): Promise<CoinHistory>{

        return new Promise((resolve, reject) => {
            this.getQuery(this.getCoinHistoryResource(coinUuid), {timeperiod: `${daysBack-1}d`})
            .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        }) 
    }    
}