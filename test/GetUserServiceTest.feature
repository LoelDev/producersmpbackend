feature: UserServiceTest

	As a developer 
	I want to get a list of the users through an API
	So that I dont have to manually search for them in the database.

Background:

	Given the endpoint http://localhost:3000/users/{id} is available
@User_Retrieving
Scenario: Retrieve Users

	When a GET Request is sent with body
|    id    |
|    1     |

Then a Response with Status 200 is recieved
and a list of User Resources is included in the response body
|    id    |   email_adress   |   password   |
|    1     |  test@gmail.com  |    123456    |