Feature: External System can retrieve trackings stored in database
  As an external system
  I want to retrieve trackings
  So that i can check how the app is beign used.

  Scenario: Trackings retrieved from database
    When I request the trackings to the server
    Then The server will respond with a list of all trackings