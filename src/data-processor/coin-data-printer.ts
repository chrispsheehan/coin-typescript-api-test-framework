export class CoinDataPrinter {


    private getHumanTimeStamp(timestamp: number) {
        
        return new Date(timestamp);
    }    


    public printCoinHistory(coinHistoryEntryList: CoinHistoryEntry[]) {

        coinHistoryEntryList.forEach(entry => {
            
            var dateTime = this.getHumanTimeStamp(entry.timestamp);
            console.log(`${dateTime} ${entry.price}`)
        });
    }
}