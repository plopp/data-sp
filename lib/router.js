Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return Meteor.subscribe('projects'); 
	}
});

Router.map(function(){
	this.route('projectsList', {path: '/'});
	this.route('projectPage',{
		path: '/projects/:_id',
		data: function() { 
			return Projects.findOne(this.params._id);
		}
	});
});
