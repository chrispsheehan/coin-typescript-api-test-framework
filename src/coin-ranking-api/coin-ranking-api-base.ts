import request from "supertest";
import { removeProtocolFromUrl } from "../helpers/formater";

export class CoinRankingApi {
    
    private baseUrl: string;
    private authToken: string;
    private host: string;

    private hostHeader: string = 'x-rapidapi-host';
    private keyHeader: string = 'x-rapidapi-key';

    constructor(baseUrl: string, authToken: string) {

        this.baseUrl = baseUrl;
        this.host = removeProtocolFromUrl(baseUrl);
        this.authToken = authToken;        
    }

    get(targetResouce: string): request.Test {
        return request(this.baseUrl)
                .get(`/${targetResouce}/`)
                .set(this.hostHeader, this.host)
                .set(this.keyHeader, this.authToken)
                .expect(200)
        }     

    getIndex(indexName: string): request.Test {
        return this.get(`indexes/${indexName}`)
    }
}

