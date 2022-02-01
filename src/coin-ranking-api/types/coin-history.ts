interface CoinHistory
{
    status: string,
    data: {
        change: string,
        history: [
            {
                price: string,
                timestamp: number
            }
        ]
    }
}