//Displays and handles the colour palette.
function ColourPalette() {
	//a list of web colour strings
	this.colours = [
        "black", "silver", "gray", "white", "maroon", "red", "purple",
		"orange", "pink", "fuchsia", "green", "lime", "olive", "yellow", "navy",
		"blue", "teal", "aqua"
	];
	//make the start colour be black
	this.selectedColour = "black";

	var self = this;

	var colourClick = function() {
		//remove the old border
		var current = select("#" + self.selectedColour + "Swatch");
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];

		//set the selected colour and fill and stroke
		self.selectedColour = c;
		fill(c);
		stroke(c);

		//add a new border to the selected colour
		this.style("border", "2px solid blue");
	};

	//load in the colours
	this.loadColours = function() {
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//changes the thickness of the shapes and brushes
		sliderA = createSlider(1, 10, 1);
		sliderA.position(320, windowHeight - 150);
		sliderA.style('width', '150px');

		// Red slider
		sliderR = createSlider(0, 255, 0);
		sliderR.position(320, windowHeight - 110);
		sliderR.style('width', '150px');
  
		// Green slider
		sliderG = createSlider(0, 255, 0);
		sliderG.position(320, windowHeight - 70);
		sliderG.style('width', '150px');
  
		// Blue slider
		sliderB = createSlider(0, 255, 0);
		sliderB.position(320, windowHeight - 30);
		sliderB.style('width', '150px');

		let thicknessLabel = createDiv('Thickness');
		thicknessLabel.position(480, windowHeight - 150);
		
		let redLabel = createDiv('Red');
		redLabel.position(480, windowHeight - 110);
		
		let greenLabel = createDiv('Green');
		greenLabel.position(480, windowHeight - 70);
		
		let blueLabel = createDiv('Blue');
		blueLabel.position(480, windowHeight - 30);
		// Function to update color based on RGB values
		function updateCustomColor() {
			let r = sliderR.value();
			let g = sliderG.value();
			let b = sliderB.value();
			let customColor = color(r, g, b);
			self.selectedColour = customColor;
			fill(customColor);
			stroke(customColor);

		}

		// Add change event listeners to RGB sliders
		sliderR.input(updateCustomColor);
		sliderG.input(updateCustomColor);
		sliderB.input(updateCustomColor);

		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < this.colours.length; i++) {
			var colourID = this.colours[i] + "Swatch";

			// Add the swatch to the palette and set its background
			// colour to be the colour value.
			var colourSwatch = createDiv();
			colourSwatch.class("colourSwatches");

			colourSwatch.id(colourID);

			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", this.colours[i]);
			colourSwatch.mouseClicked(colourClick);
		}

		select(".colourSwatches").style("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();
}
