export class CoinDataPrinter {


    private getHumanTimeStamp(timestamp: number) {
        
        var date = new Date(0);
        date.setUTCSeconds(timestamp);
        return date;
    }    


    public printCoinHistory(coinName: string, coinHistoryEntryList: CoinHistoryEntry[], daysBack: number) {

        console.log(`\n\n****History Entry start****`)
        var firstResult: CoinHistoryEntry = coinHistoryEntryList[0]
        var dateTime = this.getHumanTimeStamp(firstResult.timestamp);
        console.log(`Coin Name: ${coinName}`);              
        console.log(`Days back: ${daysBack}`);
        console.log(`Date: ${dateTime}`);
        console.log(`Price: ${firstResult.price}`);
        console.log(`****History Entry end****\n\n`)        
    }

    public printCoinRankInformation(coinBreakdownList: CoinBreakdown[]) {

        coinBreakdownList.forEach((entry: CoinBreakdown) => {
            
            var dateTime = this.getHumanTimeStamp(entry.listedAt);
            
            console.log(`\n\n****Rank Info start*****`);
            console.log(`Name: ${entry.name}`);
            console.log(`Type: ${entry.tier}`);
            console.log(`Rank: ${entry.rank}`);
            console.log(`First Seen Price: TBC`); ///need another call to the history for this from the history/ endpoint
            console.log(`First seen at: ${dateTime}`)
            console.log("****Rank Info end****\n\n")
        });
    }    
}