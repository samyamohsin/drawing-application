//spray can object literal
function SprayCanTool() {
    this.name = "sprayCanTool";
    this.icon =  "assets/sprayCan.jpg";
    this.points =  40;
    this. spread =  10;

    this.draw = function() {
        strokeWeight(1);
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(let i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }
};