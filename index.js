/*Function should accept an array of dwarf names. Then should return a string with
the numbered dwarf ("1. Doc 2. Dopey 3. Bashful 4. Grumpy")*/
function dwarfRollCall(dwarves){
var line = [];
//empty array
for(var i = 0; i < dwarves.length; i++){
	//var list = ((i+1) + '. ' + dwarves[i]);
	//line.push(list);
	line.push(`${i+1}. ${dwarves[i]}`)
	//appends new item to the end of array, and returns the new length
}
	return line.join(" ") + " ";
	//joins the elements of an array into a string
	}

/*Function should accept an array of planeteer calls. Then convert each element to
uppercase and add ! at end.  Return value should be an array.["",""]*/
function summonCaptainPlanet(planeteerCalls) {
  var calls = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
 calls.push(planeteerCalls[i].toUpperCase() + "!");
 //append new item to end of array and return new length
}
return calls;

}
/*Function should accept array of calls.  Calls characters >4? True or False*/
function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true;
    }
  }
  return false;
}

/*accept array of strings. return the 1st string = type cheese or = "no cheese!"*/
function findTheCheese (foods) {
var cheeses = ["cheddar","gouda","camembert"];
for(var i = 0; i < foods.length; i ++){
	if(cheeses.indexOf(foods[i]) !== -1){
    //searches the array for item, and returns position
    //!== not equal value or not equal type
		return foods[i];
		}
}
	return ("no cheese!");
  //js flow control if else code terser
}
