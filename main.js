var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL('Birthday_image.jpg', functiion(Img)) {
        block_Image_obj = Img;

        block_Image_obj.ScaletoWidth(700);
        block_Image_obj.ScaletoHeight(510);
        block_Image_obj.set({
            top: 0;
            left: 0;
        });
        canvas.add(block_Image_object);
    });

}

function playSound() {
    x.play();
}