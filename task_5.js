
//  * დაწერეთ ფუნქცია, რომელიც "string" -ების "array" -ში დათვლის საშუალოდ რა ზომის "string" -ებია
//  */

let stringArray1 = ["dodo", "shanxai", "makulatura", "prometeus"];
let sumCount = 0


function counteAvrage(strings){
    
    for(i = 0; i<strings.length; i++){
        sumCount += strings[i].length
            
    }
    return sumCount/strings.length
};


console.log(counteAvrage(stringArray1));