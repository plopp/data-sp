Template.projectItem.helpers({
	project : function(_id){
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
	},
	IP : function(){
		return Math.round(Math.random()*255)+"."+Math.round(Math.random()*255)+"."+Math.round(Math.random()*255)+"."+Math.round(Math.random()*255);
	}
});

var rendered = false;
Template.projectItem.rendered = function(){
	if(!rendered){
		$("span").not("span:last").append("<hr>");
		rendered = true;
	}
}