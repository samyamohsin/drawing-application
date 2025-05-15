// Global variables that will store the toolbox colour palette
// and the helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;
let sliderR,sliderG,sliderB, sliderA

function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
    helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new rectangleTool());
	toolbox.addTool(new blurTool());
	toolbox.addTool(new eraserTool());
	toolbox.addTool(new paintBucketTool());
	background(255);
	
	//changes the thickness of the shapes and brushes
	sliderA = createSlider(1, 10, 1);
	sliderA.position(500, 650);
	sliderA.style('width', '150px');

	sliderR = createSlider();
	sliderR.position(500, 680);
	sliderR.style('width', '150px');
  
	// Green slider
	sliderG = createSlider();
	sliderG.position(500, 710);
	sliderG.style('width', '150px');
  
	// Blue slider
	sliderB = createSlider();
	sliderB.position(500 , 750);
	sliderB.style('width', '150px');

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the use

	text("blahhh",50,50,700,600);
	
	
	let r = sliderR.value();
	let g = sliderG.value();
	let b = sliderB.value();
	let a = sliderA.value();
  
	fill(r, g, b, a);
	rect(500, 100, 100, 100);

	let value = sliderA.value();
	strokeWeight(value);


	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}
