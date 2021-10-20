// FUNCTION EXERCISE

// 1
function spookyGhost() {
    console.log(`Boo!!!`);
}
spookyGhost();

console.log("========================");

// 2
function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
};
candy(`Get Candy`);

console.log("========================");

// 3
function werewolf(a, b){
    if (`Full` === a && `Moon` === b){
        console.log(`ARH-WOOO!`);
    }
};
werewolf(`Full`, `Moon`);

console.log("========================");

// 4
function halloween(){
    return `October 31st`
}
halloween();

console.log("========================");

// 5
function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    } else {                        // <-- does NOT need else IF, bc if it's not >= 31 it HAS to be <31
        return false;
    }
};
console.log(isEnoughCandy(31)); // true
console.log(isEnoughCandy(5)); // false

console.log("========================");

// 6
function candyCounter(nums){
    let total = 0;
    for(i=0; i<nums.length; i++){
        total += nums[i]
    }
    console.log(total); // Added to check to make sure it's working correctly
    return total;
};
candyCounter([3,2,1]);

console.log("========================");

// 7
const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

console.log("========================");

// 8
ghostBusters = () => `Who you gonna call?`
console.log(ghostBusters());

console.log("========================");

// 9
// No

console.log("========================");

// 10
// Yes

console.log("========================");

// 11a
const costumes = [
    "Ghosts",
    "Princess",
    "Pirate"
];

console.log("========================");

// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());
console.log(upperCostumes);

console.log("========================");

// 12a 
const stephenKingMovies = [
    "The Shining",
    "Christine",
    "It",
    "The Mist",
    "Creepshow",
    "Pet Sematary"
];

console.log("========================");

// 12b
const twoMovies = stephenKingMovies.filter(i => i.length === 9);
console.log(twoMovies);

console.log("========================");

// 13a 
const halloweenSongs1 = [
    "Monster Mash",
    "Thriller"
];

console.log("========================");

// 13b 
const halloweenSongs2 = [
    "I Put a Spell On You",
    "This is Halloween",
    "Ghostbusters"
];

console.log("========================");

// 13c
halloweenJukeBox = songs => {           // <-- songs doesn't need (), bc only one parameter
    const random = Math.floor(Math.random()*songs.length);
    console.log(songs[random]);
};

console.log("========================");

// 13d
halloweenJukeBox(halloweenSongs1);
halloweenJukeBox(halloweenSongs2);

console.log("========================");

// 14
caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0) {
            newString = newString + string[i].toUpperCase();
        } else {
            newString = newString + string[i];
        }
    }
    return newString
}

// caps = string => {
//     for (i=0; i < string.length; i+=2){
//         string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i+1);
//     }
//     return string;
// };

const hello = caps("halloween") // Added to check to make sure it's working properly
console.log(hello);

console.log("========================");