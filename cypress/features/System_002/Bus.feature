
Feature: Bus

    Veiccle

    Scenario: Assembling a Bus for a Customer
        Given I want to "build a Bus"
        And I need to send it to the customer
        When I prepare my tools
        And start assembling the Bus
        Then a fully assembled Bus must be ready
