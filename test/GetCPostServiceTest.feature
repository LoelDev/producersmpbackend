feature: CPostServiceTest

	As a developer 
	I want to get a list of the posts through an API
	So that I dont have to manually search for them in the database.

Background:

	Given the endpoint http://localhost:3000/posts/{id} is available
@Post_Retrieving
Scenario: Retrieve Post

	When a GET Request is sent with body
|    id    |
|    1     |

Then a Response with Status 200 is recieved
and a list of Post Resources is included in the response body
|    id    |   user_id   |   description   |  date_of_registry  |
|    1     |      1      |    AAAAAAAAAA   |    2021-06-11      |