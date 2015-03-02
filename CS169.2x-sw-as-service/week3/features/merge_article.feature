Feature: Merge Articles
  As a blog administrator
  In order to remove duplicated articles
  I want to be able to merge articles with same topic

  Background: 
    Given the blog is set up

    Given the following users exist:
      | profile_id | login   | name    | password | email               | state  |
      | 2          | usr1    | User1   | 1111111  | usr1@example.com    | active |
      | 3          | usr2    | User2   | 2222222  | usr2@example.com    | active |
      | 4          | contrib | Contrib | 1111111  | contrib@example.com | active |

    Given the following articles exist:
      | id | title    | author | user_id | body     | allow_comments | published | published_at        | state     | type    |
      | 3  | Foo      | usr1   | 2       | foobaz   | true           | true      | 2015-24-01 22:30:00 | published | Article |
      | 4  | Bar      | usr2   | 3       | barbaz   | true           | true      | 2015-24-01 23:00:00 | published | Article |

    Given the following comments exist:
      | id | type    | author | body     | article_id | user_id | created_at          |
      | 1  | Comment | usr1   | Nice Baz | 4          | 2       | 2015-24-01 23:31:00 |
      | 2  | Comment | usr2   | Nice Foo | 3          | 3       | 2015-24-01 23:51:00 |

  Scenario: An non admin cannot merge articles
    Given I am logged in as non admin
    When  I follow "Hello World!"
    Then  I should not see "Merge Articles"

  Scenario: An admin can merge articles
    Given I am logged in as an admin
    And   I am on the article page for "Foo"
    And   I fill in "merge_with" with "4"
    And   I press "Merge"
    Then  I should see "Articles were successfully merged!"

  Scenario: When articles are merged, the merged article should contain the text of both previous articles
    Given that the articles "Foo" and "Bar" have been merged
    And   I am on the home page
    Then  I should see "Foo"
    When  I follow "Foo"
    Then  I should see "foobaz"
    And   I should see "barbaz"

  Scenario: When articles are merged, the merged article should have one author (either one of the authors of the original article)
    Given that the articles "Foo" and "Bar" have been merged
    And   I am on the home page

  Scenario: When articles are merged, the merged article should have the comments of both previous articles
    Given that the articles "Foo" and "Bar" have been merged
    And   I am on the home page
    Then  I should see "Foo"
    When  I follow "Foo"
    Then  I should see "Nice Baz"
    And   I should see "Nice Foo"

  Scenario: When articles are merged, the merged article should have the title of either one of the originals
    Given that the articles "Foo" and "Bar" have been merged
    And   I am on the home page
    Then  I should see "Foo"
    And   I should not see "Bar"

  Scenario: Merging should fail if no article id is provided
    Given I am logged in as an admin
    And   I am on the article page for "Foo"
    And   I fill in "merge_with" with ""
    And   I press "Merge"
    Then  I should be on the article page for "Foo"
    And   I should see "Please supply an article ID!"

  Scenario: Merging should fail if trying to merge an article with itself
    Given I am logged in as an admin
    And   I am on the article page for "Foo"
    And   I fill in "merge_with" with "3"
    And   I press "Merge"
    Then  I should be on the article page for "Foo"
    And   I should see "Cannot marge an article with itself!"

  Scenario: Merging should fail if trying to merge an article with a non-existent one
    Given I am logged in as an admin
    And   I am on the article page for "Foo"
    And   I fill in "merge_with" with "6"
    And   I press "Merge"
    Then  I should be on the article page for "Foo"
    And   I should see "Cannot find the specified article!"