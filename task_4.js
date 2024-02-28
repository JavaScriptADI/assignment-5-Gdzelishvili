/**
 * მოცემულია ორი "array", productNames და productPrices.
 * productNames -ში ჩაყრილია "string" -ები.
 * prdoctuPrices -ში ჩაყრილია "number" -ები.
 * ორივე "array"მ-ს ერთი და იგივე ზომა აქვთ!
 * დაწერეთ ფუნქცია, რომელიც მიიღებს 2 პარამეტრს, (productName, productPrice)
 * და დააბრუნებს HTML-ის კოდს "string" -ად შემდეგი სტრუქტურით:
 * 
 * <div>
 *      <p>Product Name</p>
 *      <p>Product Price$</p>
 * </div>
 * 
 * თითოეული ელემენტისთვის დააგენერირეთ ეს HTML კოდი და დაწერეთ "console.log" -ში მთლიანი აგებული სტრინგი.
 * ანუ ყველა პროდუქტის HTML -ი ერთ დიდ "string" -ში უნდა შეინახოთ!
 */


let productName = ['vashli', "msxali", 'atami'];

let productPrice = ['1', '1,25', '3'];

let sumString = "" 

function pricer(names, prices){
    for(i=0; i<names.length; i++){
        sumString += `<div>
        <p>${names}</p>
        <p>${prices}</p>
   </div>`
    }
}

pricer(productName, productPrice);
console.log(sumString);