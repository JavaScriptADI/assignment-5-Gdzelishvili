/**
 * მოცემულია "string" -ების "array" -ი.
 * დაწერეთ კოდი, რომელიც ამ "array" -ში იპოვის ყველაზე მოკლე სიგრძის მქონე
 * "string" -ს და შემდგომ გამოიტანეთ ამ ელემენტის ზომა, მნიშვნელობა და რომელ ინდექსზეა ის
 * "console.log"-ის გამოყენებით
 */


let stringArray = ["dodo", "shanxai", "makulatura", "prometeus"]
let resultObj = [];


function smallestWord(myArray){
    
    for(let i = 0; i < myArray.length; i++){
        let obj = { 
            index: i,
            lengthy: myArray[i].length,
            word: myArray[i]
        }
        resultObj.push(obj);
    }
    console.log(resultObj);
}

smallestWord(stringArray);

let saveLength = Infinity
let smallWord = ''
let indexOfSmallWord = 0

for (let p = 0; p<resultObj.length; p++){
    if(resultObj[p].lengthy < saveLength ){
        saveLength = resultObj[p].lengthy;
        smallWord = resultObj[p].word;
        indexOfSmallWord = resultObj[p].index;
    }
    
}
console.log(saveLength, smallWord, indexOfSmallWord);