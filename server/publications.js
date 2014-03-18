Meteor.publish('projects', function(){
	return Projects.find();
});

Meteor.publish('sensors', function(){
	return Sensors.find();
});