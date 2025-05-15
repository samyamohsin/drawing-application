function eraserTool () {
    //https://www.flaticon.com/free-icon/eraser_4043845?term=eraser&page=1&position=1&origin=tag&related_id=4043845
    this.icon = "assets/eraserTool.png";
    this.name = "eraser";
    this.color = null;

    let size = 20;

    this.draw = function () {
        if(mouseIsPressed && mouseX < width) {
            if(keyIsDown(SHIFT)) {
                erase();
                //strokeWeight(size);
                line(pmouseX, pmouseY, mouseX, mouseY);
                noErase();
            } else {
                stroke("white");
                //strokeWeight(size);
                line(pmouseX, pmouseY, mouseX, mouseY);
            }
        }
    }
}


