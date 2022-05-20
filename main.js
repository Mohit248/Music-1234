rise_up = "";
darkside = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;



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

function gotPoses(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;   
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
    }