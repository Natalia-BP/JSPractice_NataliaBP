// Your code here:

function milkSong() {

    // Variables
    // let numBottles = 99;
    // let bottlesLeft = `${numBottles} bottles of milk on the wall, ${numBottles} bottles of milk. Take one down and pass it around, `;
    // let oneBottle = `${numBottles} bottle of milk on the wall, ${numBottles} bottle of milk. Take one down ans pass it around, `;
    // let final = "No more bottles, no more bottles of milk. Go to the store and buy some more, ";
    let todaEstrofa = "";

for (let numBottles = 99; numBottles >= 0; numBottles--) {
    
    if (numBottles >= 2) {

        let bottlesLeft = `${numBottles} bottles of milk on the wall, ${numBottles} bottles of milk. Take one down and pass it around, `;
        console.log(bottlesLeft);

    } else if (numBottles == 1) {

        let oneBottle = `${numBottles} bottle of milk on the wall, ${numBottles} bottle of milk. Take one down and pass it around, `;
        console.log(oneBottle);

    } else if (numBottles == 0) {

        let final = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, ";
        console.log(final);

    }

}
}

console.log(milkSong());