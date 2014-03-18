var proj1;
var proj2;

if(Projects.find().count() == 0){
	proj1 = Projects.insert({
		name: 'A Testbädd solel',
		number: '3P898765556-01',
		status: 'success',
		isFav: true
	});

	proj2 = Projects.insert({
		name: 'B Testprojekt 2',
		number: 'ETk66666-06',
		status: 'success',
		isFav: false
	});

	Projects.insert({
		name: 'C Energi & Miljöprojekt',
		number: 'ETk88888-01',
		status: 'warning',
		isFav: false
	});

	Projects.insert({
		name: 'D Myndighet',
		number: '3P4529',
		status: 'danger',
		isFav: false
	});
}

layout = {
	inputs: [
		{
			title: 'Pressure'
		},
		{
			title: 'Temperature'
		},
		{
			title: 'Input channel 3'
		},
		{
			title: 'Input channel 4'
		}
	],
	outputs: [
		{
			title: 'Output channel 1'
		},
		{
			title: 'Output channel 2'
		},
		{
			title: 'Output channel 3'
		},
		{
			title: 'Output channel 4'
		}
	]
}



if(Sensors.find().count() == 0){
	console.log("Inserting sensors...");
	sensor1 = Sensors.insert({
		IMEI: 9876543456789,
		lat: 63.1415,
		lon: 18.0987,
		title: 'Sensorburk',
		layout: layout,
		project: proj1,
		status: 'success',
		ip: '164.194.64.2'
	});
	console.log(sensor1);
	Sensors.insert({
		IMEI: 9317239873191,
		lat: 78.1415,
		lon: 15.0987,
		title: 'Sensorburk',
		layout: layout,
		project: proj2,
		status: 'success',
		ip: '247.129.176.188'
	});

	Sensors.insert({
		IMEI: 6239123812398,
		lat: 57.1415,
		lon: 12.0987,
		title: 'Sensorburk',
		layout: layout,
		project: proj2,
		status: 'success',
		ip: '42.74.185.66'
	});
}