/*
DOM Selectors

getElementsByTagName
getElementsByClassName
getElementById

querySelector
QuerySelectorAll

getAttribute
setAttribute

#Changing Styles styles 
style.{property} //ok

ClassName //using css files/modifying in html file
classList //shows classes in html file

classList.add // adds class on specific element
classList.remove // opposite of add
ClassList.toggle /// one example is
on & off


//createElement
//appendChild


##Bonus 
innerHTML //Dangerous
////
changes the html tag to assigned one
////

////
this 2 only checks if the 
is parent or children
////
parentElement ///// 
Child ///////
/////
##It is important to CACHE selectors in  vratiables

///////////
document.getElementById("first");
///
document.getElementsByClassName("second") || 
document.getElementsByClassName("second")[0];
///
document.getElementsByTagName("h2");
///
document.querySelector("h2");
///
document.querySelectorAll("li");
document.querySelectorAll("li, h2");
///
document.querySelector("li").getAttribute("random"); ||
var random = document.querySelector("li");
random.getAttribute("random");
///
document.querySelector("li").setAttribute("random", "1000" );
///
document.querySelector("h2").style.background = "yellow";
///
var h2 = document.querySelector("h2");
h2.className = "coolTitle";
coolTitle is a css class;
///
document.querySelector("li").classList;
///
document.querySelector("h2")
.innerHTML = "<strong>!!!<strong/>";
///
method vs property
///
method:
more likely to work like a funciton
///
property:
more likely wont work as function
///
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
    console.log("CLICK");
});
///
we have to access it by the element in the array
///
*/

var maxValue = 10;

var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function appendInput(){
    return input.value.length;
};

function createListElement(){

    if (ul.children.length === maxValue) {
        alert("You can only add up to " + maxValue + " items.");
        return;
    };

    var li = document.createElement("li");
    var dltButton = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    dltButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(dltButton);
    
    dltButton.addEventListener("click", function(){
        li.remove();
    });

    input.value = "";
};

function onClicked(){
    if(appendInput() > 0){
        createListElement();
        }
    };
    
    function enterPressed(event){
        if(appendInput() > 0 && event.keyCode === 13){
            createListElement();
            }
    };

    function removesButton(li) {
        li.addEventListener("click", function(){
            li.remove();
        });
    }

    for(var i=0; i < li.length; i++){
        removesButton(li[i]);
    }

    button.addEventListener("click", onClicked);
    input.addEventListener("keydown", enterPressed);