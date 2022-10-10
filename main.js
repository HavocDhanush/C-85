Nasa_Mars_Images_Array = ["Mars.jpg" , "Rover_1.jpg" , "Rover_2.jpg" , "Rover_3.jpg" , "Rover_4.jpg"];
random_number = Math.floor(Math.random()*5);

canvas = document.getElementById('my_Canvas');
ctx= canvas.getContext('2d');

rover_width = 100;
rover_height = 90;

background_Img = Nasa_Mars_Images_Array [random_number];
rover_Img = "rover.png";

rover_x = 10;
rover_y = 10;

function add () {
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_Img;

    rover_ImgTag = new Image();
    rover_ImgTag.onload = uploadRover;
    rover_ImgTag.src = rover_Img;
}

function uploadBackground () {
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover () {
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_Keydown);

function my_Keydown (e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        Up();
    console.log("Up");
    }
    if (keyPressed == '39') {
        Right();
        console.log("Right");
    }
    if (keyPressed == '40') {
        Down();
        console.log("Down");
    }
    if (keyPressed == '37') {
        Left();
        console.log("Left");
    }

}

function Up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;

        console.log("When Up arrow is pressed, x = "+rover_x+ " y ="+rover_y );

        uploadBackground();
        uploadRover();
    }
}

function Down() {
    if (rover_y <=500) {
        rover_y = rover_y + 10;

        console.log("When Down arrow is pressed, x = "+rover_x+ " y ="+rover_y);

        uploadBackground();
        uploadRover();
    }
}

function Left() {
    if (rover_x >=0) {
        rover_x = rover_x - 10;

        console.log("When Left arrow is pressed, x = "+rover_x+ " y ="+rover_y);

        uploadBackground();
        uploadRover();
    }
}

function Right() {
    if (rover_x <=700) {
        rover_x = rover_x + 10;

        console.log("When Right arrow is pressed, x = "+rover_x+ " y ="+rover_y);

        uploadBackground();
        uploadRover();
    }
}

