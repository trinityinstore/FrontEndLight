let light1;
let light2;
let light3;
let light4;
let light5;
let light6;
let light7;


var spark;
var reindeer;
function preload() {
  spark = loadImage('img/wmt_spark12351.jpg');
	reindeer = loadImage('img/santa.jpg');
}


// var santafont;
// function preload() {
//   santafont = loadFont('font/BigelowRules-Regular.ttf');
// }



function setup() {
	createCanvas(1200, 400);
	light1 = new Light(100,100);
	light2 = new Light(200,100);
	light3 = new Light(300,100);
	light4 = new Light(400,100);
	light5 = new Light(500,100);
	light6 = new Light(600,100);
	light7 = new Light(700,100);
	print(cat);
}


var cat=[150,150,150];

function draw() {
 background(48, 130, 163);

 	light1.show(1,cat[0],cat[1],cat[2],cat[21]);
	light2.show(2,cat[3],cat[4],cat[5],cat[22]);
	light3.show(3,cat[6],cat[7],cat[8],cat[23]);
	light4.show(4,cat[9],cat[10],cat[11],cat[24]);
	light5.show(5,cat[12],cat[13],cat[14],cat[25]);
	light6.show(6,cat[15],cat[16],cat[17],cat[26]);
	light7.show(7,cat[18],cat[19],cat[20],cat[27]);

	fill(200,200,100);
	textSize(36);
	//textFont('font/BigelowRules-Regular.ttf');
	text('Claus-O-Meter',1000,50);
	var spirit = cat[28]/1;
	spirit = spirit.toFixed(2);
	spirit = spirit*100;
	textSize(16);
	text(spirit,1040,80);
	text('X-mas Spirit          %',1000,80);


	fill(200,200,100);
	rect(940,90,120,270,50);
	fill(255,0,0);
	rect(950,100,100,250,40);
	fill(0,255,0);
	rect(950,350-map(cat[28],0,1,0,250),100,map(cat[28],0,1,0,250),40);

	image(reindeer,1085,350-map(cat[28],0,1,0,250),90,60);



}




//Using the HiveMQ public Broker, with a random client Id
 var client = new Messaging.Client("m15.cloudmqtt.com", 36907, "myclientid_" + parseInt(Math.random() * 100, 10));

 //Gets  called if the websocket/mqtt connection gets disconnected for any reason
 client.onConnectionLost = function(responseObject) {
   //Depending on your scenario you could implement a reconnect logic here
   alert("connection lost: " + responseObject.errorMessage);
 };

 //Gets called whenever you receive a message for your subscriptions
 client.onMessageArrived = function(message) {
   //Do something with the push message you received
   $('#messages').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');

	 cat = message.payloadString.split(' ').map(Number);
	 print(cat);
	 // var spirit = cat[28]/1;
	 // fill(200,200,100);
	 // textSize(16);
 	 // text('Christmas Spirit'&spirit&'%',1000,100);

 };

 //Connect Options
 var options = {
   useSSL: true,
   userName: "qahuozmh",
   password: "Pmg_utuFZLF4",
   timeout: 10,
   //Gets Called if the connection has sucessfully been established
   onSuccess: function() {
     alert("Connected");
   },
   //Gets Called if the connection could not be established
   onFailure: function(message) {
     alert("Connection failed: " + message.errorMessage);
   }
 };

 //Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
 var publish = function(payload, topic, qos) {
   //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
   var message = new Messaging.Message(payload);
   message.destinationName = topic;
   message.qos = qos;
   client.send(message);
 }

class Light{
	constructor(x,y) {
		this.x=x;
		this.y=y;
	}

	show(id,r,g,b,pwr){
		stroke(0);
		strokeWeight(2);
		fill(r,g,b);
		rect(this.x, this.y, 80, 25);
		fill(pwr,pwr,pwr);
		rect(this.x, this.y+25, 80, 200);
		fill(10,50,200);
		rect(this.x, this.y+25+200-30, 80, 30);
		fill(0);
		textSize(20);
		//testStyle(BOLD);
		textAlign(CENTER);
		text(id,this.x+40,this.y+125);
		image(spark,this.x+40-20,this.y+25+200-30-40-15,40,40);
	}

}
