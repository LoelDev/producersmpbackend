feature: PostServiceTest

	As a developer 
	I want to create a new post through an API
	So that I dont have to manually create one in the database.

Background:

	Given the endpoint http://localhost:3000/posts is available
@Profile_Creation
Scenario: Create Post

	When a POST Request is sent with body

|   user_id   |   description   |  date_of_registry  |
|      1      |    AAAAAAAAAA   |    2021-06-11      |

Then a Response with Status 200 is recieved
and a list of User Resources is included in the response body

|    id    |   user_id   |   description   |  date_of_registry  |
|    1     |      1      |    AAAAAAAAAA   |    2021-06-11      |