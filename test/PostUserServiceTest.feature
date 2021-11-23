feature: UserServiceTest

	As a developer 
	I want to create a new user through an API
	So that I dont have to manually create one in the database.

Background:

	Given the endpoint http://localhost:3000/users is available
@User_Creation
Scenario: Create User

	When a POST Request is sent with body

|   email_adress   |   password   |
|  test@gmail.com  |    123456    |

Then a Response with Status 200 is recieved
and a list of User Resources is included in the response body
|    id    |   email_adress   |   password   |
|    1     |  test@gmail.com  |    123456    |