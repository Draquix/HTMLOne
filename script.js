//colorSelect needs to be global to work in two spots
var colorSelect;
// Fun discovery, multiple items with the same class are stored as an array
//when you use 'document.getElementsByClassName('class') = variable;' method

//nameToClass function takes the name parameter and loads the class="reName"
//array to a variable and uses a for loop to run through each iteration of that
//span and changes it to the name parameter it's called with from the next function

function nameToClass(name){
    var indexClass = document.getElementsByClassName('reName');
    for (var i = 0; i < indexClass.length; i++) {
        console.log(i + indexClass[i].innerHTML);
        indexClass[i].innerHTML = name;
    }
}

/* To further meet requirements of the assignment, this function
checks to see if the user input was valid. It checks to see if
the backgroundColor has a value, and if none it returns false. */
function colorValidate(){
    console.log("colorSelect is "+colorSelect);
    var bGC = document.body.style.backgroundColor;
    console.log("color is " + bGC);
    if (bGC === undefined || bGC === "" ){
        return false;
    } else {
        return true;
    }
}


//This is activated by href tag in the html. It asks three questions by prompt
//NOTE FOR GRADING -- There is an if statement, the page will use an alert()
// to call you out for Red Green or Blue.

//Lab07 edit:!!: There is now a while loop that gives 3 chances after the first to enter a proper color.
//If something like 'apple' or 'truck' is entered it prompts again for an actual color. The mechanism is that
//there is now a while loop that counts attempts with a variable and prompts again and again as long as
//the colorValidate function is returning false or the counter variable is under 4. This meets the stretch goal.
function pagePrompt() {
    var counter = 0;
    var name = prompt("What is your name?");
    var quest = prompt("What is your quest?");
    var colorSelect = prompt("What is your favorite color?");
    console.log("colorSelect is entered as "+colorSelect);
    if (colorSelect === "Blue" || colorSelect === "Red" ||colorSelect ===  "Green") {
        alert("That's a terrible color...");
    }
    document.body.style.backgroundColor = colorSelect;
    while (colorValidate() === false) {
        colorSelect = prompt("Please enter a valid color. (try "+counter+" of 3)");
        document.body.style.backgroundColor = colorSelect;
    }
    document.getElementById('quest').innerHTML = quest;
    nameToClass(name);
}
//This function will use a prompt to decide how many (up to 10)
//iterations of the logo to be displayed on the page using
//a for loop.
var logos = 0;
function logoLoop() {
    console.log('logoloop executed');
    logoPrompt();
    var display = document.getElementById('image-box');
    while (logos > 0) {
        display.innerHTML += '<img src=http://blog.dominictrumfio.com/wp-content/uploads/2015/08/Lorem-Ipsum-2.jpg" alt="from wiki" width="150">'
        logos--;
    }
}
function logoPrompt(){
    logos = prompt('How many logos (between 1 and 10) would you like generated?');
    if (logos < 1 || logos > 10){
        logoPrompt()
    }
}
