const str = "Hello World";
const reveresedStr = str.split("").reverse().join("");
console.log(reveresedStr);


//Function to Convert Reverse A String
const reverseString = (str:string) => {
const reverse = str.replaceAll(" ", "").split("").reverse().join("")
console.log(reverse)
}
reverseString("Fahad Bin Javed")
