$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NHSBSA.feature");
formatter.feature({
  "line": 1,
  "name": "To test NHS Cost Checker Tool",
  "description": "",
  "id": "to-test-nhs-cost-checker-tool",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7440273200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User is resident of Northern Ireland",
  "description": "",
  "id": "to-test-nhs-cost-checker-tool;user-is-resident-of-northern-ireland",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "NHS Cost Checker Tool is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the country as \"Northern Ireland\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User cannot use NHS Cost Checker Tool",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.nhs_Cost_Checker_Tool_is_open()"
});
formatter.result({
  "duration": 2582818800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Northern Ireland",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.user_enters_the_country_as(String)"
});
formatter.result({
  "duration": 3777631700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_cannot_use_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "duration": 86643300,
  "status": "passed"
});
formatter.after({
  "duration": 1473264800,
  "status": "passed"
});
formatter.before({
  "duration": 4232161000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User is under sixteen years of age",
  "description": "",
  "id": "to-test-nhs-cost-checker-tool;user-is-under-sixteen-years-of-age",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "NHS Cost Checker Tool is open",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the country as \"Wales\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the age as under sixteen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User is eligible for Free NHS",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.nhs_Cost_Checker_Tool_is_open()"
});
formatter.result({
  "duration": 2099937500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wales",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.user_enters_the_country_as(String)"
});
formatter.result({
  "duration": 1815844200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_the_age_as_under_sixteen()"
});
formatter.result({
  "duration": 934193600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_eligible_for_Free_NHS()"
});
formatter.result({
  "duration": 181239800,
  "status": "passed"
});
formatter.after({
  "duration": 1559423300,
  "status": "passed"
});
formatter.before({
  "duration": 3802910300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Users combined take-home pay is less than 935",
  "description": "",
  "id": "to-test-nhs-cost-checker-tool;users-combined-take-home-pay-is-less-than-935",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "NHS Cost Checker Tool is open",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters the country as \"Wales\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User is an adult",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User lives \"with\" a partner",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User \"claims\" any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User gets \"Universal\" Credit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User \"gets\" LCW As part of the joint Universal Credit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters the combined take-home pay as Less Than \"935\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User is eligible for Free NHS",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.nhs_Cost_Checker_Tool_is_open()"
});
formatter.result({
  "duration": 2433339700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wales",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.user_enters_the_country_as(String)"
});
formatter.result({
  "duration": 2033050100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_an_adult()"
});
formatter.result({
  "duration": 665553700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_lives_a_partner(String)"
});
formatter.result({
  "duration": 1047843800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claims",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_any_benefits_or_tax_credits(String)"
});
formatter.result({
  "duration": 1075777900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Universal",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.user_gets_Credit(String)"
});
formatter.result({
  "duration": 1072593800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gets",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_LCW_As_part_of_the_joint_Universal_Credit(String)"
});
formatter.result({
  "duration": 1539977600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "935",
      "offset": 53
    }
  ],
  "location": "StepDefinitions.user_enters_the_combined_take_home_pay_as_Less_Than(String)"
});
formatter.result({
  "duration": 1352077800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_eligible_for_Free_NHS()"
});
formatter.result({
  "duration": 156885700,
  "status": "passed"
});
formatter.after({
  "duration": 1692622300,
  "status": "passed"
});
formatter.before({
  "duration": 3746641600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Users combined take-home pay is less than 435",
  "description": "",
  "id": "to-test-nhs-cost-checker-tool;users-combined-take-home-pay-is-less-than-435",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "NHS Cost Checker Tool is open",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User enters the country as \"England\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User GP Practice \"is not\" in England",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User is an adult",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User lives \"with\" a partner",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User \"claims\" any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User gets \"Universal\" Credit",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User \"does not get\" LCW As part of the joint Universal Credit",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enters the combined take-home pay as Less Than \"435\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User is eligible for Free NHS",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.nhs_Cost_Checker_Tool_is_open()"
});
formatter.result({
  "duration": 3121096400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.user_enters_the_country_as(String)"
});
formatter.result({
  "duration": 1992288100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is not",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.user_GP_Practice_in_England(String)"
});
formatter.result({
  "duration": 1103998300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_an_adult()"
});
formatter.result({
  "duration": 675934200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_lives_a_partner(String)"
});
formatter.result({
  "duration": 944356000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claims",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_any_benefits_or_tax_credits(String)"
});
formatter.result({
  "duration": 1073886400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Universal",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.user_gets_Credit(String)"
});
formatter.result({
  "duration": 876688000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "does not get",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_LCW_As_part_of_the_joint_Universal_Credit(String)"
});
formatter.result({
  "duration": 1272849000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "435",
      "offset": 53
    }
  ],
  "location": "StepDefinitions.user_enters_the_combined_take_home_pay_as_Less_Than(String)"
});
formatter.result({
  "duration": 1293964500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_eligible_for_Free_NHS()"
});
formatter.result({
  "duration": 95606400,
  "status": "passed"
});
formatter.after({
  "duration": 1975917700,
  "status": "passed"
});
formatter.before({
  "duration": 4907441100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 38,
      "value": "#Scenario: User claims different benefit"
    },
    {
      "line": 39,
      "value": "#Given NHS Cost Checker Tool is open"
    },
    {
      "line": 40,
      "value": "#When User enters the country as \"Scotland\""
    },
    {
      "line": 41,
      "value": "#And User \"lives\" in the Highlands and Islands"
    },
    {
      "line": 42,
      "value": "#And User is an adult"
    },
    {
      "line": 43,
      "value": "#And User lives \"without\" a partner"
    },
    {
      "line": 44,
      "value": "#And User \"claims\" any benefits or tax credits"
    },
    {
      "line": 45,
      "value": "#And User gets \"Different\" Credit"
    },
    {
      "line": 46,
      "value": "#And User \"is not\" pregnant or not given birth in the last year"
    },
    {
      "line": 47,
      "value": "#And User \"does not have\" injury or illness caused by serving in the armed forces"
    },
    {
      "line": 48,
      "value": "#And User \"does not live\" permanently in a care home"
    },
    {
      "line": 49,
      "value": "#And User \"has\" savings of more than sixteen thousand pounds"
    },
    {
      "line": 50,
      "value": "#Then User gets help with NHS costs"
    }
  ],
  "line": 52,
  "name": "User does not claim any tax benefits",
  "description": "",
  "id": "to-test-nhs-cost-checker-tool;user-does-not-claim-any-tax-benefits",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "NHS Cost Checker Tool is open",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User enters the country as \"Scotland\"",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "User \"lives\" in the Highlands and Islands",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User is an adult",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User lives \"without\" a partner",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User \"does not claim\" any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User \"is not\" pregnant or not given birth in the last year",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User \"does not have\" injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User \"does not live\" permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User \"has\" savings of more than sixteen thousand pounds",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User gets help with NHS costs",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.nhs_Cost_Checker_Tool_is_open()"
});
formatter.result({
  "duration": 2125411600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scotland",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.user_enters_the_country_as(String)"
});
formatter.result({
  "duration": 2150036000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lives",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_in_the_Highlands_and_Islands(String)"
});
formatter.result({
  "duration": 1215468000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_an_adult()"
});
formatter.result({
  "duration": 1108447300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_lives_a_partner(String)"
});
formatter.result({
  "duration": 1341868000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "does not claim",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_any_benefits_or_tax_credits(String)"
});
formatter.result({
  "duration": 1639136700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is not",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_pregnant_or_not_given_birth_in_the_last_year(String)"
});
formatter.result({
  "duration": 1492479300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "does not have",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_injury_or_illness_caused_by_serving_in_the_armed_forces(String)"
});
formatter.result({
  "duration": 1663113800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "does not live",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_permanently_in_a_care_home(String)"
});
formatter.result({
  "duration": 917074400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "has",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_savings_of_more_than_sixteen_thousand_pounds(String)"
});
formatter.result({
  "duration": 1239767700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_gets_help_with_NHS_costs()"
});
formatter.result({
  "duration": 84875800,
  "status": "passed"
});
formatter.after({
  "duration": 1193339800,
  "status": "passed"
});
formatter.before({
  "duration": 4215619000,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "User is above sixty and lives in care home provided by local council",
  "description": "",
  "id": "to-test-nhs-cost-checker-tool;user-is-above-sixty-and-lives-in-care-home-provided-by-local-council",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "NHS Cost Checker Tool is open",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User enters the country as \"England\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "User GP Practice \"is not\" in England",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User is above sixty",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User lives \"without\" a partner",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User \"does not claim\" any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User \"is not\" pregnant or not given birth in the last year",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User \"does not have\" injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User \"lives\" permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User \"gets\" help from local council",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User can apply for help with NHS costs",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.nhs_Cost_Checker_Tool_is_open()"
});
formatter.result({
  "duration": 2483261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.user_enters_the_country_as(String)"
});
formatter.result({
  "duration": 2018762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is not",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.user_GP_Practice_in_England(String)"
});
formatter.result({
  "duration": 972560400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_above_sixty()"
});
formatter.result({
  "duration": 856354800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_lives_a_partner(String)"
});
formatter.result({
  "duration": 1077873100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "does not claim",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_any_benefits_or_tax_credits(String)"
});
formatter.result({
  "duration": 1384229300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is not",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_pregnant_or_not_given_birth_in_the_last_year(String)"
});
formatter.result({
  "duration": 1709499600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "does not have",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_injury_or_illness_caused_by_serving_in_the_armed_forces(String)"
});
formatter.result({
  "duration": 1152334400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lives",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_permanently_in_a_care_home(String)"
});
formatter.result({
  "duration": 1221561400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gets",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.user_help_from_local_council(String)"
});
formatter.result({
  "duration": 1217885800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_can_apply_for_help_with_NHS_costs()"
});
formatter.result({
  "duration": 31196800,
  "status": "passed"
});
formatter.after({
  "duration": 1833192500,
  "status": "passed"
});
});