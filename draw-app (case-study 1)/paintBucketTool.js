function paintBucketTool () {
	//https://www.flaticon.com/free-icon/varnish_1815785?term=paint+bucket&page=1&position=4&origin=tag&related_id=1815785
    this.icon = "assets/paintBucket.png";
    this.name = "bucket";
//when tool is clicked, the color selected can fill the background.
    this.draw = function () {
		if(mouseIsPressed) {
     let clr = get(mouuseX,mouseY);
	 loadPixels();
	 let stack = [[mouseX,mouseY]];
	 let targetColor = clr;
	  let fillColor = color(colourP.selectedColour);
	 let  v = new Set();
	 
	 	while(stack.length > 0){
				let [x, y] = stack.pop();
				let key = `${x},${y}`;
				 if(visited.has(key) || x<0 || x >= width || y<0 || y>=height) continue;



let currentColor = get(x,y);
 if(!this.colorsMatch(currentColor, targetColor)) continue;

 v.add(key);
 set(x,y,fillColor);

 stack.push([x+1,y]);
 stack.push([x-1,y]);
 stack.push([x,y + 1]);
 stack.push([x,y - 1]);

		}

updatePixels();



	this.colorsMatch = function(clr1, clr2) {
		return clr1[0] === clr2[0] && clr1[1] === clr2[1] && clr1[2] === clr2[2];

	

		}

	}
}}
