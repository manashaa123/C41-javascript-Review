var box;
//A variable is an object that has a reserved memory location.

//var arr1[];
var arr1 = [10,15,3];
var arr2 = [10,"name",true];

class Bunnies {
    constructor(){

}
display(){

};
};
//A class is a blueprint of a object.
//An object is derived from a class.
//Every objects have properties and functions.

var bunnies1;

bunnies1 = new Bunnies(10,23,4,5);

bunnies1.display();
//Inheritence is where a child class extends Base class.
class Childclass extends Bunnies{

};

//conditional statements 
if(x>30) {
text("hello",100,20);
}
else{
    text("bye", 100,20);
}

//for(initialization; conditional expression; incrimenting operator){
//    execution statement
//}

for( var i = 0; i<10; i++){
    text("for loop", 50,50);
}

//p5 editor coding
//variable decleration 
//function preload
//function setup
//function draw

var bunnies1Img
//function preload
bunnies1Img = loadImage("bunnies1.png");
//function setup
bunnies1 = createSprite(12,23,45,60);
bunnies1.addImage(bunnies1Img);
//function draw
drawSprites();

//creating groups
var groupname = new Group();
groupname.add(bunnies);











