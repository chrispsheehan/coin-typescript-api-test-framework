export class CoinDataPrinter {


    private getHumanTimeStamp(timestamp: number) {
        
        return new Date(timestamp);
    }    


    public printCoinHistory(coinHistoryEntryList: CoinHistoryEntry[]) {

        coinHistoryEntryList.forEach((entry: CoinHistoryEntry) => {
            
            var dateTime = this.getHumanTimeStamp(entry.timestamp);
            console.log(`${dateTime} ${entry.price}`)
        });
    }

    public printCoinRankInformation(coinBreakdownList: CoinBreakdown[]) {

        coinBreakdownList.forEach((entry: CoinBreakdown) => {
            
            var dateTime = this.getHumanTimeStamp(entry.listedAt);
            
            console.log(`****Rank Info startß*****`);
            console.log(`Name: ${entry.name}`);
            console.log(`Type: ${entry.tier}`);
            console.log(`Rank: ${entry.rank}`);
            console.log(`First Seen Price: TBC`); ///need another call to the history for this
            console.log(`First seen at: ${dateTime}`)
            console.log("****Rank Info end****")
        });
    }    
}