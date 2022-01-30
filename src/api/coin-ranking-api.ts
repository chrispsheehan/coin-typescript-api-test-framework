import request from "supertest";
export class CoinRankingApi {
    
    baseUrl: string;
    authToken: string;

    constructor(baseUrl: string, authToken: string) {

        this.baseUrl = baseUrl;
        this.authToken = authToken;        
    }

    build(url: string) {
        return request(this.baseUrl)
        .get(url)
        .set('Accept', 'application/json')
        .set('x-rapidapi-host', 'coinranking1.p.rapidapi.com')
        .set('x-rapidapi-key', this.authToken)
        .set('Connection', 'upgrade')
        .set('Upgrade', 'HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11')        
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
