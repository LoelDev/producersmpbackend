feature: UserServiceTest

	As a developer 
	I want to create a new profile through an API
	So that I dont have to manually create one in the database.

Background:

	Given the endpoint http://localhost:3000/profiles is available
@Profile_Creation
Scenario: Create Profile

	When a POST Request is sent with body

|   user_id   |   first_name   |  last_name  |  date_of_birth  |  gender  |  date_of_registry  |     adress         |  user_type  |  imagen_url   |
|     1       |      Paolo     |   Pinzas    |   2002-07-06    |   Male   |    2021-06-11      |  paolo@paolo.com   |   Musician  |  example_url  |

Then a Response with Status 200 is recieved
and a list of User Resources is included in the response body

|    id    |   user_id   |   first_name   |  last_name  |  date_of_birth  |  gender  |  date_of_registry  |     adress         |  user_type  |  imagen_url   |
|    1     |     1       |      Paolo     |   Pinzas    |   2002-07-06    |   Male   |    2021-06-11      |  paolo@paolo.com   |   Musician  |  example_url  |