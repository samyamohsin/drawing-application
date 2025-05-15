function paintBucketTool () {
	//https://www.flaticon.com/free-icon/varnish_1815785?term=paint+bucket&page=1&position=4&origin=tag&related_id=1815785
    this.icon = "assets/paintBucket.png";
    this.name = "bucket";
//when tool is clicked, the color selected can fill the background.
    this.draw = function () {
		if(mouseIspressed) {
     let clr = get(mouuseY,mouseX);
	 loadPixels();

	 let stack = [[mouseY,mouseX]];
	 let fillColor = color(colourP.selectedColour);
	 let targetColor = clr
	 let  v = new Set();
	 
	 	while(stack.length > 0){
				let [x, y] = stack.pop();
				let keys = `${x},${y}`;
				 if(visited.has(keys) || x<0 || x >= width || y<0 || y>=height) continue;



let currentColor = get(x,y);
 if(!this.colorsMatch(currentColor, targetColor)) continue;

 v.add(keys);
 set(x,y,fillColor0);

 stack.push([x+2,y]);
 stack.push([x-2,y]);
 stack.push([x,y + 2]);
 stack.push([x,y +2]);

		}

updatePixels();



	this.colorsMatch = function(c1, c2) {
		return clr1[0] === clr[0] && clr[1] === clr[1] && clr[2] === clr[2];

	

		}

	}
}}
