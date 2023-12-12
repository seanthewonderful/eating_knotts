import { 
    User, 
    Admin, 
    Restaurant, 
    Rating, 
    Cuisine, 
    Land,
    FoodItem,
    MealType,
    db
} from "./model.js";

const users = ["Carl", "Rory", "Billie", "Pam", "Larry"]
const admins = ["Sean", "Natalie"]
const lands = ["Camp Snoopy", "Fiesta Village", "Boardwalk", "Ghost Town"]
const cuisines = ["American", "Southern", "Mexican", "Italian", "Dessert", "Snacks", "Coffee", "Alcohol"]
const mealTypes = ["Breakfast", "Brunch", "Lunch", "Dinner", "Snack", "Dessert", "Alcohol"]
const campSnoopyRestaurants = [
    {
        name: "Grizzly Creek Lodge",
        expense: "$$",
        img: "/public/restaurants/grizzly.jpeg",
        description: "Nestled in the woods of Camp Snoopy, Grizzly Creek Lodge is the spot to have a delicious meal between adventures. You can find hamburgers, hot dogs, pizza (whole and by the slice), chicken tenders, fresh salads, and Snoopy's Kids Meals.\nDine inside or on the patio by Grizzly Creek Falls. Refresh and refill with a variety of ICEE and Coca-Cola fountain beverages. Gluten-friendly, vegetarian, and vegan options are available upon request. Grizzly Creek Lodge is open daily. Hours of operation vary and are subject to change without notice.",
        fullService: false,
        refills: false,
        xCoord: 33.845417783476165, 
        yCoord: -117.99842002528662,
    },
    {
        name: "Camp Snoopy Refresh", 
        expense: "$",
        img: "/public/restaurants/campSnoopyRefresh.jpeg",
        description: "Need a refill? So does every other parent around here. Letting your kids fill up your cup is realllllly cute and all, but frankly, please stop it.",
        fullService: false,
        refills: true,
        xCoord: 33.846243175517785, 
        yCoord: -117.99851299276904,
    },
    {
        name: "Cave Inn Snacks", 
        expense: "$",
        img: "/public/restaurants/caveInnSnacks.jpeg",
        description: "Deep in the wilderness of Camp Snoopy, the Beagle Scout’s hungry friends are invited to take a break from camp activities with some delicious drinks and snacks. There is sure to be something of interest for explorers of all ages. With delicious soft pretzels, churros, soft-serve ice cream, and ICEEs, the Cave Inn is the perfect stop to grab a quick snack before your next adventure. Campers can also purchase or refill their souvenir bottle at Cave Inn Snacks.\nCave Inn Snacks is a quick-service snack counter located in Camp Snoopy along the main trail next to the Linus Launcher.",
        fullService: false,
        refills: true,
        xCoord: 33.845539032165256, 
        yCoord: -117.99876438262443,
    },
]
const fiestaVillageRestaurants = [
    {
        name: "Baja Taqueria", 
        expense: "$$",
        img: "/public/restaurants/bajaTaqueria.jpeg",
        description: "In the magical Alebrije Gardens, Baja Taqueria stands as a beacon for taco lovers seeking an authentic taste of Mexico. Specializing in the beloved fish taco, this vibrant street taco restaurant captures the essence of Baja California’s coastal charm, offering a delectable fusion of fresh seafood and traditional Mexican flavors.\nThe aroma of sizzling fish and zesty citrus fills the air, instantly whetting your appetite. The menu boasts an array of options, from classic battered fish to birria tacos, expertly seasoned and wrapped in warm corn tortillas. Each taco is adorned with crisp cabbage, a tangy selection of sauces, and salsas, delivering a burst of flavors with every bite.\nThe lively atmosphere is filled with colorful alebrije creatures and ample outdoor seating. Baja Taqueria is the ultimate destination for taco lovers seeking a fiesta of flavors.",
        fullService: false,
        refills: true,
        xCoord: 33.846382581829005, 
        yCoord: -117.99965664753799,
    },
    {
        name: "Cantina Del Sur", 
        expense: "$$",
        img: "/public/restaurants/cantinaDelSur.jpeg",
        description: "Nestled in the heart of Fiesta Village, this vibrant bar exudes an intoxicating atmosphere that captures the essence of Mexican culture. The rhythmic beats of lively mariachi music reverberate through the air from the nearby Plaza Stage, inviting guests to dance and revel in the joyful ambiance.\nThis one-stop shop for specialty beverages will have plenty of thirst-quenching bebidas. With a selection of alcoholic drinks including beer, margaritas, and tequila tastings you’ll find the perfect pairing for the delectable street food you’ll find in Fiesta Village, like tacos and tamales, bursting with authentic flavors.",
        fullService: false,
        refills: true,
        xCoord: 33.84592257691393, 
        yCoord: -117.99989063407229,
    },
    {
        name: "Papas Mexicanas", 
        expense: "$$",
        img: "public/restaurants/default.png",
        description: "Papas Mexicanas is a culinary must do for French fries’ enthusiasts seeking a tantalizing twist on a classic favorite. In a vibrant corner of Fiesta Village, this loaded fries dining location takes comfort food to new heights with their mouthwatering specialty: carne asada fries.\nPicture a generous bed of perfectly cooked, golden-brown fires, topped with succulent marinated carne asada, melted cheese and a vibrant medley of fresh toppings. Each bite is a symphony of flavors, as the tender beef mingles with the creaminess of the cheese, the tang of salsa and the freshness of guacamole.\nThe aromas of grilled meat and spices waft through the air, creating an irresistible allure. Papas Mexicanas is the go-to destination for those seeking a unique and unforgettable dining experience where loaded fries become a delicious canvas for Mexican flavors to shine.",
        fullService: false,
        refills: true,
        xCoord: 33.845557108895164, 
        yCoord: -117.99985262888659,
    },
    {
        name: "Casa California Restaurante", 
        expense: "$$",
        img: "/public/restaurants/casaCalifornia.jpeg",
        description: "Craving delicious Mexican cuisine? In the heart of Fiesta Village, Casa California Restaurante is a colorful and inviting restaurant that promises an unforgettable dining experience.\nAs you enter the colorful courtyard, you’ll be greeted by the enticing aromas of freshly prepared Mexican delicacies. The menu is a treasure trove of favorites, featuring mouth-watering options such as flavorful burritos, bowls, and salads, along with quesadillas and nachos bursting with authentic flavors. Plus, you can enhance your order with chips and salsa, guacamole, or queso.\nEach dish is crafted with care, using high-quality ingredients and traditional recipes that pay homage to the rich culinary heritage of Mexico. To compliment your meal, Casa California Restaurante offers a range of refreshing Coca-Cola fountain drinks, ensuring a perfect pairing for your festive feast.\nWhether you’re seeking a quick bite between thrill rides or a leisurely meal with friends and family, Casa California Restaurante is the go-to destination for satisfying your Mexican food cravings.",
        fullService: false,
        refills: true,
        xCoord: 33.84575563404009, 
        yCoord: -118.00005563947208,
    },
    {
        name: "Oaxaca Joe's Limonada", 
        expense: "$",
        img: "/public/restaurants/oaxacaJoes.jpeg",
        description: "Don't try to make it to Fiesta Village without stopping here first. I'm a temptation to all who wander this way.\nNow, I know you want to get a refill in your affordably-priced refillable drink cup, but I'm gonna save us both a hassle and tell you that I don't do refills. Check around the corner, either direction.\nBut I have some good lemonade!",
        fullService: false,
        refills: false,
        xCoord: 33.84628504497875, 
        yCoord: -117.99914654797973,
    },
]
const boardwalkRestaurants = [
    {
        name: "Boardwalk BBQ", 
        expense: "$$",
        img: "/public/restaurants/boardwalkBBQ.jpeg",
        description: "The Boardwalk BBQ features savory smokehouse sausages, pulled pork, rotisserie chicken, and more, paired with classic side dishes like flavored mac and cheese dishes, baked beans, cornbread, and more. Beer and wine are also available at this location. Boardwalk BBQ is open daily. Hours of operation vary and are subject to change without notice.",
        fullService: false,
        refills: true,
        xCoord: 33.84554789530142, 
        yCoord: -118.00116235344431,
    },
    {
        name: "Boardwalk Pretzels & Churros", 
        expense: "$",
        img: "/public/restaurants/boardwalkPretzels.jpeg",
        description: "Step right up! Come one, come all, to the most amazing pretzel on Earth! It's pretty good, anyway. Actually maybe the churros are better. Try one of each!",
        fullService: false,
        refills: false,
        xCoord: 33.84582803719722, 
        yCoord: -118.00164953887362,
    },
    {
        name: "Charleston Circle Coffee", 
        expense: "$",
        img: "/public/restaurants/charlestonCoffee.jpeg",
        description: "Home of Bumble Bear-y’s Award-Winning Boysenberry Pie!\nThese drink concoctions are the “bee’s knees” of the Boardwalk! Charleston Circle Coffee is a quick service drink counter located across from Charleston Circle water fountain near Johnny Rockets. Charleston Circle Coffee features various farm-fresh pastries, like our famous Snoopy cookies, and proudly serves Starbucks coffee. Try various libations, including brewed coffee, iced lattes, teas, Frappuccinos, and everything in between. Don’t miss an opportunity to try the Boysenberry Latte, only found at Knott's Berry Farm!\nDownload the Knott’s Berry Farm mobile app to order ahead at this location.",
        fullService: false,
        refills: true,
        xCoord: 33.843814699560895, 
        yCoord: -118.00140488279388,
    },
    {
        name: "Coasters Diner", 
        expense: "$$",
        img: "/public/restaurants/coastersDiner.jpeg",
        description: "This signature eatery combines classic 50s tunes with different types of American classics. Offering up burgers, hot dogs, chicken tenders, French fries, and extra-thick milkshakes, Coasters Diner serves today’s meal with retro-style fun!\nLook out for seasonal specialty milkshakes at Coasters Diner as we celebrate the Knott’s Berry Farm Seasons of Fun throughout the year!\nDon't miss Xcelerator The Burger, a 12-inch patty packed high with bacon, cheese, and fries!\nCoasters Diner is a quick-service counter with indoor and outdoor seating located on the Knott’s Boardwalk between the Xcelerator and Coast Rider.",
        fullService: false,
        refills: true,
        xCoord: 33.8455583864178, 
        yCoord: -118.00199084876958,
    },
    {
        name: "Memory Lane Refresh", 
        expense: "$",
        img: "/public/restaurants/memoryLaneRefresh.jpeg",
        description: "Refills here! Grab your refills!",
        fullService: false,
        refills: true,
        xCoord: 33.843693847798946, 
        yCoord: -118.00184680128721,
    },
    {
        name: "Prop Shop Pizzeria", 
        expense: "$$",
        img: "/public/restaurants/propShopPizza.jpeg",
        description: "Take a moment out of the spotlight to satisfy those taste buds at Prop Shop Pizzeria, An Italian Kitchen. This all-new quick service Italian eatery is located right outside the Walter Knott Theater. The Prop Shop Pizzeria, An Italian Kitchen offers several food options for guests, including pasta, salads, garlic “Knotts” and a variety of brick oven pizzas. Served by the slice or whole, it’s sure to satisfy cravings of any size. Pair any meal with a refreshing beer or wine. For the younger guys and dolls, choose from a variety of Coca-Cola fountain drinks.",
        fullService: false,
        refills: true,
        xCoord: 33.84312497747109, 
        yCoord: -118.0018018559083,
    },
]
const ghostTownRestaurants = [
    {
        name: "Calico Saloon", 
        expense: "$$",
        img: "/public/restaurants/calicoSaloon.jpeg",
        description: "This old west saloon has been entertaining guests and wetting whistles at Knott’s Berry Farm since its original opening in the 1940s. Located in the center of the park, the Calico Saloon is home to some of the finest beverages and even finer shows this side of the wild West.\nAfter wandering through the classic swinging saloon doors, mosey on up to the counter where the barkeep can fix you a drink. Adults can find alcoholic beverages including beer and wine, while younger cowpokes may fancy a sarsaparilla or boysenberry punch. Be sure to ask your bartender about any “signature” drinks!\nAvailable exclusively at the Calico Saloon is the Calico Soda. Watch as your bartender handcrafts a boysenberry cream soda right in front of your eyes using a Knott’s Berry Farm secret recipe. Each Calico Soda is served in a souvenir mason jar for you to keep!\nClassic snacks like popcorn and pickles are also available in the Calico Saloon, which opens daily.",
        fullService: false,
        refills: true,
        xCoord: 33.843951675514646, 
        yCoord: -118.00033113912964,
    },
    {
        name: "Calico Tater Bites", 
        expense: "$",
        img: "/public/restaurants/calicoTaterBites.jpeg",
        description: "Are you craving some Tater Tots? Then this is the stop for you! Calico Tater Bites has delicious, loaded tater tots with many different toppings. Enjoy the tastes of the Wild West with the BBQ Pulled Pork Tots, topped with cheddar cheese and crispy fried jalapeno strips. Your taste buds will thank you.\nOther Tot options include the Calico Chili Cheese Tots, Buffalo Chicken Tender Tots, Mac & Cheese Tots, and the seasonal favorite - back by popular demand - Pastrami Tots!",
        fullService: false,
        refills: true,
        xCoord: 33.84396323667607, 
        yCoord: -117.99921260762224,
    },
    {
        name: "Fireman's Brigade BBQ", 
        expense: "$$",
        img: "/public/restaurants/firemansBBQ.jpeg",
        description: "This is not a drill! Fireman’s BBQ is your best bet for the tastiest open-air barbecued chicken, ribs, flank steak sandwiches, giant turkey legs, and baked potatoes. All meat is marinated for hours and grilled to perfection. Try the delicious and unique jalapeno bread, and don’t miss the fan-favorite Fire Roasted Corn on the Cob. If you're thirsty, you can wet your whistle with an ice-cold beer or Coca-Cola product!\nJust follow the savory aromas to Bird Cage Square, located in front of the Bird Cage Theatre. Outside dining is available in the heart of Ghost Town. Fireman’s BBQ is open daily.",
        fullService: false,
        refills: true,
        xCoord: 33.84343305856352, 
        yCoord: -118.00018278621083,
    },
    {
        name: "Ghost Town Grub", 
        expense: "$",
        img: "/public/restaurants/ghostTownGrub.jpeg",
        description: "Folks in these parts can’t resist the satisfying concoctions of Ghost Town Grub. Stop by the log cabin on Main Street for delicious funnel cakes freshly made and topped with boysenberry, strawberry, or chocolate. Order any funnel cake “Fully Loaded,” which includes ice cream and a topping of your choice.\nKeep your eyes out for the ever-changing “Seasonal Surprise,” a new and fun treat offered during our different Seasons of Fun. Including the Boysenberry Fun Bun, deep-fried PB&J, and more! Coca-Cola beverages, milk, coffee, and bottled water are also available at this location.",
        fullService: false,
        refills: true,
        xCoord: 33.84359235017644, 
        yCoord: -117.9999856391515,
    },
    {
        name: "Sutter's Grill", 
        expense: "$",
        img: "/public/restaurants/suttersGrill.jpeg",
        description: "Right past the entrance of our Famous Ghost Town, come enjoy hamburgers, buffalo style breaded chicken sandwiches, BBQ bacon cheeseburgers, and salads. Sit down in one of our many picnic areas around the restaurant and enjoy the sights and sounds of the Wild West Stunt Shows, Silver Bullet, and our Seasonal Crafters!",
        fullService: false,
        refills: true,
        xCoord: 33.84399247853677, 
        yCoord: -117.99934871711179,
    },
    {
        name: "Wilderness Broiler", 
        expense: "$$",
        img: "/public/restaurants/wildernessBroiler.jpeg",
        description: "After an adventure aboard Calico River Rapids, head across the path to Wilderness Broiler. This quick service counter offers grilled all beef dog combinations for explorers of every age!\nYour tastebuds will go wild for The Sasquatch, loaded with Calico Chili and crispy onions. Indulge in The Chupacabra's nacho delight, featuring Cheese Sauce, Pico de Gallo, Sour Cream, and Fritos.\nTaste classic flavors with The Old Mill Dog's French Fries, Cheese Sauce, Chipotle Mayo, and bacon bits. Ignite your taste buds with the Dynamite Dog, wrapped in bacon, grilled onions, peppers, and mayo.\nPlus, even more unexplored combinations! Plus, you can pair any dog with Coca-Cola Fountain drinks also available. Each bite is an adventure, a fusion of flavor and wilderness spirit that defines Wilderness Dogs and Drinks.",
        fullService: false,
        refills: true,
        xCoord: 33.842991568596375, 
        yCoord: -118.00107022732519,
    },
    {
        name: "Wilderness Refresh", 
        expense: "$",
        img: "/public/restaurants/wildernessRefresh.jpeg",
        description: "Refills over here! Get your refills here!",
        fullService: false,
        refills: true,
        xCoord: 33.842936627453575, 
        yCoord: -118.00085048251044,
    },
]

console.log("Syncing database...")

await db.sync({ force: true })

console.log("Seeding database...")

// Create 2 Admins
const adminObjs = []

for (let admin of admins) {
    adminObjs.push({
        username: admin.toLowerCase(),
        password: "test",
        email: `${admin.toLowerCase()}@${admin.toLowerCase()}.com`,
        firstName: admin.toLowerCase(),
        lastName: 'Administrator'
    })
}

await Admin.bulkCreate(adminObjs)

console.log("Seeded Admin")

// Create 5 Users
const userObjs = []

for (let user of users) {
    userObjs.push({
        username: user.toLowerCase(),
        password: "test",
        email: `${user.toLowerCase()}@${user.toLowerCase()}.com`,
        firstName: user.toLowerCase(),
        lastName: "Demo"
    })
}

await User.bulkCreate(userObjs)

console.log("Seeded User")

// Create the 4 Lands
for (let land of lands) {
    await Land.create({
        name: land
    })
}

console.log("Seeded Land")

// Create cuisines
for (let cuisine of cuisines) {
    await Cuisine.create({
        name: cuisine,
    })
}
// const americanCuisine = await Cuisine.create({ name: "American" })
// const southernCuisine = await Cuisine.create({ name: "Southern" })
// const mexicanCuisine = await Cuisine.create({ name: "Mexican" })
// const italianCuisine = await Cuisine.create({ name: "Italian" })
// const dessertCuisine = await Cuisine.create({ name: "Dessert" })
// const snacksCuisine = await Cuisine.create({ name: "Snacks" })
// const coffeeCuisine = await Cuisine.create({ name: "Coffee" })
// const alcoholCuisine = await Cuisine.create({ name: "Alcohol" })

console.log("Seeded Cuisine")

// Create MealTypes
for (let mealType of mealTypes) {
    await MealType.create({
        name: mealType
    })
}

console.log("Seeded MealType")

// CREATE RESTAURANTS
// Create Camp Snoopy Restaurants
const campSnoopy = await Land.findOne({
    where: {
        name: "Camp Snoopy"
    }
})
for (let restaurant of campSnoopyRestaurants) {
    await campSnoopy.createRestaurant(restaurant)
}
// Create Fiesta Village Restaurants
const fiestaVillage = await Land.findOne({
    where: {
        name: "Fiesta Village"
    }
})
for (let restaurant of fiestaVillageRestaurants) {
    await fiestaVillage.createRestaurant(restaurant)
}
// Create Boardwalk Restaurants
const boardwalk = await Land.findOne({
    where: {
        name: "Boardwalk"
    }
})
for (let restaurant of boardwalkRestaurants) {
    await boardwalk.createRestaurant(restaurant)
}
// Create Ghost Town Restaurants
const ghostTown = await Land.findOne({
    where: {
        name: "Ghost Town"
    }
})
for (let restaurant of ghostTownRestaurants) {
    await ghostTown.createRestaurant(restaurant)
}

console.log("Seeded Restaurant")

console.log("Finished seeding database. Goodbye")

await db.close()