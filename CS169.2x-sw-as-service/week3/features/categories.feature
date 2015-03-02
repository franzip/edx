Feature: Edit Categories
  As a blog administrator
  In order to index my posts
  I want to be able to add and edit categories on my blog

  Background:
    Given the blog is set up
    And I am logged into the admin panel

  Scenario: Successfully create categories
    Given I am on the new categories page
    When I fill in "category_name" with "Foo"
    When I fill in "category_keywords" with "Bar"
    When I fill in "category_description" with "foobaz"
    And I press "Save"
    Then I should be on the new categories page
    And I should see "Foo"
    And I should see "Bar"
    And I should see "foobaz"

  Scenario: Successfully modify categories
    Given I am on the new categories page
    When I follow "General"
    Then I fill in "category_keywords" with "gen"
    Then I fill in "category_description" with "foogen"
    And I press "Save"
    Then I should see "General"
    And I should see "gen"
    And I should see "foogen"
