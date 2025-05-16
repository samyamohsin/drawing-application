function paintBucketTool () {
	//https://www.flaticon.com/free-icon/varnish_1815785?term=paint+bucket&page=1&position=4&origin=tag&related_id=1815785
    this.icon = "assets/paintBucket.png";
    this.name = "bucket";
//when tool is clicked, the color selected can fill the background.
    this.draw = function () {
		if(mouseIsPressed) {
     let c = get(mouseX,mouseY);
	 loadPixels();
	 let stack = [[mouseX,mouseY]];
	 let targetColor = c;
	let fillColor = color(colourP.selectedColour);
	 let  v = new Set();
	 
	 	while(stack.length > 0){
				let [x, y] = stack.pop();
<<<<<<< HEAD
				let keys = `${x},${y}`;
				 if(v.has(keys) || x<0 || x >= width || y<0 || y>=height) continue;
=======
				let key = `${x},${y}`;
				 if(visited.has(key) || x<0 || x >= width || y<0 || y>=height) continue;
>>>>>>> 6ed3b26ba92b430890324129bac5f1e11c5d3ab5



let currentColor = get(x,y);
 if(!this.colorsMatch(currentColor, targetColor)) continue;

<<<<<<< HEAD
 visited.add(keys);
=======
 v.add(key);
>>>>>>> 6ed3b26ba92b430890324129bac5f1e11c5d3ab5
 set(x,y,fillColor);

 stack.push([x+1,y]);
 stack.push([x-1,y]);
 stack.push([x,y + 1]);
 stack.push([x,y - 1]);

		}

updatePixels();



	this.colorsMatch = function(c1, c2) {
		return c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2];

	

		}

	}
}}
