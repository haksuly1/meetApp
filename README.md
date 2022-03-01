<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>My meetApp Documentation Page</title>
  </head>
  <body>

<h1>My meetApp DOCUMENTATION PAGE</h1>

<p>My meetApp - User Stories demonstzrating Test Scenarios</p>

<h3>Feature 1</h3>
<p>Filter events list by city.</p>

<p>User story: As a user I should be able to filter events by cities, so that I can see the list of events by cities.</p>

<P>Scenario 1: When user hasn’t search for events, show upcoming events from all cities.</p>
<br>
Given that user hasn’t searched for any city.
<br>
When the user opens the app.
<br>
Then the user should see a list of all upcoming events.</p>

<p>Scenario 2: User should see a list of suggested cities when they search for a city.</p>
<p>Given that the main page of the application is open.
<br>
When user starts typing in the city textbox.
<br>
Then the user should see a list of suggested cities that match what they’ve typed.</p>

<p>Scenario 3: User can select a city from the suggested list.</p>
<p>Given that the user was typing “Essen” in the city textbox and the list of suggested cities start showing.
<br>
When the user selects a city (Essen-Germany) from the list of suggested cities.
<br>
Then the user city of interest should be changed to that city (Essen-Germany) and the user should now receive a list of upcoming events in that city.</p>

<h3>Feature 2</h3>
<p>Show and hide an event detail.</p>

<p>User story: As a user, I should be able to toggle event’s detail so I choose if I want to see the details of the event or not.</p>

<p>Scenario 1: An event element is originally collapsed by default.
<br>
Given that the user haven’t made a choice to see events details.
<br>
When event’s are displayed.
<br>
Then details will be collapsed state.</p>

<p>Scenario 2: User can expand an event to see its details.
<br>
Given that the user got interested in an event.
<br>
When the user clicks on the event.
<br>
Then the details will be displayed.</p>

<p>Scenario 3: User can collapse an event to hide its details.
<br>
Given that the details got displayed when the user clicked it.
<br>
When expanded the user can click on button to collapse the details.
<br>
Then the details will collapse and the event card will get back to it’s original state.</p>

<h3>Feature 3</h3>
Specify number of events.

<p>User story: As a user, I should be able to specify how many events I want to see, so that I can manage how many events gets displayed on my face.</p>

<p>Scenario 1: When user hasn’t specified a number of events that should be displayed, 40 is the default number.
<br>
Given that the user hasn’t specified the number of event to be displayed.
<br>
When on the main page.
<br>
Then 40 events will be displayed.</p>

Scenario 2: User can change the number of events they want to see.
Given the possibility to change the number of event to display.
When the user specifies it.
Then the exact number of event specified will be displayed.

<h3>Feature 4</h3>
Use the App when offline.

<p>User story: As a user, I should be able to use the app offline, so that I can check events even when not connected to internet.</p>

<p>Scenario 1: Show cached data when there’s no internet connection.
<br>
Given that the user is offline.
<br>
When using the application.
<br>
Then cached data is displayed.</p>

<p>Scenario 2: Show error when user changes the settings (city, time range). 
<br>
Given that the user is offline.
<br>
When the user changes the settings.
<br>
Then an error will be displayed saying - when offline the data can only be read.</p>

<h3>Feature 5 - Data Visualization.</h3>

<p>User story: As a user, I should be able to check on the upcoming events, so that I can see events per cities.</p>

<p>Scenario 1: Show a chart with the number of upcoming events in each city. 
<br>
Given that the user is checking the main page.
<br>
When scrolling.
<br>
Then a chart section will display the upcoming events by cities.</p>

<h3>OBJECTIVES OF My meetApp</h3>
<p>To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.</p>

<h3>CONTEXT</h3>
<p>Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to be the future of web development. By combining these two concepts, this App will not only work as a normal web application, but it will also reap the benefits of both serverless architecture and PWAs:</p>

<p>Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.</p>

<p>PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt,responsive design, and cross-platform compatibility.</p>

<p>For this app, a TDD approach was deployed, where testb is writen before writing the actual code functionality. Writing tests forces mskes us focus on the requirements of the application before jumping into the code. TDD relies on the repetition of a very short development cycle, allowing us to get immediate feedback and deliver high-quality code.</p>

<p>Last but not least, I added graphs to the app, which makes it more visually appealing and allow easily conclusions from the data. A picture is worth a thousand words, right?</p>

<p>This App allows users to search for a city and get a list of events hosted in that city.</p>

<p>For the data visualization component, I have a chart that shows how many events will take place in that city on upcoming days, and another that visualizes the popularity of event genres in the form of a pie chart.</p>

<p>I hope you the App would enjoy using the App.</p>
</body>
</html>
