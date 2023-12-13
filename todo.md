Database model 
- [x] User
- [x]Admin
- [x]Restaurant
- [x]Cuisine
    - [x]Breakfast, American, Southern, Meican, Italian, Dessert, Snacks, Coffee, Alcohol
- [x]Land
    - [x]Camp Snoopy, Fiesta Village, Ghost Town, Boardwalk
- [x]Rating
- [x]FoodItem
- [x]MealType

Relationships:
- [x]User O:M Rating
- [x]Restaurant O:M Rating
- [x]Restaurant M:O Land
- [x]Restaurant M:M Cuisine
- [x]Restaurant M:M FoodItem
- [x]Restaurant M:M MealType
- [x]FoodItem M:M MealType

Seed Database
- [x]5 users
- [x]2 admin
- [x]10 restaurants
- [x]lands
- [x]cuisines
- [x]mealTypes
- [x]user ratings?

Server + endpoints
- [x]"/restaurants"
- [x]"/restaurant/:restId"
- [x]"/restaurant/create"
- [x]"/restaurant/update"
- [x]"/restaurant/delete"

- [x]"/user/:userId"
- [x]"/user/create"
- [x]"/user/update/:userId"
- [x]"/user/delete/:userId"

- [x]"/session-check"
- [x]"/login"
- [x]"/logout"


- [x]"/rating/create"
- [x]"/rating/update"
- [x]"/rating/delete"

- [x]Test Routes


Browser Router - what routes?
- [x]"/"
    - []map
- [x]"/profile/:id"
- [x]"/restaurants"
    - []search option
- []"/restaurant/:restId"
- [x] "/land/restaurants"
- [x] error handling


Redux store
- [x]start with single reducer for now? 
- [x]userId, restaurantId, adminId I think is all needed for now.


Login/logout
- [x] Login page
    - [x] User login
    - [x] Admin login
- [x] userId/adminId save to req.session
- [x] userId/adminId save to Redux
- [x] Register page
    - [x] User only

Create Navbar.jsx
- [x]Navlinks to routes
- [x]Flex css
- [x]Login/register/admin options
- [x]Route to user profile

Create user profile page
- [x]See user information
- []See all ratings left
  - []Edit Review button
  - []Allow for reviews on restaurant page
- []Navbar display username and avatar

Restaurant page(s)
- [] Allow for user ratings
  - [] Logic if no ratings
  - [] display total ratings and avg stars

Create Admin page 
- [] Navbar dynamically render for admin page
- [] What can admins do? 
  - [] Create new admin
  - [] Create new user
  - [] New restaurant
  - [] Edit restaurant details
  - [] Edit/Delete user ratings


Create Leaflet map
- [x] Map displays
- [x] Create markers
    - [x] Use loader data? Or just load it in with useEffect? 
    - [x] Create custom marker icons
- [x] create Popup.jsx
- [x] create Marker.jsx
- [x] Popup link to restaurant page

Advanced map features:
- [] Popup box styling
- [] Different layer?
- [] Unique Icons
- [] Collapsible navbar? 
- [] List view of restaurants with map?

Styling
- [] Mobile friendly
