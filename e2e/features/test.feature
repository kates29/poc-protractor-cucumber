#features/test.feature
Feature: Display superheroes list
    As a user of superheroes APP
    I should be able to view all the superheroes
    In order to manage my album of superheroes

    Scenario: Display 20 heroes per page
        Given I go to heroes list
        Then I should see 20 superheroes in the list
        And I take picture of "list"

    #Scenario: Identify superheroe details
        #Given I go to heroes list
        #Then I should identify the first superheroe name as "3-D Man"
    
    Scenario Outline: Identify superheroe detailss
        #Given I go to heroes list
        Then I should identify this superheroe name as <superh>
        Examples:
            |superh           |
            |"3-D Man"        | 
            |"Aaron Stack"    |
            |"Absorbing Man"  |
            |"Abyss"          |

    Scenario: Go to first superheroe profile
        #Given I go to heroes list
        When I click on the first superheroe
        Then I should identify the profile superheroe "3-D Man"
        And I take picture of "profile"
    
    #Scenario: Filter spider heroes
        #Given I click "goback"
     #   When I write 'spider' in the 'searchString' input
     #   Then I should see 20 items containing "Spider"
     #   And I take picture of "spider_items"

    Scenario: Display keyboard
        Given I click "goback"
        And I click "form-control"
        Then I touch "s"
        Then I touch "p"
        Then I touch "i"
        Then I touch "d"
        Then I touch "e"
        Then I touch "r"
        Then I click "form-control" 
        Then I enter the input
        Then I should see 20 items containing "Spider"
        And I take picture of "keyboard"