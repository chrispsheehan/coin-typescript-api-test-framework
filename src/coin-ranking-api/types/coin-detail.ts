interface CoinDetail
{
    status: string
    data: {
        stats: CoinStats
        coins: [
            CoinBreakdown
        ]
    }
}