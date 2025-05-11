// LineToTool function allows the user to draw striaght lines via clicking on a spot and dragging it
function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	// This varibales is used to declare and store the starting postion of the line
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
		// The if statements is initialised to check if the mouse was clicked
		if(mouseIsPressed){
			// If the mouse was clicked this sets the starting postion
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				// Saves the current pixel state of the canvas therefore allows to temporarly draw the line to get an image
				loadPixels();
			}

			else{
				// draws the line out
				updatePixels();
				// This allows the line to drawn from the first potion where the mouse was clicked to the current postion of th mouse
				line(startMouseX, startMouseY, mouseX, mouseY); 
			}

		}

		// When the mosue is released them draw the line 
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
