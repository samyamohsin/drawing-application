function eraserTool () {
    //https://www.flaticon.com/free-icon/eraser_4043845?term=eraser&page=1&position=1&origin=tag&related_id=4043845
    this.icon = "assets/eraserTool.png";
    this.name = "eraser";
    this.color = null;
 
    this.draw = function () {
        //is checks if the mouse has been pressed
        if(mouseIsPressed && mouseX < width) {
            if(keyIsDown(SHIFT)) {
                erase();
                line(pmouseX, pmouseY, mouseX, mouseY);
            } else {
                //the colour of the eraser is white
                stroke("white");
                line(pmouseX, pmouseY, mouseX, mouseY);
             }
        }
    }
}


