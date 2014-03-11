Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return Meteor.subscribe('projects'); 
	}
});

Router.map(function(){
	this.route('projectsList',{
		path: '/'
	});
	this.route('projectPage',{
		path: '/projects/:_id',
		data: function() { 
			return Projects.findOne(this.params._id);
		}
	});
	this.route('projectSubmit',{
		path: '/submit'
	});

});

var requireLogin = function() { 
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) this.render(this.loadingTemplate);
		else this.render('accessDenied');
		this.stop(); 
	}
}

Router.before(requireLogin, {only: 'projectSubmit'});
