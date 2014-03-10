if(Projects.find().count() == 0){
	Projects.insert({
		name: 'Testbädd solel',
		number: '3P07449-01',
		status: 'success'
	});

	Projects.insert({
		name: 'Need4b',
		number: 'ETk6092-06',
		status: 'success'
	});

	Projects.insert({
		name: 'Borås Energi & Miljö',
		number: 'ETk7044-01',
		status: 'warning'
	});

	Projects.insert({
		name: 'Energimyndigheten',
		number: '3P4529',
		status: 'danger'
	});
}