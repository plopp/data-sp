if(Projects.find().count() == 0){
	Projects.insert({
		name: 'A Testbädd solel',
		number: '3P898765556-01',
		status: 'success',
		isFav: true
	});

	Projects.insert({
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