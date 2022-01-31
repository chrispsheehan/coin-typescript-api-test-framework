import request from "supertest";
import { removeProtocolFromUrl } from "../helpers/formater";
export class CoinRankingApi {
    
    private baseUrl: string;
    private authToken: string;
    private host: string;

    constructor(baseUrl: string, authToken: string) {

        this.baseUrl = baseUrl;
        this.host = removeProtocolFromUrl(baseUrl);
        this.authToken = authToken;        
    }

    get(url: string): request.Test {
        return request(this.baseUrl)
        .get(url)
        .set('Accept', 'application/json')
        .set('x-rapidapi-host', this.host)
        .set('x-rapidapi-key', this.authToken)      
        .send({
            "referenceCurrencyUuid": "yhjMzLPhuIDl",
            "timePeriod": "24h",
            "tiers": "1",
            "orderBy": "marketCap",
            "orderDirection": "desc",
            "limit": "50",
            "offset": "0"
        })
        .expect(200)
    }
}
