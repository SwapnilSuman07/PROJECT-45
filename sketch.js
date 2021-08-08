var bgImg,gameoverImg,restartImg;
var z1Img,z2Img;
var rock1Img,rock2Img,rock3Img;
var saviourImg,bulletImg;
var invisible,bg;
var saviour,zombie1,zombie2;

function preload(){
bgImg=loadImage("bg.png");
saviourImg=loadAnimation("saviour/s1.png","saviour/s2.png","saviour/s3.png","saviour/s4.png","saviour/s5.png");
z1Img=loadAnimation("zombies/zombie-1.1.png","zombies/zombie-1.2.png","zombies/zombie-1.3.png","zombies/zombie-1.4.png",
"zombies/zombie-1.5.png","zombies/zombie-1.6.png","zombies/zombie-1.7.png","zombies/zombie-1.8.png","zombies/zombie-1.9.png",
"zombies/zombie-1.10.png","zombies/zombie-1.11.png","zombies/zombie-1.12.png","zombies/zombie-1.13.png",
"zombies/zombie-1.14.png","zombies/zombie-1.15.png","zombies/zombie-1.16.png");
bulletImg=loadImage("bullet.png");
rock1Img=loadImage("rock1.png");
rock2Img=loadImage("rock2.png");
rock3Img=loadImage("rock3.png");

    
}

function setup() {
    createCanvas(displayWidth-50,displayHeight-170);

    bg = createSprite(displayWidth/2,displayHeight/2-85,displayWidth-50,displayHeight-170);
    bg.addImage(bgImg);
    bg.scale = 1.57;
    bg.x = bg.width/2;
    bg.velocityX=-5;

    invisible = createSprite((displayWidth-50)/2,displayHeight-230,displayWidth,40);
    invisible.visible=false;

    saviour=createSprite(200,displayHeight-300);
    saviour.addAnimation("walking",saviourImg);
    saviour.scale=0.4;
    saviour.velocityY=7;

}

function draw() {
    background("red");

    if(bg.x<0){
        bg.x=bg.width/2;
        
    }

    if(keyDown("space")){
        fire();
    }
   
    saviour.collide(invisible);
    spawnZombies();
    drawSprites();

}

function spawnZombies(){
    if(frameCount%250===0){
        zombie=createSprite(displayWidth,displayHeight-320);
        zombie.velocityX=-6;
        zombie.addAnimation("walking",z1Img);
        zombie.scale = 0.5;
    }
}

function fire(){
    bullet=createSprite(saviour.x+40,saviour.y-23);
    bullet.velocityX=3;
    bullet.addImage(bulletImg);
    bullet.scale=0.05;
    console.log("Mouse has been pressed")
}
