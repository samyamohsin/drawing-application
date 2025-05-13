function rectangleTool () {
    this.name = "RectangleTool";
	//this.icon = "";

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

                rect(startMouseX, startMouseY, abs(mouseX - startMouseX), abs(mouseY - startMouseY) );
            }
        } else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }

}