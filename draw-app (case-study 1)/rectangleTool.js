function rectangleTool () {
    this.name = "rectangle";
    //https://www.flaticon.com/free-icon/rectangle_5895916 
	this.icon = "assets/rectangle.png";

    // this declares the starting a and y postion of the rectangle
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing  = false;

    this.draw = function() {
        //the if statement checks if the mouse has been clicked
        if(mouseIsPressed) {
            // once the mouse has been clicked it set the starting position of the rectangle 
            if(startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;

                loadPixels();
            } else {
                updatePixels();

                rect(startMouseX, startMouseY, abs(mouseX - startMouseX), abs(mouseY - startMouseY) );
            }
        } else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }

}