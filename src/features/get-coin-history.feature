Feature: Get coin history
    For each coin, fetch the coins history based upon a 7-day parameter. 
    From the data you retrieve, output to theconsole.

Background:
    Given The coins API is available


Scenario Outline: Output coin history
    Given I obtain the "<coin>" coin history
    And I obtain the first result from <days> days ago
    And I obtain the latest result  
    Then I print the two results in order oldest to newest

Examples:
    | coin      | days  |
    | BitCoin   | 7     |
    | Ethereum  | 7     |
    | Cardano   | 7     |      