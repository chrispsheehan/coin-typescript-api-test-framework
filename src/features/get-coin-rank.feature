@coins
Feature: Get coin rank
    For each result, print the name, type, rank and first seen price to the console. 
    Results should be sorted in descendingorder based upon the time that each coin was first seen. 
    Ensure that the first seenvalue is printed in a human readable format

Background:
    Given The coins API is available

Scenario Outline: Output coin rank
    Given I obtain the details for "Doge, Solana, Bitcoin Cash" coins
    And I sort the results into descending order
    Then I can print the rank details in a readable format

Examples:
    | coin          |
    | Doge          |
    | Solana        |
    | Bitcoin Cash  |