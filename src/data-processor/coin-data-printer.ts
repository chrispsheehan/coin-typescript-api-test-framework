export class CoinDataPrinter {


    private getHumanTimeStamp(timestamp: number) {
        
        return new Date(timestamp);
    }    


    public printCoinHistory(coinHistoryEntryList: CoinHistoryEntry[], daysBack: number) {

        console.log(`****History Entry start****`)
        var firstResult: CoinHistoryEntry = coinHistoryEntryList[0]
        var dateTime = this.getHumanTimeStamp(firstResult.timestamp);      
        console.log(`Days back: ${daysBack}`);
        console.log(`Date: ${dateTime}`);
        console.log(`Price: ${firstResult.price}`);
        console.log(`****History Entry end****`)        
    }

    public printCoinRankInformation(coinBreakdownList: CoinBreakdown[]) {

        coinBreakdownList.forEach((entry: CoinBreakdown) => {
            
            var dateTime = this.getHumanTimeStamp(entry.listedAt);
            
            console.log(`****Rank Info start*****`);
            console.log(`Name: ${entry.name}`);
            console.log(`Type: ${entry.tier}`);
            console.log(`Rank: ${entry.rank}`);
            console.log(`First Seen Price: TBC`); ///need another call to the history for this
            console.log(`First seen at: ${dateTime}`)
            console.log("****Rank Info end****")
        });
    }    
}