Template.projectItem.helpers({
	project : function(){
		return this;
	},
	sensors : function(){
		//return Sensors.find({project: this._id});
		return Sensors.find();
	},
	success : function(){
		return Sensors.findOne(this._id).status == 'success';
	},
	warning : function(){
		return Sensors.findOne(this._id).status == 'warning';
	},
	lastActivity : function(){
		return new Date();
	}
});

Deps.autorun(function(){
	
});

Template.projectItem.rendered = function(){
	
}

Template.projectItem.created = function(){

}

Template.projectItem.events({

});