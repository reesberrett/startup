# Startup

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
For a long time, I've played Ultimate Frisbee. Whenever I tell people I play Ultimate, they usually have no idea how to play it and think it's easy when it can actually be pretty complicated. So I thought I would make an informative website that explains the rules for Ultimate and mentions some good Ultimate players. You'll have to login to access the site, and you could be able to give a "like" to an Ultimate player on my website that's stored on a database and can be seen by anyone else on the site. It could also be able to retrieve weather conditions like temperature or wind speed because good weather is important when playing Ultimate.  

## Applying concepts
- **HTML** - 5 HTML pages, one for login, four for displaying website content
- **CSS** - applying style that looks good and adapts to different screen sizes
- **JavaScript** - using for code for login, "likes", and for retreiving weather data
- **Service** - backend service with endpoints for
  - login
  - retrieving and submiting "likes"
  - retreiving data about weather
- **DB** - stores user data and "likes" in a database
- **Login** - registers and logs in users and storres their credentials in database
- **WebSocket** - each user's "like" is visible to others
- **React** - application ported to use React framework

my sketches can be found [here](https://github.com/reesberrett/startup/files/11438421/startup_sketches.pdf) or in my startup repository

---

# HTML Deliverable

For this deliverable, I added:
- One login page (with input field for name and password) and four informational pages with various aspects of Ultimate Frisbee
- A navigation bar with links to each page (except login)
- Some relevant images
- Placeholder quote for what will be a randomly selected quote that changes when a user revisits the page
- Service/Data retrieval: Placeholders for weather retrieval and the ability to "like" different Ultimate players
- Websocket: placeholder for amount of "likes" each player has (number next to like button)

---

# CSS Deliverable

For this deliverable, I added:
- CSS styling for all my pages
- Consistent fonts and color schemes
- Imported Bootstrap content
- Added more navigation and a footer for each page, except the login
- Animation for the title of each page
- Responsive pages that adapt to portrait orientation

---

# JS Deliverable

For this deliverable, I added:
- Function that retrieves weather data using an API key and displays it differently depending on temperature and sky
- Function that increases like count when like button is pressed, and stores the like count in local storage
- Function that randomly displays a quote about Ultimate each time the page is loaded

---

# Service Deliverable

For this deliverable, all I had time to do was the function that calls third party endpoints from a weather website :persevere:




