Feature: My Feature

  @test
  Scenario: Count on Homepage
    Given I have the homepage open
    When I start counting
    Then I see the counter increasing
