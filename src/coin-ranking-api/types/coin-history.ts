interface CoinHistory
{
    status: string,
    data: {
        change: string,
        history: [
            CoinHistoryEntry
        ]
    }
}