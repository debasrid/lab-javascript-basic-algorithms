var hacker1 = "Iron";
console.log("The driver's name is " + hacker1);
var hacker2 = "iron";
//console.log(hacker2);
//var hacker2= prompt("Input a name? ");
console.log("The navigator's name is  " + hacker2);

//Depending on which name is longer, print:
if (hacker1.length > hacker2.length)
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
if (hacker1.length < hacker2.length)
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
if (hacker1.length == hacker2.length)
  console.log("wow, you both got equally long names " + hacker1.length + " characters");

//Print all the characters of the driver's name, separated by a space and in capitals
arrStr = [];
for (var i = 0; i < hacker1.length; i++) {
  arrStr.push(hacker1[i] + " ");
}
console.log(arrStr.join(" "));

//Print all the characters of the navigator's name, in reverse order. 
x = [];
for (var j = hacker2.length - 1; j >= 0; j--) {
  x.push(hacker2[j].toUpperCase() + " ");
}
console.log(x.join(" "));

//Depending on the lexicographic order of the strings, print: 
//The driver's name goes first
//Yo, the navigator goes first definitely
//What?! You both got the same name?   

function orderNames() {

  switch (hacker1.localeCompare(hacker2)) {
    case -1:
      console.log("The driver's name goes first");
      break;
    case 1:
      console.log('Yo, the navigator goes first definitely');
      break;
    case 0:
      console.log("What?! You both got the same name?");
      break;
    default:
      console.log("please put a diff value");
  }
}
orderNames();

//Ask the user for a new string and check if it's a Palindrome. 
//var strInput="bb";
var strInput = prompt("Input a sentence");
var s = strInput.replace(/\s+|\,|\!|\.|\_|\-|\?|\(|\)|\/|\\/g, '').toLowerCase();
var p = s.split("").reverse().join("");
console.log(s);
console.log(p);
if (s === p) {
  alert("The input is palindrome");
}
else {
  alert("The input is not palindrome");
}

// ToDo:

//Go to lorem ipsum generator and:

//Generate 3 parragraphs. Store the text in a String
//Make your program count the number of words in the string
//Make your program count the number of times the latin word etappears    


var lopStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate lectus odio, eget mattis lacus aliquet eget. Phasellus tincidunt sed nulla et vehicula. Donec nisl risus, fringilla at metus at, euismod ornare lectus. Ut eget nulla finibus eros fermentum placerat. Nam ac elit sodales, facilisis mauris sit amet, consequat libero. Praesent malesuada orci ut pharetra dapibus. Donec commodo neque id diam aliquam consectetur. Aenean vestibulum elit ac orci imperdiet, eu fermentum nisl semper. Sed rutrum bibendum facilisis. Duis vitae dolor nec ex elementum semper eget eu massa. Proin vitae faucibus lectus. Pellentesque convallis libero at est lobortis finibus. Cras euismod sapien ut vestibulum pellentesque. Maecenas mattis urna dui, porta iaculis purus porttitor id.Morbi sollicitudin a urna quis placerat. Ut sed mattis dolor. Mauris tristique dolor eget lectus sodales, vel lacinia diam convallis. Vestibulum fringilla dolor neque, id lobortis erat aliquet at. Etiam arcu mi, venenatis quis dui in, volutpat gravida ipsum. Pellentesque in ligula aliquam, ultricies ligula vel, convallis diam. Proin eget porttitor libero. Maecenas at euismod tellus, in imperdiet risus. Nam dignissim mattis lorem, id accumsan lectus gravida et. Aliquam dapibus dapibus nunc, a facilisis odio luctus at. Nam velit erat, sodales in dolor in, congue convallis nulla. Sed ac justo ac sem pellentesque semper. Nulla rutrum lacinia suscipit.Nam vehicula lorem ac fermentum gravida. Nam tincidunt dapibus bibendum. Nunc non finibus lorem. Nam sagittis ornare mi, id gravida nisi. Mauris posuere lacinia sem id volutpat. Etiam augue dolor, venenatis at felis sed, lacinia maximus risus. Morbi varius sollicitudin mollis. Aliquam suscipit nisi non consectetur convallis. Quisque tincidunt elit vitae mauris gravida rutrum.";


function wordcount(lopStr) {
  var c = lopStr.split(" ");
  var word = 0;
  for (var i = 0; i < c.length; i++) {
    if (c[i] == " ") {
      word += 1;
    }
  }
  console.log("the total no of words: " + c.length);
}
wordcount(lopStr);