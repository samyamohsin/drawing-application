function blurTool() {
    this.name = "blur";
    //https://www.flaticon.com/free-icon/shape_15631444?term=blur&page=1&position=9&origin=tag&related_id=15631444
    this.icon = "assets/blurTool.png";

    let drawMode = true; // true = draw, false = blur
      let brushSize = 40;

      function setup() {
        createCanvas(600, 400);
        background(255);

        // Add a button to toggle modes
        let button = createButton('Toggle Draw/Blur');
        button.position(10, height + 10);
        button.mousePressed(() => {
          drawMode = !drawMode;
        });
      }

}