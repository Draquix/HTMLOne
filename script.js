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
//This is activated by href tag in the html. It asks three questions by prompt
//NOTE FOR GRADING -- There is an if statement, the page will use an alert()
// to call you out for Red Green or Blue.

function pageColorPrompt() {
    var name = prompt("What is your name?");
    var quest = prompt("What is your quest?");
    var colorSelect = prompt("What is your favorite color?");
    if (colorSelect === "Blue" || colorSelect === "Red" ||colorSelect ===  "Green") {
        alert("That's a terrible color...");
    }
    document.body.style.backgroundColor = colorSelect;
    document.getElementById('quest').innerHTML = quest;
    nameToClass(name);
}

