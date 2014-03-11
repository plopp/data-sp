if(Projects.find().count() == 0){
	Projects.insert({
		name: 'A Testbädd solel',
		number: '3P07449-01',
		status: 'success',
		isFav: true
	});

	Projects.insert({
		name: 'B Need4b',
		number: 'ETk6092-06',
		status: 'success',
		isFav: false
	});

	Projects.insert({
		name: 'C Borås Energi & Miljö',
		number: 'ETk7044-01',
		status: 'warning',
		isFav: false
	});

	Projects.insert({
		name: 'D Energimyndigheten',
		number: '3P4529',
		status: 'danger',
		isFav: false
	});
}