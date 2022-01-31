Feature: Get exchanges
    Get the three following exchanges:BitTrue,Binance,Whitebit.
    For each exchange, output in a presentable format to the console the name of the exchange, number of markets, volume and rank. 
    Sort the output by the number of markets provided by the exchange in ascending order.
        

Background:
    Given The coin ranking API is available


Scenario Outline: Output exchanges
    Given I obtain the "<exchange>" exchange
    And I sort in a presentable format to the console
    Then I output the number of markets provided in ascending order

Examples:
    | exchange  |
    | BitTrue   |
    | Binance   |
    | Whitebit  |     