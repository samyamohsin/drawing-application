function rectangleTool () {
    this.name = "rectangleTool";
    //https://www.flaticon.com/free-icon/rectangle_5895916 
	this.icon = "assets/rectangleTool.png";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing  = false;

    this.draw = function() {
        if(mousePressed) {
            if(startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;

                loadPixel();
            } else {
                updatePixel();

                rect(startMouseX, 
                    startMouseY, 
                    abs(mouseX - startMouseX), 
                    abs(mouseY - startMouseY) );
            }
        } else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }

}