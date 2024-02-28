/**
 * დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს "array" -ს.
 * ამ ფუნქციამ უნდა იპოვოს გადაცემულ "array" -ში რამდენი ისეთი "string" -ია, რომელიც შეიცავს
 * დიდ ასოს.
 * 
 * მაგალითი:
 * const someArray = ["String", "string", "StRing"];
 * 
 * შედეგი:
 * 2 (რადგან, ორი ისეთი "string" -ია, რომელიც დიდ ასოს შეიცავს)
 * 
 * კითხვა:
 * აქვს თუ არა თქვენ მიერ დაწერილი ფუნქციას side effect -ი?
 */


let strings = ["hahaha", "world", "open", "hans solo", "awesome"];
let count = 0;

function UppercaseStrings(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let string = arr[i];
        for (let j = 0; j < string.length; j++) {
            if (string[j] === string[j].toUpperCase()) {
                count++;
                break; 
            }
        }
    }
    return count;
}


let result = UppercaseStrings(strings);

if (result === 0) {
    console.log("There are no uppercase strings in the array.");
} else {
    console.log("How many uppercase strings are in array?", result);
}


// საიდ ეფექტები ისაა, რომ  ვერანაირად 0 ვერ ვაჩვენებინე სულ რომ არც იყოს დიდი ასო სტრინგში