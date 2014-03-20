var proj1;
var proj2;

if(Projects.find().count() == 0){
	proj1 = Projects.insert({
		name: 'Fjärrvärme, Göteborg',
		number: '3P89812-01',
		status: 'success',
		isFav: true
	});

	proj2 = Projects.insert({
		name: 'Need4b, Borås',
		number: 'ETk1234-56',
		status: 'success',
		isFav: false
	});

	Projects.insert({
		name: 'Ljungbyån',
		number: '3P019281',
		status: 'warning',
		isFav: false
	});

	Projects.insert({
		name: 'Energisnåla hus',
		number: '3P4529asd',
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
		title: 'System #1',
		layout: layout,
		project: proj1,
		status: 'success',
		ip: '164.194.64.2',
		mobile: true
	});
	console.log(sensor1);
	Sensors.insert({
		IMEI: 9317239873191,
		lat: 78.1415,
		lon: 15.0987,
		title: 'System #2',
		layout: layout,
		project: proj2,
		status: 'success',
		ip: '247.129.176.188',
		mobile: true
	});

	Sensors.insert({
		IMEI: 6239123812398,
		lat: 57.1415,
		lon: 12.0987,
		title: 'Sensor #3',
		layout: layout,
		project: proj2,
		status: 'success',
		ip: '42.74.185.66',
		mobile: true
	});
}