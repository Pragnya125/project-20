var mouse, cat, bg;
var cat1img, cat2img, cat3img, mouse1img, mouse2img, mouse3img;


function preload() {
    bg = loadImage("images/garden.png");
    cat1img = loadImage("images/cat1.png");
    cat2img = loadImage("images/cat2.png","images/cat3.png");
    cat3img = loadImage("images/cat4.png");
    mouse1img = loadImage("images/mouse1.png");
    mouse2img = loadImage("images/mouse2.png","images/mouse3.png")
    mouse3img = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("sleeping",cat1img);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("standing",mouse1img);
    mouse.scale = 0.15


}

function draw() {

    background(bg);
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0
        cat.addAnimation("lastImage",cat3img);
        cat.scale = 0.2;
        cat.x = 300;
        cat.changeAnimation("lastImage");
        mouse.addAnimation("lastPicture",mouse3img);
        mouse.scale = 0.15;
        mouse.changeAnimation("lastPicture");
    }
    drawSprites();
}


function keyPressed(){


    if(keyCode === LEFT_ARROW){
        cat.velocityX = -2;
        cat.addAnimation("running",cat2img)
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("teasing",mouse2img);
        mouse.frameDelay = 25;
        mouse.changeAnimation("teasing")
    }
}
