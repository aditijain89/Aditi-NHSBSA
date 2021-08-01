Feature: To test NHS Cost Checker Tool

Scenario: User is resident of Northern Ireland
Given NHS Cost Checker Tool is open
When User enters the country as "Northern Ireland"
Then User cannot use NHS Cost Checker Tool

Scenario: User is under sixteen years of age
Given NHS Cost Checker Tool is open
When User enters the country as "Wales"
And User enters the age as under sixteen
Then User is eligible for Free NHS

Scenario: Users combined take-home pay is less than 935
Given NHS Cost Checker Tool is open
When User enters the country as "Wales"
And User is an adult
And User lives "with" a partner
And User "claims" any benefits or tax credits
And User gets "Universal" Credit
And User "gets" LCW As part of the joint Universal Credit
And User enters the combined take-home pay as Less Than "935"
Then User is eligible for Free NHS

Scenario: Users combined take-home pay is less than 435
Given NHS Cost Checker Tool is open
When User enters the country as "England"
And User GP Practice "is not" in England
And User is an adult
And User lives "with" a partner
And User "claims" any benefits or tax credits
And User gets "Universal" Credit
And User "does not get" LCW As part of the joint Universal Credit
And User enters the combined take-home pay as Less Than "435"
Then User is eligible for Free NHS


#Scenario: User claims different benefit
#Given NHS Cost Checker Tool is open
#When User enters the country as "Scotland"
#And User "lives" in the Highlands and Islands
#And User is an adult
#And User lives "without" a partner
#And User "claims" any benefits or tax credits
#And User gets "Different" Credit
#And User "is not" pregnant or not given birth in the last year
#And User "does not have" injury or illness caused by serving in the armed forces
#And User "does not live" permanently in a care home
#And User "has" savings of more than sixteen thousand pounds
#Then User gets help with NHS costs

Scenario: User does not claim any tax benefits
Given NHS Cost Checker Tool is open
When User enters the country as "Scotland"
And User "lives" in the Highlands and Islands
And User is an adult
And User lives "without" a partner
And User "does not claim" any benefits or tax credits
And User "is not" pregnant or not given birth in the last year
And User "does not have" injury or illness caused by serving in the armed forces
And User "does not live" permanently in a care home
And User "has" savings of more than sixteen thousand pounds
Then User gets help with NHS costs

Scenario: User is above sixty and lives in care home provided by local council
Given NHS Cost Checker Tool is open
When User enters the country as "England"
And User GP Practice "is not" in England
And User is above sixty
And User lives "without" a partner
And User "does not claim" any benefits or tax credits
And User "is not" pregnant or not given birth in the last year
And User "does not have" injury or illness caused by serving in the armed forces
And User "lives" permanently in a care home
And User "gets" help from local council
Then User can apply for help with NHS costs