rise_up = "";
darkside = "";

function preload(){
    rise_up = loadSound("rise_up.mp3");
    darkside = loadSound("darkside.mp3");
}

function setup(){
    canvas = createCanvas(200,100);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    PoseNet  = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Intialized!");
}

function draw(){
    image(video,0,0,200,100);
}