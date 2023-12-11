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


Create Home.jsx

Create Navbar.jsx
- []Login/register/admin options


Create Leaflet map
- [x] Map displays
- [x] Create markers
    - [x] Use loader data? Or just load it in with useEffect? 
    - [x] Create custom marker icons
- [x] create Popup.jsx
- [x] create Marker.jsx
- [] Popup box styling
- [x] Popup link to restaurant page

