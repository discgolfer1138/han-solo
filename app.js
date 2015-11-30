var Insteon = require('home-controller').Insteon;
var insteon = new Insteon();
var ltStarWars = insteon.light('1D50B1');

//var usbPortName = '/dev/tty.usbserial-A603342S';
var usbPortName = '/dev/cu.usbserial-A603342S';

insteon.serial(usbPortName, function(err){
	console.log('connected');
	ltStarWars.turnOn(100, function(){
		ltStarWars.turnOff(function(){
			insteon.close();
			process.exit();
		});
	});	
});
