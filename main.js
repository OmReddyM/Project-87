canvas = new fabric.Canvas("myCanvas");
// Create canvas variable
block_y = 1;
block_x = 0;

block_image_width = 350;
block_image_height = 430;

var block_image_object = new Image();

function new_image(get_image) {
	// to upload images
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;
		block_image_object.scaleToHeight(block_image_height); block_image_object.scaleToWidth(block_image_width);
		block_image_object.set({
			top: block_y, left: block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') // add appropriate keycode
	{
		block_x = 0;
		block_image_width = 350;
		block_image_height = 430;
		// upload red ranger
		new_image('rr.jpg')
		console.log("r")
	}
	if (keyPressed == '71') {
		block_x = 250;
		block_image_width = 350;
		block_image_height = 430;
		// upload green ranger
		new_image('gr.png');
		console.log("g");
	}

	if (keyPressed == '89') {
		block_x = 550;
		block_image_width = 350;
		block_image_height = 430;
		// upload yellow ranger
		new_image('yr.png');
		console.log("y")
	}
	if (keyPressed == '80') {
		block_x = 700;
		block_image_width = 350;
		block_image_height = 430;		// upload pink ranger
		new_image('pr.png');
		console.log("y")
	}
	if (keyPressed == '66') {
		block_x = 850;
		block_image_width = 500;
		block_image_height = 1000;
		// upload blue ranger
		new_image("br.png")
		console.log("b");
	}

}

