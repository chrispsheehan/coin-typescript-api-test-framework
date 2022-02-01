Feature: Get coin rank
    For each result, print the name, type, rank and first seen price to the console. 
    Results should be sorted in descendingorder based upon the time that each coin was first seen. 
    Ensure that the first seenvalue is printed in a human readable format

Background:
    Given The coins API is available

Scenario Outline: Output coin rank
    Given I obtain the "<coin>" coin rank

Examples:
    | coin          |
    | Doge          |
    | Solana        |
    | Bitcoin Cash  |