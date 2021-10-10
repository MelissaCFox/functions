
// BEST IN SHOW
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
// console.log(dogAge)


const myFavoriteDogBreed = (breed) => {
    if (breed === "meow") {
        const cats = "I like cats"
        return cats
    }
    else {
        const myFavoriteDog = `My favorite dog breed is ${breed}`
        return myFavoriteDog
    }
}

const myFavorite = myFavoriteDogBreed("meow")
// console.log(myFavorite)


// ADDITION
const add = (num1, num2, num3) => {
    const sum = num1 + num2 + num3
    return sum
}

const sum = add(17, 4, 11)
// console.log(sum)


// SELF-DRIVING CARS
const go = (direction, speed) => {
    let message = `The car is moving ${direction} at ${speed}mph.`
    if (speed > 75) {
        message += ` SLOW DOWN!`
    }
    console.log(message)
}

// go("forwards", 90)


// EVENS OR ODDS

const evenOrOdd = (num) => {
    let message = ""
    if (num % 2 === 0) {
        message = "even"
    } else {
        message = "odd"
    }
    return message
}
const whatIs13 = evenOrOdd(13)
// console.log(whatIs13)

const numArray = [0, 1, 3, 8, 7, 25, 27, 29, 34, 288]
// for (const number of numArray) {
//     console.log(`${number} is ${evenOrOdd(number)}`)
// }



// DOUBLE FUNCTIONS

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
let filteredWordsArray = []
const filterWords = () => {
    for (const word of words) {
        if (!word.startsWith("k")) {
            filteredWordsArray.push(word)
        }
    }
    return filteredWordsArray
}

filteredWordsArray = filterWords()
// console.log(filteredWordsArray)


/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
const createSentence = (array) => {
    return array.join(" ")
}

/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
const sentence = createSentence(filteredWordsArray)

// console.log(sentence)

// YOU CAN TUNE A PINAO, BUT YOU CAN'T...
const didSvenCatchAFish = (oneinwhatchance) => {
    const fishingAttempt = Math.random() * oneinwhatchance
    if (fishingAttempt > oneinwhatchance-1 && fishingAttempt < oneinwhatchance) {
        console.log("Sven caught a fish!")
    } else {
        console.log("No fish for Sven")
    }
}
// didSvenCatchAFish(2)

// FAST FOOD
const mealOrder = (sandwich, side, drink, dessert) => {
    const meal = {
        sandwich: sandwich,
        side: side,
        drink: drink,
        dessert: dessert
    }
    return meal
}
const myOrder = mealOrder("burger", "fries", "dr. pepper", "apple pie")
// console.log(myOrder)

//// SAME CHORES, DIFFERENT DAY
const Dexter = {
    firstName: "Dexter",
    lastName: "Morgan"
}

const walkDog = (person) => {
    const chore = `${person.firstName} ${person.lastName} walked the dog`
    return chore
}
const laundry = (person) => {
    const chore = `${person.firstName} ${person.lastName} did laundry`
    return chore
}
const dishes = (person) => {
    const chore = `${person.firstName} ${person.lastName} cleaned the dishes`
    return chore
}
const groceryShopping = (person) => {
    const chore = `${person.firstName} ${person.lastName} went to the store to buy groceries`
    return chore
}
const vacuum = (person) => {
    const chore = `${person.firstName} ${person.lastName} vacuumed the carpets`
    return chore
}
const makeDinner = (person) => {
    const chore = `${person.firstName} ${person.lastName} prepared dinner`
    return chore
}

// const dayPlanner = (chore, person, day) => {
//     const whoDidWhatWhen = `${person.firstName} ${person.lastName} ${chore} on ${day}`
//     console.log(whoDidWhatWhen)
// }
// dayPlanner("walked the dog", personObject, "Sunday")

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
    const busyDay = `On ${day}, ${firstChore(person)}, ${secondChore(person)}, and ${thirdChore(person)}`
    console.log(busyDay)
}
// dayPlanner(walkDog, laundry, groceryShopping, Dexter, "Monday")


//SCOPE EXERCISES
//C IS FOR COOKIE
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

// for (let y = 0; y < cookies.length; y++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

//CONJECTION FUNCTION
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord
}

const conjoinedWord = conjunction("Master", "Card")
// console.log(conjoinedWord)

//MOD SQUAD
const modSquad = {
    members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
        start: "1968",
        end: "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
        }
    )

// console.log(HTMLRepresentation)

//SIMON SAYS
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (const location of locations) {
//     let invalidLocation
//     if (location[0] > 2) {
//         invalidLocation = true
//         if (invalidLocation) {
//             console.log("This location is invalid")
//         } 
//     }
//     else {
//         console.log("This location is valid")
//     }
// }


//--ADVANCED CHALLENGE: LAMBDA LLAMA
const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    const suffix = " the Llama"

    const namer = () => {
        const name = possibleNames[randomizer]
        return name
    }

    const llamaName = namer() + suffix
    return llamaName
}

const nameMaker = llamaNamer()
// console.log(nameMaker)



//--CODE FROM SLEEP
//PULL CURRENT TIME, DAY, and DATE (OCTOBER 9, 2021)
const currentDate = new Date()
//RETURN SALUTATION BASED ON TIME (GOOD MORNING, GOOD AFTERNOON, GOOD EVENING)
const salutation = (person) => {
    const currentHour = currentDate.getHours()
    if (currentHour > 4 && currentHour < 12) {
        return `Good Morning, ${person}!`
    } if (currentHour >=12 && currentHour < 17) {
        return `Good Afternoon, ${person}!`
    } else {
        return `Good Evening, ${person}!`
    }
}
//THEN ADD TIME AND DATE INFO
const todayInfo = () => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return ` Today is ${weekday[currentDate.getDay()]}, ${month[currentDate.getMonth()]} ${currentDate.getDay()}, ${currentDate.getFullYear()}. The time is currently ${currentDate.getHours()}:${currentDate.getMinutes()}`
}

const greetMelissa = salutation("Melissa") + todayInfo()
console.log(greetMelissa)
// FULL MESSAGE SHOULD READ IN FOLLOWING FORMAT: "Good morning, Melissa! Today is Saturday, October 9, 2021 and the time is currently 10:16AM"

// console.log(currentDate.toString())