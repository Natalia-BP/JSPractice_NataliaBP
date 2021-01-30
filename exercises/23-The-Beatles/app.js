function sing() {

    // Variables
    let letIt = "let it be, "
    let final = "let it be"
    let wordsWisdom = "words of wisdom, "
    let answer = "there will be an answer, "
    let estrofa ="";

    for (let i = 1; i <= 12; i++) {

        if (i == 5) {
            estrofa += wordsWisdom;
        } else if (i == 11) {
            estrofa += answer;

        } 
        else if (i == 12) {

            estrofa += final;
            
        }
        else {
            estrofa += letIt; 
        }
    }
    return estrofa;
    // return estrofa;
}


// Your code above ^^^
console.log(sing());