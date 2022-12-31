leftWristX=0
rightWristX=0

leftWristY=0
rightWristY=0

leftWristScore=0
rightWristScore=0

function preload()
{
    song1= loadSound("music.mp3")
    song2= loadSound("music2.mp3")
}

function setup()
{
    canvas= createCanvas(450,450)
    canvas.position(450,155)

    video= createCapture(VIDEO)
    video.hide()

   initialize_pn= ml5.poseNet(video,model_loaded)
   initialize_pn.on("pose",gotposes)

   if(leftWrist>0.2)
   {
        
   }
}

function model_loaded()
{
    console.log("Model has loaded")
}

function draw()
{
    image(video,0,0,450,450)

    fill("red")
    circle(leftWristX,leftWristY,25)
    
    NuminLeftWristY= Number(leftWristY)
}

function gotposes(i)
{
    if(initialize_pn>0)
    {
        console.log(results)
        leftWristX= results[0].pose.leftWrist.x
        leftWristY= results[0].pose.leftWrist.y

        rightWristX= results[0].pose.rightWrist.x
        rightWristY= results[0].pose.rightWrist.y

        leftWristScore= result[0].pose.keypoints[9].score
    }
}