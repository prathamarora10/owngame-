const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,boy,ground;
var bg,billiardball,chocolate,paperwaste,partyhat,rock,soda,water,watering;
var seesaw,bench,tree;

var wasteArray = []

var obstacle1,obstacle2,obstacle3;
function preload()
{
	boyImg = loadAnimation("boyImg.png","boyImg2.png","boyImg3.png","boyImg4.png","boyImg5.png","boyImg6.png")
	bg = loadImage("bg.png")
	billiardball = loadImage("billiardball.png")
	chocolate = loadImage("chocolate.png")
	paperwaste = loadImage("paperwaste.png")
	partyhat = loadImage("partyhat.png")
	rock = loadImage("rock.png")
	soda = loadImage("soda.png")
	water = loadImage("water.png")
	watering = loadImage("watering.png")
	bench = loadImage("chair.png")
	tree = loadImage("d.png")
	seesaw = loadImage("seesaw.png")

}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plr = new Boy(100,900,50,120)
	ground = new Ground(windowWidth/2,windowHeight-50,windowWidth,20)

	for(var i=0;i<=20;i++){
		wasteArray.push(new Waste(round(random(50,windowWidth-50)),round(random(400,windowHeight-100)),30,30))
	}

	obstacle1 = new Obstacle(200,350,100,100,tree,1.5)
	obstacle2 = new Obstacle(windowWidth/2,windowHeight/2,100,100,bench,1.2)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);					


  for(var i=0;i<wasteArray.length;i++){
	  
	wasteArray[i].display();


  }

  obstacle1.display()
  obstacle2.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
	plr.boy.y-=20
	}

	if(keyCode === 37){
	plr.boy.x-=20
	}

	if(keyCode === 39){
	plr.boy.x+=20
	}

	if(keyCode === 40){
	plr.boy.y+=20
	}
}