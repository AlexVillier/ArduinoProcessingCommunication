var winX = 640;
var winY = 480;
var serial;
var portName = 'COM3';
var outMessage = 'H';
var latestData = "Waiting for data...";

function setup() {
	// put setup code here
	createCanvas(winX, winY);
	serial = new p5.SerialPort();
	serial.list();
	serial.open(portName);
	serial.on('list', gotList);
	serial.on('data', gotData);
}

function gotList(thelist) {
	console.log("List of Serial Ports:");
	for (var i = 0; i < thelist.length; i++) {
		console.log(i + " " + thelist[i]);
	}
}

function gotData() {
	var currentString = serial.readLine();
	if(currentString != ""){
		console.log(currentString);
		latestData = currentString;
	}
}

function draw() {
	// put drawing code here
	colorMode(HSB);
	background(latestData, 90, 90);
	fill(0,0,0);
	text("click to change the LED", 10, 10);
	text(latestData, 10, 40);
}

function mouseReleased() {
	serial.write(outMessage);
	if (outMessage === 'H') {
		outMessage = 'L';
	} else {
		outMessage = 'H';
	}
}