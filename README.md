# Match Filter App

## Technologies Used:

* Javascript
* React web 16
* Redux
* Jest (Testing)
* Axios (Http client)
* Yarn (package management, build tool)
* Material UI (UI Library)

## How to start the application:
To run the application simply run the command  **yarn start**

The application by default runs on **PORT 3000**.
This application expect the backend service to be running on port  **PORT 8090** on the same machine. To change the url for service, properties.js can be altered.

Once the application is up, **http://localhost:3000/users/{userId}** will take to the user's home page.

Given that the backend has data only for the user: 31eed42a-fdd1-4751-bcf3-00a4c8e40d7e, the app only works for the given user. Ofcourse, new users can be added as required.
The API at the backend takes latitude and longitude in the headers. The app instead of asking for user's location, hard codes the location of Leeds in all the calls.


## Approach
Used redux along with thung as a middleware. Created 4 separate components:
* Match
* Matches
* Filters
* UserHome

Match is the functional component used to display a single match. Matches takes care of calling the backend using the reducers and populating the list of Match.
Filters are responsible for calling the endpoint to filter the matches. UserHome is composed of both Filters and Matches and is the home page of user.
# Areas of Improvement
* The test coverage is not great, the Match component and the call for API is well tested. But the testing for Matches and Filters can be improved a lot.
* I am not a pro in JS and Frontend, hence there would be scope for lot of refactoring. Things like pagination etc are not even considered.
* Error handling is not done at all. Would be next thing I would pickup if given time.


# Known Bugs
* The distance filter in the API has an issue hence the feature would not be working properly. As soon its fixed in the backend, things should start working.


